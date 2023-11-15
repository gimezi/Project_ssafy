import { createRouter, createWebHistory } from 'vue-router'
import ArticleView from '@/views/ArticleView.vue'
import DetailView from '@/views/DetailView.vue'
import CreateView from '@/views/CreateView.vue'
import MapView from '@/views/MapView.vue'
import SignUpView from '@/views/SignUpView.vue'
import LogInView from '@/views/LogInView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ArticleView',
      component: ArticleView
    },
    {
      path: '/article/:id',
      name: 'DetailView',
      component: DetailView
    },
    {
      path: '/create/',
      name: 'create',
      component: CreateView
    },
    {
      path: '/map/',
      name: 'map',
      component: MapView,
    },
    {
      path: '/signup',
      name: 'SignUpView',
      component: SignUpView
    },
    {
      path: '/login',
      name: 'LogInView',
      component: LogInView
    }
  ]
})

import { useCounterStore } from '@/stores/counter'

router.beforeEach((to, from) => {
  const store = useCounterStore()
  console.log(store.isLogin)
  if (to.name === 'ArticleView' && !store.isLogin) {
    window.alert('로그인이 필요합니다')
    return {name:'LogInView'}
  }
  if ((to.name === 'SignUpView' || to.name === 'LogInView') && store.isLogin){
    window.alert('이미 로그인 했습니다!')
    return {name: 'ArticleView'}
  }
})

export default router
