import loadable, { LoadableComponent } from '@loadable/component'

export interface IRouterConfig {
  path: string
  component: LoadableComponent<React.ComponentType>
}

export enum PAGES {
  HOME = '/',
  CONTENTS = '/contents',
  COUNTER = '/counter',
  TODO = '/todo',
  MY_GITHUB = '/my-github',
}

export const routeConfigs: IRouterConfig[] = [
  getRouteConfig(PAGES.MY_GITHUB, './my-github'),
  getRouteConfig(PAGES.TODO, './todo'),
  getRouteConfig(PAGES.COUNTER, './counter'),
  getRouteConfig(PAGES.CONTENTS, './contents'),
  getRouteConfig(PAGES.HOME, './home'),
  // getRouteConfig('*', './error'),
]

function getRouteConfig(path: PAGES, componentPath: string): IRouterConfig {
  return {
    path,
    component: loadable(() => import(/* webpackChunkName: "contents" */ `${componentPath}`)),
  }
}
