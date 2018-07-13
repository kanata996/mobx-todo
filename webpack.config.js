const HtmlWebpackPlugin=require('html-webpack-plugin')

module.exports={
  entry:[
    './src/index.js'
  ],
  resolve:{
    extensions:['.js','.jsx']
  },
  module:{
    rules:[
      {
        test:/\.(js|jsx)/,
        exclude:/node_modules/,
        use:[{
          loader:'babel-loader'
        }]
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./src/index.html',
      filename:'index.html'
    })
  ]
}