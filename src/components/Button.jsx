import { NavLink } from 'react-router'

export default function Button({ route, className }) {
    return (
        <NavLink to={route}>
            <button className={`btn-primary ${className}`}>Voir plus</button>
        </NavLink>
    )
}
