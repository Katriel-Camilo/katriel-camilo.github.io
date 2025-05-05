<template>
    <header>
      <div class="container header-container">
        <FontAwesomeIcon icon="coffee" />
        <div class="account-container">
          <UIButton src="/media/images/usuario.jpg" class="account-button" />
          <UIButton class="account-button" icon="bell" />
        </div>
        <SearchBar placeholder="Procure seu próximo destino..." />
      </div>

      <div class="category-container container">
        <div class="category-item">
          <UIButton icon="monument" class="category-button" label="Bustos"/>
        </div>
        <div class="category-item">
          <UIButton icon="wine-bottle" class="category-button" label="Vinícolas"/>
        </div>
        <div class="category-item">
          <UIButton icon="landmark" class="category-button" label="Prédios"/>
        </div>

      </div>

      </header>

      <main>

        <div class="container">

          <section-title title="Conheça nossos locais"
              textColor="#666"
              dashColor="#E9C46A"
            style="max-width: 80%; margin: auto; margin-top: 50px;" />
        
            <Feed :feedItems />

        </div>

        
        <div class="btn-qr-code-container">
          <NuxtLink to="/Leitor">  
            <UIButton
            icon="qrcode"
            btnClass="action"
            color="#ffffff"
            class="btn-qr-code"
          />
        </NuxtLink>
        </div>
    </main>
</template>

<style scoped>

  header {
    background-color: #E9C46A;
    padding: 50px 0 50px 0;
    border-radius: 0 0 50px 50px;
  }

  .container {
    width: 90%;
    max-width: 750px;
    margin: auto;
  }

  .header-container {
    display: flex;
    flex-direction: column;
  }

  .account-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-button {
    width: 20%;
    max-width: 100px;
  }

  .category-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 30px;
  }

  .category-button {
    width: 45px;
    font-size: 0.7rem;  
  }

  .btn-qr-code-container {
    position: fixed;
    display: flex;
    justify-content: center;
    width: 100%;
    bottom: 0;
    z-index: 1000;
    background-color: white;
  }

  .btn-qr-code {
    width: 72px;
    position: relative;
    top: -30px;
    border: 5px solid #ffffff;
    border-radius: 50%;
    ;
  }

  @media screen and (min-width: 470px) {
    .category-button {
      width: 55px;
    }

    .container {
      width: 80%;
    }

  @media screen and (min-width: 500px) {
  .category-button {
    width: 70px;
    font-size: 1rem;
  }

  header {
    border-radius: 0 0 80px 80px; 
  }
}
    
  }

</style>

<script setup>  
  const props = defineProps({
    feedItems: {
      type: Array,
      required: true,
      default: () => [
        {
          title: 'Igreja Matriz',
          address: 'Pr. da Independência - Centro',
          imageSrc: '/media/images/matriz.jpg',
          alt: 'Imagem da Igreja Matriz',
          href: 'https://yrizer.github.io/Pinhal-Tour/Locais/matriz.html',
        },
        {
          title: 'O Cristo Redentor',
          address: 'Jd. Monte Alegre',
          imageSrc: '/media/images/cristo.jpg',
          alt: 'Imagem do item 2',
        },
      ],
    },
  })

</script>