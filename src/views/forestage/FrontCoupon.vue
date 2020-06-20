<template>
  <div>
    <div class="navbar-overlay text-bold">
        <HomeNavbar></HomeNavbar>
    </div>
    <div class="body-bg bg-cover d-flex align-items-center justify-content-center">
      <div class="container-fluid">
        <div class="bg-lighter p-3">
          <h2 class="text-center font-weight-bold"><small><i class="fas fa-music"></i></small> 秀出自己</h2>
          <p class="text-center h5 line-height">即日起只要至Dancing Life粉絲專頁<br>上傳自己<strong>1分鐘</strong>的舞蹈solo影片<br>就可以獲得Dancing Life獨家<strong>85折優惠券</strong>!</p>
          <div class="d-flex justify-content-center">
            <button type="button" class="btn btn-lg btn-warning">立即前往!</button>
          </div>  
        </div> 
    </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import $ from 'jquery';
import Footer from '@/components/forestage/Footer';
import HomeNavbar from '@/components/forestage/HomeNavbar'
export default {
  components:{
    Footer,
    HomeNavbar,
  },
  data(){
    return{

    }
  },
}
</script>
