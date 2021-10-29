import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import isAuthenticatedStaff from './guards/staffAccess';

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
                path: 'about-us/',
                name: 'about-us',
                component: () => import(/* webpackChunkName: "AboutUsPage" */'./modules/bookstore_ecommerce/pages/AboutUsPage')
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
        beforeEnter: [ isAuthenticatedStaff ],
        component:  () => import(/* webpackChunkName: "StaffPage" */'./modules/bookstore_staff/layouts/StaffLayout'),
        children: [
            {
                path: 'inventory',
                name: 'inventory',
                beforeEnter: [ isAuthenticatedStaff ],
                component:  () => import(/* webpackChunkName: "InventoryPage" */'./modules/bookstore_staff/pages/InventoryPage')
            },
            {
                path: 'employees',
                name: 'employees',
                beforeEnter: [ isAuthenticatedStaff ],
                component:  () => import(/* webpackChunkName: "EmployeesPage" */'./modules/bookstore_staff/pages/EmployeesPage')
            },
            {
                path: 'customers',
                name: 'customers',
                beforeEnter: [ isAuthenticatedStaff ],
                component:  () => import(/* webpackChunkName: "CustomersPage" */'./modules/bookstore_staff/pages/CustomersPage')
            },
            {
                path: 'analysis',
                name: 'analysis',
                beforeEnter: [ isAuthenticatedStaff ],
                component:  () => import(/* webpackChunkName: "AnalysisPage" */'./modules/bookstore_staff/pages/AnalysisPage')
            },
            {
                path: 'account',
                name: 'staffAccount',
                beforeEnter: [ isAuthenticatedStaff ],
                component:  () => import(/* webpackChunkName: "staffAccount" */'./modules/bookstore_staff/pages/AccountStaff')
            },
            {
                path: '',
                redirect: { name: 'staffAccount' }
            },
        
        ]
    }
    

]

const router = createRouter({
    history: createWebHistory(),
    routes
})



export default router