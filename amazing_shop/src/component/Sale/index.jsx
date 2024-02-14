import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./Sale.module.css";
import { fetchProducts } from "../../store/slice/productSlice";
import ProductItem from "../ProductItem";
import { useLocation, useNavigate } from "react-router-dom";
import ButtonComponent from "../../UI/ButtonUi/ButtonComponent";

export default function Sale() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const { status, list } = useSelector(({ products }) => products);
  const saleArr = list.filter((item) => item.discont_price);

  const firstFourProducts = saleArr.slice(0, 4);

  const navigate = useNavigate();
  const handleAllCategoriesClick = () => {
    navigate("/products/sale");
  };

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="container">
      <section id="sale_section">
        {isHomePage ? (
          <div className={s.title_btn}>
            <div>
              <h2>Sale</h2>
            </div>
            <div className={s.categories_line}></div>
            <div className={s.category_line_container}>
              <ButtonComponent
                text="All sale"
                onClick={handleAllCategoriesClick}
                className={s.category_btn}
              />
            </div>
          </div>
        ) : null}
        {status === "ready" ? (
          <div className={s.product_grid}>
            {firstFourProducts.map((product) => (
              <ProductItem key={product.id} {...product} />
            ))}
          </div>
        ) : status === "error" ? (
          <h2>Loading error</h2>
        ) : status === "loading" ? (
          <h2>Loading</h2>
        ) : (
          ""
        )}
      </section>
    </div>
  );
}
