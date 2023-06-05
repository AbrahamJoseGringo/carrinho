<script setup>
import { livros } from '@/_data/livros.js';
import { 
  carrinho,
  removerItemCarrinho,
  atualizaQuantidadeItem
 } from '@/_data/carrinho.js';
 
 import CardLivro from '@/components/CardLivro.vue';
 import MeuCarrinho from '@/components/MeuCarrinho.vue';

function formatarPreco(preco) {
    return 'R$ ' + preco.toFixed(2).replace('.', ',')
  }
</script>

<template>
  <h1>Minha livraria</h1>
  <div class="container-geral">
    <div class="listagem-livros">
     <card-livro v-for="livro in livros" :key="livro.id" :livro="livro"/>
    </div>
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


.listagem-livros {
  display: flex;
  flex-wrap: wrap;
}

</style>
