import { NavLink } from "react-router";

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </ul>
            </nav>
        </header>
    )
}