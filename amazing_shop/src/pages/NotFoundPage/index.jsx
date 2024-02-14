import s from "./NotFoundPage.module.css";
import NotFound from "../../component/assets/notFound.svg";
import NotFoundTxT from "../../component/assets/notFoundTxt.svg";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../UI/ButtonUi/ButtonComponent";


export default function NotFoundPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="container">
      <section className={s.notfound}>
        <img src={NotFound} alt="Not found img " />
        <img src={NotFoundTxT} alt="Not found text " />

        <ButtonComponent onClick={handleClick}/>
      </section>
    </div>
  );
}
