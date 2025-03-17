import Header from './components/Header.jsx'
import Router from './routes/Router.jsx'
import Footer from './components/Footer.jsx'
import Lenis from 'lenis'
import { useEffect } from 'react'

export default function App() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])

    return (
        <>
            <Header />
            <Router />
            <Footer />
        </>
    )
}
