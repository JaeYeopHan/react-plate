const path = require('path')
const resolve = arg => path.resolve(__dirname, arg)
// const pathResolve = require('path').resolve

module.exports = function({ env }) {
  return {
    webpack: {
      alias: {
        '@': resolve('src'),
      },
    },
  }
}
