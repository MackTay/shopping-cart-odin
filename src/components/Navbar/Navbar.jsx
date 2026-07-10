import { useState } from 'react'
import '../../index.css'
import { Link } from "react-router";
import styles from './Navbar.module.css'
// import Cart from '../Cart/Cart.jsx'

function Navbar() {
    return (
        <nav>
            <Link className={styles.home}>Home</Link>
            <Link className={styles.store}>Store</Link>
            <Link className={styles.placeholder}>Cart</Link>
            {/* <Cart /> */}
        </nav>
    );
}

export default Navbar