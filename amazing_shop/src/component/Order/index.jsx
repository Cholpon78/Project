import s from "./Order.module.css";
import { useCart } from "../../utils/useCart";
import PhoneForm from "../PhoneForm";

export default function Order() {
  const list = useCart();

  const totalSum = list?.reduce((acc, { count, price, discont_price }) => {
    const productPrice = discont_price || price;
    return acc + count * productPrice;
  }, 0);

  const roundedTotalSum = parseFloat(totalSum.toFixed(2));

  return (
    <div className={s.order_wrapper}>
      <h3 className={s.order_details_title}>Order details</h3>
      <p className={s.total_items}> {list.length} items</p>
      <div className={s.order_total_sum}>
        <p className={s.total_items}>Total</p>
        <p className={s.amount}> $ {roundedTotalSum}</p>
      </div>
      <div className={s.form}>
        <PhoneForm textButton={"Order"} nameInput={'order'} />
      </div>
    </div>
  );
}
