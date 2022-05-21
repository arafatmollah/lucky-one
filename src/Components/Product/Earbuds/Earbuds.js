import React from 'react';
import './Earbuds.css'

const Earbuds = (props) => {
    // console.log(props.products)
    const { picture,name, price } = props.products;
    return (
        <div className='product'>
            <img src={picture} alt=""></img>
            <div>
                <p className='name'>Name: { name}</p>
                <p>Price: { price}</p>
            </div>
            <button className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Earbuds;