import { useState, useEffect } from "react";
import { Preloader } from "../components/Preloader";
import { GoodsList } from "../components/GoodsList";
import { Cart } from "../components/Cart";
import { BasketList } from "../components/BasketList";
import { Alert } from "../components/Alert";
import {API_URL, API_KEY} from "../config"

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [alertName, setAlertName] = useState("");

  const BasketShow = () => {
    setBasketShow(!isBasketShow);
  };

  const removeFromBasket = (itemId) => {
    const newOrder = order.filter((el) => el.id !== itemId);
    setOrder(newOrder);
  };

  const addToBasket = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
    setAlertName(item.displayName)
  };

  const incQuantity = (itemId) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === itemId);

    const newOrder = order.map((orderItem, index) => {
      if (index === itemIndex) {
        return {
          ...orderItem,
          quantity: orderItem.quantity + 1,
        };
      } else {
        return orderItem;
      }
    });
    setOrder(newOrder);
  };

  const decQuantity = (itemId) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === itemId);

    const newOrder = order.map((orderItem, index) => {
      if (index === itemIndex) {
        return {
          ...orderItem,
          quantity: orderItem.quantity - 1 >= 0 ? orderItem.quantity - 1 : 0,
        };
      } else {
        return orderItem;
      }
    });
    setOrder(newOrder);
  };

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
        setLoading(false);
      });
  }, []);

  const handleCloseAlert = () => {
    setAlertName("");
  };

  return (
    <main className="container content">
      <Cart quantity={order.length} BasketShow={BasketShow} />
      {loading ? <Preloader /> : <GoodsList goods={goods} AB={addToBasket} />}
      {isBasketShow && (
        <BasketList
          order={order}
          BasketShow={BasketShow}
          removeFromBasket={removeFromBasket}
          incQuantity={incQuantity}
          decQuantity={decQuantity}
        />
      )}
      {alertName && (
        <Alert name={alertName} handleCloseAlert={handleCloseAlert} />
      )}
    </main>
  );
}

export { Shop };
