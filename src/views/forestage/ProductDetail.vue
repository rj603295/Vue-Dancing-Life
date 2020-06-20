<template>
  <div>
    <!-- <loading :active.sync="isLoading"></loading> -->
    <loading v-if="isLoading"></loading>
    <div class="container">
      <div class="row my-5">
        <div class="col-md-7 bg-cover d-flex justify-content-center align-items-center">
          <div>
            <img class="img-fluid" :src="product.imageUrl" alt="Responsive image">
            <img class="img-fluid" :src="product.image" alt="Responsive image">
          </div>
        </div>
        <div class="col-md-5 mt-5">
          <div class="sticky">
            <h2 class="p">{{ product.title }}</h2>
            <p>{{ product.description }}</p>
            <del>原價 {{ product.origin_price }}</del>
            <div class="h4 font-weight-bold mb-4" v-if="product.price"><span class="mark-yellow ">sale {{ product.price }} 元</span></div>
            <div class="btn-group btn-group-toggle btn-group-sm" data-toggle="buttons">
              <label class="btn btn-outline-secondary active">
                <input type="radio" name="options" id="option1" checked> S
              </label>
              <label class="btn btn-outline-secondary">
                <input type="radio" name="options" id="option2"> M
              </label>
              <label class="btn btn-outline-secondary">
                <input type="radio" name="options" id="option3"> L
              </label>
              <label class="btn btn-outline-secondary">
                <input type="radio" name="options" id="option4"> XL
              </label>
            </div>
            <div class="mt-5">
              <select class="custom-select" v-model="qty">
                <!-- <option selected disabled>請選擇數量</option> -->
                <option v-for="number in 10" :value="number" :key="number">{{ number }}{{ product.unit }}</option>
              </select>
              <button type="button" class="mt-4 btn btn-color btn-lg btn-block" @click.prevent="addtoCart(product.id, qty)">加入購物車</button>
            </div>
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
import Cart from '@/components/forestage/Cart';
import Loading from '@/components/forestage/Loading';
import { mapGetters, mapActions } from 'vuex';
export default {
  components:{
  Cart,
  Loading,
},
  data(){
    return {
      product: {},
      qty: 1,
      status:{
        loadingItem: '',
      },
      pagination: [],
      // products: [],
    };
  },
  methods: {
    getProducts(){
      this.$store.dispatch('getProducts');
    },
    getProduct(id){
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`
      vm.status.loadingItem = id;
      vm.$http.get(url).then((response) => {
          vm.product = response.data.product;
          vm.status.loadingItem = '';          
      })
    },
    addtoCart(id, qty = 1){
      const vm = this;
      const target = this.cart.carts.filter(items => items.product_id === id);
      if (target.length > 0) {
        const sameCartItem = target[0];
        const originQty = sameCartItem.qty;
        const originCartId = sameCartItem.id;
        const originProductId = sameCartItem.product.id;
        const newQty = originQty + qty;
        this.$store.dispatch('updateProductQty', { originCartId, originProductId, newQty });
      } else {
        this.$store.dispatch('addtoCart', { id, qty });
      }
      vm.$bus.$emit('message:push', '成功加入購物車', 'warning');
    },
    getCart(){
      this.$store.dispatch('getCart', );
    },
    removeCartItem(id){
      this.$store.dispatch('removeCartItem', id);
    },
  },
  created(){
    this.getProduct(this.$route.params.id);
    this.getCart();
    this.getProducts();
  },
  computed: {
    filterProducts: function(){
      const vm = this;
      let enabledProducts = [];
      vm.products.forEach(function(item){
        if(item.is_enalbed === 1 && item.category === vm.product.category && item.title !== vm.product.title){
          enabledProducts.push(item);
        }
      })
      return enabledProducts;
    },
    isLoading(){
      return this.$store.state.isLoading;
    },
    ...mapGetters(['products', 'cart'])
  }
}
</script>
<style lang="scss" scoped>
  .sticky{
    position: sticky;
    top: 100px;
  }

</style>