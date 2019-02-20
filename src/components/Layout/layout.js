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
        <Link to={"/"}>
          <h3>{data.site.siteMetadata.title}</h3>
        </Link>
        <span className={styles.navigation}>
          <Link to={"/"}>About</Link>
          <Link to={"/blog/"}>Blog</Link>
          <Link to={"/portfolio/"}>Portfolio</Link>
          <a href="https://resume.creddle.io/resume/xsgwo141h1">Resume</a>
        </span>
      </header>
      {children}
    </div>
  </div>
);

export default ({ children }) => (
  <StaticQuery query={query} render={data => render(data, children)} />
);
