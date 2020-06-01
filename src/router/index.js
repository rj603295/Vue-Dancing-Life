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
import Setting from '@/components/Setting';
import FrontCoupon from '@/components/pages/FrontCoupon';
import Competition from '@/components/pages/Competition';
import BuyInfo from '@/components/pages/BuyInfo';
import AfterBuy from '@/components/pages/AfterBuy';
import Contact from '@/components/pages/Contact';
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