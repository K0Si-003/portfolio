import github from '../assets/images/github.svg'
import linkedin from '../assets/images/linkedin.svg'

export default function Socials() {
    return (
        <>
            <a
                href="https://www.linkedin.com/in/hugo-pioda/"
                target="_blank"
                rel="noopener noreferrer"
                className="socials__link"
                // onClick={closeMenu}
            >
                <img
                    src={linkedin}
                    alt="Linkedin Logo"
                    className="socials__icon"
                />
            </a>
            <a
                href="https://github.com/K0Si-003"
                target="_blank"
                rel="noopener noreferrer"
                className="socials__link"
                // onClick={closeMenu}
            >
                <img src={github} alt="Github Logo" className="socials__icon" />
            </a>
        </>
    )
}
