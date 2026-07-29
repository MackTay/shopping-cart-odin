import { useState } from 'react';
import { useOutletContext } from "react-router";
import '../../index.css';
import styles from './CartDisplayCard.module.css';

function CartDisplayCard({ cartItem }) {
    const { cart, setCart } = useOutletContext();
    
    function remove(item) {
        console.log(item);
        console.log(cart);
        const newCart = cart.filter(e => e.id != item.id);
        console.log(newCart);
        setCart(newCart);
    };

    return (
        <div className={styles.overDiv}>
            <img src={cartItem.image} alt={cartItem.title} />
            <div className={styles.infoDiv}>
                <h2>{cartItem.title}</h2>
                <div className={styles.priceDiv}>
                    <p className={styles.price}>${cartItem.price} x {cartItem.total} = ${cartItem.price * cartItem.total}</p>
                    <button className={styles.submit} onClick={() => remove(cartItem)}>Remove from cart</button>
                </div>
            </div>
        </div>
    );
};

export default CartDisplayCard