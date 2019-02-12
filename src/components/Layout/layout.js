import React from "react";
import { Link } from "gatsby";
import styles from "./layout.module.css";

export default ({ children }) => (
  <div className={styles.layout}>
    <header className={styles.header}>
      <Link to={"/"}>
        <h3>Jared Cuffe</h3>
      </Link>
      <span className={styles.navigation}>
        <Link to={"/about/"}>About</Link>
        <Link to={"/portfolio/"}>Portfolio</Link>
      </span>
    </header>
    {children}
  </div>
);
