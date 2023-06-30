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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 10px;
  width: 180px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.card-info-livro {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.wrap-livro {
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.capa-livro {
  width: 90%;
  max-height: 100%;
}
.card-livro p{
  margin: 0;
}
.titulo-livro {
  font-size: 18px;
  margin-bottom: 5px;
}

.autor-livro {
  font-size: 14px;
  color: #888;
  margin-bottom: 5px;
}

.preco-livro {
  font-size: 16px;
  font-weight: bold;
}

.card-buttons-livros {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

</style>



