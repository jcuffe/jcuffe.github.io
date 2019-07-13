module.exports = {
  siteMetadata: {
    title: "Jared Cuffe"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: "src/content"
      }
    },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/util/typography"
      }
    },
    {
      resolve: "gatsby-source-github-api",
      options: {
        token: "f7290cf380a1e045abad22314bb20ee411f19868", // Heavily restricted for convenience
        graphQLQuery: `
          query { 
            viewer {
              pinnedItems(first:5) {
                nodes {
                  ... on Repository {
                    name
                    url
                    description
                  }
                }
              }
            }
          } 
        `
      }
    }
  ]
};
