import React from "react";
import styles from "./BookCard.module.scss";
import { NavLink } from "react-router-dom";
import Modal from "../Modal/Modal";

const BookCard = ({ title, image, author, id, books }) => {
  return (
    <>
      <div className={styles.Card}>
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p>{author}</p>
      </div>
      <Modal title={title} />
    </>
  );
};

export default BookCard;
