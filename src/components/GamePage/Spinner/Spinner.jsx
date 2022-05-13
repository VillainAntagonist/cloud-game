import React from 'react';
import cl from './spinner.module.css'
const Spinner = () => {
    return (
        <div className={cl.ldsRing}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Spinner;
