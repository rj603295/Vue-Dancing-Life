<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <table class="table mt-4">
            <thead>
                <th width="120">購買時間</th>
                <th width="120">Email</th>
                <th width="120">購買款項</th>
                <th width="100">應付金額</th>
                <th width="100">是否付款</th>
                <th width="100">編輯</th>
            </thead>
            <tbody>
                <tr v-for="item in list" :key="item.id">
                    <td>{{ item.create_at | date }}</td>
                    <td>{{ item.user.email}}</td>
                    <td> 
                        <ul class="list-unstyled">
                            <li v-for="(product, i) in item.products" :key="i">
                                {{ product.product.title }} 數量：{{ product.qty }}
                                {{ product.product.unit }}
                            </li>
                        </ul>
                    </td>
                    <td>{{ item.total }}</td>
                    <td>
                        <span v-if="item.is_paid == true" class="text-success">是</span>
                        <span v-if="item.is_paid == false" class="text-danger">否</span>
                    </td>
                    <td>
                        <button class="btn btn-outline-primary btn-sm" @click="openModal(item)">編輯</button>
                        <!-- <button class="btn btn-outline-danger btn-sm" @click="delCouponModal(item)">刪除</button> -->
                    </td>

                </tr>
            </tbody>
        </table>


         <!-- 新增、編輯的modal -->
            <div class="modal fade" id="listModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">編輯訂單</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <form action="">
            
             <div class="form-group">
                <label for="exampleFormControlInput1">Email</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="請輸入Email" v-model="tempList.user.email">
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">姓名</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="請輸入姓名" v-model="tempList.user.name">
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">電話</label>
                <input type="tel" class="form-control" id="exampleFormControlInput1" placeholder="請輸入電話" v-model="tempList.user.tel">
            </div>

            <div class="form-group">
                <label for="exampleFormControlInput1">地址</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="請輸入地址" v-model="tempList.user.address">
            </div>
           
             
            <div class="form-check">
                <input class="form-check-input" type="checkbox"
                  id="is_paid" v-model="tempList.is_paid" :true-value="1" :false-value="0">
                <label class="form-check-label" for="is_paid">
                  是否付款
                </label>
              </div>

          </form>
         

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
        <button type="button" class="btn btn-primary" @click="updateList">確認</button>
      </div>
    </div>
  </div>
</div>
<!-- 新增、編輯Modal結束 -->

        <pagination :pages="pagination" @diffPage="getList"></pagination>


    </div>    

</template>
<script>
import $ from 'jquery';
import Pagination from '@/components/Pagination';
export default {
    components:{
          Pagination,
        },
    
    data(){
        return{
            list: [],
            isLoading: false,
            pagination: {},
            tempList: {
                user: {},
                products: [],
   
                },


        }
        
    },
    methods: {
        getList(page=1){
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/orders?page=${page}`;
            const vm = this;

            console.log(process.env.APIPATH, process.env.CUSTOMPATH);
             vm.isLoading = true;
            this.$http.get(api).then((response)=>{
                console.log(response.data);
                vm.isLoading = false;
                vm.list = response.data.orders;
                vm.pagination = response.data.pagination;
               
            })
        },

        updateList(){          
            const vm = this;
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/order/${vm.tempList.id}`;

                console.log(process.env.APIPATH, process.env.CUSTOMPATH)
                this.$http.put(api, {data: vm.tempList}).then((response) => {
                    console.log(response.data);
                    if(response.data.success){
                      $('#listModal').modal('hide');
                      vm.getList();
                    }else{
                      $('#listModal').modal('hide');
                      vm.getList();
                      console.log('修改失敗');
                    };
                    // vm.products = response.data.products;
                });
        },
         openModal(item){
             const vm = this;
              this.tempList = Object.assign({}, item);
             $('#listModal').modal('show');
        },

    },
    created(){
        this.getList();
    },
    watch:{
        due_date(){
        const vm = this;
        const timestamp = Math.floor(new Date(vm.create_at) / 1000);
        vm.tempList.create_at = timestamp;
      },
    },
}
</script>