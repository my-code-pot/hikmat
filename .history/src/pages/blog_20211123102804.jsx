import * as React from 'react'
import { graphql } from 'gatsby'
import { RootLayout as Layout } from '../Layout'
import { PostCard } from '../PostCard.jsx'

const BlogPage = ({
  data: {
    allMdx: { edges },
  },
}) => {
  const posts = edges
    .filter((edge) => !!edge.node.frontmatter.date)
    .map((edge) => <PostCard key={edge.node.id} post={edge.node} />)
  return (
    <Layout>
      <div>{posts}</div>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query ($path: String!) {
    allMdx(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { root: { eq: $path } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
