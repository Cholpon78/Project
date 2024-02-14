import React, { forwardRef } from "react";
import s from "./InputComponent.module.css";

const InputComponent = forwardRef(
  (
    {
      placeholder,
      type,
      name,
      validation,
      value,
      onChange,
      autoComplete,
      className,
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        className={`${s.ui_input} ${className}`}
        placeholder={placeholder}
        type={type}
        name={name}
        {...validation}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
      />
    );
  }
);

export default InputComponent;
