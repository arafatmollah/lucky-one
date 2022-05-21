import React from 'react';
import './Cart.css'

const Cart = (props) => {
   
    const { cart } = props;
    console.log(cart)
    let productName = ' ';
    for (const items of cart) {
        
        productName = productName + items.name;
        console.log(productName.length)

    }
    function generateString(length) {
        let result = ' ';
        const charactersLength = productName.length;
        for ( let i = 0; i < length; i++ ) {
            result += productName.charAt(Math.floor(Math.random() * charactersLength));
        }
    
        return result;
    }
    return (
        <div className='cart'>
            <div>
                <p>Name: {productName}</p>
                {/* <p>{ result}</p> */}
                <button onClick={generateString()} className='btnRandom'>Choose 1 for me!</button>
            </div>
            
        </div>
    );
};

export default Cart;