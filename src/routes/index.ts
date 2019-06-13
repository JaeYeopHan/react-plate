import loadable from '@loadable/component'

export enum PAGES {
  HOME = '/',
  CONTENTS = '/contents',
  COUNTER = '/counter',
  TODO = '/todo',
  MY_GITHUB = '/my-github',
  ERROR = '',
}

export const routeConfigs = [
  getRouteConfig(PAGES.MY_GITHUB, './my-github'),
  getRouteConfig(PAGES.TODO, './todo'),
  getRouteConfig(PAGES.COUNTER, './counter'),
  getRouteConfig(PAGES.CONTENTS, './contents'),
  getRouteConfig(PAGES.HOME, './home'),
  getRouteConfig(PAGES.ERROR, './error'),
]

function getRouteConfig(path: PAGES, componentPath: string) {
  return {
    path,
    component: loadable(() => import(/* webpackChunkName: "contents" */ `${componentPath}`)),
  }
}
