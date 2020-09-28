<template>
  <div>
    <main class="flex flex-col justify-evenly lg:items-start">
      <div class="container mx-auto py-5 px-5">
        <ul class="md:flex justify-between items-center">
          <li class="flex text-center mb-5 md:mb-0">
            <div class="btn-second w-1/2 px-5 mr-5">
              <p class="text-xl text-black font-medium">目前單號</p>
              <p class="text-4xl">15</p>
            </div>
            <div class="btn-second w-1/2 px-5">
              <p class="text-xl text-black font-medium">全部單號</p>
              <p class="text-4xl">20</p>
            </div>
          </li>
          <li class="md:flex">
            <router-link
              class="block btn-second mb-5 md:mr-5 md:mb-0 p-5 text-3xl"
              to="/Brand/Order/List"
            >候餐列表</router-link>
            <router-link
              class="block btn-second mb-5 md:mr-5 md:mb-0 p-5 text-3xl"
              to="/Brand/Order/Online"
            >網站訂單</router-link>
          </li>
        </ul>
      </div>
      <section class="w-full px-5 mb-5">
        <main class="container mx-auto rounded-lg bg-gray-500 shadow-lg">
          <ul class="flex flex-wrap items-center">
            <li class="w-full md:w-1/3 flex md:flex-col items-center p-3"
            v-for="product of BrandProducts" :key="product.Id"
            >
              <div class="w-full text-center text-4xl bg-secondcolor-400 rounded-lg px-2 py-8 cursor-pointer" @click="addSiteOrder(product.Id)">{{ product.ProductName }}</div>
            </li>
          </ul>
        </main>
      </section>
      <section class="w-full px-5 relative mb-10">
        <h3 class="container mx-auto text-center text-4xl bg-gray-500 rounded-t-lg py-2">訂單明細</h3>
        <div class="container mx-auto max-h-1/5 overflow-y-auto relative">
          <table class="w-full bg-gray-500 sticky top-0">
            <thead class="bg-maincolor-200 text-thirdcolor-400">
              <tr>
                <th class="p-3 text-2xl font-bold uppercase lg:table-cell">產品名稱</th>
                <th class="p-3 text-2xl font-bold uppercase lg:table-cell">金額</th>
                <th class="p-3 text-2xl font-bold uppercase lg:table-cell">數量</th>
                <th class="p-3 text-2xl font-bold uppercase lg:table-cell">編輯</th>
              </tr>
            </thead>
            <tbody class="text-2xl"
            v-if="SiteOrder[0]"
            >
              <tr class="table-row mb-5 lg:mb-0"
              v-for="product of SiteOrder"
              :key="product.Id"
              >
                <td class="w-auto p-3 text-center border-b table-cell">{{ product.ProductList.ProductName }}</td>
                <td class="w-auto p-3 border-b text-center table-cell">{{ product.ProductList.Amount }}</td>
                <td class="w-auto p-3 border-b text-center table-cell">
                  <div class="flex justify-evenly items-center">
                    <i class="fas fa-minus" v-show="product.ProductList.ProductUnit > 1" @click="product.ProductList.ProductUnit -=1"></i>
                    <i class="fas fa-minus" v-show="product.ProductList.ProductUnit === 1"></i>
                    {{ product.ProductList.ProductUnit }}
                    <i class="fas fa-plus" @click="product.ProductList.ProductUnit +=1"></i>
                  </div>
                </td>
                <td class="w-auto p-3 border-b text-center table-cell">
                  <button class="rounded-lg text-thirdcolor-400 bg-maincolor-200 py-3 px-5 mr-3"
                  @click="editSiteOrder(product.Id, product.ProductList.ProductUnit)"
                  >修改</button>
                  <button class="rounded-lg text-thirdcolor-400 bg-red-600 py-3 px-5"
                  @click="delSiteOrder(product.Id)"
                  >刪除</button>
                </td>
              </tr>
            </tbody>
          </table>
          <button class="w-full btn-second py-5 rounded-t-none text-2xl"
          @click="getBrandOrder()"
          >確認訂單</button>
        </div>
      </section>
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'BrandOrder',
  props: ['BrandProducts'],
  data () {
    return {
      SiteOrder: {},
      totalPrice: 0
    }
  },
  created () {
    this.getSiteOrder()
  },
  methods: {
    addSiteOrder (productId) {
      const API = 'http://fotricle.rocket-coding.com/BrandCart/add'
      const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      const body = {
        ProductListId: productId,
        ProductUnit: 1
      }
      this.axios.post(API, body, config)
        .then(res => {
          console.log(res)
          this.getSiteOrder()
        })
    },
    getSiteOrder () {
      const API = `http://fotricle.rocket-coding.com/BrandCart/customer/${localStorage.getItem('id')}`
      const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      this.axios.get(API, config)
        .then(res => {
          this.totalPrice = 0
          this.SiteOrder = res.data.carts
          res.data.carts.forEach(product => {
            this.totalPrice += product.ProductList.Amount
          })
        })
    },
    delSiteOrder (id) {
      const API = `http://fotricle.rocket-coding.com/BrandCart/${id}`
      const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      this.axios.delete(API, config)
        .then(res => {
          console.log(res)
          this.getSiteOrder()
        })
    },
    editSiteOrder (id, unit) {
      const API = `http://fotricle.rocket-coding.com/BrandCart/Edit?Id=${id}`
      const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      const body = {
        ProductUnit: unit
      }
      this.axios.patch(API, body, config)
        .then(res => {
          console.log(res)
          this.getSiteOrder()
        })
    },
    sendSiteOrder (mealNumber = 1) {
      const API = 'http://fotricle.rocket-coding.com/BrandOrder/add'
      const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      const body = {
        Payment: 1,
        OrderNumber: mealNumber,
        Amount: this.totalPrice,
        Site: 1
      }
      console.log(API, config)
      console.log(body)
      this.axios.post(API, body, config)
        .then(res => {
          console.log(res)
          this.getSiteOrder()
          this.getBrandOrderList()
        })
    },
    getBrandOrder () {
      const API = `http://fotricle.rocket-coding.com/BrandOrder/GetMeal?Id=${localStorage.getItem('id')}`
      this.axios.get(API)
        .then(res => {
          console.log(res)
          if (res.data.today.length === 0) {
            this.sendSiteOrder()
          } else {
            this.sendSiteOrder(res.data.today.splice(-1)[0].MealNumber + 1)
          }
        })
    },
    getBrandOrderList () {
      this.$emit('getBrandOrderList')
    }
  }
}

</script>
