import { GoodsItem } from "./GoodsItem";
import {useContext} from 'react'
import {ShopContext} from "../Context"

function GoodsList() {
  const { goods = [] } = useContext(ShopContext);

  if (!goods.length) {
    return <h3>Ooops, empty!</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsItem key={item.mainId} {...item} />
      ))}
    </div>
  );
}

export { GoodsList };
