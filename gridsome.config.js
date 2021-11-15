// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: '月饼的技术博客',
  plugins: [
    {
      use: 'gridsome-plugin-typescript',
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './posts/**/*.md',
        typeName: 'BlogPost',
        remark: {},
      }
    },
  ],
  transformers: {
    remark: {

    },
  },
  siteUrl : 'https://allen-bayern.github.io',
};
