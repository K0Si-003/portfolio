import { MapControls } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { useEffect } from "react"

export default function Controls ({ controlsRef }) {
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