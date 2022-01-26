import React from "react";
import Button from "../Button/button";
import One from "../../assets/img/1.jpg";
import { useState } from "react";
import "./card.scss";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../redux/actions/cartAction";

const Card = ({ cardProduct }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.product);
  const [activeSize, setActiveSize] = useState(null);

  const size = ["XS", "S", "M", "L"];

  const onSelectSize = (index) => {
    setActiveSize(index);
  };

  const handleSend = () => {
    const items = {
      id: cardProduct._id,
      name: cardProduct.name,
      size: size[activeSize],
      price: cardProduct.price,
    };
    if (cartItems.find((item) => item.id === items.id)) {
      return;
    } else {
      dispatch(addProductToCart(items));
    }
  };

  return (
    <div className="card-block">
      <img className="card-block__image" src={One} alt="one-card" />
      <h4 className="card-block__title">Трусики-{cardProduct.name}</h4>
      <div className="card-block__selector">
        <ul>
          {size.map((sizing, index) => (
            <li
              className={activeSize === index ? "active" : ""}
              onClick={() => onSelectSize(index)}
              key={index}
            >
              {sizing}
            </li>
          ))}
        </ul>
      </div>
      <div className="card-block__bottom">
        <div className="card-block__price">от {cardProduct.price} грн</div>
        <Button
          onClick={handleSend}
          className="button button--outline button--add"
        >
          <span>Добавить</span>
        </Button>
      </div>
    </div>
  );
};

export default Card;
