module.exports = {
  siteMetadata: {
    title: 'Mohammed Modi | Personal Webpage',
    author: 'Mohammed Modi',
    description: 'I am frontend engineer and worked on most of the JavaScript framework including ReactJS, NodeJs, Angular 2+ etc.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
