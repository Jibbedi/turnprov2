const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const path = createFilePath({ node, getNode, basePath: `posts` });
    createNodeField({
      node,
      name: `path`,
      value: path
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              path
            }
            frontmatter {
              title
              category
              tags
            }
            html
          }
        }
      }
    }
  `);

  const {
    data: {
      allMarkdownRemark: { edges: articles }
    }
  } = result;

  const categories = Array.from(
    new Set(articles.map(({ node }) => node.frontmatter.category))
  );

  articles.forEach(({ node }) => {
    createPage({
      path: node.fields.path,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        category: node.frontmatter.category,
        title: node.frontmatter.title
      }
    });
  });

  categories.forEach(category => {
    createPage({
      path: category.toLowerCase(),
      component: path.resolve(`./src/templates/category.js`),
      context: {
        category
      }
    });
  });
};
