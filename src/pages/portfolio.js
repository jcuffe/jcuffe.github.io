import React from "react";
import Layout from "../components/Layout/layout";
import Repository from "../components/Repository/repository";
import parse from "../parsers/github";

export default ({ data }) => {
  const repositories = parse(data);
  return (
    <Layout>
      <h1>Portfolio pieces</h1>
      <div>
        {repositories.map((repository, key) => (
          <Repository key={key} {...repository} />
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query onGithub {
    githubData {
      data {
        viewer {
          pinnedRepositories {
            edges {
              node {
                name
                url
                description
              }
            }
          }
        }
      }
    }
  }
`;
