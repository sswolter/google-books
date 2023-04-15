import React, { useEffect, useState } from "react";
import styles from "./Modal.module.scss";

const Modal = ({ title }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = ({}) => {
    setModal(!modal);
  };

  const body = document.querySelector("body");
  if (modal) {
    body.classList.add("overflow");
  } else {
    body.classList.remove("overflow");
  } // toggles class but scroll can still be seen

  return (
    <>
      <button onClick={toggleModal}>open</button>

      {modal && (
        <div className={styles.modal}>
          <div className={styles.overlay}>
            <div className={styles.modalcontent}>
              <h2>{title}</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos dolore, nesciunt eligendi, voluptate nam, nihil quis
                cum ad eveniet deleniti hic velit placeat vero a unde ut
                adipisci labore saepe quas inventore debitis temporibus
                necessitatibus numquam! Rem sed quia distinctio necessitatibus
                dolorem ea illum, earum rerum! Odio repellendus doloremque
                inventore.
              </p>
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
