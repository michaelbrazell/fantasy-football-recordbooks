var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    'script!foundation-sites/dist/js/plugins/foundation.tooltip.min.js',
    'script!tablesorter/dist/js/jquery.tablesorter.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: `jQuery`
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      TeamStats: 'app/components/TeamStats.jsx',
      TeamRow: 'app/components/TeamRow.jsx',
      SeasonStats: 'app/components/SeasonStats.jsx',
      WhatsNew: 'app/components/WhatsNew.jsx',
      // FilterStatus: 'app/components/FilterStatus.jsx',
      // GetUpdates: 'app/api/GetUpdates.jsx',
      data: 'public/data/ff-records.json',
      applicationStyles: 'app/styles/app.scss'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'inline-source-map'
};
