<template>
  <div class="home">
    <carousel
      :per-page="1"
      :mouse-drag="true"
      :autoplayHoverPause="true"
      :autoplayTimeout="3000"
      :autoplay="true"
      :loop="true"
      :scrollPerPage="false"
      :paginationEnabled="false"
    >
      <slide
        v-for="brand of brandList"
        :key="brand.Id"
        :style="{backgroundImage: 'url(' + brand.CarImage + ')' }"
        class="w-full relative bg-img flex flex-col justify-center items-center bg-thirdcolor-400 rounded-lg mb-3 shadow-xl max-h-1/3"
      >
        <a class="touch z-30"></a>
        <div class="mask"></div>
        <div class="flex flex-row-reverse justify-center py-10 h-full relative z-20">
          <h2 class="text-thirdcolor-500 rl text-5xl self-start">{{ brand.BrandName }}</h2>
          <p class="text-thirdcolor-400 rl px-1 text-xl max-h-3/4">{{ brand.BrandStory }}</p>
        </div>
      </slide>
    </carousel>
    <main class="mb-5">
      <section>
        <h3 class="title">找尋美味餐車三步驟</h3>
        <ul class="flex justify-evenly">
          <li class="flex justify-center items-center flex-col px-3 mx-3 rounded-lg bg-thirdcolor-400 shadow-xl">
            <img src="/img/undraw_account_490v.svg" class="h-48 w-48" alt="">
            <p class="text-2xl my-3">成為會員</p>
            <p></p>
          </li>
          <li class="flex justify-center items-center flex-col px-3 mx-3 rounded-lg bg-thirdcolor-400 shadow-xl">
            <img src="/img/undraw_Search_1px8.svg" class="h-48 w-48" alt="">
            <p class="text-2xl my-3">尋找餐車</p>
          </li>
          <li class="flex justify-center items-center flex-col px-3 mx-3 rounded-lg bg-thirdcolor-400 shadow-xl">
            <img src="/img/undraw_Booking_re_gw4j.svg" class="h-48 w-48" alt="">
            <p class="text-2xl my-3">點選餐點</p>
          </li>
        </ul>
      </section>
      <section>
        <h3 class="title">成為餐車業主五步驟</h3>
        <ul class="flex justify-evenly">
          <li class="flex justify-center items-center flex-col px-3 mx-3 rounded-lg bg-thirdcolor-400 shadow-xl">
            <img src="/img/undraw_Portfolio_re_qwm5.svg" class="h-48 w-48" alt="">
            <p class="text-2xl my-3">成為會員</p>
          </li>
          <li class="flex justify-center items-center flex-col px-3 mx-3 rounded-lg bg-thirdcolor-400 shadow-xl">
            <img src="/img/undraw_healthy_options_sdo3.svg" class="h-48 w-48" alt="">
            <p class="text-2xl my-3">上架餐點</p>
          </li>
          <li class="flex justify-center items-center flex-col px-3 mx-3 rounded-lg bg-thirdcolor-400 shadow-xl">
            <img src="/img/undraw_product_tour_foyt.svg" class="h-48 w-48" alt="">
            <p class="text-2xl my-3">接收訂單</p>
          </li>
          <li class="flex justify-center items-center flex-col px-3 mx-3 rounded-lg bg-thirdcolor-400 shadow-xl">
            <img src="/img/undraw_reviews_lp8w.svg" class="h-48 w-48" alt="">
            <p class="text-2xl my-3">消費者回饋</p>
          </li>
          <li class="flex justify-center items-center flex-col px-3 mx-3 rounded-lg bg-thirdcolor-400 shadow-xl">
            <img src="/img/undraw_finance_0bdk.svg" class="h-48 w-48" alt="">
            <p class="text-2xl my-3">檢視業績</p>
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

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
    this.getLocation()
  },
  components: {
    Carousel,
    Slide
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
