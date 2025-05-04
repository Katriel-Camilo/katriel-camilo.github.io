<template>
  <div>
    <div id="reader" style="width: 100vw;"></div>
  </div>
</template>
  
  <script setup>
  import { onMounted, ref } from 'vue'
  import { Html5Qrcode } from 'html5-qrcode'
  
  const qr = ref('')
  
  onMounted(() => {
    const scanner = new Html5Qrcode('reader');

    scanner.start(
        { facingMode: 'environment' }, // câmera traseira
        {
          fps: 10,
          qrbox: { width: 200, height: 200 }, // tamanho da área de leitura
        },
        async decodedText => { //Revisar
          qr.value = decodedText
          await navigateTo(decodedText, {
            external: true, // abrir em nova aba
          })
          scanner.stop()
        },
        error => {
          console.log(error);
        }
      );
    
  })
  </script>