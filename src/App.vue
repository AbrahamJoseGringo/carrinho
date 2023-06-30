<script setup>
 import ListaLivro from '@/components/ListaLivro.vue'
 import MeuCarrinho from '@/components/MeuCarrinho.vue'
</script>

<template>
  <div class="container">
    <h1 class="title">Minha Livraria</h1>
    <div class="container-geral">
      <lista-livro />
      <meu-carrinho />
    </div>
  </div>
</template>
<style scoped>
.container {
 max-width: auto;
 margin: 0 auto;
 padding: 20px;
}
.title{
  font-family: "Arial", sans-serif;
  font-size: 48px;
  color: #0b84d4;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  background-image: linear-gradient(to right, #00b7ff, #00d9ff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.container-geral{
  display: flex;
  justify-content: space-between;
}

</style>


