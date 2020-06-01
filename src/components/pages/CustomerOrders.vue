<template>
    <div style="font-family: '微軟正黑體';">
        <loading :active.sync="isLoading"></loading>
         <div class="container-fluid">
            <div class="row mt-4">
            <div class="col-md-3 mb-4" v-for="item in filterProducts" :key="item.id">
              <div class="card border-0"  @click="getProduct(item.id, $event)">
                  <!-- <div class="p-4" style="height: 400px; background-size: cover; background-position: center"
                  :style="{backgroundImage: `url(${item.imageUrl})`}">
                  </div> -->
                  <div class="mx-3">
                    <img :src="item.imageUrl" alt="" class="img-fluid" style="height: 350px; width: 350px;">
                  </div>
                  
                  <div class="card-body">
                
                      <h5 class="card-title text-center">
                          <a href="#" class="text-dark">{{ item.title }}</a>
                      </h5>
                    
                      <div class="price"> 
                          <del class="h6">{{ item.orgin_price }}</del>
                          <p class="h5 text-center">{{ '$'+item.price }}</p>
                      </div>
                  </div>
                  <div class="price-wrap animate__animated animate__fadeIn">
                    <div class="price-overlay p-3 bg-light rounded shadow-lg">
                      <p class="h5 text-center">{{ '$'+item.price }}</p>
                      <a class="btn btn-color" href="#" role="button" @click.prevent="addtoCart(item.id)">加入購物車</a>
                    </div>
                    
                  </div>
                      <!-- <div class="card-footer d-flex border-0 bg-transparent">
                    </div> -->
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
            delay: [1, 2, 3, 4, 5, 6, 7],
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
        getProduct(id, event){
            const vm = this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`
            vm.status.loadingItem = id;
            this.$http.get(url).then((response) => {
                vm.product = response.data.product;
                // $('#productModal').modal('show');
                console.log(response);
                vm.status.loadingItem = '';
                console.log(event.target.tagName)

                if(event.target.tagName == 'A'){
                  return;
                }else{
                  vm.$router.push(`shopping/${response.data.product.id}`);
                }
                
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
        scroll() {
            // 捲動頁面執行動畫
            const scrollPos = $(window).scrollTop();
            const windowHeight = $(window).height();
            $('.animated').each(function animated(){
                var thisPos = $(this).offset().top;
                if((windowHeight + scrollPos)>= thisPos-400){
                    $(this).addClass('fadeIn')
                }
            });
            $('.animated-left').each(function animatedLeft(){
                var thisPos = $(this).offset().top;
                if((windowHeight + scrollPos)>= thisPos){
                    $(this).addClass('fadeIn2')
                }
            });
            $('.animated-right').each(function animatedRight(){
                var thisPos = $(this).offset().top;
                if((windowHeight + scrollPos)>= thisPos){
                    $(this).addClass('fadeIn2')
                }
            });
        },
  
        
    },
        created(){
        this.getProducts();
        this.getCart();
        this.scroll();

        //  window.addEventListener('scroll', this.scroll);


    },



    computed: {
        filterProducts: function(){
          // this.products

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

<style scoped lang="scss">
    .card{
        cursor: pointer;
 
        &:hover .price-wrap{
          display: block;
        }

    }
    .animated{
        opacity: 0;
        transition: all 3s;
        transform: translateY(50px);
    }
    .fadeIn{
        opacity: 1;
        transform: translateY(0px);
    }
    .price-wrap{
      position: absolute;
      background: rgba(0,0,0,0.5);
      display: none;
      width: 100%;
      height: 100%;
    }
    .price-overlay{
      position: absolute;
      top:50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .btn-color{
        background: #bda579;
        color: white;
        &:hover{
          background: #97825b;
          color: white;
        }
    }
    .price{
      display: none;
    }
    .btn-border{
        border: 2px #bda579 solid;
        color: #bda579;
        &:hover{
          border: 2px #bda579 solid;
          background: #bda579;
          color: white;
        }
    }
    @media(max-width: 1366px){
      .price{
        display:block;
      }
      .price-wrap{
        display: none;
      }
      .card{
          &:hover .price-wrap{
            display: none;
          }

      }
    }

  
</style>