<template>
  <div>
    <div class="header">
      <div class="video-container m-0">
        <video autoplay loop muted id="full-video" poster="@/assets/img/banner.jpg">
          <source src="@/assets/hiphop.mp4" type="video/mp4">
        </video>
      </div>
      <div class="p-overlay">
        <h2 class="m-0 animate__animated animate__fadeInUp">做你自己</h2>
        <div class="d-flex justify-content-center animate__animated animate__fadeInUp">
          <a href="#/set/shopping" class="btn btn-button btn-lg px-4 py-3">前往購物！</a>
        </div>
      </div>
      <HomeNavbar class="navbar-overlay"></HomeNavbar>
    </div>
        <!-- 人氣TOP10輪播 -->
    <section>
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
              <a href="#" class="text-dark font-weight-bold pointer" @click.prevent="getProduct(item.id)">{{ item.title }}</a>                                
            </div>
            <div class="bg-lighter get-product-position p-1 border border-dark">
              <a href="#" @click.prevent="getProduct(item.id)">{{ item.title }}</a>
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
              <a href="#/get_coupon" class="btn btn-button">GO<i class="fas fa-arrow-right"></i></a>    
            </div>             
          </div>
        </div>
      </div>
    </section>
      <!-- 商品分類 -->
    <section class="bg-light hidden category-wrap">
      <h2 class="text-center pt-5">商品分類</h2>
      <div class="container-fluid h-100">
        <div class="row justify-content-around animated-right height-45">
          <div class="col-md-4 position-relative turn-white-wrap mt-4" @click="goToCategory('PANTS')">   
            <div class="bg-cover h-100 turn-white pointer category-pants">
            </div>
            <p class="font-weight-bold hint">褲子</p>       
          </div>
          <div class="col-md-5 position-relative turn-white-wrap mt-4"  @click="goToCategory('TEE')">
            <div class="bg-cover h-100 turn-white pointer category-tshirt">
            </div>
            <p class="font-weight-bold hint">短Tee</p>                   
          </div>               
          <div class="col-md-3 position-relative turn-white-wrap mt-4" @click="goToCategory('SHOES')">
            <div class="bg-cover h-100 turn-white pointer category-shoes">
            </div>
            <p class="font-weight-bold hint">鞋子</p>
          </div>
        </div>
        <div class="row justify-content-around pb-5 animated-left mt-4 height-45">
          <div class="col-md-7 position-relative turn-white-wrap mb-4" @click="goToCategory('ACCESSORIES')">
            <div class="bg-cover h-100 turn-white pointer category-accessories">
            </div>
            <p class="font-weight-bold hint">配件</p>
          </div>
          <div class="col-md-5 position-relative turn-white-wrap mb-4" @click="goToCategory('JACKET')">
            <div class="bg-cover h-100 turn-white pointer category-jacket">
            </div>
            <p class="font-weight-bold hint">外套</p>
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
          <carousel class="animated" :navigationEnabled="true" :paginationEnabled="false" :scrollPerPage="false" :mouseDrag="true" :autoplay="false" :autoplayTimeout="2500" :autoplayHoverPause="false" :loop="true" :speed="3000" :adjustableHeight="false" :perPage="5" :touchDrag="true" :perPageCustom="[[300, 1], [500, 2], [767, 3], [1000, 4]]">
            <slide class="slide-width">
              <div class="card card-height-90 text-center box-shadow m-2">
                <img src="@/assets/img/outfit-1.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title font-weight-bold">誰說Hip Hop只能鬆鬆垮垮</h5>
                    <p class="card-text mb-3 ellipsis">流行趨勢說穿了就是個輪迴 ── 曾經我們流行寬鬆、配色鮮豔的美式風格，經過幾年轉變，慢慢開始穿上合身、Skinny 的服飾。從西海岸出發，日系、韓系接踵而至,
                        韓國幾位當紅的饒舌歌手或音樂人身穿「合身且用色大膽的西裝」，搭配墨鏡、棒球帽等「嘻哈配件」
                    </p>
                </div>
                <div class="card-footer bg-white">
                    <a href="#" class="btn btn-button">閱讀更多</a>
                </div>
              </div>
            </slide >
            <slide>
              <div class="card card-height-90 text-center box-shadow m-2">
                <img src="@/assets/img/outfit-2.jpg" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title font-weight-bold">屬於B-boy的帥氣戰袍</h5>
                    <p class="card-text ellipsis">80年代初期出現於美國東岸的B-Boys穿搭不外乎有Kangol漁夫帽、厚重的街頭感大金鍊和印上自己名號的項鍊，腳上配著貝殼鞋頭、綁著寬鞋帶的運動鞋，上身則是黑色運動服(有時是黑色皮革上衣)。</p>
                  </div>
                  <div class="card-footer  bg-white">
                    <a href="#" class="btn btn-button">閱讀更多</a>
                  </div>
              </div>
            </slide>
            <slide>
              <div class="card card-height-90 text-center box-shadow m-2">
                <img src="@/assets/img/outfit-3.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title font-weight-bold">各式Locker經典outfit</h5>
                  <p class="card-text ellipsis">Locking 的源頭來自於充滿派對和活力的 Funk 音樂，是相當具有表演性質的舞風，有許多基本動作也和觀眾互動或與伙伴合體有關。此舞風誕生沒多久後，發明者 Don Campbell 就組了 「The Lockers」的舞團並在電視節目走紅，為了吸引觀眾，Locker 們的經典服裝通常鮮豔亮麗且有條紋或吊帶的裝飾，現今的 Locker 也常會從中擷取元素加入自己的表演服甚至日常穿搭中！</p>
                </div>
                <div class="card-footer  bg-white">
                  <a href="#" class="btn btn-button">閱讀更多</a>
                </div>
              </div>
            </slide>
            <slide>
              <div class="card card-height-90 text-center box-shadow m-2">
                <img src="@/assets/img/outfit-4.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title font-weight-bold">Jay老師的一週穿搭分享</h5>
                  <p class="card-text ellipsis">T恤的選擇一定要寬鬆，oversize的感覺很重要。而且T恤最好選擇純色或者是有頭像、字母印花的，不要太過花哨，容易在跳舞時造成雜亂的效果。拼接色的夾克因為色彩的設計很考究，層次明顯，而用白色作為打底對比強烈，動起來視覺效果極佳。</p>
                </div>
                <div class="card-footer  bg-white">
                  <a href="#" class="btn btn-button">閱讀更多</a>
                </div>
              </div>
            </slide>
            <slide>
              <div class="card card-height-90 text-center box-shadow m-2">
                <img src="@/assets/img/outfit-5.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title font-weight-bold">回到 1990 年代！復古風潮！</h5>
                  <p class="card-text mb-3 ellipsis">這兩年時尚圈颳起90年代復古風，盛極一時的嘻哈街頭風也再度回流。不過，當年的垮褲、Oversize T恤已不再是主流，但寬鬆、好活動、崇尚自由的精神則被保留，工作褲、丹寧破壞褲、寬鬆襯衫內搭T恤成為2018街頭定番；</p>
                </div>
                <div class="card-footer  bg-white">
                  <a href="#" class="btn btn-button">閱讀更多</a>
                </div>
              </div>
            </slide>
            <slide>
              <div class="card card-height-90 text-center box-shadow m-2">
                <img src="@/assets/img/outfit-6.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title font-weight-bold">Lia Kim教你如何穿出百變造型</h5>
                  <p class="card-text ellipsis">講到韓國舞蹈界就不得不提到「Lia Kim」，不僅擁有超強舞技還幫許多知名韓團編舞可說是韓團的幕後推手，同時也是韓國知名舞蹈教室「One Million Dance Studio 」的當家老師；聽說要上她的課更是要擠破頭啊！說他是韓國「最強編舞教母」實在不為過！</p>
                </div>
                <div class="card-footer  bg-white">
                  <a href="#" class="btn btn-button">閱讀更多</a>
                </div>
              </div>
            </slide>
            <slide>
              <div class="card card-height-90 text-center box-shadow m-2">
                <img src="@/assets/img/outfit-7.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title font-weight-bold">跟著《這！就是街舞》學穿搭！</h5>
                  <p class="card-text ellipsis">都是當下熾手可熱並在街舞領域上有所造詣的明星，從目前已播出的三期來看，參賽選手也是臥虎藏龍，高手雲集精湛的舞技讓人嘆為觀止，不禁感嘆一句：「這真是人能做到的動作嗎？」自《中國有嘻哈》大熱之後，又一檔同類型綜藝《看！這就是街舞》如火如荼地開播</p>
                </div>
                <div class="card-footer  bg-white">
                  <a href="#" class="btn btn-button">閱讀更多</a>
                </div>
              </div>
            </slide>
            <slide>
              <div class="card card-height-90 text-center box-shadow m-2">
                <img src="@/assets/img/outfit-8.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title font-weight-bold">百搭帽T特輯</h5>
                  <p class="card-text ellipsis">帽T的可穿性很高，寬鬆的帽T穿起來舒適，搭配牛仔褲、破洞褲、運動褲等都很合適。而且要想穿出層次感也很簡單，做內搭或者外套都是很好地選擇。帽T的設計很簡約，百搭，不喜歡簡單的朋友可以像易烊千璽一樣選擇色塊拼接的衛衣，看起來更有設計感，個性更強。</p>
                </div>
                <div class="card-footer bg-white">
                  <a href="#" class="btn btn-button">閱讀更多</a>
                </div>
              </div>
            </slide>
          </carousel>
        </div>
    </section>
      <!-- 關於我 -->
    <section class="py-5 hidden">
        <div class="container-fluid">
            <div class="row animated-right">
                <div class="col-md-6"></div>
                <div class="col-md-6 pb-5">
                    <h2 class="text-right d-flex justify-content-center animate__animated animate__bounce font-logo">DANCING LIFE</h2>
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
import Footer from '@/components/forestage/Footer';
import HomeNavbar from '@/components/forestage/HomeNavbar';
import { mapGetters, mapActions } from 'vuex';
export default {
  components:{
    Footer,
    HomeNavbar,
  },
  data(){
    return{
      product: {},
      status:{
        loadingItem: '',
      },

    }
  },
  methods: {
    goToCategory(type){
      const vm = this;
      vm.$router.push(`/set/shopping?type=${type}`); 
    },
    getProducts(){
      this.$store.dispatch('getProducts');
    },
    getProduct(id){
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`
      vm.status.loadingItem = id;
      vm.$http.get(url).then((response) => {
          vm.product = response.data.product;
          vm.status.loadingItem = '';
          vm.$router.push(`set/shopping/${response.data.product.id}`);
      })
    },
    scroll() {
      // 捲動頁面執行動畫
      const scrollPos = $(window).scrollTop();
      const windowHeight = $(window).height();
      $('.animated').each(function animated(){
        let thisPos = $(this).offset().top;
        if((windowHeight + scrollPos)>= thisPos+100){
          $(this).addClass('fadeIn')
        }
      });
      $('.animated-left').each(function animatedLeft(){
        let thisPos = $(this).offset().top;
        if((windowHeight + scrollPos)>= thisPos+100){
          $(this).addClass('fadeInX')
        }
      });
      $('.animated-right').each(function animatedRight(){
        let thisPos = $(this).offset().top;
        if((windowHeight + scrollPos)>= thisPos+100){
          $(this).addClass('fadeInX')
        }
      });
    },
    textHidden(){
      $(function(){
      let len = 55; // 超過55個字以"..."取代
      $(".ellipsis").each(function(i){
          if($(this).text().length>len){
            $(this).attr("title",$(this).text());
            let text=$(this).text().substring(0,len-1)+"...";
            $(this).text(text);
          }
      });
      });
    }
    },
  created(){
    this.getProducts();
    this.textHidden();
    window.addEventListener('scroll', this.scroll);
  },
  computed: {
    filterProducts: function(){
      const vm = this;
      let hotProducts = [];
      vm.products.forEach(function(item){
        if(item.content === '人氣商品'){
          hotProducts.push(item);
        }
      })
      return hotProducts;
    },
    isLoading(){
      return this.$store.state.isLoading;
    },
     ...mapGetters(['products'])
  }
}
</script>