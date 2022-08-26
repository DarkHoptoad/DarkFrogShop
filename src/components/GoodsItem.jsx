import { useContext } from "react";
import { ShopContext } from "../Context";
function GoodsItem(props) {
  const {
    mainId: id,
    displayName,
    displayDescription,
    displayAssets,
    price: { finalPrice },
  } = props;

  const { addToBasket } = useContext(ShopContext);

  return (
    <div className="card" id={id}>
      <div className="card-image">
        <img src={displayAssets[0].full_background} alt={displayName} />
      </div>

      <div className="card-content">
        <div className="card__up">
          <span className="card-title">{displayName}</span>
          <p>{displayDescription}</p>
        </div>
      </div>

      <div className="price">
        <span className="price__f">Цена: {finalPrice} V-$</span>
      </div>

      <div className="but">
        <button
          className="butn unselectable"
          onClick={() =>
            addToBasket({
              id,
              displayName,
              finalPrice,
              displayAssets,
            })
          }
        >
          Купить
        </button>
      </div>
    </div>
  );
}

export { GoodsItem };
