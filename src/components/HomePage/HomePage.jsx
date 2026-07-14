import { useState } from 'react';
import { useOutletContext } from "react-router";
import { Link } from "react-router";
import '../../index.css';
import shopping from '../../assets/shopping.jpg'
import styles from './HomePage.module.css';

function HomePage() {
    const inventory = useOutletContext();

    const exInvArr = [];
    while (exInvArr.length <=3) {
        let next = inventory[Math.floor(Math.random() * 20)].image;
        if (!exInvArr.includes(next)) exInvArr.push(next);
    }
    
    return (
        <div className="home">
            <div className={styles.heroDiv}>
                <img className={styles.heroImg} src={shopping} alt="" />
                <div className={styles.heroText}>
                    <h2>The Products You Need, at Prices You're Kind of Maybe Okay With</h2>
                    <p>At this shop, we're committed to getting the lowest prices possible on a collection of products that you may not find to have any particular theme.</p>
                    <p>Also, are you aware of broccoli? We don't sell it here, but it's very nutritious and can be used in a variety of different kinds of cooking. Please give it a try if you haven't!</p>
                </div>
            </div>
            <div className={styles.products}>
                <h2>10s of HOT items to choose from</h2>
                <div className={styles.gallery1}>
                    <img src={exInvArr[0]} alt="example product" />
                    </div>
                <div className={styles.gallery2}>
                    <img src={exInvArr[1]} alt="example product" />
                    </div>
                <div className={styles.gallery3}>
                    <img src={exInvArr[2]} alt="example product" />
                    </div>
                <Link to='/shop' className={styles.shopLink}>Shop Now!</Link>
            </div>
        </div>
    );
}

export default HomePage