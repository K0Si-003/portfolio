import { Suspense, useEffect, useState, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useGLTF, MapControls } from '@react-three/drei'
import * as THREE from 'three'
import Buildings from '../assets/models/full-buildings.glb'
import Floor from '../assets/models/elevation.glb'

const vertexShader = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

const fragmentShader = `
uniform float uOpacity;
uniform vec2 uResolution;
uniform vec3 uBackgroundColor;

varying vec2 vUv;

void main() {
  vec2 grid = abs(fract(vUv * vec2(uResolution.x / uResolution.y, 1.0) * 150.0) - 0.5);

  float line = min(grid.x, grid.y);
  float color = 1.0 - smoothstep(0.0, 0.02, line);

  vec3 finalColor = uBackgroundColor;

  finalColor = mix(finalColor, vec3(1.0), color * uOpacity);

  gl_FragColor = vec4(finalColor, 1.0);
}
`

const floorMaterial = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    transparent: true,
    uniforms: {
        uOpacity: { value: 0.5 },
        uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        uBackgroundColor: { value: new THREE.Color('hsl(0, 0%, 50%)') },
    },
})

const Controls = ({ controlsRef }) => {
    const { camera, gl } = useThree()

    useEffect(() => {
        if (controlsRef.current) {
            const controls = controlsRef.current

            // Map Limit
            const minX = -2500
            const maxX = 2500
            const minY = -2500
            const maxY = 2500
            const minZ = -2500
            const maxZ = 2500

            controls.addEventListener('change', () => {
                const position = controls.target

                if (position.x < minX) position.x = minX
                if (position.x > maxX) position.x = maxX
                if (position.y < minY) position.y = minY
                if (position.y > maxY) position.y = maxY
                if (position.z < minZ) position.z = minZ
                if (position.z > maxZ) position.z = maxZ

                controls.target.copy(position)
            })

            // Zoom limit
            const minZoom = 300
            const maxZoom = 1000

            controls.addEventListener('change', () => {
                const distance = controls.getDistance()

                if (distance < minZoom) controls.minDistance = minZoom
                if (distance > maxZoom) controls.maxDistance = maxZoom
            })

            // Rotation limit
            controls.minPolarAngle = 0
            controls.maxPolarAngle = Math.PI / 3
        }
    }, [])

    return <MapControls ref={controlsRef} args={[camera, gl.domElement]} />
}

export default function Map() {
    const controlsRef = useRef()

    const buildings = useGLTF(Buildings)
    const floor = useGLTF(Floor)

    buildings.scene.traverse((child) => {
        if (child.isMesh) {
            child.material = new THREE.MeshStandardMaterial({
                color: 0xffffff,
                metalness: 0.5,
                roughness: 0.3,
            })
            child.castShadow = true
            child.receiveShadow = true
        }
    })

    floor.scene.traverse((child) => {
        if (child.isMesh) {
            child.material = floorMaterial
            child.castShadow = true
            child.receiveShadow = true
        }
    })

    useEffect(() => {
        const handleResize = () => {
            floorMaterial.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight)
        }

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <>
            <Controls controlsRef={controlsRef} />
            <group position={[0, -169, 0]} scale={1}>
                <primitive object={buildings.scene} />
                <primitive object={floor.scene} />
            </group>
        </>
    )
}

useGLTF.preload(Buildings)
useGLTF.preload(Floor)
