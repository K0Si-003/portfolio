export default function IconSvg({ icon, color }) {
    return (
        <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
        >
            <path d={icon.path} fill={color} />
        </svg>
    )
}
