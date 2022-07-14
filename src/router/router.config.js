export const routes = [
  {
    path: '/home', // 固定区域
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home.vue')
  },
  {
    path: '/fixedArea', // 固定区域
    name: 'fixedArea',
    component: () => import(/* webpackChunkName: "fixedArea" */ '../views/fixedArea.vue')
  },
  {
    path: '/message', // 消息通知
    name: 'message',
    component: () => import(/* webpackChunkName: "message" */ '../views/message.vue')
  },
  {
    path: '/detail', // 详情
    name: 'detail',
    component: () => import(/* webpackChunkName: "detail" */ '../views/detail.vue')
  }
]