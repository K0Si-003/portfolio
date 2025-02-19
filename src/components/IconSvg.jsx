export default function IconSvg({ icon, color, size = '24' }) {
    return (
        <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill={color}
        >
            <path d={icon.path} />
        </svg>
    )
}
