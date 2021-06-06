import React from 'react';
import './product.css';

function Product({ firstLine, price, imgsrc }) {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>{firstLine}</p>
        <img className='rowImage' src={imgsrc}></img>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
    </div>
  );
}

export default Product;
