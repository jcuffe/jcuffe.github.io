import React from "react";
import styles from "./repository.module.css";

export default ({ name, url, description }) => (
  <div className={styles.repository}>
    <h3>{name}</h3>
    <p>{description}</p>
    <a href={url}>View source</a>
  </div>
);
