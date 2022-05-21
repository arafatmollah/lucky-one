import React, { useState } from 'react';
import './Cart.css'

const Cart = (props) => {
   
    const { cart } = props;
    let productName = ' ';
    const [luckyname, setluckyname] = useState([])
    for (const items of cart) {
        productName = productName +" "+ items.name;
    }
    const chooseOne = () => {
        const len = cart.length;
        const choosenNumber = Math.floor(Math.random() * len);
        setluckyname(cart[choosenNumber].name)
        console.log(cart[choosenNumber].name);
        
    }
    return (
        <div className='cart'>
            <div>
                <p className='name'>Name: {productName}</p>
                <p></p>

                <button onClick={chooseOne} className='btnRandom'>Choose 1 for me!</button>

                <button onClick={chooseOne} className='btnRandom'>Choose Again!</button>
                <p>Lucky: { luckyname}</p>
                
            </div>
            
        </div>
    );
};

export default Cart;