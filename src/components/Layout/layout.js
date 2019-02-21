import React from "react";
import { StaticQuery, Link, graphql } from "gatsby";
import styles from "./layout.module.css";

const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const render = (data, children) => (
  <div>
    <div className={styles.gradient} />
    <div className={styles.layout}>
      <header className={styles.header}>
        <Link className={styles.title} to={"/"}>
          <h3>{data.site.siteMetadata.title}</h3>
        </Link>
        <span className={styles.navigation}>
          <Link to={"/about/"}>About</Link>
          <Link to={"/blog/"}>Blog</Link>
          <Link to={"/portfolio/"}>Portfolio</Link>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://resume.creddle.io/resume/xsgwo141h1"
          >
            Resume
          </a>
        </span>
      </header>
      <div className={styles.body}>{children}</div>
    </div>
  </div>
);

export default ({ children }) => (
  <StaticQuery query={query} render={data => render(data, children)} />
);
