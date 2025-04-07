import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import Layout from "../components/layout"

const PostTemplate = ({ data }) => {
  const { mdx } = data
  const { frontmatter, body } = mdx
  
  return (
    <Layout>
      <div>
        <h1>{frontmatter.title}</h1>
        <p>發布於: {frontmatter.date}</p>
        <MDXProvider>
          <div dangerouslySetInnerHTML={{ __html: body }} />
        </MDXProvider>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "YYYY年MM月DD日")
      }
      body
    }
  }
`

export default PostTemplate
