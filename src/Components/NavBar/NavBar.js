import React from 'react'
import ShoppingCartIcon from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
    <div>
        <nav>
            <ul>
                <li><a>Inicio</a></li>
                <li><a>Productos</a></li>
                <ShoppingCartIcon/>
            </ul>
        </nav>
    </div>
    )
}

export default NavBar