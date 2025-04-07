import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  return (
    <div style={{ margin: "0 auto", maxWidth: 960, padding: "0 1.0875rem 1.45rem" }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>我的 Gatsby 部落格</title>
      </Helmet>
      <header style={{ marginBottom: "1.5rem", padding: "1rem 0", borderBottom: "1px solid #eee" }}>
        <nav style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to="/" style={{ textDecoration: "none", color: "#333", fontWeight: "bold" }}>首頁</Link>
          <div>
            <Link to="/blog" style={{ textDecoration: "none", color: "#333", marginRight: "1rem" }}>部落格</Link>
            <Link to="/private" style={{ textDecoration: "none", color: "#333" }}>私人區域</Link>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer style={{ marginTop: "2rem", padding: "1rem 0", borderTop: "1px solid #eee", fontSize: "0.8rem" }}>
        © {new Date().getFullYear()}, 使用 Gatsby 建立
      </footer>
    </div>
  )
}

export default Layout
