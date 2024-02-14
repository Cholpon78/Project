import React from 'react'
import s from "./EmptyShoppingCart.module.css"
import { Link } from 'react-router-dom';
import ButtonComponent from '../../UI/ButtonUi/ButtonComponent';

export default function EmptyShoppingCart() {
  return (
    <div className={s.empty_cart_wrapper}>
      <p className={s.empty_cart_message}>
        Looks like you have no items in your basket currently
      </p>

      <Link to="/categories">
        <ButtonComponent className={s.back_btn} text={"Back to the store"} />
      </Link>
    </div>
  );
}
