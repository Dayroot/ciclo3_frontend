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
                component:  () => import(/* webpackChunkName: "Homepage" */'./modules/bookstore_ecommerce/pages/HomePage')
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
                component: () => import(/* webpackChunkName: "OffersPage" */'./modules/bookstore_ecommerce/pages/OffersPage')
            },
            {
                path: 'product/book/',
                name: 'product-book',
                component: () => import(/* webpackChunkName: "ProductBookPage" */'./modules/bookstore_ecommerce/pages/DetailProductPage')
                // props: ( route ) => {
                //     const id  = Number(route.params.id);
                //     return isNaN( id ) ? { id: 1 } : { id }
                // }
            }
            
        ]
    },
    {
        path: '/user',
        name: 'user',
        component:  () => import(/* webpackChunkName: "userPage" */'./modules/login/layouts/LoginLayout'),
        children: [
            {
                path: 'login',
                name: 'customer-login',
                component:  () => import(/* webpackChunkName: "loginPage" */'./modules/login/pages/CustomerLoginPage')
            },
            {
                path: 'staff-login',
                name: 'staff-login',
                component:  () => import(/* webpackChunkName: "StaffLoginPage" */'./modules/login/pages/StaffLoginPage')
            },
            {
                path: 'signup',
                name: 'customer-signup',
                component:  () => import(/* webpackChunkName: "CustomerSignUpPage" */'./modules/login/pages/CustomerSignUpPage')
            },
            {
                path: '',
                redirect: { name: 'customer-login' }
            }
        ]
    },
    {
        path: '/staff',
        name: 'staff',
        component:  () => import(/* webpackChunkName: "StaffPage" */'./modules/bookstore_staff/layouts/StaffLayout'),
        children: [
            {
                path: 'inventory',
                name: 'inventory',
                component:  () => import(/* webpackChunkName: "InventoryPage" */'./modules/bookstore_staff/pages/InventoryPage')
            },
            {
                path: 'sales',
                name: 'sales',
                component:  () => import(/* webpackChunkName: "SalesPage" */'./modules/bookstore_staff/pages/SalesPage')
            },
            {
                path: 'analysis',
                name: 'analysis',
                component:  () => import(/* webpackChunkName: "AnalysisPage" */'./modules/bookstore_staff/pages/AnalysisPage')
            },
            {
                path: '',
                redirect: { name: 'inventory' }
            },
            {
                path: 'account',
                name: 'staffAccount',
                component:  () => import(/* webpackChunkName: "staffAccount" */'./modules/bookstore_staff/pages/AccountStaff')
            },

        ]
    }
    

]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router