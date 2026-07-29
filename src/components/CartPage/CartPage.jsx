import { useState } from 'react'
import '../../index.css'
import styles from './CartPage.module.css'
import CartDisplayCard from '../CartDisplayCard/CartDisplayCard.jsx'
import { useOutletContext } from 'react-router'

function CartPage() {
    const { cart, setCart } = useOutletContext();

    function renderCart() {  
    return cart.map(e => {
        return (
            <CartDisplayCard cartItem={e} key={e.id} />
        )
    })
}

function renderSide() {
    if (!cart) {
        return (
            <>
                <p>Nothing in cart yet...</p>
                <p>Subtotal: $0</p>
            </>
        )
    } else {
        let itemTotal = 0;
        cart.forEach(e => {
            itemTotal += e.total;
        });
        let subtotal = 0;
        cart.forEach(e => {
            subtotal = subtotal + (e.price * e.total);
        })
        return (
            <>
                <p>{itemTotal} items in cart</p>
                <p>Subtotal: ${subtotal.toFixed(2)}</p>
            </>
        )
    }
}

function checkout() {
    setCart([]);
    event.preventDefault();
    alert('Congrats, you bought a bunch of stuff!');
}

    return (
        <div className={styles.overDiv}>
            <div className={styles.cart}>
                {renderCart()}
            </div>
            <div className={styles.sideWrap}>
                <div className={styles.sidebar}>
                    <h4>Cart Total</h4>
                    {renderSide()}
                    <button onClick={() => checkout()} className={styles.submit}>Checkout</button>
                </div>
            </div>
        </div>
    );
}

export default CartPage