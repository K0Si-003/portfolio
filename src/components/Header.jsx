import { useState } from 'react'
import { NavLink } from 'react-router'
import Socials from './Socials.jsx'
import Hamburger from './Hamburger.jsx'
import logo from '../assets/images/logo.svg'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className="header">
            <NavLink to="/" className="header__logo">
                <img
                    src={logo}
                    alt="Hugo Pioda Logo"
                    className="header__logo"
                />
            </NavLink>
            <div className="right__wrapper">
                <div className="header__socials">
                    <Socials />
                </div>
                <Hamburger onToggle={toggleMenu} isMenuOpen={isMenuOpen} />
            </div>
            <nav
                className={`menu ${isMenuOpen ? 'is-active' : ''}`}
                role="navigation"
            >
                <ul className="menu__wrapper">
                    <li>
                        <NavLink to="/" onClick={toggleMenu}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/a-propos" onClick={toggleMenu}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projets" onClick={toggleMenu}>
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" onClick={toggleMenu}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <div className="menu__socials">
                    <Socials />
                </div>
            </nav>
        </header>
    )
}
