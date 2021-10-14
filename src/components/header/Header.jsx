/** @jsxRuntime classic */
/** @jsx jsx */
// import React from "react";

import { jsx } from "@emotion/core";
import PropTypes from "prop-types";

import Button from "../button/Button";

import * as styles from "./header.styles";
// import styles from "./header.module.css";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  return (
    <section css={styles.header}>
      <Button text={showAdd ? "Finish" : "Add"} onClick={showAddToggle} />
      <h1 css={styles.headerTitle}>Todo List</h1>
      <Button text="Clear" onClick={clearTodos} color="red" align="right" />
    </section>
  );
};
Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
