import React from "react";
import ProductList from "../../component/ProductList";
import s from "./ProductListPage.module.css";
import Breadcrumbs from "../../component/BreadCrumbs";

export default function ProductListPage() {
  return (
    <div className="container">
      <Breadcrumbs/>
      <h1 className={s.title}>All Products</h1>
      <ProductList />
    </div>
  );
}
