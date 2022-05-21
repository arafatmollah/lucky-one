import React from 'react';
import './Cart.css'

const Cart = (props) => {
   
    const { cart } = props;
    let productName = ' ';
    for (const items of cart) {
        productName = productName +" "+ items.name;
    }
    return (
        <div className='cart'>
            <div>
                <p className='name'>Name: {productName}</p>

                <button className='btnRandom'>Choose 1 for me!</button>

                <button className='btnRandom'>Choose Again!</button>
                
            </div>
            
        </div>
    );
};

export default Cart;