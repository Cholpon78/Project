import s from "./ButtonComponent.module.css";

export default function ButtonComponent({ text, type, onClick, className }) {
  return (
    <button
      className={`${s.ui_button} ${className}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
