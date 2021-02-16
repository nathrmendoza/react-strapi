import {Link, useLocation} from 'react-router-dom'

const Navbar = () => {
    const currentPath = useLocation().pathname;

    return (
        <nav>
            <ul>
                <li><Link to="/" className={currentPath === "/" ? "active-link" : ""}>Home</Link></li>
                <li><Link to="/shop" className={currentPath === "/shop" ? "active-link" : ""}>Shop</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
