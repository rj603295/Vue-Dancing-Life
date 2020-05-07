<template>
    <div>
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
                                        <span class="badge badge-pill badge-danger">{{ count }}</span>
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
        <div class="container">
            <!-- step1 -->
            <div class="form-row mt-5">
                <div class="col-12 col-sm">
                    <div class="alert alert-rounded" role="alert" :class="{'alert-success': step == 1, 'alert-dark': step != 1}">
                        1. 確認購物清單
                    </div>
                </div>
                <div class="col-12 col-sm">
                    <div class="alert alert-rounded" role="alert" :class="{'alert-success': step == 2, 'alert-dark': step != 2}">
                        2. 填寫購買資料
                    </div>
                </div>
                <div class="col-12 col-sm">
                    <div class="alert alert-rounded" role="alert" :class="{'alert-success': step == 3, 'alert-dark': step != 3}">
                        3. 付款去
                    </div>
                </div>
            </div>
            <div v-if="step == 1">
                <table class="table">
                    <thead>
                        <th width="20%"></th>
                        <th width="20%"></th>
                        <th>品名</th>
                        <th>數量</th>
                        <th>單價</th>
                    </thead>
                    <tbody>
                        <tr v-for="item in cart.carts" :key="item.id">
                        <td class="align-middle">
                            <button type="button" class="btn btn-outline-danger btn-sm" @click="removeCartItem(item.id)">
                            <i class="far fa-trash-alt"></i>
                            </button>
                        </td>
                                        <td>
                            <img :src="item.product.imageUrl" alt="" style="height: 100px;">
                        </td>
                        <td class="align-middle">
                            {{ item.product.title }}
                            <div class="text-success" v-if="item.coupon">
                            已套用優惠券
                            </div>
                        </td>

                        <td class="align-middle">{{ item.qty }}{{ item.product.unit }}</td>
                        <td class="align-middle text-right">{{ item.final_total }}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                        <td></td>
                        <td colspan="3" class="text-right">總計</td>
                        <td class="text-right">{{ cart.total }}</td>
                        </tr>
                        <tr v-if="cart.final_total !== cart.total">
                        <td></td>
                        <td colspan="3" class="text-right text-success">折扣價</td>
                        <td class="text-right text-success">{{ cart.final_total }}</td>
                        </tr>
                    </tfoot>
                </table>

                <div class="input-group mb-3 input-group-sm">
                    <input type="text" class="form-control" placeholder="請輸入優惠碼" v-model="coupon_code">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
                        套用優惠碼
                        </button>
                    </div>
                </div>
            </div>
            <!-- step2 -->
            <div class="my-5 row justify-content-center w-100 h-100" v-if="step == 2">
                <form class="col-md-12" @submit.prevent="createOrder">
                    <div class="form-group">
                        <label for="useremail">Email</label>
                        <input type="email" class="form-control" name="email" id="useremail"
                            v-model="form.user.email" v-validate="'required|email'" placeholder="請輸入 Email" :class="{'is-invalid': errors.has('email')}" required>
                        <span class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</span>
                    </div>
                
                    <div class="form-group">
                    <label for="username">收件人姓名</label>
                    <input type="text" class="form-control" name="name" id="username" v-validate="'required'"
                        v-model="form.user.name" placeholder="輸入姓名" :class="{'is-invalid': errors.has('name')}">
                    <span class="text-danger" v-if="errors.has('name')">姓名必須輸入</span>
                    </div>
                
                    <div class="form-group">
                    <label for="usertel">收件人電話</label>
                    <input type="tel" class="form-control" :class="{'is-invalid': errors.has('tel')}" name="tel" id="usertel" v-validate="'required'" v-model="form.user.tel" placeholder="請輸入電話">
                    <span class="text-danger" v-if="errors.has('tel')">電話必須輸入</span>
                    </div>
                
                    <div class="form-group">
                    <label for="useraddress">收件人地址</label>
                    <input type="text" class="form-control" :class="{'is-invalid': errors.has('address')}" name="address" id="useraddress" v-validate="'required'" v-model="form.user.address"
                        placeholder="請輸入地址">
                    <span class="text-danger" v-if="errors.has('address')">地址欄位不得留空</span>
                    </div>
                
                    <div class="form-group">
                    <label for="comment">留言 (請記得在留言處註明尺寸或尺碼)</label>
                    <textarea name="" id="comment" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
                    </div>

                    <div class="d-flex">
                        <div>
                            <button type="button" class="btn btn-secondary" v-if="step == 2||step == 3" @click="step = step-1"><i class="fas fa-arrow-left"></i>上一步</button>
                        </div>
                        <div class="ml-auto">
                            <button class="btn btn-danger text-right">送出訂單</button>
                        </div>
                    </div>
                    
                </form>
            </div>
            <!-- step3 -->
                <div class="my-5 row justify-content-center" v-if="step == 3">
                    <form class="col-md-9" @submit.prevent="payOrder" >
                        <table class="table">
                        <thead>
                            <th>品名</th>
                            <th>數量</th>
                            <th>單價</th>
                        </thead>
                        <tbody>
                            <tr v-for="item in order.products" :key="item.id">
                            <td class="align-middle">{{ item.product.title }}</td>
                            <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                            <td class="align-middle text-right">{{ item.final_total }}</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                            <td colspan="2" class="text-right">總計</td>
                            <td class="text-right">{{ order.total }}</td>
                            </tr>
                        </tfoot>
                        </table>

                        <table class="table">
                        <tbody>
                            <tr>
                            <th width="100">Email</th>
                            <td>{{ order.user.email }}</td>
                            </tr>
                            <tr>
                            <th>姓名</th>
                            <td>{{ order.user.name }}</td>
                            </tr>
                            <tr>
                            <th>收件人電話</th>
                            <td>{{ order.user.tel }}</td>
                            </tr>
                            <tr>
                            <th>收件人地址</th>
                            <td>{{ order.user.address }}</td>
                            </tr>
                            <tr>
                            <th>付款狀態</th>
                            <td>
                                <span v-if="!order.is_paid">尚未付款</span>
                                <span v-else class="text-success">付款完成</span>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                        <div class="d-flex">
                            <button type="button" class="btn btn-secondary" v-if="step == 3" @click="step = step-1"><i class="fas fa-arrow-left"></i>上一步</button>
                            <button type="button" class="btn btn-danger ml-auto" v-if="step==3 && order.is_paid === false" @click="payOrder">付款去</button>
                        </div>
                        
                    </form>
                </div>

                <!-- step4 完成 -->
                <div v-if="step == 4" class="d-flex justify-content-center align-items-center p-5">
                    <i class="fas fa-check-circle fa-4x" style="color: green"></i>
                    <p class="h1">付款完成，已經收到您的訂單!</p>
                </div>


            
            <div class="mb-5">
                <div class="d-flex">
                    <router-link class="btn btn-outline-secondary" to="/shopping?type=ALL" role="button" v-if="step == 1">繼續購物</router-link>
                    <div class="ml-auto">
                        <button type="button" class="btn btn-secondary" @click="alert" v-if="step==1">下一步<i class="fas fa-arrow-right"></i></button>
                    </div>
                </div>
               
            </div>

            


        </div>
        
        <Footer></Footer>
    </div>
</template>
<script>
import $ from 'jquery';
import FrontNavbar from '../FrontNavbar';
import Footer from '../Footer';
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
            visibility: '',
            pagination: [],
            step: 1,
            order: {
                user: {}
            },
            orderId:'',
            count: '',
        };
    },
    methods: {
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
        alert(){
            if(this.cart.carts.length == 0){
                alert('您的購物車為空');
            }else{
                this.step = this.step+1;
            };
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
                    vm.orderId = response.data.orderId;
                    vm.getOrder();
                    if(response.data.success){

                    this.step = 3;
 
                }
                // vm.isLoading = false;
            });
            }else{
                console.log('欄位不完整');
            }
            });
            
        },
        getOrder(){
            const vm = this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order/${vm.orderId}`
            vm.isLoading = true;
            this.$http.get(url).then((response) => {
                vm.order = response.data.order;
                console.log(response);
                vm.isLoading = false;
            })
        },
        payOrder(){
          const vm = this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/pay/${vm.orderId}`
            vm.isLoading = true;
            this.$http.post(url).then((response) => {
                
                console.log(response);
                if(response.data.success){
                  vm.getOrder();
                  vm.step = 4;
                }
                vm.isLoading = false;
            });
        },
        typeBtn(visibility){
            this.$router.push({ path: '/shopping', query: { type: visibility } });
            console.log(this.$route.params.type)
        },

    },
    created(){
       this.getCart();
    }
}
</script>