import { Suspense, useEffect, useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

import Lights from './Lights.jsx'
import Controls from './Controls.jsx'
import Marker from './Marker.jsx'
import Modal from './Modal.jsx'
import useMatchMedia from '../utils/useMatchMedia.jsx'

import Buildings from '../assets/models/full-buildings.glb'
import Floor from '../assets/models/elevation.glb'

import vertexShader from '../shaders/vertex.glsl?raw'
import fragmentShader from '../shaders/fragment.glsl?raw'

import markers from '../data/mapContent.jsx'

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

export default function Map() {
    const controlsRef = useRef()

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalText, setModalText] = useState('')

    const isMobile = useMatchMedia('(max-width: 992px)')

    const cameraPosition = isMobile ? [-2000, 100, -500] : [-500, 0, 800]

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

    const handleMarkerClick = (text, markerPosition, markerRotation) => {
        setModalText(text)
        setIsModalOpen(true)

        const controls = controlsRef.current
        controls.enabled = false

        const camera = controls.object
        
        const startPosition = camera.position.clone()
        const startTarget = controls.target.clone()

        const endTarget = new THREE.Vector3(...markerPosition)
        const endPosition = new THREE.Vector3(...markerPosition).add(
            new THREE.Vector3(0, 0, 150).applyEuler(new THREE.Euler(...markerRotation))
        )

        const positionDistance = startPosition.distanceTo(endPosition)
        const targetDistance = startTarget.distanceTo(endTarget)
        const totalDistance = positionDistance + targetDistance
        const duration = totalDistance * 0.75

        let startTime = performance.now()

        const animate = () => {
            const elapsed = performance.now() - startTime
            const t = Math.min(elapsed / duration, 1)

            // Animate camera position
            camera.position.lerpVectors(startPosition, endPosition, t)

            // Animate controls target
            controls.target.lerpVectors(startTarget, endTarget, t)
            controls.update()

            if (t < 1) {
                requestAnimationFrame(animate)
            } else {
                controls.enabled = true
            }
        }

        animate()
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    return (
        <>
            <Canvas
                shadows
                camera={{
                    fov: 65,
                    near: 0.5,
                    far: 6000,
                    position: cameraPosition
                }}
            >
                <Lights />
                <Controls controlsRef={controlsRef} />
                <group position={[0, -169, 0]} scale={1}>
                    <primitive object={buildings.scene} />
                    <primitive object={floor.scene} />
                    {markers.map((marker, index) => (
                        <Marker
                            key={index}
                            position={marker.position}
                            onClick={() =>
                                handleMarkerClick(marker.text, marker.position, marker.rotation)
                            }
                            color={marker.color}
                        />
                    ))}
                </group>
            </Canvas>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} text={modalText} />
        </>
    )
}

useGLTF.preload(Buildings)
useGLTF.preload(Floor)
