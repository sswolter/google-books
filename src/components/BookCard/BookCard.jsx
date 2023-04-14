import styles from "./BookCard.module.scss";

const BookCard = ({ title, image, info, description, author }) => {
  return (
    <div className={styles.Card}>
      <h6>BookCard</h6>
      <img className={styles.Image} src={image} alt="" />
      <h2>{title}</h2>
      <p>Authors: {author}</p>
    </div>
  );
};

export default BookCard;
