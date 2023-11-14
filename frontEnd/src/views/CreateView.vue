<template>
    <div>
        <h2>NEW</h2>
        <form @submit.prevent="createArticle">
            <input type="text" v-model="title">
            <textarea v-model="content"></textarea>
            <input type="submit">
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()
const store = useCounterStore()
const title = ref(null)
const content = ref(null)

const createArticle = function() {
    axios({
        method: 'post',
        url: `${store.API_URL}api/v1/articles/`,
        data: {
            title: title.value,
            content: content.value
        }
    }) .then((response) => {
        router.push({ name: 'ArticleView' })
    }) .catch((error) => {
        console.log(error)
    })
}
</script>

<style scoped>

</style>