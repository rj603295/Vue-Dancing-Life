<template>
	<div>
		<FrontNavbar class="sticky-top"></FrontNavbar>
		<Alert></Alert>
		<router-view></router-view>
		<Footer></Footer>
	</div>
</template>
<script>
import $ from 'jquery';
import Footer from '@/components/forestage/Footer';
import FrontNavbar from '@/components/forestage/FrontNavbar';
import Cart from '@/components/forestage/Cart';
import Alert from '@/components/backstage/AlertMessage';
export default {
	components:{
		FrontNavbar,
		Footer,
		Cart,
		Alert,
	},
	data(){
		return{

		}
	}
}
</script>