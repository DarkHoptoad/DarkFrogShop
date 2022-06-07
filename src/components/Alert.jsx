import { useEffect, useContext} from 'react'
import {ShopContext} from '../Context'
function Alert () {
    const {alertName: name = '', closeAlert} = useContext(ShopContext);

    useEffect (() => {
        const timerId = setTimeout(closeAlert, 6000);

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