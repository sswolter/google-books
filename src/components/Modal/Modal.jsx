import React, { useEffect, useState } from "react";
import styles from "./Modal.module.scss";

const Modal = ({ title, author, image, desc, date, publisher }) => {
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
              <button className={styles.Close} onClick={toggleModal}>
                CLOSE
              </button>
              <div className={styles.Container}>
                <div className={styles.Img}>
                  <img src={image} alt="" />
                </div>
                <article className={styles.Info}>
                  <h2 className={styles.Title}>{title}</h2>

                  <ul>
                    <li>
                      <p>
                        <span className={styles.Tag}>Author: </span>
                        {author}
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className={styles.Tag}>Published: </span>
                        {date}
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className={styles.Tag}>Publisher: </span>
                        {publisher}
                      </p>
                    </li>
                    <li className={styles.Desc}>
                      <p>{desc}</p>
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
