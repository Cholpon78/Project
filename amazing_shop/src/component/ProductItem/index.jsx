import { useNavigate } from "react-router-dom";
import s from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { useCalculateDiscount } from "../../utils/useCalculateDiscount";
import { addToCart } from "../../store/slice/cartSlice";
import { toast } from "react-toastify";
import { getProductId } from "../../store/slice/productSlice";
import { useState } from "react";
import ButtonComponent from "../../UI/ButtonUi/ButtonComponent";

export default function ProductItem({
  id,
  image,
  title,
  price,
  discont_price,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const discount = useCalculateDiscount(price, discont_price);

  function handleSingleProduct(id) {
    dispatch(getProductId(id));
    localStorage.setItem("ProductId", JSON.stringify(id));
    navigate(`/products/${id}`); 
  }

  const addProduct = (e) => {
    e.stopPropagation();
    dispatch(addToCart(id));
    toast(`Added to the shopping cart!`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      style: {
        background: "green", 
        color: "white",
        boxShadow: "none",
      },
    });
  };

  return (
    <div
      onMouseEnter={() => {
        setIsHovered(true);
        setShowButton(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowButton(false);
      }}
      className={s.wrapper}
    >
      <div
        className={s.image_wrapper}
        onClick={() => handleSingleProduct(id)} 
      >
        {showButton && (
          <ButtonComponent
            className={s.button}
            onClick={addProduct}
            text={"Add to cart"}
          />
        )}

        {discont_price && (
          <div className={s.discount_percentage}>- {discount}%</div>
        )}

        <img
          src={"http://localhost:3333" + image}
          alt={title}
          className={s.product_img}
        />
      </div>

      <div
        onClick={() => handleSingleProduct(id)} 
        className={s.product_info}
      >
        <h3 className={s.product_title}>{title}</h3>
        <div className={s.price_container}>
          {discont_price && (
            <p className={s.actual_price}>$ {discont_price}</p>
          )}

          {!discont_price && price && (
            <p className={s.actual_price}> $ {price}</p>
          )}

          {discont_price && price && (
            <p className={s.old_price}>$ {price}</p>
          )}
        </div>
      </div>
    </div>
  );
}
