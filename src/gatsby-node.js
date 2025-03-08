exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  // Remove the trailing slash from the page path
  const originalPath = page.path;

  // Create a new page with the same path but without the trailing slash
  createPage({
    ...page,
    path: originalPath.replace(/\/$/, ''),
  });
};
