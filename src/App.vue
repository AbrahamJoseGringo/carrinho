<script setup>
 
</script>

<template>
  <aside>
    <nav class="barra-navegacao">
      <h1>Minha Livraria</h1>
      <router-link to="/">Home</router-link>
      <router-link to="/meucarrinho">Carrinho</router-link>
      <div class="carrinho-compras">
        <span class="carrinho-icone">
          <i class="fas fa-shopping-cart"></i>
        </span>
        <span class="carrinho-quantidade">0</span>
      </div>
    </nav>
  </aside>
  <main>
    <router-view />
  </main>
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


