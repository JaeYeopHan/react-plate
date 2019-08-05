const path = require('path')
const resolve = (...args) => path.resolve(__dirname, ...args)

module.exports = function({ env }) {
  return {
    webpack: {
      alias: {
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
