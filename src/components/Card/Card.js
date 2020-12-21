import React, { Component } from "react";
import styles from "./Card.module.css";
import Counter from "../Counter";
import products from "../../db/products.json";

class Card extends Component {
  render() {
    return (
      <>
        {products.map((elem) => {
          return (
            <li key={elem.id}>
              <div className={styles.cardWrapper}>
                <img
                  className={styles.cardImage}
                  src={elem.img}
                  alt={elem.title}
                />
                <h3 className={styles.cardTitle}>{elem.title}</h3>
                <p className={styles.cardDesk}>{elem.desk}</p>
                <p>
                  Price:
                  <span>{elem.price}</span>
                </p>
                <Counter count={elem.count} step={elem.step} min={elem.min} max={elem.max} />
              </div>
            </li>
          );
        })}
      </>
    );
  }
}

export default Card;
