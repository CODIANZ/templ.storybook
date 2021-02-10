module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    {
      name: "@storybook/addon-essentials",
      options: {
        controls: false
      }
    },
    "@storybook/addon-knobs"
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.s[ac]ss$/i,
      use: ["style-loader", "css-loader", "sass-loader"]
    });
    /* もしかすると pug 使うかもなので、取り敢えず定義だけしとく */
    /* pug 使うなら pug-plain-loader をインストール */
    config.module.rules.push({
      test: /\.pug$/,
      use: [{ loader: "pug-plain-loader" }]
    });
    return config;
  }
};
