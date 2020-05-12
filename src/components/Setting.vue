<template>
    <div>
        <FrontNavbar class="sticky-top"></FrontNavbar>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>
<script>
import $ from 'jquery';
import Footer from './Footer';
import FrontNavbar from './FrontNavbar';
import Cart from './Cart';
export default {

    components:{
        FrontNavbar,
        Footer,
        Cart,
    }
}
</script>