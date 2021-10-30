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
        meta: {title: 'Home'},
        component: () => import(/* webpackChunkName: "HomePage" */'./modules/bookstore_ecommerce/layouts/EcommerceLayout'),
        children: [
            {
                path: '/home',
                name: 'home',
                component:  () => import(/* webpackChunkName: "Homepage" */'./modules/bookstore_ecommerce/pages/HomePage')
            },
            {
                path: 'category/books/',
                name: 'books',
                meta: {title: 'Books'},
                component:  () => import(/* webpackChunkName: "BooksPage" */'./modules/bookstore_ecommerce/pages/BooksPage')
            },
            {
                path: 'category/magazines/',
                name: 'magazines',
                meta: {title: 'Magazines'},
                component: () => import(/* webpackChunkName: "MagazinesPage" */'./modules/bookstore_ecommerce/pages/MagazinesPage')
            },
            {
                path: 'about-us/',
                name: 'about-us',
                meta: {title: 'About us'},
                component: () => import(/* webpackChunkName: "AboutUsPage" */'./modules/bookstore_ecommerce/pages/AboutUsPage')
            },
            {
                path: 'product/book/',
                name: 'product-book',
                meta: {title: 'Detail Product'},
                component: () => import(/* webpackChunkName: "ProductBookPage" */'./modules/bookstore_ecommerce/pages/DetailProductPage')
                // props: ( route ) => {
                //     const id  = Number(route.params.id);
                //     return isNaN( id ) ? { id: 1 } : { id }
                // }
            },
            {
                path: '',
                redirect: { name: 'home' }
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
                meta: {title: 'Login'},
                component:  () => import(/* webpackChunkName: "loginPage" */'./modules/login/pages/CustomerLoginPage')
            },
            {
                path: 'staff-login',
                name: 'staff-login',
                meta: {title: 'Staff login'},
                component:  () => import(/* webpackChunkName: "StaffLoginPage" */'./modules/login/pages/StaffLoginPage')
            },
            {
                path: 'signup',
                name: 'customer-signup',
                meta: {title: 'Sing up'},
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
                meta: {title: 'Inventory'},
                beforeEnter: [ isAuthenticatedStaff ],
                component:  () => import(/* webpackChunkName: "InventoryPage" */'./modules/bookstore_staff/pages/InventoryPage')
            },
            {
                path: 'employees',
                name: 'employees',
                meta: {title: 'Employees'},
                beforeEnter: [ isAuthenticatedStaff ],
                component:  () => import(/* webpackChunkName: "EmployeesPage" */'./modules/bookstore_staff/pages/EmployeesPage')
            },
            {
                path: 'customers',
                name: 'customers',
                meta: {title: 'Customers'},
                beforeEnter: [ isAuthenticatedStaff ],
                component:  () => import(/* webpackChunkName: "CustomersPage" */'./modules/bookstore_staff/pages/CustomersPage')
            },
            {
                path: 'analysis',
                name: 'analysis',
                meta: {title: 'Analysis'},
                beforeEnter: [ isAuthenticatedStaff ],
                component:  () => import(/* webpackChunkName: "AnalysisPage" */'./modules/bookstore_staff/pages/AnalysisPage')
            },
            {
                path: 'account',
                name: 'staffAccount',
                meta: {title: 'Account details'},
                beforeEnter: [ isAuthenticatedStaff ],
                component:  () => import(/* webpackChunkName: "staffAccount" */'./modules/bookstore_staff/pages/AccountStaffPage')
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

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/svg';
    link.rel = 'icon';
    link.href = './favicon.ico';
    document.getElementsByTagName('head')[0].appendChild(link);
    next()
  })


export default  router