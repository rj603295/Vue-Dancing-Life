<template>
    <div>
         <loading :active.sync="isLoading"></loading>
         123
       
    </div>
</template>

<script>
import $ from 'jquery';
import Footer from '../Footer';

export default {
     components:{
       Footer,
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
            visibility: 'all',
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
                vm.$router.push(`/customer_order/detail/${response.data.product.id}`);
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
        
    },
    created(){
        this.getProducts();
        this.getCart();
    },
    
    
    
}
</script>
<style lang="scss">
    .card{
        cursor: pointer;
    }
    // .card:hover{
    //     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    //     transition: 0.5s;
    // }
</style>
