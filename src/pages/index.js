import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>歡迎來到我的部落格</h1>
      <p>這是一個使用 Gatsby 與 Markdown 建立的靜態部落格網站。</p>
      <div>
        <Link to="/blog">查看所有文章</Link>
      </div>
    </Layout>
  )
}

export default IndexPage
