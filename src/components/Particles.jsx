import { useEffect, useRef } from 'react'
import { isMobile } from 'react-device-detect'

export default function Particles() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        let particles = []
        let particleCount = isMobile ? 100 : 300
        const maxSpeed = 0.2
        const maxSize = isMobile ? 4 : 5
        const particleColor = 'hsla(0 0% 100% / 0.2)'
        const connectionDistance = isMobile ? 35 : 50
        const connectionColor = 'hsla(0 0% 100% / 0.1)'
        const repulsionForce = 0.02 
        const repulsionDistance = isMobile ? 50 : 150
        let mouseX = null
        let mouseY = null

        // Set the initial size of the canvas
        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resizeCanvas()

        // Set the mouse position on mouse move
        const setMousePosition = (e) => {
            mouseX = e.clientX
            mouseY = e.clientY
        }

        // Add event listeners to the window
        window.addEventListener('resize', () => {
            resizeCanvas()
            particles = []
            initParticles()
        })
        window.addEventListener('mousemove', (e) => {
            setMousePosition(e)
        })

        // Initialize the particles array
        const initParticles = () => {
            for (let i = 0; i < particleCount; i++) {
                const size = Math.random() * maxSize
                const x = Math.random() * (canvas.width - size * 2)
                const y = Math.random() * (canvas.height - size * 2)
                const directionX = Math.random() * maxSpeed * 2 - maxSpeed
                const directionY = Math.random() * maxSpeed * 2 - maxSpeed
                particles.push({
                    x,
                    y,
                    directionX,
                    directionY,
                    size,
                    color: particleColor,
                })
            }
        }

        // Update and draw the particles
        const updateParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            particles.forEach((p) => {
                // Euclidean distance between the particle and the mouse position
                const distanceToMouse = Math.hypot(p.x - mouseX, p.y - mouseY)

                // If the particle is close enough to the mouse, apply a force
                if (distanceToMouse < repulsionDistance) {
                    const repulsionDirectionX = (p.x - mouseX) / distanceToMouse
                    const repulsionDirectionY = (p.y - mouseY) / distanceToMouse
                    p.directionX += repulsionDirectionX * repulsionForce
                    p.directionY += repulsionDirectionY * repulsionForce
                    const speedLimit = 1

                    if (Math.hypot(p.directionX, p.directionY) > speedLimit) {
                        p.directionX = (p.directionX / Math.hypot(p.directionX, p.directionY)) * speedLimit
                        p.directionY = (p.directionY / Math.hypot(p.directionX, p.directionY)) * speedLimit
                    }
                }

                // Bounce the particle off the edges of the canvas
                if (p.x + p.size > canvas.width || p.x - p.size < 0) {
                    p.directionX = -p.directionX
                }
                if (p.y + p.size > canvas.height || p.y - p.size < 0) {
                    p.directionY = -p.directionY
                }
                p.x += p.directionX
                p.y += p.directionY

                // Draw the particle
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2, false)
                ctx.fillStyle = p.color
                ctx.fill()
            })

            // Draw a line between each pair of particles
            particles.forEach((p1, i) => {
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j]
                    const distance = Math.hypot(p1.x - p2.x, p1.y - p2.y)
                    if (distance < connectionDistance) {
                        ctx.beginPath()
                        ctx.moveTo(p1.x, p1.y)
                        ctx.lineTo(p2.x, p2.y)
                        ctx.strokeStyle = connectionColor
                        ctx.stroke()
                    }
                }
            })
            requestAnimationFrame(updateParticles)
        }

        initParticles()
        updateParticles()

        return () => {
            window.removeEventListener('resize', resizeCanvas)
            window.removeEventListener('mousemove', setMousePosition)
        }

    }, [canvasRef])

    return <canvas ref={canvasRef} className="particles" />
}
