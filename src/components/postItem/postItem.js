import React from "react";
import { Link } from "gatsby";
import styles from "./postItem.module.css";

export default ({ id, frontmatter, excerpt, fields }) => (
  <div className={styles.postItem} key={id}>
    <h3>
      <Link to={`posts/${fields.slug}`}>{frontmatter.title}</Link>
      <span> - {frontmatter.date}</span>
    </h3>
    <p>{frontmatter.excerpt}</p>
  </div>
);
