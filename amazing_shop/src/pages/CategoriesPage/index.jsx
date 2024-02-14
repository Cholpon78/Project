import React from "react";
import s from "./CategoriesPage.module.css";
import CategoriesList from "../../component/CategoriesList";
import Breadcrumbs from "../../component/BreadCrumbs";

export default function CategoriesPage() {
  return (
    
    <div className="container">
      <Breadcrumbs/>
      <h1 className={s.categories_title}>Categories</h1>
      <CategoriesList />
    </div>
  );
}
