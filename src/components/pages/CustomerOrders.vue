<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <FrontNavbar></FrontNavbar>
         <div class="container-fluid">
            <div class="row mt-4">
            <div class="col-md-3 mb-4" v-for="item in filterProducts" :key="item.id">
            <div class="card border-0"  @click="getProduct(item.id)">
                <div class="p-4" style="height: 400px; background-size: cover; background-position: center"
                :style="{backgroundImage: `url(${item.imageUrl})`}">
                </div>
                <div class="card-body border-0">
                <!-- <span class="badge badge-secondary float-right ml-2">{{ item.category }}</span> -->
                    <h5 class="card-title text-center">
                        <a href="#" class="text-dark">{{ item.title }}</a>
                    </h5>
                    <p class="card-text">{{ item.content }}</p>
                <div class=""> <!--justify-content-between align-items-baseline -->
                    <!-- <div class="h5">2,800 元</div> -->
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

        
        <Footer></Footer>


    </div>
</template>

<script>
import $ from 'jquery';
import Footer from '../Footer';
import FrontNavbar from '../FrontNavbar';

export default {
     components:{
       Footer,
       FrontNavbar,
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
        addtoCart(id, qty = 1){
            const vm = this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`
            vm.status.loadingItem = id;
            const cart = {
                product_id: id,
                qty
            }
            this.$http.post(url, {data: cart}).then((response) => {
                console.log(response);
                vm.status.loadingItem = '';
                vm.getCart();
                $('#productModal').modal('hide');
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
        addCouponCode(){
            const vm = this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/coupon`
            const coupon = {
                code: vm.coupon_code
            };
            vm.isLoading = true;
            this.$http.post(url, {data: coupon}).then((response) => {
                vm.getCart();
                console.log(response);
                vm.isLoading = false;
            })
        },
        createOrder(){
            const vm = this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order`
            const order = vm.form;
            // vm.isLoading = true;
            this.$validator.validate().then((result)=>{
                if(result){
                    this.$http.post(url, {data: order}).then((response) => {
                    console.log('訂單已建立', response);
                    if(response.data.success){
                    vm.$router.push(`/customer_checkout/${response.data.orderId}`);
                }
                // vm.isLoading = false;
            });
            }else{
                console.log('欄位不完整');
            }
            });
            
        },
        typeBtn(visibility){
            this.$router.push({ path: '/shopping', query: { type: visibility } });
            console.log(this.$route.params.type)
        },
        
    },
        created(){
        this.getProducts();
        this.getCart();

    },


    computed: {
        filterProducts: function(){
      if(this.$route.query.type == 'ALL'||this.$route.query.type == undefined){
         return this.products;
        }else if(this.$route.query.type == 'TEE'){
        var newProducts = [];
        this.products.forEach(function(item){
          if(item.category == 'TEE'){
            newProducts.push(item);
          }
        })
        return newProducts;
        }else if(this.$route.query.type == 'PANTS'){
        var newProducts = [];
        this.products.forEach(function(item){
          if(item.category == 'PANTS'){
            newProducts.push(item);
          }
        })
      return newProducts;
        }else if(this.$route.query.type == 'SHOES'){
        var newProducts = [];
        this.products.forEach(function(item){
          if(item.category == 'SHOES'){
            newProducts.push(item);
          }
        })
      return newProducts;
        }else if(this.$route.query.type == 'HAT'){
        var newProducts = [];
        this.products.forEach(function(item){
          if(item.category == 'HAT'){
            newProducts.push(item);
          }
        })
      return newProducts;
        }else if(this.$route.query.type == 'BRACELET'){
        var newProducts = [];
        this.products.forEach(function(item){
          if(item.category == 'BRACELET'){
            newProducts.push(item);
          }
        })
      return newProducts;
         }else if(this.$route.query.type == 'NECKLACE'){
        var newProducts = [];
        this.products.forEach(function(item){
          if(item.category == 'NECKLACE'){
            newProducts.push(item);
          }
        })
      return newProducts;
        }else if(this.$route.query.type == 'ACCESSORIES'){
        var newProducts = [];
        this.products.forEach(function(item){
          if(item.category == 'NECKLACE'||item.category == 'HAT'||item.category == 'BRACELET'){
            newProducts.push(item);
          }
        })
      return newProducts;
        }else if(this.$route.query.type == 'JACKET'){
        var newProducts = [];
        this.products.forEach(function(item){
          if(item.category == 'JACKET'){
            newProducts.push(item);
          }
        })
      return newProducts;
  }
    return [];
 }
    }
}
</script>

<style lang="scss">
    .card{
        cursor: pointer;
    }
</style>