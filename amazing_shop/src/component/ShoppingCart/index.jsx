import ShoppingCartItem from "../ShoppingCartItem";
import { useCart } from "../../utils/useCart";
import ByCondition from "../../UI/ByCondition";
import EmptyShoppingCart from "../EmptyShoppingCart";
import { Link } from "react-router-dom";
import s from "./ShoppingCart.module.css";
import Order from "../Order";
import ButtonComponent from "../../UI/ButtonUi/ButtonComponent";

export default function ShoppingCart() {
  const list = useCart();

  return (
    <div className={s.cart_wrapper}>
      <div className={s.cart_header}>
        <h1 className={s.title}>Shopping Cart</h1>
        <div className={s.categories_line}></div>
        <Link  to="/products/all">
          <ButtonComponent className={s.back_btn} text={"Back to the store"}/>
        </Link>
      </div>
      <div className={s.cart_details_container}>
        <div className={s.cart_list_wrapper}>
          {list?.map((item) => (
            <ShoppingCartItem key={item.id} {...item} />
          ))}
          <ByCondition condition={list?.length === 0}>
            <EmptyShoppingCart />
          </ByCondition>
        </div>
        <Order />
      </div>
    </div>
  );
}
