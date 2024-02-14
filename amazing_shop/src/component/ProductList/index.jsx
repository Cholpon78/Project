import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../ProductItem";
import { fetchProducts } from "../../store/slice/productSlice";
import ProductsFilter from "../ProductsFilter";
import Container from "../../UI/Container";
import {
  priceFilter,
  sort,
  discountHandler,
} from "../../store/slice/productSlice";

export default function ProductList({ id }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(id));
  }, [id, dispatch]);

  const { status, list } = useSelector(({ products }) => products);

  return (
    <div>
      <ProductsFilter
        priceFilter={priceFilter}
        sort={sort}
        discountHandler={discountHandler}
      />
      <div>
        {status === "ready" ? (
          <Container>
            {list
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
    </div>
  );
}
