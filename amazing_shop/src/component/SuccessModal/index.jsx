import React from "react";
import ReactModal from "react-modal";
import close from "../assets/close.svg";
import s from "./SuccessModal.module.css";

const modalStyles = {
  content: {
    maxWidth: '1300px',
    width: "50%",
    height: "60%",
    margin: "auto", 
    backgroundColor: "#339933", 
    borderRadius:" 10px",
   },
};


const SuccessModal = ({ isOpen, onClose, message }) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose} style={modalStyles}>
     <div className="container"> 
      <div className={s.modal_container}>
        <h5>Congratulations!</h5>
        <p className={s.modal_text}>{message}</p>
        <button onClick={onClose}>
          <img src={close} alt="Close" className={s.close_icon} />
        </button>
      </div>
     </div>
    </ReactModal>
  );
};

export default SuccessModal;
