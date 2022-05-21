import React, { useEffect, useState } from 'react';
import Earbuds from './Earbuds/Earbuds';
import './Products.css'

const Product = () => {
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])
    
    // const handleBtn = (product) => {
    //     const new = [...cart, product];
    //     console.log(new)
    // }
    return (
        <div className='shop'>
             <div className='products'>
            {
                product.map(products => <Earbuds key={products}
                products={products}
                ></Earbuds>)
            }
        </div>
        <div>
                <h4>Details</h4>
        </div>
       </div>
    );
};

export default Product;