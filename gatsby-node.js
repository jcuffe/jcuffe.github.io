const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: "pages" });
    createNodeField({
      node,
      name: "slug",
      value: slug
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(
    `
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  ).then(({ data }) => {
    data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `posts${node.fields.slug}`, // sandbox posts to avoid url collisions
        component: require.resolve("./src/templates/post/post.js"),
        context: {
          slug: node.fields.slug
        }
      });
    });
  });
};
