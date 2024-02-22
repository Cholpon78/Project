import React from "react";
import s from "./Banner.module.css";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../UI/ButtonUi/ButtonComponent";

export default function Banner() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div >
      <div className={s.banner}>
        <h1 className={s.title}>
          Amazing Discounts
          <span>on Garten Products!</span>
        </h1>
        <a href="#sale_section">
          <ButtonComponent
            text="Check out"
            content="sale_btn"
            onClick={handleClick}
            className={s.banner_btn}
          />
        </a>
      </div>
    </div>
  );
}
