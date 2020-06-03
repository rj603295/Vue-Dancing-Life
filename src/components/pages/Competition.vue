<template>
    <div style="font-family: '微軟正黑體'">
            
        <div class="jumbotron jumbotron-fluid jumbotron-bg pt-0">
            <HomeNavbar></HomeNavbar>
        <div class="container">
            <div class="bg-lighter p-3 text-center mt-4">
                <h1 class="display-4 font-weight-bold">各地街舞比賽資訊</h1>
                <p class="lead">快準備你最帥氣的戰袍備戰吧！</p>

            </div>
            <div class="d-flex justify-content-center mt-4">
                    <select class="form-control" id="exampleFormControlSelect1" style="width: 30%" v-model="area">
                        <option selected>請選擇區域</option>
                        <option>北部</option>
                        <option>中部</option>
                        <option>南部</option>
                    </select>
                   
            </div>
            
            
        </div>
        </div>
            <div class="container" v-if="area == '北部'">
                <div class="row mb-4">
                    <div class="col-md-6">
                        <div class="box bg-cover competition-1"></div>
                    </div>
                    <div class="col-md-6 ">
                        <h3 class="mt-3">捷運盃街舞大賽</h3>
                        <ul>
                            <li>地點：台北車站</li>
                            <li>日期：12/6</li>
                            <li>報名方式：詳見官網</li>
                        </ul>
                         <button class="btn btn-warning btn-place">了解更多</button>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-md-6">
                        <div class="box bg-cover competition-2"></div>
                    </div>
                    <div class="col-md-6">
                        <h3 class="mt-3">Hip Hop International Taiwan</h3>
                        <ul>
                            <li>地點：台北花博公園舞蝶館</li>
                            <li>日期：12/6</li>
                            <li>報名方式：詳見官網</li>
                        </ul>
                        <button class="btn btn-warning btn-place">了解更多</button>
                    </div>
                   
                    
                </div>
                <div class="row mb-4">
                    <div class="col-md-6">
                        <div class="box bg-cover competition-3"></div>
                    </div>
                    <div class="col-md-6">
                        <h3 class="mt-3">OBS BATTLE VOL. 13</h3>
                        <ul>
                            <li>地點：台北體育館</li>
                            <li>日期：11/1</li>
                            <li>報名方式：詳見官網</li>
                        </ul>
                        <button class="btn btn-warning btn-place">了解更多</button>
                    </div>
                </div>
            </div>
            <div class="container" v-if="area == '中部'">
                <div class="row mb-4">
                    <div class="col-md-6">
                        <div class="box bg-cover competition-4"></div>
                    </div>
                    <div class="col-md-6">
                        <h3 class="mt-3">台中市亞洲街舞邀請賽</h3>
                        <ul>
                            <li>地點：台灣大道市政大樓廣場</li>
                            <li>日期：11/1</li>
                            <li>報名方式：詳見官網</li>
                            
                        </ul>
                        <button class="btn btn-warning btn-place">了解更多</button>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-md-6">
                        <div class="box bg-cover competition-5"></div>
                    </div>
                    <div class="col-md-6">
                        <h3 class="mt-3">HIGH SCHOOL FIGHT高校街舞大賽</h3>
                        <ul>
                            <li>地點：台中市健行國小禮堂(台中市北區健行路666號)</li>
                            <li>日期：12/29</li>
                            <li>報名方式：詳見官網</li>
                        </ul>
                        <button class="btn btn-warning btn-place">了解更多</button>
                    </div>
                </div>
            </div>
            <div class="container" v-if="area == '南部'">
                <div class="row mb-4">
                    <div class="col-md-6">
                        <div class="box bg-cover competition-6"></div>
                    </div>
                    <div class="col-md-6">
                        <h3 class="mt-3">HOT街舞賽</h3>
                        <ul>
                            <li>地點：高雄新光三越百貨</li>
                            <li>日期：7/28</li>
                            <li>報名方式：詳見官網</li>
                        </ul>
                        <button class="btn btn-warning btn-place">了解更多</button>
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
    data() {
        return {
            area: '',
        }
    },

}
</script>
<style scoped lang="scss">
    .bg-cover{
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
    }
    .jumbotron-bg{
        // min-height: 400px;
        background-position: center center;
        background-size: cover;
        background-image: url(../../assets/img/jumbotron-bg.jpg)
    }
    .bg-lighter{
        background-color: rgba(255, 255, 255, 0.5);
    }
    .box{
        height: 300px;
    }
    .btn-place{
        position: absolute;
        right:0;
        bottom:0;
        margin-right: 15px;
    }
    ol, ul {
        list-style: none;
    }
    .competition-1{
        background-image: url(../../assets/img/competition-1.jpg)
    }
    .competition-2{
        background-image: url(../../assets/img/competition-2.jpg)
    }
    .competition-3{
        background-image: url(../../assets/img/competition-3.jpg)
    }
    .competition-4{
        background-image: url(../../assets/img/competition-4.jpg)
    }
    .competition-5{
        background-image: url(../../assets/img/competition-5.jpg)
    }
    .competition-6{
        background-image: url(../../assets/img/competition-6.jpg)
    }
    
</style>