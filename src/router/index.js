import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MeuCarrinho from '../views/MeuCarrinho.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    router: [
        {
            path: '/',
            nome: 'home',
            component: HomeView
        },
        {
            path: '/carrinho',
            nome: 'carrinho',
            component: MeuCarrinho
        }
    ]
})

export default router