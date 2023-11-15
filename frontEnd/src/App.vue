<template>
  <header>
    <nav>
      <RouterLink :to="{ name : 'ArticleView' }">Articles</RouterLink>
      <RouterLink :to="{ name : 'SignUpView' }">SIGN UP</RouterLink>
      <RouterLink :to="{ name : 'LogInView' }">LogIn</RouterLink>
      <button @click="logOut">LOGOUT</button>
    </nav>
  </header>
  <RouterView />
</template>

<script setup>
import { RouterView, RouterLink, useRouter } from 'vue-router'
import { useCounterStore } from '@/stores/counter'
import axios from 'axios'

const store = useCounterStore()
const router = useRouter()

const logOut = function() {
  axios({
    method: 'post',
    url: `${store.API_URL}/accounts/logout/`,
    headers: {
      Authorization: `Token ${store.token}`
    }
  }).then((res) =>{
    store.token = null
    // store.isLogin = false
    window.alert('로그아웃 완료!')
    router.push({ name: 'LogInView' })
    // console.log(res)
  }).catch((err) => {
    console.log(err)
  })
}

</script>

<style scoped>
</style>
