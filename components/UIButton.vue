<template> 
    <div class="btn-container">
        <button :name :class="['btn-wrapper', btnClass]" :style="{ backgroundImage: `url(${src})`}" >
            <FontAwesomeIcon class="btn-icon" v-if="props.icon" :icon :style="{ '--color': color }"/>
        </button>
        <label>{{ props.label }}</label>
    </div>
</template>
  
<script setup>

    const props = defineProps({
        src: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            default: 'Botão de ícone'
        },
        label : {
            type: String,
            default: ''
        },
        btnClass: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: 'botão'
        },
        icon: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: '#2A9D8F'
        },
    })

</script>


  <style scoped>
  
    .btn-container {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .btn-container button {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        cursor: pointer;
    }

    .btn-container label {
        display: block;
        text-align: center;
    }

    .btn-icon {
        color: var(--color, #2A9D8F);
        height: 50%;
        
    }

  .btn-wrapper {
      border-radius: 50%;
      aspect-ratio: 1/1;
      display: flex;
      justify-content: center;
      vertical-align: middle;
      align-items: center;
      background-color: #ffffff;
  }

  .action {
    background-color: #267603;
    box-shadow: 0px 0px 6px -1px #000000;
  }

  @media screen and (min-width: 470px) {
    
  }

  </style>