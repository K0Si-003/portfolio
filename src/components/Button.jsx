import { NavLink } from "react-router";

export default function Button({ route, className }) {
    return (
        <button className={`btn-primary ${className}`}>
            <NavLink to={route}>
                Voir plus
            </NavLink>
        </button>
    )
}