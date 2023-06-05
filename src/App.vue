<script setup>
 import ListaLivro from '@/components/ListaLivro.vue'
 import MeuCarrinho from '@/components/MeuCarrinho.vue'
</script>

<template>
  <h1>Minha livraria</h1>
  <div class="container-geral">
    <lista-livro />
    <meu-carrinho />
  </div>
</template>

<style scoped>

.container-geral {
  /* display: flex;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: 3fr 1fr;
}
</style>
