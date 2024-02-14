import React from "react";
import { Link, useLocation } from "react-router-dom";
import s from "./BreadCrumbs.module.css";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className={`container ${s.activ_btn}`}>
      <Link to="/">
        <button>Main</button>
      </Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        const displayName = capitalizeFirstLetter(name); // Преобразуем первую букву в верхний регистр

        return isLast ? (
          <button key={name}>{displayName}</button>
        ) : (
          <Link key={name} to={routeTo}>
            <button>{displayName}</button>
          </Link>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
  