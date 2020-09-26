<template>
  <div class="flex justify-center items-center my-5">
    <div class="md:w-2/3 mx-auto py-3 bg-thirdcolor-400 text-black rounded-lg shadow-lg">
      <p class="text-center text-secondcolor-400 text-3xl">訂單明細</p>
      <p v-if="!shoppingCart[0]" class="text-center">訂單目前是空的</p>
      <ul v-if="shoppingCart[0]" class="py-3 text-xl">
        <li
          class="relative p-4 border-b border-black mb-3"
          v-for="product of shoppingCart"
          :key="product.Id"
        >
          <div class="flex justify-evenly items-center text-center mb-3">
            <h4 class>{{ product.ProductList.ProductName }}</h4>
            <p class="ml-3">{{ product.ProductList.Amount }} 元</p>
            <div class="w-1/3 pr-5">
              <div class="flex items-center justify-evenly">
                <div>
                    <i class="fas fa-minus" v-show="product.ProductList.ProductUnit > 1" @click="product.ProductList.ProductUnit -=1"></i>
                    <i class="fas fa-minus" v-show="product.ProductList.ProductUnit === 1"></i>
                    <input
                      class="w-1/3 text-center bg-transparent rounded-lg"
                      v-model="product.ProductList.ProductUnit"
                      type="tel"
                      disabled
                    />
                    <i class="fas fa-plus" @click="product.ProductList.ProductUnit +=1"></i>
                </div>
                <button
                  class="text-lg w-1/2 bg-secondcolor-400 rounded-lg px-2 focus:outline-none"
                  @click="editShoppingCartProduct(product.Id, product.ProductList.ProductUnit)"
                >修改</button>
              </div>
            </div>
          </div>
          <i
            class="fas fa-times absolute top-0 text-red-500 hover:text-red-700 right-2 cursor-pointer"
            @click="delShoppingCartProduct(product.Id)"
          ></i>
        </li>
      </ul>
      <div class="flex justify-between mb-3 px-2" v-show="shoppingCart[0]">
        <p class="text-lg">
          總計：
          <span>{{ totalPrice }}</span>
        </p>
        <div class="text-thirdcolor-400">
          <button
            class="text-lg bg-red-500 hover:bg-red-700 px-2 rounded-lg focus:outline-none mr-3"
            @click="delAllShoppingCartProduct"
          >刪除全品項</button>
          <button
            class="text-lg bg-maincolor-400 hover:bg-maincolor-600 px-2 rounded-lg focus:outline-none"
            @click="isShow = true"
          >確認訂單</button>
          <payment-methods
          v-show="isShow"
          @closeModal='closeModal'
          @getBrandOrder='getBrandOrder'
          :QRCode='QRCode'
          ></payment-methods>
          <div class="mask fixed z-40" v-if="isShow"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PaymentMethods from '../components/Customer/PaymentMethods'

export default {
  name: 'CheckoutPage',
  props: ['totalPrice', 'shoppingCart', 'brandId'],
  components: {
    PaymentMethods
  },
  data () {
    return {
      isShowModal: [],
      isCash: 0,
      isShow: false,
      Site: 0,
      QRCode: '',
      Payment: 0
    }
  },
  methods: {
    getShoppingCartProduct () {
      this.$emit('getShoppingCartProduct')
    },
    delShoppingCartProduct (id) {
      this.$emit('delShoppingCartProduct', id)
    },
    delAllShoppingCartProduct () {
      this.$emit('delAllShoppingCartProduct')
    },
    editShoppingCartProduct (id, number) {
      this.$emit('editShoppingCartProduct', id, number)
    },
    addOrder (LinePay = '', payment, mealNumber) {
      const API = 'http://fotricle.rocket-coding.com/order/add'
      const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      const body = {
        Payment: payment,
        OrderNumber: mealNumber,
        Amount: this.totalPrice,
        LinepayVer: LinePay,
        Site: 0
      }
      this.axios.post(API, body, config)
        .then(res => {
          this.getShoppingCartProduct()
          this.$emit('getOrderList')
          this.$emit('showAlertAside', '訂單成功送出', 'success')
        })
        .catch(err => {
          console.log(err)
          this.$emit('showAlertButton', '資料載入失敗，請重新載入', 'error')
        })
    },
    closeModal () {
      this.isShow = false
    },
    getBrandQRCode () {
      const API = `http://fotricle.rocket-coding.com/Brand/Detail?Id=${this.brandId}`
      this.axios
        .get(API)
        .then((res) => {
          this.QRCode = res.data.brand.QrCode
        })
        .catch((err) => {
          console.log(err)
          this.$emit('showAlertButton', '資料載入失敗，請重新載入', 'error')
        })
    },
    getBrandOrder (LinePay, payment) {
      const API = `http://fotricle.rocket-coding.com/BrandOrder/GetMeal?Id=${this.brandId}`
      this.axios
        .get(API)
        .then((res) => {
          let mealNumber = 0
          if (res.data.today.length === 0) {
            mealNumber = 1
          } else {
            mealNumber = res.data.today.splice(-1)[0].MealNumber + 1
          }
          this.addOrder(LinePay, payment, mealNumber)
        })
        .catch((err) => {
          console.log(err)
          this.$emit('showAlertButton', '資料載入失敗，請重新載入', 'error')
        })
    }
  },
  created () {
    this.getShoppingCartProduct()
    this.getBrandQRCode()
  }
}
</script>
