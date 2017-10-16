module.exports = {
    siteMetadata: {
        title: `title`
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/content/`
            }
        },
        `gatsby-transformer-remark`,
        `gatsby-transformer-yaml`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`
    ]
};
