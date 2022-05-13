import React from 'react';
import cl from "./gamePage.module.css";


const RenderWords = (selectedTopic, handleSelect, handleSubmit) => {
    return (
        <div className={cl.gameSection}>
            <article>Please choose a word that is {selectedTopic.topic}.</article>
            <ul className={cl.words}>
                {selectedTopic.list.map((word) => {
                    return (<li onClick={(e) => handleSelect(e)}
                                key={word}
                    >{word}</li>)
                })}
            </ul>
            <button onClick={handleSubmit}>Finish Game</button>
        </div>
    );
};

export default RenderWords;
