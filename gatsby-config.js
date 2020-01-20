module.exports = {
  siteMetadata: {
    title: 'See The Color',
    image: 'src/pages/img/stc.png',
    url: 'https://seethecolor.com',
    description: 'See the color is an orginization focused on incresing diversity and inclusion at camps.',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: { 
        trackingId: 'UA-42854706-1',
      },
    },
    'gatsby-plugin-react-helmet',
  ],
};
