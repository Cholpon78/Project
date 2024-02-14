import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import s from "./ProductFilter.module.css";
import { useLocation } from "react-router-dom";
import InputComponent from "../../UI/InputUI/index";

export default function ProductsFilter({ priceFilter, sort, discountHandler }) {
  const location = useLocation();
  const isOnSalePage = location.pathname === "/products/sale";

  const [price, setPrice] = useState({ min: 0, max: Infinity });
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    dispatch(priceFilter(price));
    dispatch(discountHandler(checked));
  }, [price, dispatch, priceFilter, checked, discountHandler]);

  const priceHandler = {
    min: (value) => +value,
    max: (value) => (value === "" ? Infinity : +value),
  };

  const changePrice = ({ target }) => {
    const { name, value } = target;
    setPrice((state) => ({ ...state, [name]: priceHandler[name](value) }));
  };

  const changeCheckbox = ({ target }) => {
    const value = target.checked;
    setChecked(value);
  };

  const selectOptions = [
    { id: 1, title: "price: high-low", value: 1 },
    { id: 2, title: "price: low-high", value: 2 },
    { id: 3, title: "nowest", value: 3 },
  ];

  const selectHandler = (event) => {
    dispatch(sort(+event.target.value));
  };

  return (
    <div className={s.input_wrapper}>
      <div className={s.price_filter}>
        Price
        <InputComponent
          placeholder="from"
          type="number"
          name="min"
          content="price_filter"
          value={price.min === 0 ? "" : price.min}
          onChange={changePrice}
          className={s.input_item}
        />
        <InputComponent
          placeholder="to"
          type="number"
          name="max"
          content="price_filter"
          value={price.max === Infinity ? "" : price.max}
          onChange={changePrice}
        />
      </div>

      {!isOnSalePage && (
        <div className={s.discount_filter}>
          Discounted items
          <InputComponent
            type="checkbox"
            name="discounted"
            value={checked}
            content="discount_filter"
            onChange={changeCheckbox}
          />
        </div>
      )}

      <div className={s.select_filter}>
        Sorted
        <select className={s.select} onChange={selectHandler}>
          <option defaultValue="">by default</option>
          {selectOptions.map((elem) => (
            <option key={elem.id} value={elem.value}>
              {elem.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
