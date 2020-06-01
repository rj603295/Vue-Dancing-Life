<template>
    <div style="font-family: '微軟正黑體';">
         <loading :active.sync="isLoading"></loading>
        <div class="container">
            <div class="row my-5">
                <div class="col-md-7 bg-cover d-flex justify-content-center align-items-center">
                    <div>
                        <img class="img-fluid" :src="product.imageUrl" alt="Responsive image">
                    </div>
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
            <div>
                <h2>猜你也會喜歡...</h2>
                <hr/>
                <div class="row mb-5">
                    <div class="col-md-3 pointer" v-for="(item, i) in filterProducts.slice(0,4)" :key="i">
                        <div class="big" @click="getProduct(item.id)">
                            <router-link :to="`${product.id}`"><img class="img-fluid" :src="item.imageUrl" alt=""></router-link>
                        </div>
                        
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
            pagination: [],
            products: [],
        };
    },
    methods: {
        getProducts(page = 1){
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`;
            const vm = this;

                console.log(process.env.APIPATH, process.env.CUSTOMPATH)
                vm.isLoading = true;
                this.$http.get(api).then((response) => {
                    console.log(response.data);
                    vm.isLoading = false;
                      vm.products = response.data.products;
                    vm.pagination = response.data.pagination;
                });
        },
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
       this.getProducts();
      
    },
    computed: {
        filterProducts: function(){
            var vm = this;
            var enabledProducts = [];
          vm.products.forEach(function(item){
          if(item.is_enalbed == 1 && item.category == vm.product.category && item.title !== vm.product.title){
            enabledProducts.push(item);
          }
        })
        return enabledProducts;
    }
}

}
</script>
<style scoped lang="scss">
    .bg-cover{
			background-size: cover;
			background-position: center center;
        }

    .btn-cart{
        background: transparent;
        position: relative;
    }
    .btn-color{
        background: #bda579;
        color: white;
        &:hover{
            background: #97825b;
            color: white;
        }
    }
    .pointer{
        cursor: pointer;
    }
    .big{
        &:hover{
            transform: scale(1.1);
            transition: 0.7s;
        }
    }
</style>