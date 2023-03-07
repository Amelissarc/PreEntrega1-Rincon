import React from 'react';
import {NavBarComponent} from '../components';

export const MaintLayout = ({children, styles}) => {
    const maintLayoutStyles = {
        background: 'white',
        color: 'black',
    }
    return (
        <div style={styles}>
            <NavBarComponent />
            {children}
        </div>
    )
}    