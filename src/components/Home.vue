<template>
    <div style="font-family: '微軟正黑體';">
        
        <div class="header position-relative w-100">

                <div class="video-container m-0">
                    <video autoplay loop muted id="full-video" poster="https://images.unsplash.com/photo-1551186839-9e4a19b27812?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80">
                        <source src="../assets/hiphop.mp4" type="video/mp4">
                    </video>
                </div>
                <div class="p-overlay">
                    <h2 class="m-0 animate__animated animate__fadeInUp">做你自己</h2>
                </div>
                <HomeNavbar></HomeNavbar>

        </div>
         <!-- 人氣TOP10輪播 -->
        <section class="hidden">
            <div class="animated">
                <h2 class="text-center py-5">人氣精選TOP10</h2>
            </div>
            <carousel class="animated" :paginationEnabled="false" :scrollPerPage="false"
          :mouseDrag="true" :autoplay="true" :autoplayTimeout="2500" :autoplayHoverPause="false"
          :loop="true" :speed="3000" :adjustableHeight="false" :perPage="5" :touchDrag="true" :perPageCustom="[[300, 1], [500, 2], [767, 3], [1000, 4], [1366, 5]]">
                <slide v-for="item in filterProducts" :key="item.id">

                            <div class="bottom-move position-relative d-flex justify-content-center">
                                <img :src="item.imageUrl" alt="" class="img-height">
                                <div class="bottom text-center">
                                    <a href="#" class="text-white font-weight-bold pointer" @click.prevent="getProduct(item.id)">{{item.title}}</a>                                
                                </div>
                                <div class="bg-lighter get-product-position p-1 border border-dark">
                                    <a href="#" @click.prevent="getProduct(item.id)">{{item.title}}</a>
                                </div>
                            </div>
                        
                   
                </slide>
            </carousel>
        </section>
        <!-- 優惠券 -->
        <section class="hidden">
            <div class="couponbg bg-cover d-flex align-items-center justify-content-center mt-5 animated">         
                <div class="container-fluid">
                    <div class="bg-lighter m-5 d-flex justify-content-center py-3 px-3 align-items-center">
                        <h6 class="text-center font-weight-bold font">Get 15%OFF COUPON!!</h6>
                        <div class="d-flex align-items-center">
                            <a href="#/get_coupon" class="btn btn-warning">GO<i class="fas fa-arrow-right"></i></a>    
                        </div>
                                        
                    </div>
                </div>
            </div>
        </section>
        <!-- 商品分類 -->
        <section class="bg-light hidden">
            <div>
                <h2 class="text-center pt-5">商品分類</h2>
            </div>
            <div class="container-fluid">
                <div class="row justify-content-around animated-right">
                    <div class="col-md-3 position-relative turn-white-wrap" @click="to('PANTS')">   
                        <div class="bg-cover box turn-white mt-5 pointer" style="background-image: url('http://stussy-wordpress-production2.s3.amazonaws.com/assets/img-32.jpg')">
                        </div>
                        <p class="font-weight-bold hint">Pants</p>
                    </div>
                    <div class="col-md-6 position-relative turn-white-wrap"  @click="to('TEE')">
                        <div class="bg-cover box turn-white mt-5 pointer " style="background-image: url('https://images.unsplash.com/photo-1549937055-8e09ab35cf64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')">
                        </div>
                        <p class="font-weight-bold hint">T-shirt</p>
                    </div>
                    
                    <div class="col-md-2 position-relative turn-white-wrap" @click="to('SHOES')">
                        <div class="bg-cover box turn-white mt-5 pointer" style="background-image: url('https://images.unsplash.com/photo-1532471965572-092fb677a6a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')">
                        </div>
                        <p class="font-weight-bold hint">Shoes</p>
                    </div>

                </div>
                <div class="row justify-content-around pb-5 animated-left">
                    <div class="col-md-7 position-relative turn-white-wrap" @click="to('ACCESSORIES')">
                        <div class="bg-cover box turn-white mt-5 pointer" style="background-image: url('https://images.unsplash.com/photo-1563191735-862765edd4fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80')">
                        </div>
                        <p class="font-weight-bold hint">Accessories</p>
                    </div>
                    <div class="col-md-4 position-relative turn-white-wrap" @click="to('JACKET')">
                        <div class="bg-cover box turn-white mt-5 pointer" style="background-image: url('https://images.unsplash.com/photo-1488676760857-e66012daf47a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1173&q=80')">
                        </div>
                        <p class="font-weight-bold hint">Jacket</p>
                    </div>
                </div>


            </div>

        </section>
        <!-- 穿搭特輯 -->
        <section class="pb-5 hidden">
            <div>
                <h2 class="animated text-center py-5">每週穿搭分享</h2>
            </div>
            <div class="container">

                <!--Carousel Wrapper-->
            <div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">



            

            <!--Slides-->
            <div class="carousel-inner" role="listbox">
                <!--First slide-->
                <div class="carousel-item active">
                    <div class="row">
                        <div class="col-md-3 mb-4 animated" style="float:left">
                        <div class="card text-center h-100 box-shadow">
                        <img src="https://images.unsplash.com/photo-1512090421650-1ba94830f7b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title font-weight-bold">誰說Hip Hop只能鬆鬆垮垮</h5>
                            <p class="card-text mb-3">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer  bg-white">
                            <a href="#" class="btn btn-warning">See More</a>
                        </div>
                        </div>
                </div>

                <div class="col-md-3 mb-4 animated" style="float:left">
                        <div class="card text-center h-100 box-shadow">
                        <img src="https://images.unsplash.com/photo-1511929958725-bd96f4db195f?ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title font-weight-bold">屬於B-boy的帥氣戰袍</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer  bg-white">
                                <a href="#" class="btn btn-warning">See More</a>
                        </div>
                        </div>
                    </div>

                <div class="col-md-3 mb-4 animated" style="float:left">
                        <div class="card text-center h-100 box-shadow">
                        <img src="https://static.juksy.com/files/articles/47906/567a8ed2932f9.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title font-weight-bold">各式Locker經典outfit</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer  bg-white">
                            <a href="#" class="btn btn-warning">See More</a>
                        </div>
                        </div>
                    </div>
                
                <div class="col-md-3 mb-4 animated" style="float:left">
                        <div class="card text-center h-100 box-shadow">
                            <img src="https://images.unsplash.com/photo-1548123378-bde4eca81d2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title font-weight-bold">Jay老師的一週穿搭分享</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer  bg-white">
                            <a href="#" class="btn btn-warning">See More</a>
                        </div>
                        </div>
                    </div>
                    </div>
                

                </div>
                <!--/.First slide-->

                <!--Second slide-->
                <div class="carousel-item">

                <div class="row">
                        <div class="col-md-3 mb-4 animated" style="float:left">
                        <div class="card text-center h-100 box-shadow">
                        <img src="https://i1.kknews.cc/SIG=2a37tal/312r000no47nr68553q0.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title font-weight-bold">回到 1990 年代！復古風潮！</h5>
                            <p class="card-text mb-3">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer  bg-white">
                            <a href="#" class="btn btn-warning">See More</a>
                        </div>
                        </div>
                </div>

                <div class="col-md-3 mb-4 animated" style="float:left">
                        <div class="card text-center h-100 box-shadow">
                        <img src="https://cdn-static.farfetch-contents.com/cms-cm/cz/media/217266/data/b9d996d86672a115df05d5f9f71adb2a.jpg?ratio=16x9_under&minWidth=1142" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title font-weight-bold">Lia Kim教你如何穿出百變造型</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer  bg-white">
                                <a href="#" class="btn btn-warning">See More</a>
                        </div>
                        </div>
                    </div>

                <div class="col-md-3 mb-4 animated" style="float:left">
                        <div class="card text-center h-100 box-shadow">
                        <img src="https://pic.765news.com/upload/images/article/20190529/2019052915524790905.jpeg" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title font-weight-bold">跟著《這！就是街舞》學穿搭！</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer  bg-white">
                            <a href="#" class="btn btn-warning">See More</a>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb-4 animated" style="float:left">
                        <div class="card text-center h-100 box-shadow">
                        <img src="https://images.unsplash.com/photo-1504283118898-1bc1e87f52a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=906&q=80" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title font-weight-bold">百搭帽T特輯</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer bg-white">
                            <a href="#" class="btn btn-warning">See More</a>
                        </div>
                        </div>
                    </div>
                
                    </div>

                </div>
                <!--/.Second slide-->
            </div>
            <!--/.Slides-->
            <!--Controls-->
            <div class="controls-top d-flex justify-content-center">
                <a class="btn-floating" href="#multi-item-example" data-slide="prev"><i class="fas fa-chevron-circle-left fa-3x text-warning"></i></a>
                <a class="btn-floating" href="#multi-item-example" data-slide="next"><i class="fas fa-chevron-circle-right fa-3x text-warning"></i></a>
            </div>
            <!--/.Controls-->
            </div>
        <!--/.Carousel Wrapper-->
            </div>
        </section>

        <!-- 關於我 -->
        <section class="py-5 hidden">
            <div class="container-fluid">
                <div class="row animated-right">
                    <div class="col-md-6"></div>
                    <div class="col-md-6 pb-5">
                        <h2 class="text-right d-flex justify-content-center animate__animated animate__bounce">Dancing Life</h2>
                        <p class="text-right d-flex justify-content-center">跳舞即生活<br>用自己的方式和世界對話</p>
                    </div>
                </div>
                <div class="row animated-left">
                    <div class="col-md-6 pt-5">
                        <p class="text-left d-flex justify-content-center">每件衣服在不同的人身上都會有不一樣的個性<br>
                    也會呈現出不一樣的舞蹈姿態<br>我們挑選各式各樣的衣物和配件<br>期待熱愛街舞的你能穿出自己的風格<br>創造屬於自己的舞蹈世界</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 購物FAQ -->
        <section class="bg-cover faqbg hidden">
            <div class="py-5 d-flex justify-content-center">
                <span class="px-5 py-2 h6">購物前請先詳閱購物流程</span>
            </div>
        </section>

        
         <Footer></Footer>

    </div>
</template>

<script>
import $ from 'jquery';
import Footer from './Footer';
import HomeNavbar from './HomeNavbar'

export default {
    components:{
       Footer,
       HomeNavbar,
    },

    data(){
        return{
            products: [],
            isLoading: false,
            product: {},
            status:{
                loadingItem: '',
            },
        }
    },
    
    methods: {
       
        to(type){
            const vm = this;
            vm.$router.push(`/set/shopping?type=${type}`); 
        },
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
                vm.$router.push(`set/shopping/${response.data.product.id}`);
            })
        },
        scroll() {
            // 捲動頁面執行動畫
            const scrollPos = $(window).scrollTop();
            const windowHeight = $(window).height();
            $('.animated').each(function animated(){
                var thisPos = $(this).offset().top;
                if((windowHeight + scrollPos)>= thisPos+100){
                    $(this).addClass('fadeIn')
                }
            });
            $('.animated-left').each(function animatedLeft(){
                var thisPos = $(this).offset().top;
                if((windowHeight + scrollPos)>= thisPos+100){
                    $(this).addClass('fadeInX')
                }
            });
            $('.animated-right').each(function animatedRight(){
                var thisPos = $(this).offset().top;
                if((windowHeight + scrollPos)>= thisPos+100){
                    $(this).addClass('fadeInX')
                }
            });
        },
    },
    created(){
        this.getProducts();
        window.addEventListener('scroll', this.scroll);
    },
    // destroyed() {
    //     window.removeEventListener('scroll', this.scroll);
    // },
    computed: {
        filterProducts: function(){
             var hotProducts = [];
             
            this.products.forEach(function(item){
          if(item.content == '人氣商品'){
            hotProducts.push(item);
          }
        })
        return hotProducts;
        }
    }
}
</script>

<style scoped lang="scss">

    .logo{
        width: 200px;
        height: auto;
    }
    .bg-cover{
        background-size: cover;
        background-position: center center;
    }
    .box{
        height: 300px;
    }
    .header{
        width: 100%;
        height: 100vh;
        opacity: 0.7;
        background-size: cover;
        background-position: center center;
        background-image: url('https://images.unsplash.com/photo-1551186839-9e4a19b27812?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
    }
    .video-container{
        position: absolute;
        display: none;

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
        z-index: 1000;
        width: 100%;
    }
    .p-overlay{
        position: absolute;
        z-index: 9999;
        color: white;
        font-weight: bold;
        font-family:'微軟正黑體';
        top:50%;
        left: 50%;
        transform: translate(-50%, -50%);
        h2{
            font-weight: bold;
            font-size: 10vw;
            text-align: center;
        }
    }
    @media(max-width: 414px){
        .p-overlay h2{
            font-size: 22vw;
        }
    }
    /* ipad */
    @media(max-width: 811px) and (min-width: 768px){
        .p-overlay h2{
            font-size: 22vw;
        }
    }
    @media(max-width: 811px) and (min-width: 768px){
        .p-overlay h2{
            font-size: 22vw;
        }
    }
    @media(max-width: 1366px) and (min-width: 1024px){
        .p-overlay h2{
            font-size: 12vw;
        }
    }
    /* 電腦版首頁背景改成影片 */
    @media(min-width: 1366px){
        .video-container{
            display: block;
        }
        .header{
            background-image: none;
            opacity: 1;
        }

    }
    .turn-white{
        font-size: 32px;
        &:hover{
            background-position: center center;
            opacity: 0.5;
        }
        &:hover .hint{
            display: block;
            opacity: 1;
        }
    }
    .turn-white-wrap{
        &:hover p{
            display: block;
        }
    }
    .hint{
        display: none;
        position: absolute;
        z-index: 9999;
        top:50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 32px;
    }
    .pointer{
        cursor: pointer;
    }
    .navbar-toggler-icon{
        color: white;
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
    .faqbg{
        background-image: url('https://content.asos-media.com/-/media/homepages/unisex/service-messages/covid-19/dt_hero_live_banner_cv19_2880x850.jpg');
        span{
            background: black;
            color: white;
            &:hover{
                background: white;
                color: black;
            }
        }
    }
    .couponbg{
        background-image: url('https://content.asos-media.com/-/media/homepages/unisex/homepages/2020/04_april/summer-promo/sticker/dt_hero_live_banner_summer-sticker_2_still.jpg');
    }
    .bottom{
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 10%;
        background: gray;
        opacity: 0.7;
        overflow: hidden;
        transform: translateY(110%);
        transition: 0.5s;
    }
    .bottom-move{
        &:hover .bottom{
            transform: translateY(0px);
            transition: 0.5s;
        }
    }
    .animated{
        opacity: 0;
        transition: all 2s;
        transform: translateY(10%);
    }
    .animated-left{
        opacity: 0;
        transition: all 2s;
        transform: translateX(-30%);
    }
    
    .animated-right{
        opacity: 0;
        transition: all 2s;
        transform: translateX(30%);
    }
    .fadeIn{
        opacity: 1;
        transform: translateY(0px);
    }
    .fadeInX{
        opacity: 1;
        transform: translateX(0px);
    }
    .hidden{
        overflow: hidden;
    }
    .big{
        &:hover{
            transform: scale(1.1);
            transition: 0.5s;
        }
    }
    .img-height{
        height: 300px;
    }
    .font{
        font-size: 2vw;
    }
    .get-product-position{
        position: absolute;
        bottom: 0;
        display: none;
        a{
            color: black;
        }
    }
    @media(max-width: 1366px){
        // .img-height{
        //     height: 200px;
        // }
        .hint{
            display: block;
        }
        .turn-white{
            opacity: 0.5;
        }

        .bottom{
            display: none;
        }
        .get-product-position{
            display: block;
        }
    }
    @media(max-width: 767px){
        // .img-height{
        //     height: 175px;
        // }
    }
    @media(max-width: 414px){
        .font{
            font-size: 5vw;
        }
    }
</style>