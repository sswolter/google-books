import React, { useEffect, useState } from "react";
import styles from "./Modal.module.scss";

const Modal = ({ title, author }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = ({}) => {
    setModal(!modal);
    const body = document.querySelector("body");
    modal ? body.classList.remove("overflow") : body.classList.add("overflow");
  }; //************** */

  return (
    <>
      <button className={styles.Open} onClick={toggleModal}>
        Book Details
      </button>

      {modal && (
        <div className={styles.modal}>
          <div className={styles.overlay}>
            <div className={styles.modalcontent}>
              <h2>{title}</h2>
              <p>{author}</p>
              <button className={styles.closeModal} onClick={toggleModal}>
                close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
