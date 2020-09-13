<template>
  <div>
    <navbar v-if="identity === 'Visitors'"/>
    <brand-navbar v-if="identity === '餐車'" />
    <customer-navbar
    v-if="identity === '顧客'"
    ref="shoppingCart"/>
    <login-navbar v-if="identity === 'LoginAndRegister'"/>
    <router-view
    @thisPage='thisPage'
    @addShoppingCartProduct='addShoppingCartProduct'
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
  data () {
    return {
      isLoading: false,
      token: '',
      id: '',
      identity: '',
      brandId: '',
      shoppingCartProduct: {}
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
    this.token = localStorage.getItem('token')
    if (window.location === '/#/Login' || window.location === '/#/Register') {
      this.identity = 'LoginAndRegister'
      console.log('LoginAndRegister')
    } else if (this.token) {
      this.getIdentity()
    } else {
      this.identity = 'Visitors'
      console.log('Visitors')
    }
  },
  methods: {
    thisPage (identity) {
      this.identity = identity
    },
    getIdentity () {
      const config = { headers: { Authorization: `Bearer ${this.token}` } }
      const API = 'http://fotricle.rocket-coding.com/GetIdentity'
      this.axios
        .get(API, config)
        .then((res) => {
          this.identity = res.data.message
        })
        .catch((err) => {
          console.log(err)
        })
    },
    addShoppingCartProduct (id, brandId, ProductUnit = 1) {
      this.brandId = Number(localStorage.getItem('ShoppingCartId'))
      console.log(this.brandId)
      console.log(brandId)
      if (this.brandId === brandId) {
        localStorage.setItem('ShoppingCartId', brandId)
        const config = { headers: { Authorization: `Bearer ${this.token}` } }
        const body = {
          ProductListId: id,
          ProductUnit
        }
        const API = 'http://fotricle.rocket-coding.com/cart/add'
        this.axios
          .post(API, body, config)
          .then((res) => {
            this.$refs.shoppingCart.getShoppingCartProduct()
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        console.log('加入購物車失敗')
      }
    }
  }
}
</script>
