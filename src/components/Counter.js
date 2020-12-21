import React, { Component } from "react";
import styles from "./Counter.module.css";

class Counter extends Component {
  state = {
    count: this.props.count,
    step: this.props.step,
    min: this.props.min,
    max: this.props.max,
  };

  handleDecrement = () => {
    const { count, step, min } = this.state;
    if (count > min) {
      this.setState(() => {
        return {
          count: count - step,
        };
      });
    }
  };

  handleIncrement = () => {
    const { count, step, max } = this.state;
    if (count < max) {
      this.setState(() => {
        return {
          count: count + step,
        };
      });
    }
  };

  render() {
    return (
      <>
        <h2 className={styles.title}>Counter</h2>
        <div className={styles.counterWrapper}>
          <button className={styles.decrementBtn} onClick={this.handleDecrement}>
            -
          </button>
          <p className={styles.counter}>{this.state.count}</p>
          <button className={styles.incrementBtn} onClick={this.handleIncrement}>
            +
          </button>
        </div>
      </>
    );
  }
}

export default Counter;
