import { useState } from 'react'
import '../../index.css'
import styles from './ShopPage.module.css'
import ProductCard from '../ProductCard/ProductCard.jsx';
import { useOutletContext } from "react-router";

function renderProducts() {
    const { inventory } = useOutletContext();

    return inventory.map(e => {
        return (
            <ProductCard product={e} key={e.id} />
        )
    })
};

function ShopPage() {
    const { inventory } = useOutletContext();



    return (
        <div>
            {renderProducts()}
        </div>
    );
}

export default ShopPage