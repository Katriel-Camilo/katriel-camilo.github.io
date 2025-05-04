<template>
    <div class="search-bar-container">
        <input type="text" class="search-bar" :placeholder />
        <FontAwesomeIcon class="search-icon" icon="magnifying-glass" />
    </div>
</template>

<style scoped>
    .search-bar-container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 1rem 0;
        position: relative;
    }

    .search-bar {
        width: 100%;
        padding: .8rem;
        border-radius: 1rem;
        background-color: white;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }

    .search-icon {
        position: absolute;
        right: 2rem;
        color: #666666;
        cursor: pointer;
    }

    @media screen and (min-width: 470px) {

        .search-bar {
            padding: 1rem;
        }
        
    }

</style>

<script setup>
    const props = defineProps({
        placeholder: {
            type: String,
            default: 'Pesquisar...'
        }
    });
</script>