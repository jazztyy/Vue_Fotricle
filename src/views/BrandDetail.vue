<template>
  <div>
    <div
      class="relative flex items-center bg-img h-auto py-10 -mt-7"
      style="background-image: url(http://fotricle.rocket-coding.com:80/Upload/customer/20200920104620.jpg?Id=undefined)"
      :style="{backgroundImage: 'url(' + brand.CarImage + ')' }"
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
              :fixed-points="2"
              :increment="0.01"
              :show-rating="false"
              :star-size="30"
              :rounded-corners='true'
            ></star-rating>
          </div>
          <p v-if="this.isOpen" class="text-lg pb-2">本日營業時間：{{ openTime }}</p>
          <p v-if="!this.isOpen" class="text-lg pb-2">非營業時間</p>
          <p class="text-lg pb-2">訂購專線：{{ brand.PhoneNumber }}</p>
          <div>
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
              <p class="bg-maincolor-200 text-thirdcolor-400">{{ day.Date[2] }}</p>
              <div class="py-5 text-2xl">
                <p v-if="day.Status === '未營業'">公休</p>
                <p
                  class="pb-2"
                  v-if="day.Status === '營業中'"
                >{{ new Date(day.OpenDate).getMonth() + 1 + '月' + new Date(day.OpenDate).getDate() + '日' }}</p>
                <p
                  class="pb-2"
                  v-if="day.Status === '營業中'"
                >{{ day.SDateTime + '-' + day.EDateTimeDate}}</p>
                <p class="pb-2" v-if="day.Status === '營業中'">{{ day.Location.split(' ')[0] }}</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
      <section>
        <h3 class="title">顧客評論</h3>
        <carousel
        :per-page="4"
        :mouse-drag="true"
        :autoplayHoverPause='true'
        :autoplayTimeout='3000'
        :autoplay='true'
        :loop='true'
        :scrollPerPage='false'
        >
          <slide
          v-for="customer of feedback"
          :key="customer.OrderIs"
          class="flex flex-col justify-center items-center mx-3 bg-thirdcolor-400 rounded-lg px-3 mb-3 shadow-xl"
          >
            <div class="flex md:flex-col mb-3 items-center">
              <img class="h-32 w-32 rounded-full mr-3" :src="customer.CusPhoto" alt="用戶大頭貼">
              <p class="text-2xl">{{ customer.UserName }}</p>
            </div>
            <div class="flex flex-col w-full">
              <star-rating
                v-model="customer.AllSuggest"
                :read-only="true"
                :fixed-points="2"
                :increment="0.01"
                :show-rating="false"
                :star-size="30"
                :rounded-corners='true'
                class="mb-3"
              ></star-rating>
              <div class="flex justify-between items-end">
                <p class="text-xl">{{ customer.CarSuggest }}</p>
                <p>{{ customer.Date }}</p>
              </div>
            </div>
          </slide>
        </carousel>
      </section>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  components: {
    Carousel,
    Slide
  },
  name: 'Search',
  props: ['myFollowBrand', 'isFollow', 'identity'],
  data () {
    return {
      brand: {},
      products: {},
      feedback: [],
      order: [],
      calender: [],
      today: '',
      todayOpen: '',
      todayEnd: '',
      openTime: '',
      allRating: 0,
      isOpen: true
    }
  },
  methods: {
    getBrandProduct (id) {
      const API = `http://fotricle.rocket-coding.com/ProductLists/Gets?Id=${id}`
      this.axios
        .get(API)
        .then((res) => {
          this.products = res.data.products.filter(product => {
            return product.IsUse === '是'
          })
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
        .catch(err => {
          console.log(err)
          this.$emit('showAlertButton', '資料載入失敗，請重新載入', 'error', 'reload')
        })
    },
    getBrandCalender (id, today) {
      const API = `http://fotricle.rocket-coding.com/OpenTime/Get?Id=${id}`
      this.axios.get(API).then((res) => {
        this.calender = res.data.result.open.sort((a, b) => {
          return new Date(a.OpenDate) - new Date(b.OpenDate)
        })
        this.calender.forEach((day) => {
          if (day.OpenDate === this.today) {
            this.openTime = day.SDateTime + '-' + day.EDateTimeDate
            this.todayOpen = day.SDateTime
            this.todayEnd = day.EDateTimeDate
            if (today < new Date(this.today + ' ' + day.SDateTime) || today > new Date(this.today + ' ' + day.EDateTimeDate)) {
              this.isOpen = false
            }
          }
        })
      })
        .catch(err => {
          console.log(err)
          this.$emit('showAlertButton', '資料載入失敗，請重新載入', 'error', 'reload')
        })
    },
    getBrandFeedback (id) {
      const API = `http://fotricle.rocket-coding.com/customer/feedback?Id=${id}`
      this.axios.get(API).then((res) => {
        this.feedback = res.data.fback
        this.allRating = 0
        res.data.fback.forEach((feedback) => {
          this.allRating += feedback.AllSuggest
        })
        this.allRating = this.allRating / res.data.fback.length
      })
        .catch(err => {
          console.log(err)
          this.$emit('showAlertButton', '資料載入失敗，請重新載入', 'error', 'reload')
        })
    },
    addShoppingCartProduct (id, brandId) {
      if (this.identity !== '顧客') {
        this.showAlert('必須登入消費者帳號才能購買商品', 'error')
      } else {
        if (this.isOpen) {
          this.$emit('addShoppingCartProduct', id, brandId)
        } else {
          this.showAlert('目前非餐車營業時間，無法購買產品', 'error')
        }
      }
    },
    addMyFollow (brandId) {
      if (this.identity === '顧客') {
        this.$emit('addMyFollow', brandId)
      } else {
        this.showAlert('必須登入消費者帳號才能追蹤餐車', 'error')
      }
    },
    delMyFollow (brandId) {
      let id
      this.myFollowBrand.forEach(brand => {
        if (brand.BrandId === brandId) {
          id = brand.Id
        }
      })
      this.$emit('delMyFollow', id)
    },
    checkMyFollow (id) {
      this.$emit('checkMyFollow', id)
    },
    showAlert (message, status) {
      this.$swal({
        icon: status,
        title: message,
        showConfirmButton: true
      })
    },
    buildSlideMarkup (count) {
      let slideMarkup = ''
      for (var i = 1; i <= count; i++) {
        slideMarkup += '<slide><span class="label">' + i + '</span></slide>'
      }
      return slideMarkup
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
        vm.getBrandCalender(id, today),
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
          vm.getBrandCalender(brandId, today),
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
