const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // 查詢所有 Markdown 文章
  const result = await graphql(`
    query {
      publicPosts: allMdx(
        filter: { internal: { contentFilePath: { regex: "/content/public/" } } }
        sort: [{ frontmatter: { date: DESC } }]
      ) {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
      privatePosts: allMdx(
        filter: { internal: { contentFilePath: { regex: "/content/private/" } } }
        sort: [{ frontmatter: { date: DESC } }]
      ) {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`建立頁面時出錯`, result.errors)
    return
  }

  // 建立公開文章頁面
  const publicPosts = result.data.publicPosts.nodes
  publicPosts.forEach(post => {
    createPage({
      path: `/blog/${post.frontmatter.slug}`,
      component: path.resolve(`./src/templates/post-template.js`),
      context: {
        id: post.id,
        isPrivate: false,
      },
    })
  })

  // 建立私人文章頁面 (需要身分驗證後才能訪問)
  const privatePosts = result.data.privatePosts.nodes
  privatePosts.forEach(post => {
    createPage({
      path: `/private/${post.frontmatter.slug}`,
      component: path.resolve(`./src/templates/post-template.js`),
      context: {
        id: post.id,
        isPrivate: true,
      },
    })
  })
}

// 增加一個權限檢查函數
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // 檢查頁面路徑是否為私人頁面
  if (page.path.match(/^\/private/)) {
    page.context.isPrivate = true
    createPage(page)
  }
}
