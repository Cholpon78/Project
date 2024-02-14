import React from "react";
import s from "./CategoryItem.module.css";
import { Link } from "react-router-dom";

export default function CategoryItem({ id, image, title }) {
  return (
    <Link to={`/categories/${id}`}>
      <div className={s.category_item_wrapper}>
        <div className={s.image_wrapper}>
          <img src={"http://localhost:3333" + image} alt={title} />
        </div>
        <h3>{title}</h3>
      </div>
    </Link>
  );
}
