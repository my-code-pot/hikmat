import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'





const blogTemplate = ({ data: { mdx } }) => {
  return (
    <div>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </div>
  )
}

export default blogTemplate


export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        root
      }
      body
    }
  }`