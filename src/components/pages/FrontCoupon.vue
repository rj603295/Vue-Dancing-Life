<template>
    <div style="font-family: '微軟正黑體';">
                    <div class="navbar-overlay text-bold">
                        <HomeNavbar></HomeNavbar>
                    </div>
        <div class="dancing bg-cover d-flex align-items-center justify-content-center">
            
            <div class="container-fluid">
                <div class="bg-lighter p-3">
                    <h2 class="text-center font-weight-bold" style="font-size: 10vmin"><small><i class="fas fa-music"></i></small> 秀出自己</h2>
                    <p class="text-center h5" style="font-size: 3vmin; line-height: 2;">即日起只要至Dancing Life粉絲專頁<br>上傳自己<strong>1分鐘</strong>的舞蹈solo影片<br>就可以獲得Dancing Life獨家<strong>85折優惠券</strong>!</p>
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
import Footer from '../Footer';
import HomeNavbar from '../HomeNavbar'
export default {
    components:{
       Footer,
       HomeNavbar,
    },
}
</script>
<style scoped lang="scss">
    .bg-cover{
			background-size: cover;
			background-position: center center;
            background-repeat: no-repeat;
		}
    .dancing{
        height: 100vh;
        opacity: 0.9;
        background-image: url('https://images.unsplash.com/photo-1466554934129-f71df54ebb27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
    }
    .bg-lighter{
        background-color: rgba(255, 255, 255, 0.35);
    }
     .btn-color{
        background: #bda579;
        color: white;
        &:hover{
            background: #97825b;
            color: white;
        }
    }
    .navbar-overlay{
        position: absolute;
        top: 0px;
        z-index: 9999;
        width: 100%;
    }
</style>
