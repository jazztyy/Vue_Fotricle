<template>
  <div class="keep-footer-bottom">
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
    :messageBox='messageBox'
    :shoppingCart='shoppingCart'
    :totalPrice='totalPrice'
    />
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
    @getMessage='getMessage'
    @checkMyFollow='checkMyFollow'
    @getBrandList='getBrandList'
    :identity='identity'
    :messageBox='messageBox'
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
    :brandList='brandList'
    />
    <loading :active.sync="isLoading"></loading>
    <Footer class="mt-auto"></Footer>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BrandNavbar from '../components/Brand/Navbar'
import CustomerNavbar from '../components/Customer/Navbar'
export default {
  name: 'index',
  data () {
    return {
      isLoading: false,
      isFollow: false,
      identity: 'Visitors',
      brandId: '',
      followId: '',
      shoppingCart: {},
      totalPrice: '',
      QRCode: '',
      messageBox: [],
      myFollowBrand: [],
      brandList: {},
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
    Footer
  },
  created () {
    const vm = this
    this.brandId = localStorage.getItem('ShoppingCartId')
    this.axios.all(
      [
        vm.isLoading = true,
        vm.getIdentity(),
        vm.getBrandList()
      ]).then(vm.axios.spread((...res) => {
      vm.isLoading = false
    }))
  },
  watch: {
    identity () {
      if (this.identity === '顧客') {
        this.getOrderList()
        this.getMyFollow()
        this.getMessage()
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
      } else {
        this.identity = 'Visitors'
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
            this.getMyFollow(brandId)
          })
      }
    },
    getMyFollow (id) {
      const API = 'http://fotricle.rocket-coding.com/customer/myfollow'
      const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      this.axios.get(API, config)
        .then(res => {
          this.myFollowBrand = res.data.dt
          this.checkMyFollow(id)
        })
    },
    delMyFollow (id) {
      if (this.identity === '顧客') {
        const API = `http://fotricle.rocket-coding.com/api/MyFollows/${id}`
        const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
        this.axios.delete(API, config)
          .then(res => {
            this.getMyFollow()
          })
      }
    },
    checkMyFollow (id) {
      if (
        this.myFollowBrand.some(brandId => {
          return brandId.BrandId === Number(id)
        })) {
        this.isFollow = true
      } else {
        this.isFollow = false
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
    },
    getMessage () {
      const API = 'http://fotricle.rocket-coding.com/notice/customer'
      const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      }
      this.axios.get(API, config).then((res) => {
        console.log(res)
        this.messageBox = res.data.notice.sort((a, b) => {
          return new Date(b.InitDate) - new Date(a.InitDate)
        })
      })
    },
    getBrandList () {
      const API = 'http://fotricle.rocket-coding.com/Brand/All'
      this.axios.get(API)
        .then(res => {
          this.brandList = res.data.brandAll
          this.brandList.forEach(brand => {
            brand.feedback = []
            brand.opentime = []
            brand.feedback = res.data.brandfeedback.filter(feedback => {
              return feedback.BrandId === brand.Id
            })
            brand.opentime = res.data.brandopentime.filter(opentime => {
              return opentime.BrandId === brand.Id
            })
            brand.allSuggest = 0
            brand.feedback.forEach(allSuggest => {
              brand.allSuggest += (allSuggest.AllSuggest / brand.feedback.length)
            })
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
