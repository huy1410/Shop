import React from "react";
import styles from "./SingleItem.module.css";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";

const SingleItem = ({ current, addToCart }) => {
  return (
    <div className={styles.singleItem}>
      <img
        className={styles.singleItem__image}
        src={current?.image}
        alt={current?.title}
      />
      <div className={styles.singleItem__details}>
        <p className={styles.details__title}>{current.title}</p>
        <p className={styles.details__description}>{current.description}</p>
        <p className={styles.details__price}>$ {current.price}</p>

        <Button
          variant="contained"
          color="secondary"
          onClick={() => addToCart(current.id)}
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
