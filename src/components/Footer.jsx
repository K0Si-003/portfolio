import { useState, useEffect } from 'react'
import { NavLink } from 'react-router'
import Socials from './Socials.jsx'
import IconSvg from './IconSvg.jsx'
import Arrow from '../assets/images/arrow-up.svg?react'
import { siReact } from 'simple-icons'

export default function footer() {
    const [isVisible, setIsVisible] = useState(false)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    return (
        <footer className="footer container-full">
            <div className="footer__wrapper container">
                <div className="footer__top">
                    <div className="footer__social">
                        <Socials />
                    </div>
                    <ul className="footer__nav">
                        <li>
                            <NavLink to="/">Accueil</NavLink>
                        </li>
                        <li>
                            <NavLink to="/projets">Projets</NavLink>
                        </li>
                        <li>
                            <NavLink to="/a-propos">A propos</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="footer__bottom">
                    <div className="bottom__left">
                        <span>© 2025</span>
                    </div>
                    <div className="bottom__right">
                        <span>
                            {`</>`} with ❤️ and{' '}
                            <IconSvg icon={siReact} color={'#61DAFB'} size={'16'} />
                        </span>
                    </div>
                </div>
            </div>
            <button className={`back-to-top${isVisible ? ' visible' : ''}`} onClick={scrollToTop}>
                <Arrow />
            </button>
        </footer>
    )
}
