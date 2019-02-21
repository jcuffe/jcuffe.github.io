import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout/layout";
import styles from "./post.module.css";

export default ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  return (
    <Layout>
      <div className={styles.post}>
        <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
