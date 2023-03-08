import React from 'react';

export const ItemListContainer = ({ greeting }) => {
    return (
        <div className="item-list-container">
            <h2 className="item-list-container__title">{greeting}</h2>
            <div className="item-list-container__content">
                {/* aquí va el contenido de la lista de items */}
            </div>
        </div>
    );
};

export default ItemListContainer;
