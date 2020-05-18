<template>
    <div style="font-family: '微軟正黑體';">
        <loading :active.sync="isLoading"></loading>
         <div class="container-fluid">
            <div class="row mt-4">
            <div class="col-md-3 mb-4" v-for="item in filterProducts" :key="item.id">
            <div class="card border-0"  @click="getProduct(item.id)">
                <!-- <div class="p-4" style="height: 400px; background-size: cover; background-position: center"
                :style="{backgroundImage: `url(${item.imageUrl})`}">
                </div> -->
                <img :src="item.imageUrl" alt="" class="img-fluid" style="height: 350px; width: 350px;">
                <div class="card-body border-0">
               
                    <h5 class="card-title text-center">
                        <a href="#" class="text-dark">{{ item.title }}</a>
                    </h5>
                    <p class="card-text">{{ item.content }}</p>
                <div class=""> 
                    <del class="h6">{{ item.orgin_price }}</del>
                    <p class="h5 text-center">{{ '$'+item.price }}</p>
                </div>
                </div>
                    <div class="card-footer d-flex border-0 bg-transparent">
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
import Footer from '../Footer';
import FrontNavbar from '../FrontNavbar';
import Cart from '../Cart';

export default {
     components:{
       Footer,
       FrontNavbar,
       Cart,
    },
    data(){
        return {
            products: [],
            isLoading: false,
            product: {},
            status:{
                loadingItem: '',
            },
            cart: [],
            pagination: [],
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
                vm.$router.push(`shopping/${response.data.product.id}`);
            })
        },
        getCart(){
            const vm = this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`
            vm.isLoading = true;
            this.$http.get(url).then((response) => {
                vm.cart = response.data.data;
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
        this.getProducts();
        this.getCart();

    },


    computed: {
        filterProducts: function(){

          var enabledProducts = [];
          this.products.forEach(function(item){
          if(item.is_enalbed == 1){
            enabledProducts.push(item);
          }
        })

          if(this.$route.query.type == 'ALL'||this.$route.query.type == undefined){
        //  return this.products;
            return enabledProducts;
        }else if(this.$route.query.type == 'TEE'){
        var newProducts = [];
        enabledProducts.forEach(function(item){
          if(item.category == 'TEE'){
            newProducts.push(item);
          }
        })
        return newProducts;
        }else if(this.$route.query.type == 'PANTS'){
        var newProducts = [];
        enabledProducts.forEach(function(item){
          if(item.category == 'PANTS'){
            newProducts.push(item);
          }
        })
      return newProducts;
        }else if(this.$route.query.type == 'SHOES'){
        var newProducts = [];
        enabledProducts.forEach(function(item){
          if(item.category == 'SHOES'){
            newProducts.push(item);
          }
        })
      return newProducts;
        }else if(this.$route.query.type == 'HAT'){
        var newProducts = [];
        enabledProducts.forEach(function(item){
          if(item.category == 'HAT'){
            newProducts.push(item);
          }
        })
      return newProducts;
        }else if(this.$route.query.type == 'OTHERS'){
        var newProducts = [];
        enabledProducts.forEach(function(item){
          if(item.category == 'OTHERS'){
            newProducts.push(item);
          }
        })
      return newProducts;
         }else if(this.$route.query.type == 'ACCESSORIES'){
        var newProducts = [];
        enabledProducts.forEach(function(item){
          if(item.category == 'HAT'||item.category == 'OTHERS'){
            newProducts.push(item);
          }
        })
      return newProducts;
        }else if(this.$route.query.type == 'JACKET'){
        var newProducts = [];
        enabledProducts.forEach(function(item){
          if(item.category == 'JACKET'){
            newProducts.push(item);
          }
        })
      return newProducts;
  }
    return [];
      
    }
  },
}
</script>

<style scoped>
    .card{
        cursor: pointer;
    }
</style>