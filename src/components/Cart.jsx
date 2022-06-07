import { useContext } from "react";
import { ShopContext } from "../Context";

function Cart(props) {

  const { order, BasketShow } = useContext(ShopContext);
  const quantity = order.length
  
  return (
    <div className="cart unselectable" onClick={BasketShow}>
      <i className="material-icons">shopping_cart</i>

      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}

export { Cart };
