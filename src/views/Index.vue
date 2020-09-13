<template>
  <div>
    <navbar v-if="identity === 'Visitors'"/>
    <brand-navbar v-if="identity === '餐車'" />
    <customer-navbar
    v-if="identity === '顧客'"
    @delShoppingCartProduct='delShoppingCartProduct'
    @delAllShoppingCartProduct ='delAllShoppingCartProduct'
    :shoppingCartProduct='shoppingCartProduct'/>
    <login-navbar v-if="identity === 'LoginAndRegister'"/>
    <router-view
    @thisPage='thisPage'
    @getShoppingCartProduct='getShoppingCartProduct'
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
    this.id = localStorage.getItem('id')
    this.getShoppingCartProduct()
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
          console.log(res)
          this.identity = res.data.message
        })
        .catch((err) => {
          console.log(err)
        })
    },
    addShoppingCartProduct () {
      const config = { headers: { Authorization: `Bearer ${this.token}` } }
      const API = 'http://fotricle.rocket-coding.com/cart/add'
      this.axios
        .get(API, config)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    delShoppingCartProduct (id) {
      const config = { headers: { Authorization: `Bearer ${this.token}` } }
      const API = `http://fotricle.rocket-coding.com/cart/ALL?Id=${id}`
      this.axios
        .get(API, config)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    delAllShoppingCartProduct (id) {
      const config = { headers: { Authorization: `Bearer ${this.token}` } }
      const API = 'http://fotricle.rocket-coding.com/cart/ALL'
      this.axios
        .get(API, config)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getShoppingCartProduct () {
      const config = { headers: { Authorization: `Bearer ${this.token}` } }
      const API = `http://fotricle.rocket-coding.com/cart/customer/${this.id}`
      this.axios
        .get(API, config)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
