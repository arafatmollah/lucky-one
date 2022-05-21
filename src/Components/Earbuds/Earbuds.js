import React from 'react';
import './Earbuds.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Earbuds = (props) => {
    // console.log(props.products);
    const { picture,name,price } = props.product;
    return (
        <div className='details'>
            <img src={picture} alt=""></img>
            <p className='name'>Name: {name}</p>
            <p className='price'>Price: {price}</p>
            
            <button onClick={()=>props.handleCart(props.product)} className='btn-cart'>
                <p>Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>
            </button>
        </div>
    );
};

export default Earbuds;