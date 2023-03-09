import React from 'react';
import { CardComponent } from '../ItemCartComponent/ItemCartComponent';
import stylesItemList from './itemList.css';

export const ItemListContainer = ({ greeting }) => {
    return (
        <div className="item-list-container">
            <h2 className="item-list-container__title">{greeting}</h2>
            <div className="item-list-container__content">
                {/* aquí va el contenido de la lista de items */}
                    <CardComponent
                        imgSrc="https://img.freepik.com/foto-gratis/arreglo-elementos-esenciales-yoga-verde_23-2149442714.jpg?w=1060&t=st=1678400737~exp=1678401337~hmac=21e604a25c37c19807f3a4ee6e19b4be1b5789dc2ce6418813ba431c5fd24c7d"
                        title="Card Title 1"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."
                        buttonText="Go somewhere"
                    />
                    <CardComponent
                        imgSrc="https://img.freepik.com/foto-gratis/vista-superior-articulos-esenciales-yoga_23-2149458925.jpg?w=1060&t=st=1678402319~exp=1678402919~hmac=b65663f3954f5169f941c373c6b3849ce85bbd81e4eb227cbe9f0de2131c458d"
                        title="Card Title 2"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."
                        buttonText="Go somewhere"
                    />
                    <CardComponent
                        imgSrc="https://img.freepik.com/foto-gratis/bodegon-accesorios-fitness-gimnasio-perfectamente-ordenados_52683-100698.jpg?w=1060&t=st=1678402626~exp=1678403226~hmac=48a4b14a481441f74c6a9cc97ef4aa66e22ee9eaf4aaf8780b7a14e45205450f"
                        title="Card Title 3"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."
                        buttonText="Go somewhere"
                    />
                    <CardComponent
                        imgSrc="https://img.freepik.com/foto-gratis/equipo-yoga-mesa_23-2148741915.jpg?w=1060&t=st=1678402675~exp=1678403275~hmac=b71815be8a09fee1c0e404a7618d7d9d89ce646cd9b482515f7509d4e40b643a"
                        title="Card Title 4"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."
                        buttonText="Go somewhere"
                    />
            </div>
        </div>
    );
};

export default ItemListContainer;
