module.exports = {
  siteMetadata: {
    title: 'See The Color',
    image: 'src/pages/img/stc.png',
    url: 'https://Seethecolor.com',
    description: 'See the color is an orginization focused on incresing diversity in childcare facilities.',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-42854706-1',
      },
    },
  ],
};
