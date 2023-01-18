import "./navbar.css"
import CartWidget from '../CartWidget/CartWidget'
import { Link } from "react-router-dom";



function NavBar () {
    return(
        <nav className="flex navbar">
            <div className="nombretienda">
                <Link to="/">My E-Comerce</Link>
            </div>
        <ul className="flex">
        
            <li>
                <Link to="/category/smartphones">Smartphones</Link>
            </li>
            <li>
                <Link to="/category/laptops">Laptops</Link>
            </li>
            <li>
                <Link to="/category/fragrances">Fragrances</Link>
            </li>
            <li>
                <Link to="/category/skincare">Skincare</Link>
            </li>
            <li>
                <Link to="/category/groceries">Groceries</Link>
            </li>
            <li>
                <Link to="/category/home-decoration">Home-decoration</Link>
            </li>
        </ul>
        <CartWidget/>
        </nav>
    )
}

export default NavBar;