import { useState } from 'react'
import '../../index.css'
import { Link } from "react-router";
import styles from './Navbar.module.css';
import CartIcon from '../CartIcon/CartIcon.jsx';

function Navbar({ cart }) {
    return (
        <nav>
            <Link to='/' className={styles.home}>Home</Link>
            <Link to='/shop' className={styles.store}>Store</Link>
            <Link to='/cart' className={styles.placeholder}>
                <CartIcon cart={cart} />
            </Link>
        </nav>
    );
}

export default Navbar