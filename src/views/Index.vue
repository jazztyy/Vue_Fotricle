<template>
  <div>
    <navbar v-if="identity === 'Visitors'"
    @changeIdentity="changeIdentity"
    />
    <brand-navbar v-show="identity === '餐車'"
    @changeIdentity="changeIdentity"
    @resetToken="resetToken"
    />
    <customer-navbar
    v-if="identity === '顧客'"
    ref="shoppingCart"
    @getShoppingCartProduct='getShoppingCartProduct'
    @addShoppingCartProduct='addShoppingCartProduct'
    @delShoppingCartProduct='delShoppingCartProduct'
    @delAllShoppingCartProduct='delAllShoppingCartProduct'
    @changeIdentity="changeIdentity"
    @resetToken="resetToken"
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
    :shoppingCart='shoppingCart'
    :totalPrice='totalPrice'
    :brandId='brandId'
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
      token: '',
      id: '',
      identity: 'Visitors',
      brandId: '',
      shoppingCart: {},
      totalPrice: '',
      QRCode: ''
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
    this.id = localStorage.getItem('id')
    this.token = localStorage.getItem('token')
    this.brandId = localStorage.getItem('ShoppingCartId')
    this.getIdentity()
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
          console.log(err, 123)
        })
    },
    delShoppingCartProduct (id) {
      const config = { headers: { Authorization: `Bearer ${this.token}` } }
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
      const config = { headers: { Authorization: `Bearer ${this.token}` } }
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
      const config = { headers: { Authorization: `Bearer ${this.token}` } }
      const body = {
        ProductUnit: number
      }
      this.axios.patch(API, body, config)
        .then(res => {
          console.log(res)
          this.getShoppingCartProduct()
        })
    },
    changeIdentity (identity) {
      this.identity = identity
    },
    resetToken () {
      this.token = ''
      this.id = ''
    },
    getIdentity () {
      if (localStorage.getItem('token')) {
        const API = 'http://fotricle.rocket-coding.com/GetIdentity'
        const config = { headers: { Authorization: `Bearer ${this.token}` } }
        this.axios.get(API, config)
          .then(res => {
            this.identity = res.data.message
          })
      }
    }
  }
}
</script>
