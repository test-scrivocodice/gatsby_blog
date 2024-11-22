module.exports = {
  // Customize your site metadata:
  siteMetadata: {
    title: `Titolo del blog`,
    author: `Autore del blog`,
    description: `My site description...`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/gatsbyjs`,
      },
      {
        name: `github`,
        url: `https://github.com/gatsbyjs`,
      },
    ],
    siteUrl: 'https://scrivocodice.it',
    avatar: '/images/logo.webp',
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
}
