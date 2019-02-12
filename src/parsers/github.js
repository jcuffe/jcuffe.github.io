export default data => {
  console.log("Incoming data for parsing");
  console.log(data);
  const repositories = data.githubData.data.viewer.pinnedRepositories.edges;
  const parsed = repositories.map(repo => ({ ...repo.node }));
  console.log("parsed data");
  console.log(parsed);
  return parsed;
};
