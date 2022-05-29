function Cart(props) {
  const { quantity = 0, BasketShow = Function.prototype } = props;

  return (
    <div className="cart unselectable" onClick={BasketShow}>
      <i className="material-icons">shopping_cart</i>

      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}

export { Cart };
