import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

const routes = [
    {
        path: '/',
        name: 'homePage',
        component: () => import(/* webpackChunkName: "HomePage" */'./bookstore_ecommerce/shared/pages/HomePage')
    },
    {
        path: '/products/books/',
        name: 'books',
        component:  () => import(/* webpackChunkName: "BooksPage" */'./bookstore_ecommerce/books/pages/BooksPage')
    },
    {
        path: '/products/magazines/',
        name: 'magazines',
        component: () => import(/* webpackChunkName: "MagazinesPage" */'./bookstore_ecommerce/magazines/pages/MagazinesPage')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'noPageFound',
        component: () => import(/* webpackChunkName: "NoPageFound" */'./bookstore_ecommerce/shared/pages/NoPageFound')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router