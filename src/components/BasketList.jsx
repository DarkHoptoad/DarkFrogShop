import { BasketItem } from "./BasketItem";
import {useContext} from 'react';
import {ShopContext} from '../Context'

function BasketList() {
  const {
    order,
    BasketShow,
  } = useContext(ShopContext);

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.finalPrice * el.quantity;
  }, 0);
  return (
    <ul className="collection basket__list">
      <li className="collection-item active">
        Корзина
        <i className="material-icons close right" onClick={BasketShow}>
          close
        </i>
      </li>
      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.id}
            {...item}
          />
        ))
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}
      <li className="collection__item__act total__price">Общая стоимость: {totalPrice}
      <button className=" buy unselectable right">Оформить</button>
      </li>
    </ul>
  );
}

export { BasketList };
