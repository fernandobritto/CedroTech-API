const slsw = require('serverless-webpack')

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'esbuild-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@': `${__dirname}/app`,
      '@database': `${__dirname}/app/database`,
      '@functions': `${__dirname}/app/functions`,
      '@middlewares': `${__dirname}/app/middlewares`,
      '@tests': `${__dirname}/tests`
    }
  },
  output: {
    libraryTarget: 'commonjs',
    filename: '[name].js',
    path: `${__dirname}/.webpack`
  }
}
