import { useState } from 'react';
import { useOutletContext } from "react-router";
import '../../index.css';
import styles from './ProductCard.module.css';

function ProductCard({ product }) {
    const { cart, setCart } = useOutletContext();
    const [count, setCount] = useState(0);

    function decrease() {
        if (count > 0) setCount(count - 1);
    };

    function increase() {
        setCount(count + 1);
    };

    function productTotalInc(product) {
        return cart.map(e => {
            if (e.id === product.id) {
                return { ...e, total: e.total + count };
            } return { ...e };
        });
    };

    function submit(product) {
        if (count < 1) return;
        const newProd = product;
        newProd.total = count;

// check if the item is in cart. Add to that total if yes, add new item to cart with total key if no
        if (cart.some(item => item.id === product.id)) {
            setCart(productTotalInc(product));
            setCount(0);
        } else {
            setCart([...cart, newProd]);
            setCount(0);
        }
    };

    return (
        <div className={styles.card}>
            <img className={styles.cardImg} src={product.image} alt={product.title} />
            <div className={styles.textDiv}>
                <h2>{product.title}</h2>
                <p>${product.price}</p>
                <p>{product.description}</p>
                <p>{product.category}</p>
            </div>
            <div className={styles.btnDiv}>
                <div className={styles.itemCount}>
                    <button onClick={decrease} className={styles.left}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16l4-4l-1.4-1.4l-1.6 1.6V8h-2v4.2l-1.6-1.6L8 12zm0 6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"/></svg></button>
                    <span>{count}</span>
                    <button onClick={increase} className={styles.right}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 16h2v-4.2l1.6 1.6L16 12l-4-4l-4 4l1.4 1.4l1.6-1.6zm1 6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"/></svg></button>
                </div>
                <button onClick={() => submit(product)} className={styles.submit}>Add to cart</button>
            </div>
        </div>
    );
};

export default ProductCard