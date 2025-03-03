import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

export default function Marker({ position, onClick, color}) {
    const markerRef = useRef()
    const amplitude = 20
    const speed = 0.5

    useFrame((state) => {
        if (markerRef.current) {
            markerRef.current.position.y =
                350 + amplitude * Math.sin(state.clock.elapsedTime * speed * Math.PI * 2)
        }
    })

    const handlePointerOver = () => {
        document.body.style.cursor = 'pointer'
    }

    const handlePointerOut = () => {
        document.body.style.cursor = 'default'
    }

    return (
        <mesh
            ref={markerRef}
            position={position}
            onClick={onClick}
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
        >
            <cylinderGeometry args={[40, 0, 80, 10, 1]} />
            <meshStandardMaterial color={color ? color : 'hsl(13.42, 49.35%, 30.2%)'} />
        </mesh>
    )
}