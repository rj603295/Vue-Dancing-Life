<template>
    <div style="font-family: '微軟正黑體';">
    <loading :active.sync="isLoading"></loading>
    <div class="dropdown ml-auto fixed">
        <button class="btn btn-sm btn-cart" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <div class="bg-light rounded-circle border border-dark">
                <i class="fa fa-shopping-cart fa-2x p-3 position-relative">
                    <div class="position-absolute badge-position">
                        <h6><span class="badge badge-pill badge-danger ">{{ myCart.carts.length }}</span></h6>
                    </div>
                    
                </i>
                
            </div>
            
        </button>
            <div class="dropdown-menu dropdown-menu-right" style="min-width: 310px; font-family: '微軟正黑體';">
                <div class="px-3 py-3">
                <h6 class="mb-2 text-center">已選擇商品</h6>
                <div class="table-responsive">
                    <table class="table table-sm">
                    <tbody>
                    <tr v-for="item in myCart.carts" :key="item.product.product_id">
                        <td class="align-middle" width="5%">
                            <a href="#" class="text-secondary" data-toggle="modal" data-target="#removeModal" @click="removeCartItem(item.id)"><i class="fas fa-trash"></i></a>
                        </td>
                        <td>{{ item.product.title }}</td>
                        <td width="13%">{{item.qty}}{{item.product.unit}}</td>
                        <td width="26%">{{item.total}}元</td>
                    </tr>
                    </tbody>
                </table>
                
                </div>
                <router-link to="/set/check" class="btn btn-border btn-block">結帳去</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"Cart",
    props: ['myCart'],
    data(){
        return {
            products: [],
            isLoading: false,
            product: {},
            status:{
                loadingItem: '',
            },
            coupon_code: '',
            pagination: [],
            count: '',
        };
    },
    methods:{

        removeCartItem(id){
            this.$emit("delCart", id)
        },

    
    },
}
</script>

<style lang="scss">
    .btn-cart{
        background: transparent;
    }
    .fixed{
        position: fixed;
        bottom: 0;
        right: 0;
        z-index: 9999;
    }
    .badge-position{
        top: 13%;
        right: 13%;
    }
    .btn-border{
        border: 2px #bda579 solid;
        color: #bda579;
    }
    .btn-border:hover{
        border: 2px #bda579 solid;
        background: #bda579;
        color: white;
    }

</style>