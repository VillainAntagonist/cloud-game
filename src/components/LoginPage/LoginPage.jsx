import React from 'react';
import {useState} from "react";
import cl from './loginPage.module.css'

const LoginPage = ({setNickName, ...props}) => {

    const [value, setValue] = useState('');

    const handleSubmit =(e)=>{
        e.preventDefault()
        setNickName(value);
        localStorage.setItem('nickname', value);
        props.history.push('/play');
    }

    return (
        <section className={cl.loginPage}>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input
                    placeholder='Enter your nickname here...'
                    type='text'
                    required
                    min='3'
                    value={value}
                    onChange={e=>setValue(e.target.value)}
                />
                <button>Play</button>
            </form>
        </section>
    );
};

export default LoginPage;
