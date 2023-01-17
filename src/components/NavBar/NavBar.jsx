import "./navbar.css"
import CartWidget from '../CartWidget/CartWidget'




function NavBar () {
    return(
        <nav className="flex navbar">
            <div className="nombretienda">
                <p>My E-Comerce</p>
            </div>
        <ul className="flex">
        
            <li>
                <a href="/">Smartphones</a>
            </li>
            <li>
                <a href="/">Computadoras</a>
            </li>
            <li>
                <a href="/">Laptops</a>
            </li>
            <li>
                <a href="/">Fragrances</a>
            </li>
            <li>
                <a href="/">Skincare</a>
            </li>
            <li>
                <a href="/">Groceries</a>
            </li>
            <li>
                <a href="/">Home-decoration</a>
            </li>
        </ul>
        <CartWidget/>
        </nav>
    )
}

export default NavBar;