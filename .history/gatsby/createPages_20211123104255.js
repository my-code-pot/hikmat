const replacePath = require('./utils')
const path = require('path')

module.exports = exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve(`src/components/templates/blogTemplate.jsx`)

  // sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000
  return graphql(`
    {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    result.data.allMdx.edges.forEach(({ node }) => {
      createPage({
        path: replacePath(node.fields.slug),
        component: blogTemplate,
        context: { id: node.id }, // additional data can be passed via context
      })
    })
  })
}
