import loadable from '@loadable/component'

export const PAGES = {
  HOME: '/',
  CONTENTS: '/contents',
}

export const routeConfigs = [
  getRouteConfig(PAGES.CONTENTS, './contents'),
  getRouteConfig(PAGES.HOME, './home'),
  getRouteConfig(PAGES.ERROR, './error'),
]

function getRouteConfig(path, componentPath) {
  return {
    path,
    component: loadable(() => import(/* webpackChunkName: "contents" */ `${componentPath}`)),
  }
}
