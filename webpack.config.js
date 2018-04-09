var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./src/startup.ts",
  output: {
    path: __dirname + "/dist",
    filename: "main.min.js"
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'raw-loader'
          },
          // {
          //   loader: 'html-minify-loader',
          //   options: {
          //     empty: true,        // KEEP empty attributes
          //     cdata: true,        // KEEP CDATA from scripts
          //     comments: true,     // KEEP comments
          //     dom: {                            // options of !(htmlparser2)[https://github.com/fb55/htmlparser2]
          //       lowerCaseAttributeNames: false,      // do not call .toLowerCase for each attribute name (Angular2 use camelCase attributes)
          //     }
          //   }
          // }
        ]
      }
    ]
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: true, sourcemap: true }),
  ],
  devtool: 'hidden-source-map'
};