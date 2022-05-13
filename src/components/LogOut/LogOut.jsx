import React from 'react';
import cl from './logOut.module.css'
const LogOut = () => {

    const  handelLogOut =()=>{
        localStorage.removeItem('nickname');
        window.location = '/cloud-game/#/login';
        window.location.reload()
    }

    return (
        <button className={cl.logOut}
                onClick={handelLogOut}
        >
            Log Out
        </button>
    );
};

export default LogOut;
