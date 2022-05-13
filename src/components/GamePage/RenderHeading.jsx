import React from 'react';
import cl from "./gamePage.module.css";

const RenderHeading = (nickName, category, handleClick) => {
    return (
        <div className={cl.heading}>
            <h1>Hello {nickName},</h1>
            <article>I wanna play a game with you. Please select topic.</article>
            <div className={cl.selection}>
                {category.map((name)=>(
                    <button
                        key={name}
                        onClick={(e)=>handleClick(e)}>
                        {name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default RenderHeading;
