import { useState } from 'react'
import Particles from '../components/Particles.jsx'

export default function Home() {
    const [isLoaded, setIsLoaded] = useState(false)

    // Fake loading for curtain
    setTimeout(() => {
        setIsLoaded(true)
    }, 300)

    return (
        <main>
            <h1>Home</h1>
            <div className="background">
                <Particles />
            </div>
            <div className={`curtain ${isLoaded ? 'hidden' : ''}`}></div>
        </main>
    )
}
