const path = require('path')
const resolve = arg => path.resolve(__dirname, arg)
// const pathResolve = require('path').resolve

module.exports = function({ env }) {
  return {
    webpack: {
      alias: {
        '@': resolve('src'),
        '@api': resolve('src/api'),
        '@components': resolve('src/components'),
        '@containers': resolve('src/containers'),
        '@modules': resolve('src/modules'),
        '@routes': resolve('src/routes'),
        '@utils': resolve('src/utils'),
      },
    },
  }
}
