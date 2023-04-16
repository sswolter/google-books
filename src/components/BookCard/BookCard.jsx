import React from "react";
import styles from "./BookCard.module.scss";
import Modal from "../Modal/Modal";

const BookCard = ({ title, image, author }) => {
  return (
    <div className={styles.Card}>
      <div className={styles.Image}>
        <img src={image} alt="" />
      </div>
      <h2>{title}</h2>
      <p>{author}</p>
      <Modal title={title} image={image} author={author} />
    </div>
  );
};

export default BookCard;
