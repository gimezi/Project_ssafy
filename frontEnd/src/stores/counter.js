import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useRouter } from 'vue-router'

export const useCounterStore = defineStore('counter', () => {
  const router = useRouter()
  const articles = ref([])
  const API_URL = 'http://127.0.0.1:8000'
  const token = ref(null)
  const isLogin = computed(() => {
    if (token.value === null) {
      return false
    } else {
      return true
    }
  })


  // 게시글 가져오기
  const getArticles = function() {
    axios({
      method:'get',
      url: `${API_URL}/api/v1/articles/`,
      headers: {
        Authorization: `Token ${token.value}`
      }
    }) .then((respones) => {
      articles.value = respones.data
    }).catch((error) => {
      console.log(error)
    })
  }

  // 회원가입
  const signUp = function(payload) {
    const {username, password1, password2, nickname} = payload
    axios({
      method: 'post',
      url: `${API_URL}/accounts/signup/`,
      data: {
        username, password1, password2, nickname
      }
    }) .then((res) => {
      const password = password1
      logIn({username, password}) // 얘한테도 push가 있으니까 안써도 댐
      window.alert('회원가입 완료!')
    })
    .catch((err) => {console.log(err)})
  }

  
  // 로그인
  const logIn = function(payload) {
    const {username, password} = payload
    axios({
      method: 'post',
      url: `${API_URL}/accounts/login/`,
      data: {
        username, password
      }
    }) .then((res) => {
      token.value = res.data.key
      // console.log(token)
      // isLogin.value = true
      router.push({name: 'ArticleView'})
    })
    .catch((err) => {console.log(err)})
  }

  return { articles, API_URL, getArticles, signUp, logIn, token, isLogin }
}, { persist: true })
