import loadable from '@loadable/component'

export const PAGES = {
  HOME: '/',
  CONTENTS: '/contents',
}

export const configs = [
  {
    path: PAGES.CONTENTS,
    exact: false,
    component: loadable(() => import(/* webpackChunkName: "contents" */ 'pages/contents')),
  },
  {
    path: PAGES.HOME,
    exact: false,
    component: loadable(() => import(/* webpackChunkName: "home" */ 'pages/home')),
  },
  {
    path: PAGES.ERROR,
    exact: false,
    component: loadable(() => import(/* webpackChunkName: "error" */ 'pages/error')),
  },
]
