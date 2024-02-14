import React from "react";
import SaleList from "../../component/SaleList";
import s from "./SalePage.module.css";
import Breadcrumbs from "../../component/BreadCrumbs";

export default function Sale() {
  return (
    <div className="container">
      <Breadcrumbs/>
      <h1 className={s.title}>Products with sale</h1>
      <SaleList />
    </div>
  );
}
