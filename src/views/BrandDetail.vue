<template>
  <div>
    <div
      class="relative flex items-center bg-img h-auto py-10"
      style="background-image: url(http://fotricle.rocket-coding.com:80/Upload/customer/20200920104620.jpg?Id=undefined)"
    >
      <div class="mask"></div>
      <div
        class="container mx-auto flex flex-wrap items-center justify-between w-4/5 relative z-10 text-thirdcolor-400"
      >
        <div class="w-full md:w-2/3">
          <p class="font-semibold text-6xl">{{ brand.BrandName }}</p>
          <div class="pb-2">
            <star-rating
              v-model="allRating"
              :read-only="true"
              :rating="0.1"
              :show-rating="false"
              :star-size="35"
              inactive-color="#e2e8f000"
              :rounded-corners="true"
              :round-start-rating="false"
            ></star-rating>
          </div>
          <p class="text-lg pb-2">本日營業時間：{{ openTime }}</p>
          <p class="text-lg pb-2">訂購專線：{{ brand.PhoneNumber }}</p>
          <div>
            <button class="btn-second py-2 px-5 mr-5">導航前往</button>
            <button
              class="btn-second py-2 px-5"
              @click="addMyFollow(brand.Id)"
              v-if="!isFollow"
            >加入追蹤</button>
            <button class="btn-second py-2 px-5" @click="delMyFollow(brand.Id)" v-if="isFollow">取消追蹤</button>
          </div>
          <div class="text-5xl">
            <a class="hover:text-secondcolor-400 mr-3" href="#">
              <i class="fab fa-facebook-square"></i>
            </a>
            <a class="hover:text-secondcolor-400 mr-3" href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a class="hover:text-secondcolor-400" href="#">
              <i class="fab fa-line"></i>
            </a>
          </div>
        </div>
        <p class="w-full md:w-1/3 text-xl pb-2">{{ brand.BrandStory }}</p>
      </div>
      <div class="btn-second rounded-r-none px-5 fixed z-10 right-0 top-20">
        <p class="text-xl text-black font-medium">目前單號</p>
        <p class="text-4xl">{{ order }}</p>
      </div>
    </div>
    <main class="container mx-auto footer-keep">
      <section>
        <h3 class="title">精選餐點</h3>
        <ul class="flex flex-col md:flex-row md:flex-wrap">
          <li
            class="md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 px-3"
            v-for="product of products"
            :key="product.Id"
          >
            <div class="shadow-xl rounded-lg">
              <div
                class="rounded-t-lg bg-img w-full h-72"
                :style="{ backgroundImage:'url(' + product.ProductPhoto +')' }"
              ></div>
              <div class="p-5">
                <div class="flex justify-between lg:flex-col lg:items-start items-center mb-5">
                  <div class="w-full flex justify-between items-center">
                    <h2 class="text-3xl md:text-2xl font-semibold mb-2">{{ product.ProductName }}</h2>
                    <button
                      class="btn-main p-2 text-2xl md:text-lg focus:outline-none"
                      @click="addShoppingCartProduct(product.Id, product.BrandId)"
                    >點擊購買</button>
                  </div>
                </div>
                <div class="flex justify-between">
                  <p class="text-xl w-3/4 lg:text-lg mb-1 text-hidden-one">{{ product.ProductDetail }}</p>
                  <p class="text-xl w-1/4 text-right">{{ product.Price }} 元</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section>
        <h3 class="title">營業時間</h3>
        <div class="xl:shadow-lg">
          <ul class="flex flex-wrap text-3xl text-center px-3 xl:px-0">
            <li class="shadow-lg w-1/2 md:w-1/4 xl:flex-1" v-for="day of calender" :key="day.Id">
              <p class="bg-maincolor-400 text-thirdcolor-400">{{ day.Date[2] }}</p>
              <div class="py-5 text-2xl">
                <p v-if="day.Status === '未營業'">公休</p>
                <p
                  class="pb-2"
                  v-if="day.Status === '營業中'"
                >{{ new Date(day.OpenDate).getMonth() + '月' + new Date(day.OpenDate).getDate() + '日' }}</p>
                <p
                  class="pb-2"
                  v-if="day.Status === '營業中'"
                >{{ day.SDateTime + '-' + day.EDateTimeDate}}</p>
                <p class="pb-2" v-if="day.Status === '營業中'">{{ day.Location }}</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <h3 class="title">顧客評論</h3>
        <!-- <carousel :per-page="1" :navigate-to="someLocalProperty" :mouse-drag="true">
          <slide>Slide 1 Content</slide>
          <slide>Slide 2 Content</slide>
        </carousel> -->
      </section>
    </main>
  </div>
</template>

<script>
// import { Carousel, Slide } from 'vue-carousel'

export default {
  components: {
    // Carousel,
    // Slide
  },
  name: 'Search',
  props: ['myFollowBrand', 'isFollow'],
  data () {
    return {
      brand: {},
      products: {},
      feedback: [],
      order: [],
      calender: [],
      today: '',
      openTime: '',
      allRating: 0
    }
  },
  methods: {
    getBrandProduct (id) {
      const API = `http://fotricle.rocket-coding.com/ProductLists/Gets?Id=${id}`
      this.axios
        .get(API)
        .then((res) => {
          this.products = res.data.products
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getBrandData (id) {
      const API = `http://fotricle.rocket-coding.com/Brand/Detail?Id=${id}`
      this.axios
        .get(API)
        .then((res) => {
          this.brand = res.data.brand
          this.sort = res.data.sort
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getBrandOrder (id) {
      const API = `http://fotricle.rocket-coding.com/BrandOrder/GetMeal?Id=${id}`
      this.axios.get(API).then((res) => {
        if (res.data.today.filter((num) => {
          return num.State === '回饋單已填寫' || num.State === '訂單完成'
        }).length === 0) {
          this.order = 0
        } else {
          this.order = res.data.today
            .filter((num) => {
              return num.State === '回饋單已填寫' || num.State === '訂單完成'
            })
            .sort((a, b) => {
              return a.MealNumber - b.MealNumber
            })
            .splice(-1)[0].MealNumber
        }
      })
    },
    getBrandCalender (id) {
      const API = `http://fotricle.rocket-coding.com/OpenTime/Get?Id=${id}`
      this.axios.get(API).then((res) => {
        this.calender = res.data.result.open.sort((a, b) => {
          return new Date(a.OpenDate) - new Date(b.OpenDate)
        })
        this.calender.forEach((day) => {
          if (day.OpenDate === this.today) {
            this.openTime = day.SDateTime + '-' + day.EDateTimeDate
          }
        })
      })
    },
    getBrandFeedback (id) {
      const API = `http://fotricle.rocket-coding.com/customer/feedback?Id=${id}`
      this.axios.get(API).then((res) => {
        this.feedback = res.data.feedback
        this.allRating = 0
        res.data.feedback.forEach((feedback) => {
          this.allRating += feedback.AllSuggest
        })
        this.allRating = this.allRating / res.data.feedback.length
      })
    },
    addShoppingCartProduct (id, brandId) {
      this.$emit('addShoppingCartProduct', id, brandId)
    },
    addMyFollow (brandId) {
      this.$emit('addMyFollow', brandId)
    },
    delMyFollow (id) {
      this.$emit('delMyFollow', id)
    },
    checkMyFollow (id) {
      console.log(id, this.myFollowBrand)
      if (
        this.myFollowBrand.some(brandId => {
          console.log(id, brandId.BrandId)
          return brandId.BrandId === Number(id)
        })) {
        this.$emit('checkMyFollow', true)
      } else {
        this.$emit('checkMyFollow', false)
      }
    }
  },
  mounted () {
    const today = new Date()
    const month = new Date().getMonth() + 1
    const day = new Date().getDate()
    this.today =
      today.getFullYear() +
      '/' +
      (month > 9 ? '' + month : '0' + month) +
      '/' +
      (day > 9 ? '' + day : '0' + day)
    const vm = this
    const id = localStorage.getItem('BrandId')
    if (id !== '') {
      this.axios.all([
        vm.getBrandProduct(id),
        vm.getBrandData(id),
        vm.getBrandOrder(id),
        vm.getBrandCalender(id),
        vm.getBrandFeedback(id),
        vm.checkMyFollow(id)
      ])
    } else {
      this.$bus.$on('getBrandId', function (brandId) {
        localStorage.setItem('BrandId', brandId)
        this.axios.all([
          vm.getBrandProduct(brandId),
          vm.getBrandData(brandId),
          vm.getBrandOrder(brandId),
          vm.getBrandCalender(brandId),
          vm.getBrandFeedback(brandId),
          vm.checkMyFollow(brandId)
        ])
      })
    }
  },
  destroyed () {
    this.$bus.$off()
  }
}
</script>
