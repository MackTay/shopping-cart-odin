import { useState } from 'react';
import { useOutletContext } from "react-router";
import { Link } from "react-router";
import '../../index.css';
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
            <div className={styles.products}>
                <h2>10s of HOT items to choose from</h2>
                <div className={styles.gallery1}>
                    <img src={exInvArr[0]} alt="" />
                    </div>
                <div className={styles.gallery2}>
                    <img src={exInvArr[1]} alt="" />
                    </div>
                <div className={styles.gallery3}>
                    <img src={exInvArr[2]} alt="" />
                    </div>
                <Link to='/shop' className={styles.shopLink}>Shop Now!</Link>
            </div>
        </div>
    );
}

export default HomePage