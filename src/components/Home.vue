<template>
    <div style="font-family: '微軟正黑體';">
        
        <div class="header position-relative" :style="{height: height+'px'}">

                <div class="video-container m-0">
                    <video autoplay loop muted id="full-video" poster="https://images.unsplash.com/photo-1551186839-9e4a19b27812?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80">
                        <source src="../assets/hiphop.mp4" type="video/mp4">
                    </video>
                </div>
                <h2 class="p-overlay m-0">做你自己</h2>
                <div class="navbar-overlay text-bold">
                        <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
                            <div class="container-fluid">
                                <a class="text-decoration-none" href="#/dist"><h1 class="h2" style="color: white;">Dancing Life</h1></a>
                                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                        <ul class="navbar-nav mr-auto">
                                        <li class="nav-item">
                                            <a href="#/dist" class="nav-link text-white">首頁 <span class="sr-only">(current)</span></a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#/set/shopping" class="nav-link text-white">購物商城</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#/get_coupon" class="nav-link text-white">優惠券</a>
                                        </li>
                                        </ul>
                                    </div>
                            </div>
                        </nav>
                </div>

        </div>


        

        <section class="bg-light">
            <div class="container-fluid">
                <div class="row d-flex justify-content-center">
                    
                    <div class="col-md-3 bg-cover box mx-3 mt-5 turn-white d-flex align-items-center justify-content-center pointer" @click="to('PANTS')" style="background-image: url('http://stussy-wordpress-production2.s3.amazonaws.com/assets/img-32.jpg')">
                        <p class="font-weight-bold hint">Pants</p>
                    </div>
                    <div class="col-md-5 bg-cover box mx-3 mt-5 turn-white d-flex align-items-center justify-content-center pointer" @click="to('TEE')" style="background-image: url('https://images.unsplash.com/photo-1549937055-8e09ab35cf64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');">
                        <p class="font-weight-bold hint">T-shirt</p>
                    </div>
                    <div class="col-md-2 bg-cover box mx-3 mt-5 turn-white d-flex align-items-center justify-content-center pointer" @click="to('SHOES')" style="background-image: url('https://images.unsplash.com/photo-1532471965572-092fb677a6a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')">
                        <p class="font-weight-bold hint">Shoes</p>
                    </div>

                </div>
                <div class="row d-flex justify-content-center mb-5">
                    <div class="col-md-7 bg-cover box mx-3 mt-5 turn-white d-flex align-items-center justify-content-center pointer" @click="to('ACCESSORIES')" style="background-image: url('https://images.unsplash.com/photo-1563191735-862765edd4fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80')">
                        <p class="font-weight-bold hint">Accessories</p>
                    </div>
                    <div class="col-md-4 bg-cover box mx-3 mt-5 turn-white d-flex align-items-center justify-content-center pointer" @click="to('JACKET')" style="background-image: url('https://images.unsplash.com/photo-1488676760857-e66012daf47a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1173&q=80')">
                        <p class="font-weight-bold hint">Jacket</p>
                    </div>
                </div>


            </div>



        </section>
        <section class="py-5">
            <div class="container-fluid">
                <div class="row">
                <div class="col-md-6"></div>
                <div class="col-md-6 pb-5">
                    <h2 class="text-right d-flex justify-content-center">Dancing Life</h2>
                    <p class="text-right d-flex justify-content-center">跳舞即生活<br>用自己的方式和世界對話</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 pt-5">
                    <p class="text-left d-flex justify-content-center">每件衣服在不同的人身上都會有不一樣的個性<br>
                也會呈現出不一樣的舞蹈姿態<br>我們挑選各式各樣的衣物和配件<br>期待熱愛街舞的你能穿出自己的風格<br>創造屬於自己的舞蹈世界</p>
                </div>
            </div>
            </div>
            
                

            
            
                


        </section>
         <Footer></Footer>

    </div>
</template>

<script>
import $ from 'jquery';
import Footer from './Footer';

export default {
    components:{
       Footer,
    },

    data(){
        return{
            height: '',
        }
    },
    
    methods: {
        getHeight(){

            var div = document.querySelector(".video-container");
            var parent = document.querySelector(".position");

            var divHeight = div.offsetHeight;
            console.log(divHeight);
            if(divHeight != 0){
                this.height = divHeight;
            }else if(divHeight == 0){

            }

        },
       
        to(type){
            const vm = this;
            vm.$router.push(`/set/shopping?type=${type}`);
            
        }

    },
    mounted(){
        this.getHeight();
    }
}
</script>

<style scoped>
    .logo{
        width: 200px;
        height: auto;
    }
    .bg-cover{
			background-size: cover;
			background-position: center center;
        }
    .box{
      		background-color: white;
      		height: 525px;
    	}
    .header{
        width: 100%;
    }

    .video-container{
        position: absolute;

    }
    #full-video {
        width: 100%;
        height: 100vh;
        z-index: 10;
        background: black;
        will-change: opacity;
        opacity: 0.7;
        object-fit:fill;
    }
    .navbar-overlay{
        position: absolute;
        top: 0px;
        z-index: 9999;
        width: 100%;
    }
    .p-overlay{
        position: absolute;
        z-index: 9999;
        color: white;
        font-weight: bold;
        font-family:'微軟正黑體';
        font-size:25vmin;
        top:50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    
    @media(min-width: 640px){
        .p-overlay{
            font-size: 22vmin;
        }
    }

       @media(min-width: 568px){
        .p-overlay{
            font-size: 20vmin;
        }
    }
    /* i5$SE */
      @media(max-width: 414px){
        .p-overlay{
            font-size: 25vmin;
        }
    }
    /* ipad */
      @media(min-width: 768px){
        .p-overlay{
            font-size: 25vmin;
        }
    }
    @media(min-width: 1024px)and(max-width: 1366px)
    {
        .p-overlay{
            font-size: 15vmin;
        }
    }
    @media(max-width: 1024px){
        #full-video{
            display: none;
        }
        .header{
            height: 100vh;
            opacity: 0.7;
            background-size: cover;
			background-position: center center;
            background-image: url('https://images.unsplash.com/photo-1551186839-9e4a19b27812?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
        }
    }
        
    .turn-white{
        font-size: 32px;
    }
    .turn-white:hover{
       
		background-position: center center;
        opacity: 0.4;
    }
    .turn-white:hover p{
        display: block;
    }
    .hint{
        display: none;
    }

    .pointer{
        cursor: pointer;
    }
</style>