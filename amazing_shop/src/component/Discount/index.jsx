import React from "react";
import s from "./Discount.module.css";
import discontBanner from "../assets/banner2.svg";
import PhoneForm from "../PhoneForm";

export default function Discount() {
  return (
    <div className= 'container'>
      <div className={s.discount_wrapper}>
        <h4 className={s.discount_title}>
          5% off on the first order
        </h4>
        <div className={s.phone_form}>
           <div className={s.image_wrapper}>
          <img src={discontBanner} alt="discont_banner" />
        </div>
        <div className={s.form}>
          <PhoneForm textButton={'Get a discount'} />
        </div>
        </div>
       
      </div>
    </div>
  );
}
