// eslint-disable-next-line @typescript-eslint/no-var-requires
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
      '@': `${__dirname}/src`,
      '@application': `${__dirname}/src/application`,
      '@common': `${__dirname}/src/common`,
      '@domain': `${__dirname}/src/domain`,
      '@infrastructure': `${__dirname}/src/infrastructure`,
      '@presenter': `${__dirname}/src/presenter`,
      '@tests': `${__dirname}/tests`
    }
  },
  output: {
    libraryTarget: 'commonjs',
    filename: '[name].js',
    path: `${__dirname}/.webpack`
  }
}
