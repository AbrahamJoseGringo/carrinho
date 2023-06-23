<script setup>
 import ListaLivro from '@/components/ListaLivro.vue'
 import MeuCarrinho from '@/components/MeuCarrinho.vue'
</script>

<template>
  <div>
    <nav class="barra-navegacao">
      <h1>Minha Livraria</h1>
      <ul class="menu-navegacao">
        <li><a href="#">Início</a></li>
        <li><a href="#">Livros</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
      <div class="carrinho-compras">
        <span class="carrinho-icone">
          <i class="fas fa-shopping-cart"></i>
        </span>
        <span class="carrinho-quantidade">0</span>
      </div>
    </nav>
    <div class="container-geral">
      <lista-livro />
      <meu-carrinho />
    </div>
  </div>
</template>

<style scoped>
/* Estilos da barra de navegação */
.barra-navegacao {
  background-color: #333;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.barra-navegacao h1 {
  font-size: 2rem;
}

.menu-navegacao {
  list-style-type: none;
  display: flex;
  gap: 20px;
}

.menu-navegacao li {
  font-size: 1.2rem;
}

.menu-navegacao a {
  color: #fff;
  text-decoration: none;
}

.menu-navegacao a:hover {
  text-decoration: underline;
}

.carrinho-compras {
  display: flex;
  align-items: center;
}

.carrinho-icone {
  font-size: 1.5rem;
  margin-right: 5px;
}

.carrinho-quantidade {
  background-color: #f44336;
  color: #fff;
  font-size: 0.9rem;
  padding: 5px;
  border-radius: 50%;
}
</style>


