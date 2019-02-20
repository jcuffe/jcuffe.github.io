import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import Repository from "../components/repository/repository";
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
