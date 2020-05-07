<template>
    <div>
            <div class="input-group mb-3 input-group-sm">
                <input type="text" class="form-control" placeholder="請輸入優惠碼" v-model="coupon_code">
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
                    套用優惠碼
                    </button>
                </div>
            </div>



        <div class="my-5 row justify-content-center">
            <form class="col-md-6" @submit.prevent="createOrder">
                <div class="form-group">
                <label for="useremail">Email</label>
                <input type="email" class="form-control" name="email" id="useremail"
                    v-model="form.user.email" v-validate="'required|email'" placeholder="請輸入 Email" required>
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
                <input type="tel" class="form-control" id="usertel" v-model="form.user.tel" placeholder="請輸入電話">
                </div>
            
                <div class="form-group">
                <label for="useraddress">收件人地址</label>
                <input type="text" class="form-control" name="address" id="useraddress" v-model="form.user.address"
                    placeholder="請輸入地址">
                <span class="text-danger">地址欄位不得留空</span>
                </div>
            
                <div class="form-group">
                <label for="comment">留言</label>
                <textarea name="" id="comment" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
                </div>
                <div class="text-right">
                <button class="btn btn-danger">送出訂單</button>
                </div>
            </form>
            </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            order: {
                user: {}
            },
            orderId:'',
        }
    },
    methods: {
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
                }
                vm.isLoading = false;
            });
        },
    },
    created(){
        this.orderId = this.$route.params.orderId;
         this.getOrder();
    },
    
}
</script>