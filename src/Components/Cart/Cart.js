import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    console.log(cart)
    let productName;
    for (const items of cart) {
        // const Cartname = items.name;
        productName = items.name;
    }
    return (
        <div>
            <li>Name: { productName}</li>
        </div>
    );
};

export default Cart;