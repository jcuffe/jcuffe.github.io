export default data => {
  const { edges, totalCount } = data.allMarkdownRemark;
  const posts = edges.map(post => ({ ...post.node }));
  return { posts, totalCount };
};
