import { useState } from 'react'
import '../../index.css'
import { Link } from "react-router";
// import Cart from '../Cart/Cart.jsx'

function Navbar() {
    return (
        <nav>
            <Link>Home</Link>
            <Link>Store</Link>
            {/* <Cart /> */}
        </nav>
    );
}

export default Navbar