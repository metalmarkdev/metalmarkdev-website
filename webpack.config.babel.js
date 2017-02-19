import webpack from 'webpack';

export default {
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/build`,
    publicPath: '/build/',
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      { test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader' },
      // { test: /\.scss$/, loader: 'style!css!sass?sourceMap' }
      // { test: /\.scss$/, loader: 'sass-loader' }
      // {
      //   test: /\.jsx?$/,
      //   exclude: /(node_modules|bower_components)/,
      //   loader: 'babel-loader',
      //   query: {
      //     presets: ['es2015', 'react', 'stage-1']
      //   }
      // }
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader?sourceMap'
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
    ],
    // rules: [{
    //         test: /\.scss$/,
    //         use: [{
    //             loader: "style-loader" // creates style nodes from JS strings
    //         }, {
    //             loader: "css-loader" // translates CSS into CommonJS
    //         }, {
    //             loader: "sass-loader" // compiles Sass to CSS
    //         }]
    //     }]
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: process.argv.indexOf('-p') === -1 ? null : [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
    }),
  ],
};
