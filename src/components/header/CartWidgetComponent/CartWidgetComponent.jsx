import React from 'react';
import { Badge } from 'react-bootstrap';

export const CartWidget = () => {
    const cartItemsCount = 3; // número hardcodeado
return (
    <div className='cartWidge'>
        <i className="fa-solid fa-cart-shopping"></i>
        <span className='indicator'>{cartItemsCount}</span>
    </div>
);
};

export default CartWidget;
