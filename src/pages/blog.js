import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import PostItem from "../components/postItem/postItem";
import parse from "../parsers/markdown";

export default ({ data }) => {
  console.log(data);
  const { posts } = parse(data);
  return (
    <Layout>
      <h1>Posts</h1>
      {posts.map(post => (
        <PostItem {...post} />
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            excerpt
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
