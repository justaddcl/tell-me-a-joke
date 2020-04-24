module.exports = {
  siteMetadata: {
    title: 'Tell Me a Joke',
    author: 'Yuji Nelson',
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout`),
      },
    },
  ],
};
