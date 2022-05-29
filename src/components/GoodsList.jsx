import { GoodsItem } from "./GoodsItem";
function GoodsList(props) {
  const { goods = [], AB = Function.prototype } = props;

  if (!goods.length) {
    return <h3>Ooops, empty!</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsItem key={item.mainId} {...item} AB={AB} />
      ))}
    </div>
  );
}

export { GoodsList };
