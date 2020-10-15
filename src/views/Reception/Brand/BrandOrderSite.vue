<template>
  <main class="lg:w-2/3 lg:items-start mt-5">
    <section class="w-full px-2 mb-5 flex">
      <main class="container mx-auto rounded-lg bg-thirdcolor-500 shadow-lg">
        <div class="container mx-auto py-5 px-5">
          <ul class="md:flex justify-between items-center">
            <li class="flex text-center mb-5 md:mb-0">
              <div class="btn-second w-1/2 px-5 mr-5">
                <p class="text-xl text-black font-medium">目前單號</p>
                <p class="text-4xl">{{ order }}</p>
              </div>
              <div class="btn-second w-1/2 px-5">
                <p class="text-xl text-black font-medium">全部單號</p>
                <p class="text-4xl">{{ totalOrder }}</p>
              </div>
            </li>
          </ul>
        </div>
        <ul class="flex flex-wrap items-center">
          <li
            class="w-full md:w-1/3 flex md:flex-col items-center p-3"
            v-for="product of BrandProducts"
            :key="product.Id"
          >
            <div
              class="w-full text-center text-4xl bg-secondcolor-400 rounded-lg px-2 py-8 cursor-pointer"
              @click="addSiteOrder(product.Id)"
            >{{ product.ProductName }}</div>
          </li>
        </ul>
      </main>
    </section>
    <section class="w-2/3 top-half right-0 md:top-10 md:w-2/3 absolute shadow-lg">
        <h3
          class="text-center text-xl rounded-l-lg absolute right-0 transition-all duration-500 bg-maincolor-200 text-thirdcolor-400 z-30 py-5 px-4 cursor-pointer"
          :class="{ 'right-0': !isShow, 'right-100': isShow }"
          @click="tag"
        >訂單明細
        <span
          class="bg-red-600 absolute w-8 h-8 text-xl text-center rounded-full right-80 bottom-60  z-40"
          v-show="SiteOrder.length"
        >{{ SiteOrder.length }}</span>
        </h3>
      <div
        class="container mx-auto max-h-1/5 relative transition-all duration-500 opacity-0"
        v-if="isShow"
        :class="{ 'left-0 opacity-100': isCheck, 'left-100 opacity-0': !isCheck }"
      >
        <table class="w-full bg-thirdcolor-500 sticky top-0">
          <thead class="bg-maincolor-200 text-thirdcolor-400">
            <tr>
              <th class="p-3 text-base md:text-xl font-bold uppercase lg:table-cell">產品名稱</th>
              <th class="p-3 text-base md:text-xl font-bold uppercase lg:table-cell">金額</th>
              <th class="p-3 text-base md:text-xl font-bold uppercase lg:table-cell">數量</th>
              <th class="p-3 text-base md:text-xl font-bold uppercase lg:table-cell">編輯</th>
            </tr>
          </thead>
          <tbody class="text-xl" v-if="SiteOrder[0]">
            <tr class="table-row mb-5 lg:mb-0" v-for="product of SiteOrder" :key="product.Id">
              <td
                class="w-auto p-3 text-center border-b table-cell"
              >{{ product.ProductList.ProductName }}</td>
              <td
                class="w-auto p-3 border-b text-center table-cell"
              >{{ product.ProductList.Amount }}</td>
              <td class="w-auto p-3 border-b text-center table-cell">
                <div class="flex justify-evenly items-center">
                  <i
                    class="fas fa-minus"
                    v-show="product.ProductList.ProductUnit > 1"
                    @click="product.ProductList.ProductUnit -=1"
                  ></i>
                  <i class="fas fa-minus" v-show="product.ProductList.ProductUnit === 1"></i>
                  {{ product.ProductList.ProductUnit }}
                  <i
                    class="fas fa-plus"
                    @click="product.ProductList.ProductUnit +=1"
                  ></i>
                </div>
              </td>
              <td class="w-auto p-3 border-b text-center table-cell">
                <button
                  class="rounded-lg text-base md:text-lg text-thirdcolor-400 bg-maincolor-200 py-2 px-2 mr-3 md:py-3 md:px-5"
                  @click="editSiteOrder(product.Id, product.ProductList.ProductUnit)"
                >修改</button>
                <button
                  class="rounded-lg text-base md:text-lg text-thirdcolor-400 bg-red-600 py-2 px-2 md:py-3 md:px-5"
                  @click="delSiteOrder(product.Id)"
                >刪除</button>
              </td>
            </tr>
          </tbody>
        </table>
        <button
          class="w-full btn-second py-5 rounded-t-none text-2xl"
          @click="sendSiteOrder(); isShow = false; isCheck = false"
          v-if="SiteOrder[0]"
        >確認訂單</button>
      </div>
    </section>
    <router-view />
  </main>
</template>

<script>
export default {
  name: 'BrandOrder',
  props: ['BrandProducts'],
  data () {
    return {
      SiteOrder: {},
      totalPrice: 0,
      order: 0,
      totalOrder: 0,
      isShow: false,
      isCheck: false
    }
  },
  created () {
    this.getSiteOrder()
    this.getBrandOrder()
  },
  methods: {
    addSiteOrder (productId) {
      this.$emit('changeLoading', true)
      const API = 'http://fotricle.rocket-coding.com/BrandCart/add'
      const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      }
      const body = {
        ProductListId: productId,
        ProductUnit: 1
      }
      this.axios.post(API, body, config)
        .then((res) => {
          this.getSiteOrder('成功添加', 'success')
        })
        .catch(err => {
          console.log(err)
        })
    },
    getSiteOrder (message, status) {
      const API = `http://fotricle.rocket-coding.com/BrandCart/customer/${localStorage.getItem(
        'id'
      )}`
      const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      }
      this.axios.get(API, config)
        .then((res) => {
          this.totalPrice = 0
          this.SiteOrder = res.data.carts
          if (this.SiteOrder.length === 0) {
            this.isShow = false
            this.isCheck = false
          }
          res.data.carts.forEach((product) => {
            this.totalPrice += product.ProductList.Amount
          })
          this.$emit('changeLoading', false)
          if (message) {
            this.$emit('showAlertAside', message, status)
          }
        })
        .catch(err => {
          console.log(err)
          this.$emit('changeLoading', false)
          this.$emit('showAlertButton', '資料載入錯誤，請重新載入', 'error', 'reload')
        })
    },
    delSiteOrder (id) {
      this.$emit('changeLoading', true)
      const API = `http://fotricle.rocket-coding.com/BrandCart/${id}`
      const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      }
      this.axios.delete(API, config)
        .then((res) => {
          this.getSiteOrder('商品刪除成功', 'success')
        })
        .catch(err => {
          console.log(err)
          this.$emit('changeLoading', false)
          this.$emit('showAlertButton', '產品刪除失敗，請重新操作', 'error')
        })
    },
    editSiteOrder (id, unit) {
      this.$emit('changeLoading', true)
      const API = `http://fotricle.rocket-coding.com/BrandCart/Edit?Id=${id}`
      const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      }
      const body = {
        ProductUnit: unit
      }
      this.axios.patch(API, body, config)
        .then((res) => {
          this.$emit('changeLoading', false)
          this.getSiteOrder('產品編輯成功', 'success')
        })
        .catch(err => {
          console.log(err)
          this.$emit('changeLoading', false)
          this.$emit('showAlertButton', '產品編輯失敗，請重新操作', 'error')
        })
    },
    sendSiteOrder () {
      if (this.totalPrice) {
        const API = 'http://fotricle.rocket-coding.com/BrandOrder/add'
        const config = {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        }
        const body = {
          Payment: 1,
          OrderNumber: this.totalOrder + 1,
          Amount: this.totalPrice,
          Site: 1
        }
        this.axios.post(API, body, config)
          .then((res) => {
            this.getBrandOrderList()
            this.getBrandOrder()
            this.getSiteOrder('訂單成功送出', 'success')
          })
      }
    },
    getBrandOrder () {
      const API = `http://fotricle.rocket-coding.com/BrandOrder/GetMeal?Id=${localStorage.getItem(
        'id'
      )}`
      this.axios.get(API).then((res) => {
        console.log(res)
        if (res.data.today.length !== 0) {
          this.totalOrder = JSON.parse(JSON.stringify(res.data.today)).splice(
            -1
          )[0].MealNumber
          if (
            JSON.parse(JSON.stringify(res.data.today)).filter((order) => {
              return order.State === '訂單完成' || order.State === '訂單餐點完成'
            }).length !== 0
          ) {
            this.order = JSON.parse(JSON.stringify(res.data.today))
              .filter((order) => {
                return order.State === '訂單完成' || order.State === '訂單餐點完成'
              })
              .splice(-1)[0].MealNumber
            console.log(this.order)
          }
        }
      })
    },
    getBrandOrderList () {
      this.$emit('getBrandOrderList')
    },
    tag () {
      this.isShow = !this.isShow
      setTimeout(() => {
        this.isCheck = !this.isCheck
      })
    }
  }
}
</script>
