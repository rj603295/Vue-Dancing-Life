import Vue from 'vue';
import VueRouter from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
import Dashboard from '@/views/Dashboard';
import Login from '@/views/backstage/Login';
import Products from '@/views/backstage/Products';
import CustomerOrder from '@/views/forestage/CustomerOrders';
import Coupon from '@/views/backstage/Coupon';
import CustomerList from '@/views/forestage/CustomerList';
import Home from '@/views/forestage/Home';
import ProductDetail from '@/views/forestage/ProductDetail';
import Check from '@/views/forestage/Check';
import Setting from '@/views/Setting';
import FrontCoupon from '@/views/forestage/FrontCoupon';
import Competition from '@/views/forestage/Competition';
import BuyInfo from '@/views/forestage/BuyInfo';
import AfterBuy from '@/views/forestage/AfterBuy';
import Contact from '@/views/forestage/Contact';
Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '*',
            redirect: '/'
        },
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
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/get_coupon',
            name: 'FrontCoupon',
            component: FrontCoupon,
            
        },
        {
            path: '/competition',
            name: 'Competition',
            component: Competition,
            
        },

        {
            path: '/set',
            name: 'Setting',
            component: Setting,
            children: [

                
                {
                    path: 'shopping',
                    name: 'CustomerOrder',
                    component: CustomerOrder,
                },
                {
                    path: 'shopping/:id',
                    name: 'ProductDetail',
                    component: ProductDetail,
                },
                {
                    path: 'check',
                    name: 'Check',
                    component: Check,
                    
                },
                {
                    path: 'buy_info',
                    name: 'BuyInfo',
                    component: BuyInfo,
                },
                {
                    path: 'after_buy',
                    name: 'AfterBuy',
                    component: AfterBuy,
                },
                {
                    path: 'contact',
                    name: 'Contact',
                    component: Contact,
                },
                
            ]
        },

    ],
});