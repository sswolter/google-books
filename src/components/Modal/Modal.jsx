import React, { useEffect, useState } from "react";
import styles from "./Modal.module.scss";

const Modal = ({ title, author, image }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = ({}) => {
    setModal(!modal);
    const body = document.querySelector("body");
    modal ? body.classList.remove("overflow") : body.classList.add("overflow");
  };

  return (
    <>
      <button className={styles.Open} onClick={toggleModal}>
        Book Details
      </button>

      {modal && (
        <div className={styles.Modal}>
          <div className={styles.Modal_Overlay}>
            <div className={styles.Modal_Content}>
              <button className={styles.closeModal} onClick={toggleModal}>
                close
              </button>
              <div className={styles.Container}>
                <div className={styles.Img}>
                  <img src={image} alt="" />
                </div>
                <article className={styles.Info}>
                  <div className={styles.Title}>
                    <img
                      src="../src/assets/chevron-right-svgrepo-com.svg"
                      alt=""
                    />
                    <h2>{title}</h2>
                  </div>
                  <ul>
                    <li>
                      <p>{author}</p>
                    </li>
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
