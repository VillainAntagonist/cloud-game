import React from 'react';
import LogOut from "../LogOut/LogOut";
import cl from './ResultPage.module.css'

const ResultPage = ({result, nickName, ...props}) => {
    const handleClick = () => {
        window.location = '/cloud-game/#/play'
    }
    return (
        <section className={cl.resultPage}>
            <LogOut/>
            <div className={cl.resultBox}>
                {
                    result > 0
                        ? <div>
                            <h2>Congratulate, {nickName}!</h2>
                            <h1>You are Win</h1>
                        </div>
                        : <div>
                            <h2>Oh noo, {nickName}!</h2>
                            <h1>You are Lose</h1>
                        </div>
                }
                <p>Your Score is {result}</p>
                <button onClick={handleClick}>Try Again</button>
            </div>
        </section>
    );
};

export default ResultPage;
