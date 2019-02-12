export default data => {
  const repositories = data.githubData.data.viewer.pinnedRepositories.edges;
  const parsed = repositories.map(repo => ({ ...repo.node }));
  return parsed;
};
