<template>
  <div class="home">
    <main class="mb-5">
      <section
        class="bg-img -mt-8 h-767"
        style="background-image: url(http://fotricle.rocket-coding.com:80/Upload/brand/info/20201015110125.jpg);"
      >
      <div class="container mx-auto pt-40">
        <p class="text-thirdcolor-400 text-shadow text-4xl text-left mb-3"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-once="true"
        >為你發掘周遭的美食，追蹤喜愛的餐車</p>
        <p class="text-thirdcolor-400 text-shadow text-4xl text-left mb-3"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="500"
        data-aos-once="true"
        >不需排隊，線上快速點餐</p>
        <p class="text-thirdcolor-400 text-shadow text-4xl text-left"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="900"
        data-aos-once="true"
        >美食隨點即做</p>
      </div>
      </section>
        <section class="py-8">
          <h3 class="title mb-8"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-once="true"
          >找尋美味餐點三步驟</h3>
          <ul class="flex flex-col md:flex-row justify-evenly items-center mb-20">
            <li
              class="flex w-1/2 md:w-1/5 justify-center items-center flex-col p-5 mx-3 md:mb-0 mb-5 rounded-lg bg-thirdcolor-300 shadow-xl"
              data-aos="fade"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-once="true"
            >
              <img src="/img/undraw_account_490v.svg" class="h-48 w-48" alt />
              <p class="text-2xl my-3 font-medium text-secondcolor-600">成為會員</p>
              <p class="text-center">只需要電子信箱註冊，即可馬上享用便利的線上訂餐功能。</p>
            </li>
            <li
              class="flex w-1/2 md:w-1/5 justify-center items-center flex-col p-5 mx-3 mb-5 md:mb-20 rounded-lg bg-thirdcolor-300 shadow-xl"
              data-aos="fade"
              data-aos-duration="800"
              data-aos-delay="600"
              data-aos-once="true"
            >
              <img src="/img/undraw_Search_1px8.svg" class="h-48 w-48" alt />
              <p class="text-2xl my-3 font-medium text-secondcolor-600">尋找餐車</p>
              <p class="text-center">可依照餐車分類及地圖定位找尋喜歡的餐車，並查詢是否營業及加入追蹤名單。</p>
            </li>
              <li
                class="flex w-1/2 md:w-1/5 justify-center items-center flex-col p-5 mx-3 mb-5 md:mb-0 rounded-lg bg-thirdcolor-300 shadow-xl"
                data-aos="fade"
                data-aos-duration="800"
                data-aos-delay="900"
                data-aos-once="true"
              >
                <img src="/img/undraw_Booking_re_gw4j.svg" class="h-48 w-48" alt />
                <p class="text-2xl my-3 font-medium text-secondcolor-600">點選餐點</p>
                <p class="text-center">選取餐點後，可選擇使用 LinePay 或現金付款，訂單成立後，等候餐車通知即可前往取餐，享用美味餐點。</p>
              </li>
          </ul>
          <router-link class="btn-main px-5 py-2 text-xl block mx-auto w-1/5" to="/Search"
          data-aos="zoom-in-down"
          data-aos-duration="400"
          data-aos-delay="100"
          data-aos-once="true"
          >尋找餐車</router-link>
        </section>
      <section class="py-8 bg-white">
        <h3 class="title mb-8"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-delay="100"
        data-aos-once="true"
        >成為餐車業主五步驟</h3>
        <ul class="flex flex-col md:flex-row justify-evenly items-center">
          <li
            class="flex w-1/2 md:w-1/5 justify-center items-center flex-col p-5 mx-3 mb-5 md:mb-0 rounded-lg bg-thirdcolor-300 shadow-xl"
            data-aos="fade"
            data-aos-duration="800"
            data-aos-delay="500"
            data-aos-once="true"
          >
            <img src="/img/undraw_Portfolio_re_qwm5.svg" class="h-48 w-48" alt />
            <p class="text-2xl my-3 font-medium text-secondcolor-600">成為會員</p>
            <p class="text-center">使用電子信箱及粉絲專頁網址進行註冊，經過人工認證後 (1-3 天工作天) 即可上架產品及填寫當周行事曆。</p>
          </li>
          <li
            class="flex w-1/2 md:w-1/5 justify-center items-center flex-col p-5 mx-3 mb-5 md:mb-20 rounded-lg bg-thirdcolor-300 shadow-xl"
            data-aos="fade"
            data-aos-duration="800"
            data-aos-delay="800"
            data-aos-once="true"
          >
            <img src="/img/undraw_healthy_options_sdo3.svg" class="h-48 w-48" alt />
            <p class="text-2xl my-3 font-medium text-secondcolor-600">上架餐點</p>
            <p class="text-center">上架你的專屬商品，提供給消費者訂購。</p>
          </li>
          <li
            class="flex w-1/2 md:w-1/5 justify-center items-center flex-col p-5 mx-3 mb-5 md:mb-32 rounded-lg bg-thirdcolor-300 shadow-xl"
            data-aos="fade"
            data-aos-duration="800"
            data-aos-delay="1100"
            data-aos-once="true"
          >
            <img src="/img/undraw_product_tour_foyt.svg" class="h-48 w-48" alt />
            <p class="text-2xl my-3 font-medium text-secondcolor-600">接收訂單</p>
            <p class="text-center">消費者訂購完畢後，會通過網路訂單下訂，可選擇是否接單。現場也可使用 POS 系統添加現場訂單並記錄。</p>
          </li>
          <li
            class="flex w-1/2 md:w-1/5 justify-center items-center flex-col p-5 mx-3 mb-5 md:mb-20 rounded-lg bg-thirdcolor-300 shadow-xl"
            data-aos="fade"
            data-aos-duration="800"
            data-aos-delay="1400"
            data-aos-once="true"
          >
            <img src="/img/undraw_reviews_lp8w.svg" class="h-48 w-48" alt />
            <p class="text-2xl my-3 font-medium text-secondcolor-600">消費者回饋</p>
            <p class="text-center">消費者享用完產品後，會針對服務及餐點做出評價，並回饋給業主，用於改善業績。</p>
          </li>
          <li
            class="flex w-1/2 md:w-1/5 justify-center items-center flex-col p-5 mx-3 mb-5 md:mb-0 rounded-lg bg-thirdcolor-300 shadow-xl"
            data-aos="fade"
            data-aos-duration="800"
            data-aos-delay="1700"
            data-aos-once="true"
          >
            <img src="/img/undraw_finance_0bdk.svg" class="h-48 w-48" alt />
            <p class="text-2xl my-3 font-medium text-secondcolor-600">檢視業績</p>
            <p class="text-center">結束營業後，幫你統計出當日營業額及訂單狀況，分析營業地點是否合適，讓業績更進一步。</p>
          </li>
        </ul>
      </section>
      <section class="py-8">
        <h3 class="title mb-8"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-delay="500"
        data-aos-once="true"
        >加入我們</h3>
        <div class="flex flex-col md:flex-row justify-between container mx-auto">
          <div style="background-image: url(http://fotricle.rocket-coding.com:80/Upload/brand/info/20201015110108.jpg);" class="bg-img w-full md:w-1/2 h-96"></div>
          <div class="text-left w-full md:w-1/2 pt-5 pl-5 text-xl flex-col flex justify-between">
            <div>
              <div
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="800"
              data-aos-once="true"
              >
                <p class="mb-2">喜歡的餐車，營業時間跟地點不固定嗎</p>
                <p class="mb-2">翻遍社群軟體還是找不到想要的資訊</p>
                <p class="mb-5 font-semibold">在 Fotricle，各種餐車隨你選擇，在網上輕鬆點餐</p>
              </div>
              <div
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="1000"
              data-aos-once="true"
              >
                <p class="mb-2">總是被詢問營業時間跟地點嗎</p>
                <p class="mb-2">發布的菜單，總是華麗的被忽略</p>
                <p class="font-semibold">在 Fotricle，擁有專屬後台，填寫每周行程及上架商品，即可顯示在個人專屬頁面</p>
              </div>
            </div>
            <p class="text-3xl font-semibold mb-5"
            data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="1300"
              data-aos-once="true"
            >Fotricle，為餐車而生的網路平台
            <router-link class="btn-second ml-3 px-5 py-2 text-xl w-1/5" to="/Register"
          data-aos="zoom-in-down"
          data-aos-duration="400"
          data-aos-delay="100"
          data-aos-once="true"
          >點擊註冊</router-link>
            </p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>

export default {
  data () {
    return {
      map: null,
      marker: [],
      geocoder: '',
      infowindow: ''
    }
  },
  created () {
    this.getIdentity()
  },
  name: 'Home',
  props: ['brandList'],
  methods: {
    getIdentity () {
      this.$emit('getIdentity')
    },
    getOrderList () {
      this.$emit('getOrderList')
    }
  },
  mounted () {
    window.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop
      switch (true) {
        case scrollTop < 100 :
          break
      }
    }, true)
  }
}
</script>
