function GoodsItem(props) {
  const {
    mainId: id,
    displayName,
    displayDescription,
    displayAssets,
    price: { finalPrice, regularPrice },
    AB = Function.prototype,
  } = props;

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
        <span className="price__r">Без скидки: {regularPrice} V-$</span>
        <span className="price__f">Сейчас: {finalPrice} V-$</span>
      </div>

      <div className="but">
        <button
          className="butn unselectable"
          onClick={() =>
            AB({
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
