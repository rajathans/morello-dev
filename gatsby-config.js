module.exports = {
  siteMetadata: {
    title: `JavaScript Notes by Dennis Morello`,
    name: `Dennis Morello`,
    siteUrl: `https://morello.dev`,
    description: `Notes about JavaScript, ReactJS and more about front-end development by Dennis Morello.`,
    hero: {
      heading: `Notes about <a href="https://developer.mozilla.org/docs/Web/JavaScript" target="_blank" rel="noreferrer" style="background-color:#edd53f;color:#252724">JavaScript</a>, <a href="https://reactjs.org" target="_blank" rel="noreferrer" style="background-color:#282c34;color:#61dafb">ReactJS</a> and more by Dennis Morello.`,
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
        authorsPath: `/about`,
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
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JavaScript Notes by Dennis Morello`,
        short_name: `JS Notes`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    }
    //`gatsby-plugin-offline`
  ]
};
