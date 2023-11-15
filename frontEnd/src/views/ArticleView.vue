<template>
    <div>
        <p>게시판</p>
        <nav>
            <li><RouterLink :to="{ name:'create' }">NEW</RouterLink></li>
            <li><RouterLink :to="{ name:'map'}">지도 보기</RouterLink></li>
        </nav>
        
        <ArticleList/>
    </div>
</template>

<script setup>
import ArticleList from '@/components/ArticleList.vue'
import { useCounterStore } from '@/stores/counter'
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const store = useCounterStore()

onMounted(() => {
    store.getArticles()
})


</script>

<style scoped>

</style>