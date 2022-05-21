import React, { useEffect, useState } from 'react';
import Earbuds from '../Earbuds/Earbuds';
import './Shop.css'



const Shop = () => {
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])
    
    const handleCart = (products) => {
        const newCart = [...cart, products];
        setCart(newCart)
    }
    return (
        <div className='shop'>
            <div className='products'>
            {
                product.map(products => <Earbuds key={products.id}
                    products={products}
                    handleCart={handleCart}
                ></Earbuds>)
            }
        </div>
        <div>
                <h1>{ cart.length}</h1>
        </div>
        </div>
    );
};

export default Shop;