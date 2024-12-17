import { useState } from 'react'
import { NavLink } from 'react-router'
import Socials from './Socials.jsx'
import Hamburger from './Hamburger.jsx'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className="header">
            <div className="header__socials">
                <Socials />
            </div>
            <Hamburger onToggle={toggleMenu} isMenuOpen={isMenuOpen} />
            <nav
                className={`menu ${isMenuOpen ? 'is-active' : ''}`}
                role="navigation"
            >
                <ul className="menu__wrapper">
                    <li>
                        <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" onClick={toggleMenu}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" onClick={toggleMenu}>Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink>
                    </li>
                </ul>
                <div className="menu__socials">
                    <Socials />
                </div>
            </nav>
        </header>
    )
}
