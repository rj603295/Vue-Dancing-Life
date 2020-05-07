import Vue from 'vue';
import VueRouter from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
import Dashboard from '@/components/Dashboard';
import Login from '@/components/pages/Login';
import Products from '@/components/pages/Products';
import CustomerOrder from '@/components/pages/CustomerOrders';
import Coupon from '@/components/pages/Coupon';
import CustomerList from '@/components/pages/CustomerList';
import Home from '@/components/Home';
import ProductDetail from '@/components/pages/ProductDetail';
import Check from '@/components/pages/Check';
Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '*',
            redirect: 'dancing_life'
        },
        // {
        //     path: '/',
        //     name: 'HelloWorld',
        //     component: HelloWorld,
        //     meta: { requiresAuth: true }
        // },
        {
            path: '/login',
            name: 'Login',
            component: Login,
           
        },
        {
            path: '/admin',
            name: 'Dashboard',
            component: Dashboard,
            meta: { requiresAuth: true },
            children: [
                {
                    path: 'products',
                    name: 'Products',
                    component: Products,
                    meta: { requiresAuth: true },
                },
                {
                    path: 'coupons',
                    name: 'Coupons',
                    component: Coupon,
                    meta: { requiresAuth: true },
                    
                },
                {
                    path: 'customer_list',
                    name: 'CustomerList',
                    component: CustomerList,
                    meta: { requiresAuth: true },
                    
                },
                
            ]
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard,
            children: [

            ]
        },
        {
            path: '/',
            name: 'Home',
            component: Home,
        },

        {
            path: '/dancing_life',
            name: 'Home',
            component: Home,
            children: []
        },
        {
            path: '/shopping',
            name: 'CustomerOrder',
            component: CustomerOrder,
            children: [
                  
            ]
        },
        {
            path: '/shopping/:id',
            name: 'ProductDetail',
            component: ProductDetail,
        },
        {
            path: 'check/:orderId',
            name: 'Check',
            component: Check,
            
        },
        {
            path: '/check',
            name: 'Check',
            component: Check,
            
        },
    ],
});