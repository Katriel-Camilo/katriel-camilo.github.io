<template>
    <div class="section-title-container">
        <h2 :style="{ color: props.textColor, '--line-color': props.dashColor }">{{ props.title }}</h2>
    </div>
</template>

<style scoped>

    .section-title-container {
        width: 100%;
    }

    h2 {
        width: 100%;
        text-align: center;
        font-size: .7rem;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .5rem;
        --line-color: #000;
    }

    h2::before,
    h2::after 
    {
        content: '';
        height: .09rem;
        background-color: var(--line-color);
        flex-grow: 1;
    }

    @media screen and (min-width: 470px) {
        h2 {
            font-size: 1rem;
            gap: 1rem;
        }

        
    }
</style>


<script setup>
    const props = defineProps({
        title: {
            type: String,
            required: true,
            default: 'Título da seção'
        },
        textColor: {
            type: String,
            default: '#000'
        },
        dashColor: {
            type: String,
            default: '#000'
        },
    })
</script>