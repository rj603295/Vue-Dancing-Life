<template>
    <div style="font-family: '微軟正黑體';">
         <loading :active.sync="isLoading"></loading>
        <div class="container">
            <div class="row my-5">
                <div class="col-md-7 bg-cover d-flex justify-content-center">
                    <img class="img-fluid" :src="product.imageUrl" alt="Responsive image">
                </div>
                <div class="col-md-5 mt-5">
                    <h2 class="p">{{ product.title }}</h2>
                    <p>{{ product.description }}</p>
                    <del>原價 {{ product.origin_price }}</del>
                    <div class="h4" v-if="product.price">sale {{ product.price }} 元</div>
                    <div class="mt-5">
                        <select class="custom-select" style="width: 50%" v-model="product.num">
                            <option selected disabled>請選擇數量</option>
                            <option v-for="number in 10" :value="number" :key="number">{{ number }}{{product.unit}}</option>
                        </select>
                        
                        <button type="button" class="mt-4 btn btn-color btn-lg btn-block" @click.prevent="addtoCart(product.id, product.num)">加入購物車</button>
                    </div>

                </div>
            </div>
        </div>
        <Cart :my-cart="cart" @delCart="removeCartItem" v-if="cart.carts"></Cart>
    </div>
</template>

<script>
import $ from 'jquery';
import Cart from '../Cart';

export default {
     components:{
       Cart,
    },
    data(){
        return {
            isLoading: false,
            product: {},
            status:{
                loadingItem: '',
            },
            cart: [],
            coupon_code: '',
            form: {
                user:{
                    name: '',
                    tel: '',
                    email: '',
                    address: '',
                },
                message:'',
            },
            visibility: '',
            pagination: [],
            count: '',
        };
    },
    methods: {
         getProduct(id){
            const vm = this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`
            vm.status.loadingItem = id;
            this.$http.get(url).then((response) => {
                vm.product = response.data.product;
                // $('#productModal').modal('show');
                console.log(response);
                vm.status.loadingItem = '';
            })
        },
        addtoCart(id, qty = 1){
                const vm = this;
                const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`
                vm.status.loadingItem = id;
                const cart = {
                    product_id: id,
                    qty
                }
                vm.isLoading = true;
                this.$http.post(url, {data: cart}).then((response) => {
                    console.log(response);
                    vm.status.loadingItem = '';
                    vm.isLoading = false;
                    vm.getCart();
                    // $('#productModal').modal('hide');
                })
            },
         getCart(){
            const vm = this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`
            vm.isLoading = true;
            this.$http.get(url).then((response) => {
                vm.cart = response.data.data;
                vm.count = response.data.data.carts.length;
                console.log(response);
                vm.isLoading = false;
            })
        },
        typeBtn(visibility){
            this.$router.push({ path: '/shopping', query: { type: visibility } });
            console.log(this.$route.params.type)
        },
        removeCartItem(id){
            const vm = this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`
            vm.isLoading = true;
            this.$http.delete(url).then((response) => {
                vm.getCart();
                console.log(response);
                vm.isLoading = false;
            })
        },
    },
    created(){
       this.getProduct(this.$route.params.id);
       this.getCart();
      
    },

}
</script>
<style lang="scss">
        .bg-cover{
			background-size: cover;
			background-position: center center;
        }
         .box{
      		background-color: white;
      		height: 300px;
    	}
            .btn-cart{
        background: transparent;
        position: relative;
    }
    .btn-cart .badge{
        position: absolute;
        top: 0;
        right: 0;
    }
    .btn-color{
        background: #bda579;
        color: white;
        // #a18e76
    }
    .btn-color:hover{
        background: #97825b;
        color: white;

        }
</style>