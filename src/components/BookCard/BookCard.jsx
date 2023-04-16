import React from "react";
import styles from "./BookCard.module.scss";
import Modal from "../Modal/Modal";

const BookCard = ({
  title,
  image,
  author,
  snippet,
  description,
  date,
  publisher,
  id,
}) => {
  const formattedInfo = snippet.replace(/&#39;/g, "'").replace(/&amp;/g, "&"); //probably need to add more - havent tested more searches
  return (
    <div className={styles.Card}>
      <div className={styles.Image}>
        <img src={image} alt="" />
      </div>
      <h2>{title}</h2>
      <p>{author}</p>
      {/* <p>{formattedInfo}</p> */}
      <Modal
        title={title}
        image={image}
        author={author}
        desc={description}
        date={date}
        publisher={publisher}
        id={id}
      />
    </div>
  );
};

export default BookCard;
