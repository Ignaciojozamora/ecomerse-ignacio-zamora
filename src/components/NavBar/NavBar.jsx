import "./navbar.css"



function NavBar () {
    return(
        <nav className="flex">
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
        </nav>
    )
}

export default NavBar;