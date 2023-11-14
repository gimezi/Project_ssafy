import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', () => {
  const articles = ref([])
  const API_URL = 'http://127.0.0.1:8000/'
  const getArticles = function() {
    axios({
      method:'get',
      url: `${API_URL}api/v1/articles/`
    }) .then((respones) => {
      articles.value = respones.data
    }).catch((error) => {
      console.log(error)
    })
  }

  return { articles, getArticles, API_URL }
})
