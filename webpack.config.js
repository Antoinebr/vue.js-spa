var path = require('path')
var PrerenderSpaPlugin = require('prerender-spa-plugin')
var webpack = require('webpack') 


/**
 *  Define the API URL based on the environement
 *  
 */
var API_URL = {  
  production: JSON.stringify('https://spa.antoinebrossault.com'), 
  development: JSON.stringify('http://localhost:1988') 
}



module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  plugins: [
    //Define the API URL based on the environement [development]
    new webpack.DefinePlugin({ 'API_URL': API_URL[process.env.NODE_ENV] }),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
   
       //Define the API URL based on the environement [production]
    new webpack.DefinePlugin({ 'API_URL': API_URL[process.env.NODE_ENV] }),

    new PrerenderSpaPlugin(
      // Absolute path to compiled SPA
      path.join(__dirname),
      // List of routes to prerender
      [ '/','/products', '/about-us','/search','/products/530','/products/524' ],
      {
         captureAfterTime: 25000,
      }
    ),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),

 

    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}

