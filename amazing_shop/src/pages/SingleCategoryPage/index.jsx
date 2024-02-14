import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductItem from "../../component/ProductItem";
import {
  fetchCategoryById,
  priceFilter,
  sort,
  discountHandler,
} from "../../store/slice/categoriesSlice";
import ProductsFilter from "../../component/ProductsFilter";
import Container from "../../UI/Container";
import s from "./SingleCategoryPage.module.css";

export default function SingleCategoryPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { status, productsList, title } = useSelector(
    ({ categories }) => categories
  );

  useEffect(() => {
    dispatch(fetchCategoryById(id));
  }, [id, dispatch]);

  return (
    <div className="container">
      <h1 className={s.title}>{title}</h1>
      <ProductsFilter
        priceFilter={priceFilter}
        sort={sort}
        discountHandler={discountHandler}
      />

      {status === "ready" ? (
        <Container>
          {productsList
            .filter(({ show }) => Object.values(show).every((elem) => elem))
            .map((product) => (
              <ProductItem key={product.id} {...product} />
            ))}
        </Container>
      ) : status === "error" ? (
        <h2>Loading error</h2>
      ) : status === "loading" ? (
        <h2>Loading</h2>
      ) : (
        ""
      )}
    </div>
  );
}
