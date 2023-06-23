<script setup>
import MButton from './MButton.vue'
import { adicionarAoCarrinho } from '@/_data/carrinho.js'
const props = defineProps({
    livro: Object
})
function formatarPreco(preco) {
    return 'R$ ' + preco.toFixed(2).replace('.', ',')
  }
</script>

<template>  
 <div class="card-livro">
        <div class="card-info-livro">
          <div class="wrap-livro">
            <img :src="props.livro.img" alt="Capa do livro" class="capa-livro" />
          </div>
          <p class="titulo-livro">{{ props.livro.title }}</p>
          <p class="autor-livro">{{ props.livro.author }}</p>
          <p class="preco-livro">{{ formatarPreco(props.livro.price) }}</p>
        </div>
        <div class="card-buttons-livros">
          <m-button @click="adicionarAoCarrinho(props.livro)" texto="Adicionar ao carrinho"/>
          <m-button texto="Favoritar"/>
        </div>
      </div>
</template>

<style scoped>
.card-livro {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.card-info-livro {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.capa-livro {
  width: 150px;
  height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
}

.titulo-livro {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 5px;
}

.autor-livro {
  font-size: 1rem;
  color: #666;
  margin-bottom: 5px;
}

.preco-livro {
  font-size: 1.2rem;
  font-weight: bold;
  color: #f44336;
  margin-bottom: 10px;
}

.card-buttons-livros {
  display: flex;
  justify-content: space-between;
}
.card-buttons-livros {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.card-buttons-livros m-button {
  background-color: #f44336;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
}

.card-buttons-livros m-button:hover {
  background-color: #c62828;
}


</style>



