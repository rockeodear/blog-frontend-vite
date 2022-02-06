const basic = [
  {
    path: '/',
    name: 'basic-container',
    component: () => import('components/basic-container/index.vue'),
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'home',
        component: () => import('views/index/index.vue'),
        meta: {
          title: '首页',
          keepAlive: false,
        },
      },
      {
        path: '/archive',
        name: 'archive',
        component: () => import('views/archive/index.vue'),
        meta: {
          title: '归档',
          keepAlive: false,
        },
      },
      {
        path: '/archive/:articleId',
        name: 'article-viewer',
        component: () => import('views/article/view/index.vue'),
        meta: {
          title: '文章阅读',
          keepAlive: false,
        },
      },
      {
        path: '/categories',
        name: 'categories',
        component: () => import('views/categories/index.vue'),
        meta: {
          title: '文章分类',
          keepAlive: false,
        },
      },
      {
        path: '/journals',
        name: 'journals',
        component: () => import('views/journals/index.vue'),
        meta: {
          title: '荒唐走板',
          keepAlive: false,
        },
      },
    ],
  },
  {
    path: '/article-editor',
    name: 'article-editor',
    component: () => import('views/article/edit/index.vue'),
    meta: {
      title: '文章编辑',
      keepAlive: false,
    },
  },
]

export default basic
