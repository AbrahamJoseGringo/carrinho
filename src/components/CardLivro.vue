<script setup></script>

<template>  
 <div class="card-livro" v-for="livro in livros" :key="livro.id">
        <div class="card-info-livro">
          <div class="wrap-livro">
            <img :src="livro.img" alt="Capa do livro" class="capa-livro" />
          </div>
          <p class="titulo-livro">{{ livro.title }}</p>
          <p class="autor-livro">{{ livro.author }}</p>
          <p class="preco-livro">{{ formatarPreco(livro.price) }}</p>
        </div>
        <div class="card-buttons-livros">
          <button @click="adicionarAoCarrinho(livro)">Adicionar ao carrinho</button>
        </div>
      </div>
</template>

<style scoped></style>