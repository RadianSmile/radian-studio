module.exports = {
  pathPrefix: `/radian-studio`,
  siteMetadata: {
    title: `我的 Gatsby 部落格`,
    description: `使用 Gatsby 與 Markdown 建立的個人部落格`,
    author: `@你的名字`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `public-posts`,
        path: `${__dirname}/content/public`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `private-posts`,
        path: `${__dirname}/content/private`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [],
        },
      },
    },
  ],
}
