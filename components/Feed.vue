<template>
    <div>
        <div class="feed-container">
            <FeedItem
                v-for="(item, index) in feedItems"
                :key="index"
                :title="item.title"
                :address="item.address"
                :date="item.date"
                :imageSrc="item.imageSrc"
                :alt="item.alt"
                :href="item.href"
            />
        </div>
    </div>
</template>

<style scoped>
    .feed-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 1rem 0;
    }

    @media screen and (min-width: 470px) {
        .feed-container {
            flex-direction: column;
        }
    }

</style>

<script setup>
    const props = defineProps({
        feedItems: {
            type: Array,
            required: true,
        },
    });
</script>