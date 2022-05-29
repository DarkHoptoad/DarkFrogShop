function BasketItem(props) {
  const {
    id,
    displayName,
    finalPrice,
    displayAssets,
    quantity,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  return (
    <ul className="collection">
      <li className="collection-item avatar">
        <img
          src={displayAssets[0].full_background}
          alt={displayName}
          className="circle"
        />
        <li className="collection-item">
          {displayName} x{" "}
          <span
            className="item__neg unselectable"
            onClick={() => decQuantity(id)}
          >
            (-)
          </span>{" "}
          {quantity}{" "}
          <span
            className="item__plus unselectable"
            onClick={() => incQuantity(id)}
          >
            (+)
          </span>{" "}
          = {finalPrice * quantity} V-$
        </li>
        <span className="secondary-content">
          <i
            className="material-icons delete"
            onClick={() => removeFromBasket(id)}
          >
            delete
          </i>
        </span>
      </li>
    </ul>
  );
}

export { BasketItem };
