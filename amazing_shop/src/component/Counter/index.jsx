// Counter.jsx
import React from "react";
import s from "./Counter.module.css";
import { useDispatch } from "react-redux";
import { decrAmount, incrAmount } from "../../store/slice/cartSlice";
import minus from "../assets/minus.svg"; 
import plus from "../assets/plus.svg";

export default function Counter({ id, count }) {
  const dispatch = useDispatch();

  return (
    <div className={s.counter}>
      <img
        src={minus}
        alt="minus"
        className={s.decr_btn}
        onClick={() => dispatch(decrAmount(id))}
      />
      <p>{count}</p>
      <img
        src={plus}
        alt="plus"
        className={s.incr_btn}
        onClick={() => dispatch(incrAmount(id))}
      />
    </div>
  );
}
