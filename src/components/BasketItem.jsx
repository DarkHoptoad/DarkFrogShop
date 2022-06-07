import { useContext } from "react";
import { ShopContext } from "../Context";

export { useContext } from "react";
export { ShopContext } from "../Context";

function BasketItem(props) {
  const {
    id,
    displayName,
    finalPrice,
    displayAssets,
    quantity,
  } = props;

  const { removeFromBasket, incQuantity, decQuantity } = useContext(ShopContext);

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
        <li className="secondary-content">
          <i
            className="material-icons delete"
            onClick={() => removeFromBasket(id)}
          >
            delete
          </i>
        </li>
      </li>
    </ul>
  );
}

export { BasketItem };
