import React from "react";
import styles from "./postItem.module.css";

export default ({ id, frontmatter, excerpt }) => (
  <div className={styles.postItem} key={id}>
    <h3>
      {frontmatter.title} <span>- {frontmatter.date}</span>
    </h3>
    <p>{excerpt}</p>
  </div>
);
