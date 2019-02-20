module.exports = {
  siteMetadata: {
    title: "Jared Cuffe"
  },
  plugins: [
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
        token: "3d25feacf4b62c0ad8358875cc6206796eba18fe", // Heavily restricted for convenience
        graphQLQuery: `
          query { 
            viewer{
              pinnedRepositories(first:5) {
                edges {
                  node{ 
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
