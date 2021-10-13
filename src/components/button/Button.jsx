import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import styles from "./button.module.css";

const Button = ({ text, onClick, color, align }) => {
  // const classNames = [
  //   "header-btn",
  //   color === "black" && "main-black-color",
  //   color === "red" && "main-red-color",
  //   align === "left" && "align-left",
  //   align === "right" && "align-right"
  // ].join(" ");

  const classNames = cx(styles.headerBtn, {
    [styles.mainBlackcolor]: color === "black",
    [styles.mainRedcolor]: color === "red",
    [styles.alignLeft]: align === "left",
    [styles.alignright]: align === "right"
  });

  return (
    <button className={classNames} onClick={onClick}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Button",
  color: "black",
  align: "left"
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(["black", "red"]),
  align: PropTypes.oneOf(["left", "right"])
};

export default Button;
