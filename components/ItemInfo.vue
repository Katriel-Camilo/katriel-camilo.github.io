<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/autoplay'
import SwiperCore from 'swiper'

const slides = ['/media/images/clove.png', '/media/images/cristo.jpg', '/media/images/matriz.jpg', '/media/images/mawile.png']
</script>

<template>
  <Swiper :autoplay="{ delay: 1000 }" loop class="slide-container">
    <SwiperSlide v-for="(img, i) in slides" :key="i">
        <div class="slide-image" :style="{backgroundImage: `url(${img})`}">
            <div class="slide-text">
                <h1 class="slide-title">Igreja Matriz</h1>
                <p class="slide-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit esse est impedit atque placeat omnis recusandae odio ipsum fuga libero provident ipsam nemo enim, quos cupiditate perferendis hic iusto similique.</p>
            </div>    
        </div>
    </SwiperSlide>
    <SwiperScrollbar />
  </Swiper>
</template>

<style scoped> 
    .slide-container {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    
    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .slide-image {
        width: 100vw;
        height: 100vh;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
    }

    .slide-text
    {
        color: white;
        position: absolute;
        bottom: 0;
        background-color: black;
        padding: 2rem 1rem;
    }
    
    .swiper-scrollbar {
        background-color: #2a9d8f;
    }
</style>