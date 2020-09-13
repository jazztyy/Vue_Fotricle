<template>
  <div>
    <div
      class="relative flex items-center bg-img h-auto py-10"
      style="background-image: url(../img/eaters-collective-ddZYOtZUnBk-unsplash.jpg)"
    >
      <div class="mask"></div>
      <div
        class="container mx-auto flex flex-wrap items-center justify-between w-4/5 relative z-10 text-thirdcolor-400"
      >
        <div class="w-full md:w-2/3">
          <p class="font-semibold text-6xl">{{ brand.BrandName }}</p>
          <div class="pb-2">
            <i class="fas fa-star text-secondcolor-500 text-2xl"></i>
            <i class="fas fa-star text-secondcolor-500 text-2xl"></i>
            <i class="fas fa-star text-secondcolor-500 text-2xl"></i>
            <i class="fas fa-star text-secondcolor-500 text-2xl"></i>
            <i class="fas fa-star text-secondcolor-500 text-2xl"></i>
            <span>(123)</span>
          </div>
          <p class="text-lg pb-2">
            本日營業時間：
            <span></span>
          </p>
          <p class="text-lg pb-2">訂購專線：{{ brand.PhoneNumber }}</p>
          <div>
            <button class="btn-second py-2 px-5 mr-5">導航前往</button>
            <button class="btn-second py-2 px-5">加入追蹤</button>
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
        <p class="text-4xl">15</p>
      </div>
    </div>
    <main class="container mx-auto footer-keep">
      <section>
        <h3 class="title">精選餐點</h3>
        <ul class="flex flex-col md:flex-row md:flex-wrap">
          <li
          class="md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 px-3"
          v-for="product of products" :key="product.Id"
          >
            <div class="shadow-xl rounded-lg">
              <div class="rounded-t-lg bg-img w-full h-72" :style="{ backgroundImage:'url(' + product.ProductPhoto +')' }">
              </div>
              <div class="p-5">
                <div class="flex justify-between lg:flex-col lg:items-start items-center mb-5">
                  <div class="w-full flex justify-between items-center">
                    <h2 class="text-3xl md:text-2xl font-semibold mb-2">{{ product.ProductName }}</h2>
                    <button class="btn-main p-2 text-2xl md:text-lg">點擊購買</button>
                  </div>
                </div>
                <p class="text-xl lg:text-lg mb-1">{{ product.ProductDetail }}</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section>
        <h3 class="title">營業時間</h3>
        <div class="xl:shadow-lg rounded-lg">
          <ul class="rounded-lg flex flex-wrap text-3xl text-center px-3 xl:px-0">
            <li class="shadow-lg w-1/2 md:w-1/4 xl:flex-1 rounded-bl-lg">
              <p class="bg-maincolor-400 text-thirdcolor-400 rounded-tl-lg">日</p>
              <div class="py-5 text-2xl">
                <p class="pb-2">9月2日</p>
                <p class="pb-2">14:00-20:00</p>
                <p class="pb-2">高雄軟體園區</p>
              </div>
            </li>
            <li class="shadow-lg w-1/2 md:w-1/4 xl:flex-1 rounded-br-lg md:rounded-none">
              <p class="bg-maincolor-400 text-thirdcolor-400 rounded-tr-lg md:rounded-none">一</p>
              <div class="py-5 text-2xl">
                <p class="pb-2">9月2日</p>
                <p class="pb-2">14:00-20:00</p>
                <p class="pb-2">高雄軟體園區</p>
              </div>
            </li>
            <li class="shadow-lg w-1/2 md:w-1/4 xl:flex-1 rounded-bl-lg md:rounded-none">
              <p class="bg-maincolor-400 text-thirdcolor-400 rounded-tl-lg md:rounded-none">二</p>
              <div class="py-5 text-2xl">
                <p class="pb-2">9月2日</p>
                <p class="pb-2">14:00-20:00</p>
                <p class="pb-2">高雄軟體園區</p>
              </div>
            </li>
            <li class="shadow-lg w-1/2 md:w-1/4 xl:flex-1 rounded-br-lg xl:rounded-none">
              <p class="bg-maincolor-400 text-thirdcolor-400 rounded-tr-lg xl:rounded-none">三</p>
              <div class="py-5 text-2xl">
                <p class="pb-2">9月2日</p>
                <p class="pb-2">14:00-20:00</p>
                <p class="pb-2">高雄軟體園區</p>
              </div>
            </li>
            <li class="shadow-lg w-1/2 md:w-1/4 xl:flex-1 rounded-bl-lg xl:rounded-none">
              <p class="bg-maincolor-400 text-thirdcolor-400 rounded-tl-lg xl:rounded-none">四</p>
              <div class="py-5 text-2xl">
                <p class="pb-2">9月2日</p>
                <p class="pb-2">14:00-20:00</p>
                <p class="pb-2">高雄軟體園區</p>
              </div>
            </li>
            <li class="shadow-lg w-1/2 md:w-1/4 xl:flex-1 rounded-br-lg md:rounded-none">
              <p class="bg-maincolor-400 text-thirdcolor-400 rounded-tr-lg md:rounded-none">五</p>
              <div class="py-5 text-2xl">
                <p class="pb-2">9月2日</p>
                <p class="pb-2">14:00-20:00</p>
                <p class="pb-2">高雄軟體園區</p>
              </div>
            </li>
            <li class="shadow-lg w-1/2 md:w-1/4 xl:flex-1 rounded-b-lg lg:rounded-bl-none">
              <p class="bg-maincolor-400 text-thirdcolor-400 rounded-t-lg md:rounded-tl-none">六</p>
              <div class="py-5 text-2xl">
                <p class="pb-2">9月2日</p>
                <p class="pb-2">14:00-20:00</p>
                <p class="pb-2">高雄軟體園區</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <h3 class="title">活動與貼文</h3>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      brand: {},
      products: {}
    }
  },
  methods: {
    getBrandProduct (id) {
      const API = `http://fotricle.rocket-coding.com/ProductLists/Gets?Id=${id}`
      console.log(id)
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
      console.log(id)
      this.axios
        .get(API)
        .then((res) => {
          this.brand = res.data.brand
          this.sort = res.data.sort
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  created () {
  },
  mounted () {
    const vm = this
    const id = localStorage.getItem('BrandId')
    if (id !== '') {
      this.axios.all([vm.getBrandProduct(id), vm.getBrandData(id)])
    } else {
      this.$bus.$on('getBrandId', function (brandId) {
        localStorage.setItem('BrandId', brandId)
        this.axios.all([vm.getBrandProduct(brandId), vm.getBrandData(brandId)])
      })
    }
  },
  destroyed () {
    this.$bus.$off()
  }
}
</script>
