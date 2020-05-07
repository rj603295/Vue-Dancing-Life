<template>
    <div>
         <loading :active.sync="isLoading"></loading>
        <nav class="navbar navbar-expand-lg navbar-light sticky-top bg-dark">
            <div class="container-fluid">
                <router-link class="text-decoration-none" to="/dance_studio"><h1 class="h2" style="color: white;">Dancing Life</h1></router-link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                         <ul class="navbar-nav mr-auto py-1 list-group ml-3">
                             <li class="nav-item active">
                                <a class="nav-link text-white" href="#" @click.prevent="typeBtn('ALL'); visibility='all'">ALL</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#" @click.prevent="typeBtn('TEE'); visibility='TEE'">T-SHIRT</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#"  @click.prevent="typeBtn('PANTS'); visibility='PANTS'">PANTS</a>
                            </li>
                            
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                               ACCESSORIES
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#" @click.prevent="typeBtn('ACCESSORIES'); visibility='ACCESSORIES'">ALL</a>
                                <a class="dropdown-item" href="#" @click.prevent="typeBtn('NECKLACE'); visibility='NECKLACE'">NECKLACE</a>
                                <a class="dropdown-item" href="#" @click.prevent="typeBtn('BRACELET'); visibility='BRACELET'">BRACELET</a>
                                <a class="dropdown-item" href="#" @click.prevent="typeBtn('HAT'); visibility='HAT'">HAT</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#" @click.prevent="typeBtn('SHOES'); visibility='SHOES'">SHOES</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#" @click.prevent="typeBtn('JACKET'); visibility='JACKET'">JACKET</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <div class="dropdown ml-auto">
                                    <button class="btn btn-sm btn-cart" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fa fa-shopping-cart text-white fa-2x"></i>
                                        <span class="badge badge-pill badge-danger">{{count}}</span>
                                    </button>
                                        <div class="dropdown-menu dropdown-menu-right" style="min-width: 400px">
                                            <div class="px-4 py-3">
                                            <h6 class="mb-2">已選擇商品</h6>
                                            <table class="table table-sm">
                                                <tbody>
                                                <tr v-for="item in cart.carts" :key="item.product.product_id">
                                                    <td class="align-middle text-center">
                                                    <a href="#removeModal" class="text-mnuted"></a>
                                                    </td>
                                                    <td class="align-middle">
                                                    <a href="#" class="text-secondary" data-toggle="modal" data-target="#removeModal" @click="removeCartItem(item.id)"><i class="fas fa-trash"></i></a>
                                                    {{ item.product.title }}
                                                    </td>
                                                    <td>{{item.qty}}{{item.product.unit}}</td>
                                                    <td>{{item.total}}元</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            <router-link to="/check" class="btn btn-primary btn-block">結帳去</router-link>
                                            </div>
                                        </div>
                                    </div>
                            </li>
                        </ul>
                    </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
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
            visibility: '',
            pagination: [],
            count: '',
        };
    },
    methods:{
         typeBtn(visibility){
            this.$router.push({ path: '/shopping', query: { type: visibility } });
            console.log(this.$route.params.type)
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
        this.getCart();
    },
}
</script>