import React from 'react';

export const NavBarComponent = () => {
    return (
        <div>
            <header>
                <div className="logoHeader">
                    <img src="./img/tipo-blancotrabajo.png" alt="logo"/>
                </div>
            </header>
            <aside>
                <div className="asideHeader">
                    <ul>
                        <li> 
                            <a href="#"> All products</a>
                        </li>
                        <li> 
                            <a href="#"> Yoga set</a>
                        </li>
                        <li>  
                            <a href="#"> Drinkware</a>
                        </li>
                        <li> 
                            <a href="#"> Bolsters</a>
                        </li>
                        <li> 
                            <a href="#"> Yoga block</a>
                        </li>
                        <li> 
                            <a href="#"> Shirts</a>
                        </li>
                        <li> 
                            <a href="#"> Books</a>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    )
}