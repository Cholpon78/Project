import React, { useState, useMemo, useEffect } from "react";
import logo from "../assets/logo.svg";
import cart from "../assets/bag.svg";
import s from "./Header.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as Close } from "../assets/close.svg";
import { ReactComponent as Menu } from "../assets/menu.svg";
import { useCart } from "../../utils/useCart";

function Header() {
  const [nav, setNav] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

  const cartItems = useCart();

  useEffect(() => {
    // Обновляем количество товаров в корзине при изменении корзины
    setCartItemCount(cartItems.length);
  }, [cartItems]);

  const closeNav = () => setNav(false);

  return (
    <header className="container">
      <div className={`${s.header_container}`}>
        <Link to="/">
          <img className={s.logo} src={logo} alt="logo" />
        </Link>
        <div className={`${s.nav_menu} ${nav && s.nav_menu_open}`}>
          <ul>
            <li>
              <Link to="/" onClick={closeNav}>
                Main Page
              </Link>
            </li>
            <li>
              <Link to="/categories" onClick={closeNav}>
                Categories
              </Link>
            </li>
            <li>
              <Link to="/products/all" onClick={closeNav}>
                All products
              </Link>
            </li>
            <li>
              <Link to="/products/sale" onClick={closeNav}>
                All sales
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/shoppingcard" className={s.cart_link}>
          <div className={s.cart_container}>
            <img className={s.img_cart} src={cart} alt="cart" />
            {cartItemCount > 0 && (
              <div className={s.cart_count}>{cartItemCount}</div>
            )}
          </div>
        </Link>
        <div onClick={() => setNav(!nav)} className={s.burger_btn}>
          {nav ? <Close size={40} /> : <Menu size={40} />}
        </div>
      </div>
    </header>
  );
}

export default Header;
