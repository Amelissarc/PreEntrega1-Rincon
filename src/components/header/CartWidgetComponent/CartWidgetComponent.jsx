import React from 'react';

export const CartWidget = () => {
    const cartItemsCount = 3; // número hardcodeado
    const titleName = 'Cart';
return (
    <div className='cartWidge'>
        <i className="fa-solid fa-cart-shopping">
        <span className='indicator'>{cartItemsCount}</span>
        </i>
        <span>{titleName}</span>
    </div>
);
};

export default CartWidget;
