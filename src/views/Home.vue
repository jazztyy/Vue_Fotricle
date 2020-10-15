<template>
  <div class="home">
    <main class="mb-5">
      <section
        class="bg-img -mt-8 h-767"
        style="background-image: url(http://fotricle.rocket-coding.com:80/Upload/brand/info/20201015110125.jpg);"
      >
      </section>
      <section class="bg-white py-8">
        <h3 class="title mb-8">找尋美味餐車三步驟</h3>
        <ul class="flex flex-col md:flex-row justify-evenly items-center mb-20">
          <li class="flex w-1/2 md:w-1/5 justify-center items-center flex-col p-5 mx-3 md:mb-0 mb-5 rounded-lg bg-thirdcolor-300 shadow-xl">
            <img src="/img/undraw_account_490v.svg" class="h-48 w-48" alt="">
            <p class="text-2xl my-3 font-medium text-secondcolor-600">成為會員</p>
            <p class="text-center">只需要電子信箱註冊，即可馬上享用便利的線上訂餐功能。</p>
          </li>
          <li class="flex w-1/2 md:w-1/5 justify-center items-center flex-col p-5 mx-3 mb-5 md:mb-20 rounded-lg bg-thirdcolor-300 shadow-xl">
            <img src="/img/undraw_Search_1px8.svg" class="h-48 w-48" alt="">
            <p class="text-2xl my-3 font-medium text-secondcolor-600">尋找餐車</p>
            <p class="text-center">可依照餐車分類及地圖定位找尋喜歡的餐車，並查詢是否營業及加入追蹤名單。</p>
          </li>
          <li class="flex w-1/2 md:w-1/5 justify-center items-center flex-col p-5 mx-3 mb-5 md:mb-0 rounded-lg bg-thirdcolor-300 shadow-xl">
            <img src="/img/undraw_Booking_re_gw4j.svg" class="h-48 w-48" alt="">
            <p class="text-2xl my-3 font-medium text-secondcolor-600">點選餐點</p>
            <p class="text-center">選取餐點後，可選擇使用 LinePay 或現金付款，訂單成立後，等候餐車通知即可前往取餐，享用美味餐點。</p>
          </li>
        </ul>
        <router-link class="btn-main px-5 py-2 text-xl block mx-auto w-1/5" to="/Search">尋找餐車</router-link>
      </section>
      <section class="py-8">
        <h3 class="title mb-8">成為餐車業主五步驟</h3>
        <ul class="flex flex-col md:flex-row justify-evenly items-center">
          <li class="flex w-1/2 md:w-1/5 justify-center items-center flex-col p-5 mx-3 mb-5 md:mb-0 rounded-lg bg-thirdcolor-300 shadow-xl">
            <img src="/img/undraw_Portfolio_re_qwm5.svg" class="h-48 w-48" alt="">
            <p class="text-2xl my-3 font-medium text-secondcolor-600">成為會員</p>
            <p class="text-center">使用電子信箱及粉絲專頁網址進行註冊，經過人工認證後 (1-3 天工作天) 即可上架產品及填寫當周行事曆。</p>
          </li>
          <li class="flex w-1/2 md:w-1/5 justify-center items-center flex-col p-5 mx-3 mb-5 md:mb-20 rounded-lg bg-thirdcolor-300 shadow-xl">
            <img src="/img/undraw_healthy_options_sdo3.svg" class="h-48 w-48" alt="">
            <p class="text-2xl my-3 font-medium text-secondcolor-600">上架餐點</p>
            <p class="text-center">上架你的專屬商品，提供給消費者訂購。</p>
          </li>
          <li class="flex w-1/2 md:w-1/5 justify-center items-center flex-col p-5 mx-3 mb-5 md:mb-32 rounded-lg bg-thirdcolor-300 shadow-xl">
            <img src="/img/undraw_product_tour_foyt.svg" class="h-48 w-48" alt="">
            <p class="text-2xl my-3 font-medium text-secondcolor-600">接收訂單</p>
            <p class="text-center">消費者訂購完畢後，會通過網路訂單下訂，可選擇是否接單。現場也可使用 POS 系統添加現場訂單並記錄。</p>
          </li>
          <li class="flex w-1/2 md:w-1/5 justify-center items-center flex-col p-5 mx-3 mb-5 md:mb-20 rounded-lg bg-thirdcolor-300 shadow-xl">
            <img src="/img/undraw_reviews_lp8w.svg" class="h-48 w-48" alt="">
            <p class="text-2xl my-3 font-medium text-secondcolor-600">消費者回饋</p>
            <p class="text-center">消費者享用完產品後，會針對服務及餐點做出評價，並回饋給業主，用於改善業績。</p>
          </li>
          <li class="flex w-1/2 md:w-1/5 justify-center items-center flex-col p-5 mx-3 mb-5 md:mb-0 rounded-lg bg-thirdcolor-300 shadow-xl">
            <img src="/img/undraw_finance_0bdk.svg" class="h-48 w-48" alt="">
            <p class="text-2xl my-3 font-medium text-secondcolor-600">檢視業績</p>
            <p class="text-center">結束營業後，幫你統計出當日營業額及訂單狀況，分析營業地點是否合適，讓業績更進一步。</p>
          </li>
        </ul>
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
  }
}
</script>
