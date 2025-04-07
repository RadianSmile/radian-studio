import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const PrivatePage = ({ data }) => {
  const posts = data.allMdx.nodes
  
  useEffect(() => {
    // 檢查是否已登入
    const auth = localStorage.getItem("isAuthenticated")
    if (auth !== "true") {
      window.location.href = "/login"
    }
  }, [])

  return (
    <Layout>
      <h1>私人文章</h1>
      {posts.length > 0 ? (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {posts.map(post => (
            <li key={post.id} style={{ marginBottom: "1.5rem" }}>
              <article>
                <h2>
                  <Link to={`/private/${post.frontmatter.slug}`}>
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
        <p>還沒有任何私人文章</p>
      )}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
      filter: { internal: { contentFilePath: { regex: "/content/private/" } } }
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

export default PrivatePage
