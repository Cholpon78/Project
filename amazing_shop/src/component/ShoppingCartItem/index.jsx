import React from "react";
import s from "./ShoppingCartItem.module.css";
import { useDispatch } from "react-redux";
import {
  decrAmount,
  incrAmount,
  removeItem,
} from "../../store/slice/cartSlice";
import { useNavigate } from "react-router-dom";
import { getProductId } from "../../store/slice/productSlice";
import minus from "../assets/minus.svg"; // Импортируем изображение минуса
import plus from "../assets/plus.svg";
import close from "../assets/close.svg";


export default function ShoppingCartItem({
  id,
  image,
  title,
  count,
  price,
  discont_price,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSingleProduct(id) {
    dispatch(getProductId(id));
    localStorage.setItem("ProductId", JSON.stringify(id));
    navigate("/products/:id");
  }

  return (
    <div className={s.item_container}>
      <div
        className={s.image_wrapper}
        onClick={() => handleSingleProduct(id)}
      >
        <img src={"http://localhost:3333" + image} alt={title} />
      </div>

      <div className={s.title_counter_wrapper}>
        <p onClick={() => handleSingleProduct(id)} className={s.title}>
          {title}
        </p>
        <div className={s.counter}>
              <img
            src={minus}
            alt="minus"
            className={s.decr_btn}
            onClick={() => dispatch(decrAmount(id))}
          />
          <p>{count}</p>
          <img
            src={plus}
            alt="plus"
            className={s.incr_btn}
            onClick={() => dispatch(incrAmount(id))}
          />
        </div>
      </div>

      <div className={s.price_container}>
        {discont_price && (
          <p className={s.actual_price}>$ {discont_price} </p>
        )}
        {discont_price ? (
          <p className={s.old_price}>$ {price}</p>
        ) : (
          <p className={s.actual_price}>$ {price}</p>
        )}
      </div>
      <img
            src={close}
            alt="close"
        className={s.remove_btn}
        onClick={() => dispatch(removeItem(id))}
      />
    </div>
  );
}
