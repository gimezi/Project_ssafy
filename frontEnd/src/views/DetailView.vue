<template>
    <div>
        <div v-if="article">
            <h1>TITLE: {{ article.title }}</h1>
            <p>작성일: {{ article.created_at }}</p>
            <p>수정일: {{ article.updated_at }}</p>
            <p>{{ article.content }}</p>
        </div>
        <div v-else><p>해당 글이 없습니다.</p></div>
    </div>
</template>

<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useCounterStore } from '@/stores/counter'
import { useRoute } from 'vue-router'

const store = useCounterStore()
const route = useRoute()
const article = ref(null)

onMounted(() => {
    axios({
        method: 'get',
        url: `${store.API_URL}api/v1/articles/${route.params.id}/`
    }) .then((response) => {
        article.value = response.data
    }) .catch((error) => {console.log(error)})
})

</script>

<style scoped>

</style>