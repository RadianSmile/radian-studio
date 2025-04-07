import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // 檢查 localStorage 中是否有登入狀態
    // 在實際應用中，這裡應該使用更安全的認證方式
    const auth = localStorage.getItem("isAuthenticated")
    setIsAuthenticated(auth === "true")
    setIsLoading(false)
    
    if (!auth && location.pathname.includes("/private")) {
      // 重定向到登入頁面
      navigate("/login", { state: { from: location } })
    }
  }, [location])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return isAuthenticated ? <Component {...rest} /> : null
}

export default PrivateRoute
