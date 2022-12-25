import "./navbar.css"
import CartWidget from '../CartWidget/CartWidget'



function NavBar () {
    return(
        <nav className="flex navbar">
            <div className="nombretienda">
                <p>Tienda de Bebidas</p>
            </div>
        <ul className="flex">
        
            <li>
                <a href="/">Cerveza</a>
            </li>
            <li>
                <a href="/">Vodka</a>
            </li>
            <li>
                <a href="/">Gin</a>
            </li>
            <li>
                <a href="/">Gaseosas</a>
            </li>
            
        </ul>
        <CartWidget/>
        </nav>
    )
}

export default NavBar;