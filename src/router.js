import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

const routes = [
    
    {
        path: '/:pathMatch(.*)*',
        name: 'no-page-found',
        component: () => import(/* webpackChunkName: "NoPageFound" */'./modules/shared/pages/NoPageFound')
    },
    {
        path: '/',
        name: 'ecommerce',
        component: () => import(/* webpackChunkName: "HomePage" */'./modules/bookstore_ecommerce/layouts/EcommerceLayout'),
        children: [
            {
                path: '',
                name: 'home',
                component:  () => import(/* webpackChunkName: "BooksPage" */'./modules/bookstore_ecommerce/pages/HomePage')
            },
            {
                path: 'category/books/',
                name: 'books',
                component:  () => import(/* webpackChunkName: "BooksPage" */'./modules/bookstore_ecommerce/pages/BooksPage')
            },
            {
                path: 'category/magazines/',
                name: 'magazines',
                component: () => import(/* webpackChunkName: "MagazinesPage" */'./modules/bookstore_ecommerce/pages/MagazinesPage')
            },
            {
                path: 'offers/',
                name: 'offers',
                component: () => import(/* webpackChunkName: "MagazinesPage" */'./modules/bookstore_ecommerce/pages/OffersPage')
            },
            {
                path: 'product/book/:id',
                name: 'product-book',
                component: () => import(/* webpackChunkName: "MagazinesPage" */'./modules/bookstore_ecommerce/pages/ProductBookPage'),
                props: ( route ) => {
                    const id  = Number(route.params.id);
                    return isNaN( id ) ? { id: 1 } : { id }
                }
            }
            
        ]
    },
    {
        path: '/user',
        name: 'login',
        component:  () => import(/* webpackChunkName: "BooksPage" */'./modules/login/layouts/LoginLayout'),
        children: [
            {
                path: 'login',
                name: 'customer-login',
                component:  () => import(/* webpackChunkName: "BooksPage" */'./modules/login/pages/CustomerLoginPage')
            },
            {
                path: 'staff-login',
                name: 'staff-login',
                component:  () => import(/* webpackChunkName: "BooksPage" */'./modules/login/pages/StaffLoginPage')
            },
            {
                path: '',
                redirect: { name: 'customer-login' }
            }
        ]
    }
    

]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router