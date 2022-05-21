import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Earbuds from '../Earbuds/Earbuds';
import './Shop.css'



const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])
    
    const handleCart = (product) => {
        console.log(product)
        const newCart = [...cart, product];
        setCart(newCart)
    }
    return (
        <div className='shop'>
            <div className='products'>
            {
                products.map(product => <Earbuds key={product.id}
                    product={product}
                    handleCart={handleCart}
                ></Earbuds>)
            }
        </div>
            <div>
                
                <Cart cart={cart}></Cart>
        </div>
        </div>
    );
};

export default Shop;