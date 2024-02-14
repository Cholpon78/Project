import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  fetchDiscount,
  fetchOrder,
} from "../../store/slice/orderDiscountSlice";
import s from "./PhoneForm.module.css";
import { cleanCart } from "../../store/slice/cartSlice";
import InputComponent from "../../UI/InputUI";
import ButtonComponent from "../../UI/ButtonUi/ButtonComponent";
import SuccessModal from "../SuccessModal";

export default function PhoneForm({
  textButton,
  contentButton,
  nameInput,
  className,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" });

  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit = (data) => {
    if (nameInput === "order") {
      dispatch(fetchOrder(data.phone, data.email));
      dispatch(cleanCart());
    } else {
      dispatch(fetchDiscount(data.phone, data.email));
    }
    reset();
    setIsModalOpen(true);
  };

  const phoneInputRef = register("phone", {
    required: "Phone number required",
    pattern: {
      value: /^\+?\d{5,13}$/,
      message: "Your phone number should contain 5 to 13 characters",
    },
  });

  const emailInputRef = register("email", {
    required: "Email required",
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: "Invalid email address",
    },
  });

  const nameInputRef = register("name", {
    required: "Name required",
    maxLength: {
      value: 50,
      message: "Name cannot exceed 50 characters",
    },
  });

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <form className={s.phone_form} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.input_wrapper}>
          <InputComponent
            placeholder="Name"
            type="text"
            name="name"
            content="Name"
            validation={nameInputRef}
          />
          <p className={`${s.error} ${s[errors.name ? "active" : ""]}`}>
            {errors?.name?.message}
          </p>
        </div>
        <div className={s.input_wrapper}>
          <InputComponent
            placeholder={"Phone number"}
            type="tel"
            name="tel number"
            content="Tel_number"
            validation={phoneInputRef}
          />
          <p
            className={`${s.error} ${s[errors.phone ? "active" : ""]}`}
          >
            {errors?.phone?.message}
          </p>
        </div>
        <div className={s.input_wrapper}>
          <InputComponent
            placeholder="Email"
            type="email"
            name="email"
            content="Email"
            validation={emailInputRef}
          />
          <p
            className={`${s.error} ${s[errors.email ? "active" : ""]}`}
          >
            {errors?.email?.message}
          </p>
        </div>
        <ButtonComponent
          text={textButton}
          content={contentButton}
          type="submit"
          className={className}
        />
      </form>
      <SuccessModal
        isOpen={isModalOpen}
        onClose={closeModal}
        message={
          nameInput === "order"
            ? `Your order has been successfully placed on the website. A manager will contact you shortly to confirm your order.`
            : `5% discount code has been sent to the entered phone number `
        }
      />
    </>
  );
}
