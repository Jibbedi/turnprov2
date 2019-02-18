module.exports = {
  siteMetadata: {
    title: "TurnPro",
    author: "Johannes Kling",
    description:
      "Personal blog by Johannes Kling. I try turning into a JavaScript pro and share my journey while doing so",
    siteUrl: "https://turnpro.in",
    social: {
      twitter: "@jibbedi"
    }
  },
  plugins: [
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "./src/utils/typography.js"
      }
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/posts`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-57433179-2`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-"
            }
          }
        ]
      }
    }
  ]
};
