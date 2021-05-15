const onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  console.info(createNodeField, node);
} 

module.exports.onCreateNode = onCreateNode;