module.exports = {
  siteMetadata: {
    title: `Dennis Morello`,
    name: `Dennis Morello`,
    siteUrl: `https://morello.dev`,
    description: `A blog about web and mobile development by Dennis Morello.`,
    hero: {
      heading: `A blog about web and mobile development.`,
      maxWidth: 652
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/dennismorello`
      },
      {
        name: `github`,
        url: `https://github.com/dennismorello`
      },
      {
        name: `instagram`,
        url: `https://instagram.com/dennismrl`
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/dennismorello`
      }
    ]
  },
  plugins: [
    {
      resolve: `@narative/gatsby-theme-novela`,
      options: {
        contentPosts: `content/posts`,
        contentAuthors: `content/authors`,
        basePath: `/`,
        authorsPage: true,
        sources: {
          local: true
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: process.env.GTM_ID
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dev Blog`,
        short_name: `Dev Blog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    },
    `gatsby-plugin-offline`
  ]
};
