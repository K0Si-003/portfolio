export default function Hamburger({ onToggle, isMenuOpen }) {
    return (
        <button
            className={`hamburger hamburger-anim ${isMenuOpen ? 'is-active' : ''}`}
            type="button"
            onClick={onToggle}
        >
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
        </button>
    )
}