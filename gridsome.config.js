// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const merge = require('webpack-merge');

module.exports = {
  siteName: '月饼的',
  titleTemplate: `%s - Yueb`,
  plugins: [
    {
      use: 'gridsome-plugin-typescript',
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/*.md',
        typeName: 'BlogPost',
        // route: '/:slug',
      },
    },
  ],
  templates: {
    BlogPost : '/:slug',
  },
  port: 1926,
  siteUrl : 'https://allen-bayern.github.io',
  configureWebpack(config) {
    return merge({
      module: {
        rules: [
          {
            test: /\.mjs$/,
            include: /node_modules/,
            type: "javascript/auto"
          }
        ]
      }
    }, config);
  }
};
