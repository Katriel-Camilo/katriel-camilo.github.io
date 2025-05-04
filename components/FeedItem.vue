<template>
    <div class="feed-item-container">
        <a
            :href="props.href">
            <div class="feed-item-image-wrapper" :style="{ backgroundImage: `url(${props.imageSrc})` }"></div>
       </a>
        <div class="feed-item-description">
            <div class="feed-item-title">{{ props.title }}</div>
            <div class="feed-item-address">{{ props.address }}</div>
        </div>
    </div>
</template>

<style scoped>


    .feed-item-container {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin: 1rem auto;
        padding: 1rem;
        border-radius: 1rem;
        max-width: 500px;
        width: 100%;
    }

    .feed-item-image-wrapper {
        width: 100%;
        aspect-ratio: 1/1;
        border-radius: .5rem;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    .feed-item-title {
        font-size: 1.1rem;
        font-weight: bold;
        margin-bottom: .6rem;
    }

    .feed-item-address {
        font-size: .8rem;
        color: #888888;
        overflow: auto;
        max-height: 3rem;
    }

    @media screen and (min-width: 470px) {
        
        .feed-item-container { 
            max-width: 400px;
        }
       
        .feed-item-description {
            padding-top: 1rem;
        }

        .feed-item-title {
            font-size: 1.2rem;
        }
        .feed-item-address {
            font-size: 1rem;
        }
    }

</style>

<script setup>
    const props = defineProps({
        title: {
            type: String,
            required: true
        },
        address: {
            type: String,
            default: ''
        },
        date: {
            type: String,
            default: ''
        },
        imageSrc: {
            type: String,
            default: ''
        },
        alt: {
            type: String,
            default: 'Imagem do item'
        },
        href: {
            type: String,
            default: ''
        },
    });

</script>