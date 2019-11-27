module.exports = {
  siteMetadata: {
    title: "Dennis Morello",
    name: "Dennis Morello",
    siteUrl: "https://morello.dev",
    description: "A blog about web and mobile development by Dennis Morello.",
    hero: {
      heading: "A blog about web and mobile development.",
      maxWidth: 652
    },
    social: [
      {
        name: "twitter",
        url: "https://twitter.com/dennismorello"
      },
      {
        name: "github",
        url: "https://github.com/dennismorello"
      },
      {
        name: "instagram",
        url: "https://instagram.com/dennismrl"
      },
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/dennismorello"
      }
    ]
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true
        }
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GA_TRACKID,
        // Defines where to place the tracking script - "true" in the head and "false" in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: null,
        // Enables Google Optimize Experiment ID
        experimentId: null,
        // Set Variation ID. 0 for original 1,2,3....
        variationId: null,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "morello.dev"
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Dev Blog",
        short_name: "Dev Blog",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#fff",
        display: "standalone",
        icon: "src/assets/favicon.png"
      }
    },
    "gatsby-plugin-offline"
  ]
};
