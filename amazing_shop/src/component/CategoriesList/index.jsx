import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import CategoryItem from "../CategoryItem";
import { fetchCategories } from "../../store/slice/categoriesSlice";
import s from "./CategoriesList.module.css";
import ButtonComponent from "../../UI/ButtonUi/ButtonComponent";
import { useLocation, useNavigate } from "react-router-dom";

export default function CategoriesList({ visibleCount }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const { status, list } = useSelector(({ categories }) => categories);

  const visibleCategories = list.slice(0, visibleCount);
  const navigate = useNavigate();
  const handleAllCategoriesClick = () => {
    navigate("/categories");
  };

const location = useLocation();
const isHomePage = location.pathname === "/";

  return (
    <div className="container">
      {isHomePage ? (
        <div className={s.title_btn}>
          <div>
            <h2>Categories</h2>
          </div>
          <div className={s.categories_line}></div>
          <div className={s.category_line_container}>
            <ButtonComponent
              text="All categories"
              onClick={handleAllCategoriesClick}
              className={s.category_btn}
            />
          </div>
        </div>
      ) : null}

      {status === "ready" ? (
        <div className={s.categories_list_container}>
          {visibleCategories.map((category) => (
            <CategoryItem key={category.id} {...category} />
          ))}
        </div>
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
