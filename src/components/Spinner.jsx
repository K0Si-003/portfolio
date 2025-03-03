export default function Spinner({ isLoaded }) {
    return (
        <svg
            className="spinner"
            width="51px"
            height="51px"
            viewBox="0 0 52 52"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                className="path"
                fill="none"
                strokeWidth="5"
                strokeLinecap="round"
                cx="26"
                cy="26"
                r="23"
            ></circle>
        </svg>
    )
}