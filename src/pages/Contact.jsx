import { Canvas } from '@react-three/fiber'
import Map from '../components/Map.jsx'
import Lights from '../components/Lights.jsx'

export default function Contact() {
    return (
        <main className='contact'>
            <h2 className='contact__title'>Contact</h2>
            <div className="contact__model">
                <Canvas
                    shadows
                    camera={{
                        fov: 75,
                        near: 0.5,
                        far: 10000,
                        position: [-600, 20, 1000],
                    }}
                >
                    <Lights />
                    <Map />
                </Canvas>
            </div>
            <div className="background"></div>
        </main>
    )
}
