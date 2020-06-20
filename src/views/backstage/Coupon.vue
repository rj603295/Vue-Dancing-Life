<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="text-right mt-4">
      <button class="btn btn-primary" @click="openModal(true)">建立新的優惠券</button>
    </div>
    <table class="table mt-4">
      <thead>
        <th width="120">名稱</th>
        <th width="120">折扣百分比</th>
        <th width="120">優惠碼</th>
        <th width="120">到期日</th>
        <th width="100">是否啟用</th>
        <th width="100">編輯</th>
      </thead>
      <tbody>
        <tr v-for="item in coupons" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }}%</td>
          <td>{{ item.code }}</td>
          <td>{{ item.due_date }}</td>
          <td>
            <div v-if="item.is_enabled === 1" class="text-success">啟用</div>
            <div v-if="item.is_enabled === 0" class="text-danger">不啟用</div>
          </td>
          <td>
            <button class="btn btn-outline-primary btn-sm" @click="openModal(false, item)">編輯</button>
            <button class="btn btn-outline-danger btn-sm" @click="delCouponModal(item)">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <pagination :pages="pagination" @diffPage="getCoupons"></pagination>
    <!-- 新增、編輯的modal -->
      <div class="modal fade" id="couponModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">新增優惠券</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form action="">
                <div class="form-group">
                  <label for="exampleFormControlInput1">名稱</label>
                  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="請輸入優惠券名稱" v-model="tempCoupon.title">
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput1">折扣百分比</label>
                  <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="請輸入折扣百分比" v-model="tempCoupon.percent">
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput1">優惠碼</label>
                  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="請輸入優惠碼" v-model="tempCoupon.code">
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput1">到期日</label>
                  <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="請輸入到期日" v-model="tempCoupon.due_date">
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox"
                    id="is_enabled" v-model="tempCoupon.is_enabled" :true-value="1" :false-value="0">
                  <label class="form-check-label" for="is_enabled">是否啟用</label>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
              <button type="button" class="btn btn-primary" @click="updateCoupon">確認</button>
            </div>
          </div>
        </div>
      </div>
    <!-- 新增、編輯Modal結束 -->
    <!-- 刪除Modal -->
    <div class="modal fade" id="delCouponModal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除優惠券</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除 <strong class="text-danger">{{ tempCoupon.title }}</strong> 優惠券(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click="delCoupon">確認刪除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery';
import Pagination from '@/components/backstage/Pagination';
export default {
  components:{
    Pagination,
  },
  data(){
    return {
      coupons: [],
      tempCoupon: {},
      isNew: false,
      isLoading: false,
      pagination: {},
    }
  },
  methods: {
    getCoupons(page=1){
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupons?page=${page}`;
      const vm = this;
      vm.isLoading = true;
      vm.$http.get(api).then((response) => {
        vm.isLoading = false;
        vm.coupons = response.data.coupons;
        vm.pagination = response.data.pagination;
      });
    },
    openModal(isNew, item){
      if(isNew){
        this.tempCoupon = {};
        this.isNew = true;
      }else{
        this.tempCoupon = Object.assign({}, item);
        this.isNew = false;
      };
      $('#couponModal').modal('show');
    },
    updateCoupon(){
      let api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupon`;
      let httpMethod = 'post';
      const vm = this;
      if(!vm.isNew){
        api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`;
        httpMethod = 'put';
      }
      vm.$http[httpMethod](api, {data: vm.tempCoupon}).then((response) => {
        if(response.data.success){
          $('#couponModal').modal('hide');
          vm.getCoupons();
        }else{
          $('#couponModal').modal('hide');
          vm.getCoupons();
          console.log('新增失敗');
        };
      });   
    },
    delCouponModal(item){
      this.tempCoupon = item;
      $('#delCouponModal').modal('show');
    },
    delCoupon(){
      const vm = this;
      let api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`;
        vm.$http.delete(api, {data: vm.tempCoupon}).then((response) => {
          if(response.data.success){
            $('#delCouponModal').modal('hide');
            vm.getCoupons();
          }else{
            $('#delCouponModal').modal('hide');
            vm.getCoupons();
            console.log('刪除失敗');
          };
        });
    },
  },
  created(){
    const vm = this;
    vm.getCoupons();      
  },
}
</script>