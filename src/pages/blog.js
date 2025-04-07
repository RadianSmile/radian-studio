import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const BlogPage = ({ data }) => {
  const posts = data.allMdx.nodes

  return (
    <Layout>
      <h1>所有文章</h1>
      {posts.length > 0 ? (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {posts.map(post => (
            <li key={post.id} style={{ marginBottom: "1.5rem" }}>
              <article>
                <h2>
                  <Link to={`/blog/${post.frontmatter.slug}`}>
                    {post.frontmatter.title}
                  </Link>
                </h2>
                <p>{post.frontmatter.date}</p>
                <p>{post.excerpt}</p>
              </article>
            </li>
          ))}
        </ul>
      ) : (
        <p>還沒有任何文章</p>
      )}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
      filter: { internal: { contentFilePath: { regex: "/content/public/" } } }
      sort: [{ frontmatter: { date: DESC } }]
    ) {
      nodes {
        id
        excerpt(pruneLength: 120)
        frontmatter {
          title
          date(formatString: "YYYY年MM月DD日")
          slug
        }
      }
    }
  }
`

export default BlogPage
