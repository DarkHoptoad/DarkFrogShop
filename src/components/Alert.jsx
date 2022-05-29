import {useState, useEffect} from 'react'

function Alert (props) {
    const {name = '', handleCloseAlert = Function.prototype} = props;

    useEffect (() => {
        const timerId = setTimeout(handleCloseAlert, 6000);

        return () => {
            clearTimeout(timerId)
        };
        //eslint-disable-next-line
    }, [name]);

    return <div className='toast__container' id="toast__container">
        <div className="toast">
            {name} добавлен в корзину
        </div>
    </div>
}

export {Alert}