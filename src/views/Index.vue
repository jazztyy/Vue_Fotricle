<template>
  <div>
    <navbar v-if="identity === 'Visitors'"
    @changeIdentity="changeIdentity"
    />
    <brand-navbar v-if="identity === '餐車'"
    @changeIdentity="changeIdentity"
    />
    <customer-navbar
    v-if="identity === '顧客'"
    ref="shoppingCart"
    @getShoppingCartProduct='getShoppingCartProduct'
    @addShoppingCartProduct='addShoppingCartProduct'
    @delShoppingCartProduct='delShoppingCartProduct'
    @delAllShoppingCartProduct='delAllShoppingCartProduct'
    @changeIdentity="changeIdentity"
    :shoppingCart='shoppingCart'
    :totalPrice='totalPrice'
    />
    <login-navbar v-if="identity === 'LoginAndRegister'"/>
    <router-view
    @addShoppingCartProduct='addShoppingCartProduct'
    @getShoppingCartProduct='getShoppingCartProduct'
    @delShoppingCartProduct='delShoppingCartProduct'
    @delAllShoppingCartProduct='delAllShoppingCartProduct'
    @changeIdentity="changeIdentity"
    @editShoppingCartProduct="editShoppingCartProduct"
    @addMyFollow="addMyFollow"
    @getMyFollow="getMyFollow"
    @delMyFollow="delMyFollow"
    @getOrderList="getOrderList"
    :shoppingCart='shoppingCart'
    :totalPrice='totalPrice'
    :brandId='brandId'
    :myFollowBrand='myFollowBrand'
    :isFollow='isFollow'
    :OrderCofirmList='OrderCofirmList'
    :OrderFoundList='OrderFoundList'
    :OrderFoodCompletedList='OrderFoodCompletedList'
    :OrderFailList='OrderFailList'
    :OrderSuccessList='OrderSuccessList'
    />
    <loading :active.sync="isLoading"></loading>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BrandNavbar from '../components/Brand/Navbar'
import CustomerNavbar from '../components/Customer/Navbar'
import LoginNavbar from '../components/LoginNavbar'
export default {
  name: 'index',
  data () {
    return {
      isLoading: false,
      isFollow: false,
      token: '',
      id: '',
      identity: 'Visitors',
      brandId: '',
      followId: '',
      shoppingCart: {},
      totalPrice: '',
      QRCode: '',
      myFollowBrand: [],
      OrderCofirmList: {},
      OrderFoundList: {},
      OrderFoodCompletedList: {},
      OrderFailList: {},
      OrderSuccessList: {}
    }
  },
  components: {
    BrandNavbar,
    CustomerNavbar,
    Navbar,
    LoginNavbar,
    Footer
  },
  created () {
    this.brandId = localStorage.getItem('ShoppingCartId')
    this.getIdentity()
  },
  watch: {
    identity () {
      if (this.identity === '顧客') {
        this.getOrderList()
        this.getMyFollow()
      }
    }
  },
  methods: {
    addShoppingCartProduct (id, brandId, ProductUnit = 1) {
      this.brandId = Number(localStorage.getItem('ShoppingCartId'))
      if (this.brandId === 0) {
        this.brandId = brandId
        localStorage.setItem('ShoppingCartId', brandId)
      }
      if (this.brandId === brandId) {
        localStorage.setItem('ShoppingCartId', brandId)
        const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
        const body = {
          ProductListId: id,
          ProductUnit
        }
        const API = 'http://fotricle.rocket-coding.com/cart/add'
        this.axios
          .post(API, body, config)
          .then((res) => {
            console.log(res)
            this.getShoppingCartProduct()
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        console.log('加入購物車失敗')
      }
    },
    getShoppingCartProduct () {
      const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      const API = `http://fotricle.rocket-coding.com/cart/customer/${localStorage.getItem('id')}`
      this.axios
        .get(API, config)
        .then((res) => {
          this.totalPrice = 0
          if (res.data.carts.length === 0) {
            localStorage.setItem('ShoppingCartId', '')
          }
          res.data.carts.forEach((productList) => {
            this.totalPrice += productList.ProductList.Amount
          })
          this.shoppingCart = res.data.carts
        })
        .catch((err) => {
          console.log(err)
        })
    },
    delShoppingCartProduct (id) {
      const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      const API = `http://fotricle.rocket-coding.com/cart/${id}`
      this.axios
        .delete(API, config)
        .then((res) => {
          console.log(res)
          this.getShoppingCartProduct()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    delAllShoppingCartProduct () {
      const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      const API = 'http://fotricle.rocket-coding.com/cart/ALL'
      this.axios
        .delete(API, config)
        .then((res) => {
          console.log(res)
          this.getShoppingCartProduct()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    editShoppingCartProduct (id, number) {
      const API = `http://fotricle.rocket-coding.com/cart/Edit?Id=${id}`
      const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      const body = {
        ProductUnit: number
      }
      this.axios.patch(API, body, config)
        .then(res => {
          console.log(res)
          this.getShoppingCartProduct()
        })
    },
    getIdentity () {
      if (localStorage.getItem('token')) {
        const API = 'http://fotricle.rocket-coding.com/GetIdentity'
        const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
        this.axios.get(API, config)
          .then(res => {
            this.identity = res.data.message
          })
      }
    },
    changeIdentity (identity) {
      this.identity = identity
    },
    addMyFollow (brandId) {
      if (this.identity === '顧客') {
        const API = 'http://fotricle.rocket-coding.com/myfollow/add'
        const body = {
          BrandId: brandId
        }
        const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
        this.axios.post(API, body, config)
          .then(res => {
            console.log(res)
            this.getMyFollow()
          })
      }
    },
    getMyFollow () {
      const API = 'http://fotricle.rocket-coding.com/customer/myfollow'
      const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      this.axios.get(API, config)
        .then(res => {
          console.log(res)
          this.myFollowBrand = res.data.dt
          this.myFollowBrand.forEach(brandId => {
            if (brandId.BrandId === Number(localStorage.getItem('BrandId'))) {
              this.isFollow = true
              this.followId = brandId.Id
            } else {
              this.isFollow = false
              this.followId = ''
            }
          })
        })
    },
    delMyFollow () {
      if (this.identity === '顧客') {
        const API = `http://fotricle.rocket-coding.com/api/MyFollows/${this.followId}`
        const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
        this.axios.delete(API, config)
          .then(res => {
            this.getMyFollow()
          })
      }
    },
    getOrderList () {
      const API = 'http://fotricle.rocket-coding.com/customer/orders'
      const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      this.axios.get(API, config)
        .then(res => {
          this.OrderCofirmList = res.data.today.filter(item => {
            return item.status === '訂單處理中'
          })
          this.OrderFoundList = res.data.today.filter(item => {
            return item.status === '訂單成立'
          })
          this.OrderFoodCompletedList = res.data.today.filter(item => {
            return item.status === '訂單餐點完成'
          })
          this.OrderFailList = res.data.today.filter(item => {
            return item.status === '訂單失敗'
          })
          this.OrderSuccessList = res.data.today.filter(item => {
            return item.status === '訂單完成'
          })
        })
    }
  }
}
</script>
