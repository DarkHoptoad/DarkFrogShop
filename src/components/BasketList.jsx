import { BasketItem } from "./BasketItem";

function BasketList(props) {
  const {
    order,
    BasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  const totalPrice = order.reduce((sum, el) => {
    console.log(sum);
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
            removeFromBasket={removeFromBasket}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
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
