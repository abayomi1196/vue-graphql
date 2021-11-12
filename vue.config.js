// config webpack to load and use graphql-tag in all .graphql or .gql files
module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("graphql")
      .test(/\.(graphql|gql)$/)
      .use("graphql-tag/loader")
      .loader("graphql-tag/loader")
      .end();
  },
};
