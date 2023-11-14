<template>
    <div>
        <h3>{{ article.id }}. {{ article.title }}</h3>
        <p>{{ article.content }}</p>
        <RouterLink :to="{ name:'DetailView', params: { id: article.id } }">자세히 </RouterLink>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
    article : Object
})
</script>

<style scoped>

</style>