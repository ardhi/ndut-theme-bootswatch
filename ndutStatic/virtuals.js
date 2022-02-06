module.exports = async function (scope) {
  const { _, aneka } = scope.ndut.helper
  const { pathResolve } = aneka
  const root = _.dropRight(pathResolve(require.resolve('bootswatch/package.json')).split('/'), 1).join('/') + '/dist'
  return { root, prefix: 'theme' }
}
