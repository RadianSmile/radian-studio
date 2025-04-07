import React, { useState } from "react"
import { navigate } from "gatsby"
import Layout from "../components/layout"

const Login = ({ location }) => {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    // 這裡使用一個簡單的密碼檢查 (實際應用應該使用更安全的方式)
    if (password === "your-secret-password") {
      localStorage.setItem("isAuthenticated", "true")
      const fromPage = location.state?.from?.pathname || "/private"
      navigate(fromPage)
    } else {
      setError("密碼不正確")
    }
  }

  return (
    <Layout>
      <h1>登入私人區域</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="password" style={{ display: "block", marginBottom: "0.5rem" }}>密碼:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" style={{ padding: "0.5rem 1rem", background: "#333", color: "white", border: "none" }}>登入</button>
      </form>
      <p style={{ marginTop: "1rem", fontSize: "0.8rem" }}>
        預設密碼: your-secret-password (記得在生產環境中更改此密碼)
      </p>
    </Layout>
  )
}

export default Login
