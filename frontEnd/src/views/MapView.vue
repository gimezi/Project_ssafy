<template>
    <div>
        <div id="map" style="width:500px;height:400px;"></div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import router from '../router';


onMounted(() => {
    if (window.kakao) {
        const container = document.getElementById('map')
        const options = {
            center : new kakao.maps.LatLng(33.45, 126.57),
            level: 3
        }
        const map = new kakao.maps.Map(container, options)
    }
})


</script>

<style scoped>

</style>