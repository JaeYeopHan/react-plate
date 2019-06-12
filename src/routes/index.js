import loadable from '@loadable/component'

export const PAGES = {
  HOME: '/',
  CONTENTS: '/contents',
  COUNTER: '/counter',
  TODO: '/todo',
}

export const routeConfigs = [
  getRouteConfig(PAGES.TODO, './todo'),
  getRouteConfig(PAGES.COUNTER, './counter'),
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
