<script setup>
import { carrinho, removerItemCarrinho, atualizaQuantidadeItem } from '@/_data/carrinho.js'

import MButton from './MButton.vue'
import MMessage from './MMessage.vue';

function formatarPreco(preco) {
  return 'R$ ' + preco.toFixed(2).replace('.', ',')
}
</script>

<template>
  <div class="carrinho">
    <h2>Meu carrinho</h2>
    <div class="wrap-carrinho">
      <m-message v-if="carrinho.itens.length === 0" />
      <div v-else>
        <div class="item-carrinho" v-for="(item, index) in carrinho.itens" :key="index">
          <div class="info-livro">
            <div class="imagem-livro">
              <img :src="item.img" class="icon-capa-livro" />
            </div>
            <div class="detalhes-livro">
              <div>
                <p>{{ item.title }}</p>
                <p class="info-livro-preco">{{ formatarPreco(item.price) }}/un</p>
              </div>
              <div>
                <p>
                  Quantidade:
                  <input
                    type="number"
                    v-model="item.quantidade"
                    @change="atualizaQuantidadeItem(item)"
                    min="1"
                  />
                </p>
                <button @click="removerItemCarrinho(item)">&#128465;</button>
                <p>Total: {{ formatarPreco(item.total) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <m-button texto="Limpar" />
      <m-button texto="Fechar carrinho" />
      <m-button texto="Salvar" />
      <m-button texto="Continuar comprando" />
      <p class="carrinho-total">Total: {{ formatarPreco(carrinho.total) }}</p>
    </div>
  </div>
</template>

<style scoped>
.wrap-carrinho {
  display: flex;
  flex-direction: column;
}

.carrinho-total {
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
}

.item-carrinho {
  display: flex;
  margin-bottom: 10px;
}

.info-livro p {
  margin: 0;
  font-size: 16px;
}

.item-carrinho {
  align-items: center;
  margin-bottom: 20px;
}

.detalhes-livro {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.detalhes-livro p {
  margin: 0;
}

.detalhes-livro div {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.detalhes-livro input[type='number'] {
  width: 50px;
  text-align: center;
  border: none;
  border-bottom: 1px solid black;
  background-color: transparent;
  margin-left: 10px;
}

.detalhes-livro button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: black;
  padding: 0;
  margin: 0;
}

.info-livro-preco {
  font-weight: bold;
}

.icon-capa-livro {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carrinho {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.imagem-livro {
  width: 80px;
  height: 120px;
  overflow: hidden;
  margin-right: 20px;
}
</style>
