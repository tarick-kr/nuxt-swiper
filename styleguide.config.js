const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  title: "Style Guide",
  components: "components/[A-Z]*.vue",
  usageMode: "expand",
  exampleMode: "expand",
  template: {
    head: {
      links: [
        {
          href:
            "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons",
          rel: "stylesheet"
        }
      ]
    }
  },
  require: [path.join(__dirname, "configs/vuetify.js")],
  webpackConfig: {
    devServer: {
      hot: false,
      inline: true,
      disableHostCheck: true
    },
    resolve: {
      extensions: [".js", ".json", ".vue"],
      alias: {
        "~": path.resolve(__dirname),
        assets: path.resolve(__dirname, "assets")
      }
    },
    module: {
      rules: [
        // Vue loader
        {
          test: /\.vue$/,
          exclude: /node_modules/,
          loader: "vue-loader"
        },
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        // Other loaders that are needed for your components
        {
          test: /\.(png|jpe?g|gif|svg)$/,
          loader: "url-loader",
          query: {
            limit: 1000, // 1KB
            name: "[name].[hash:7].[ext]"
          }
        },
        {
          test: /\.css$/,
          use: ["vue-style-loader", "css-loader", "sass-loader"]
        },
        {
          test: /\.scss$/,
          loaders: [
            "vue-style-loader",
            {
              loader: "css-loader",
              options: {
                modules: true
              }
            },
            "sass-loader"
          ]
        }
      ]
    },
    plugins: [
      // add vue-loader plugin
      new VueLoaderPlugin()
    ]
  }
};
