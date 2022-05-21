import React from 'react';
import './Earbuds.css'

const Earbuds = (props) => {
    // console.log(props.products);
    const { picture,name,price } = props.product;
    return (
        <div className='details'>
            <img src={picture} alt=""></img>
            <p>Name: {name}</p>
            <p>Price: {price}</p>
            
            <button onClick={()=>props.handleCart(props.product)} className='btn-cart'>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Earbuds;