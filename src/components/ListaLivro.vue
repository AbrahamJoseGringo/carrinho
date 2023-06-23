<script setup>
import { livros } from '@/_data/livros.js';
import CardLivro from '@/components/CardLivro.vue'
</script>

<template>
    <div class="listagem-livros">
     <card-livro v-for="livro in livros" :key="livro.id" :livro="livro"/>
    </div>
</template>

<style scoped>

.listagem-livros {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

</style>

