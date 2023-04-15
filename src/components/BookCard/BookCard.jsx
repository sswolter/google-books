import React from "react";
import styles from "./BookCard.module.scss";
import { NavLink } from "react-router-dom";

const BookCard = ({ title, image, author, id, books }) => {
  return (
    <NavLink to={`/books/${id}`}>
      <div className={styles.Card}>
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p>{author}</p>
      </div>
    </NavLink>
  );
};

export default BookCard;
