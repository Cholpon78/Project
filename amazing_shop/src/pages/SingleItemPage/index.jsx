import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/slice/cartSlice";
import s from "./SingleItemPage.module.css";
import { useCalculateDiscount } from "../../utils/useCalculateDiscount";
import { fetchSingleProduct } from "../../store/slice/productSlice";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ButtonComponent from "../../UI/ButtonUi/ButtonComponent";
import Breadcrumbs from "../../component/BreadCrumbs";


export default function SingleItemPage({count}) {
  const { singleProduct, productId, status } = useSelector(
    (state) => state.products
  );

  const id = productId ? productId : localStorage.getItem("ProductId");

  const discount = useCalculateDiscount;
  const dispatch = useDispatch();

  const addProduct = () => {
    dispatch(addToCart(+id));
    toast(`Added to shopping cart!`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      style: {
        background: "green",
        color: "white",
      },
    });
  };

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, []);

  if (singleProduct.length === 0) {
    return "";
  }

  return (
    <div className="container">
      <Breadcrumbs />

      {status === "ready" && (
        <div className={s.product_info}>
          <div className={s.product_wrapper}>
            <div className={s.image_wrapper}>
              {singleProduct.id ? (
                <img src={"http://localhost:3333/" + singleProduct.image} />
              ) : (
                <h3>Loading...</h3>
              )}
            </div>
          </div>
          <div className={s.detail_info}>
            <h4 className={s.product_title}>{singleProduct.title}</h4>
            <div className={s.price}>
              {singleProduct.discont_price && (
                <p className={s.actual_price}>
                  $ {singleProduct.discont_price}
                </p>
              )}

              {singleProduct.discont_price ? (
                <p className={s.old_price}>$ {singleProduct.price}</p>
              ) : (
                <p className={s.actual_price}>$ {singleProduct.price}</p>
              )}

              {singleProduct.discont_price && singleProduct.price && (
                <p className={s.discount}>
                  -{discount(singleProduct.price, singleProduct.discont_price)}{" "}
                  %
                </p>
              )}
            </div>
            <div>
              <ButtonComponent
                className={s.button}
                text="Add to cart"
                content="to_cart_btn"
                onClick={addProduct}
              />
            </div>

            <div className={s.description}>
              <p className={s.description_title}>Description </p>
              <p className={s.text}>{singleProduct.description}</p>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}
