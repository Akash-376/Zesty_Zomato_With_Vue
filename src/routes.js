
import { createWebHistory, createRouter } from 'vue-router'
import HomeComp from './components/HomePage.vue'
import CreateComp from './components/create.vue'
import UpdateComp from './components/update.vue'
import OrderUpdateComp from './components/AllOrders.vue'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: HomeComp
    },
    {
        name: 'create',
        path: '/create',
        component: CreateComp
    },
    {
        name: 'update',
        path: '/update/:id',
        component: UpdateComp
    },
    {
        name: 'orders',
        path: '/orders/',
        component: OrderUpdateComp
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router
