<template>
  <div class="keep-footer-bottom">
    <navbar v-if="identity === 'Visitors'"
    @changeIdentity="changeIdentity"
    class="sticky top-0 z-40"
    />
    <brand-navbar v-if="identity === '餐車'"
    @changeIdentity="changeIdentity"
    class="sticky top-0 z-40"
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
    :userData='userData'
    class="sticky top-0 z-40"
    />
    <router-view
    @getShoppingCartProduct='getShoppingCartProduct'
    @addShoppingCartProduct='addShoppingCartProduct'
    @delShoppingCartProduct='delShoppingCartProduct'
    @delAllShoppingCartProduct='delAllShoppingCartProduct'
    @editShoppingCartProduct="editShoppingCartProduct"
    @getMyFollow="getMyFollow"
    @addMyFollow="addMyFollow"
    @delMyFollow="delMyFollow"
    @getOrderList="getOrderList"
    @getMessage='getMessage'
    @getBrandList='getBrandList'
    @getUserData='getUserData'
    @checkMyFollow='checkMyFollow'
    @changeIdentity="changeIdentity"
    @changeLoading='changeLoading'
    @showAlertAside='showAlertAside'
    @showAlert='showAlert'
    :userData='userData'
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
      userData: {},
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
      const vm = this
      if (this.identity === '顧客') {
        this.axios.all(
          [
            vm.getOrderList(),
            vm.getMyFollow(),
            vm.getMessage(),
            vm.getUserData()
          ]).catch(vm.axios.spread((...err) => {
          console.log(err)
          this.showAlertButton('資料載入失敗，請重整頁面', 'error')
        }))
      }
    }
  },
  methods: {
    addShoppingCartProduct (id, brandId, ProductUnit = 1) {
      this.isLoading = true
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
            this.getShoppingCartProduct('成功添加商品', 'success')
          })
          .catch((err) => {
            console.log(err)
            this.isLoading = false
            this.showAlertButton('商品加入購物車失敗，請重新操作', 'error')
          })
      } else {
        this.showAlertButton('同筆訂單中只能購買相同餐車的商品', 'error')
      }
    },
    getShoppingCartProduct (message, status) {
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
          if (message) {
            this.showAlertAside(message, status)
            this.isLoading = false
          }
        })
        .catch((err) => {
          console.log(err)
          this.showAlertButton('購物車載入失敗，請重新操作', 'error')
        })
    },
    delShoppingCartProduct (id) {
      this.isLoading = true
      const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      const API = `http://fotricle.rocket-coding.com/cart/${id}`
      this.axios
        .delete(API, config)
        .then((res) => {
          this.getShoppingCartProduct('商品已刪除', 'success')
        })
        .catch((err) => {
          console.log(err)
          this.isLoading = false
          this.showAlertButton('商品刪除失敗，請重新操作', 'error')
        })
    },
    delAllShoppingCartProduct () {
      this.isLoading = true
      const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      const API = 'http://fotricle.rocket-coding.com/cart/ALL'
      this.axios
        .delete(API, config)
        .then((res) => {
          this.getShoppingCartProduct('購物車已清空', 'success')
        })
        .catch((err) => {
          console.log(err)
          this.showAlertButton('購物車清空失敗，請重新操作', 'error')
        })
    },
    editShoppingCartProduct (id, number) {
      this.isLoading = true
      const API = `http://fotricle.rocket-coding.com/cart/Edit?Id=${id}`
      const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      const body = {
        ProductUnit: number
      }
      this.axios.patch(API, body, config)
        .then(res => {
          this.getShoppingCartProduct('產品修改成功', 'success')
        })
        .catch(err => {
          console.log(err)
          this.showAlertButton('產品修改失敗，請重新操作', 'error')
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
            this.getMyFollow(brandId, '成功追蹤', 'success')
          })
      }
    },
    getMyFollow (id, message, status) {
      const API = 'http://fotricle.rocket-coding.com/customer/myfollow'
      const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      this.axios.get(API, config)
        .then(res => {
          this.myFollowBrand = res.data.dt
          this.checkMyFollow(id)
          if (message) {
            this.showAlertAside(message, status)
          }
        })
        .catch(err => {
          console.log(err)
          this.showAlertButton('資料載入失敗，請重整頁面', 'error')
        })
    },
    delMyFollow (id) {
      if (this.identity === '顧客') {
        const API = `http://fotricle.rocket-coding.com/api/MyFollows/${id}`
        const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
        this.axios.delete(API, config)
          .then(res => {
            this.getMyFollow('', '追蹤已取消', 'success')
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
            if (item.LinepayVer === '') {
              item.LinepayVer = '現金'
            }
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
        .catch(err => {
          console.log(err)
          this.showAlertButton('資料載入失敗，請重整頁面', 'error')
        })
    },
    getMessage (message, status) {
      const API = 'http://fotricle.rocket-coding.com/notice/customer'
      const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      }
      this.axios.get(API, config)
        .then((res) => {
          this.messageBox = res.data.notice.sort((a, b) => {
            return new Date(b.InitDate) - new Date(a.InitDate)
          })
          if (this.messageBox[0] && !message) {
            this.showAlertButton('您有訊息通知可前往查詢', 'info')
          }
          if (message) {
            this.showAlertAside('訊息已讀', 'success')
          }
        })
        .catch(err => {
          console.log(err)
          this.showAlertButton('資料載入失敗，請重整頁面', 'error')
        })
    },
    getUserData (message, status) {
      const API = `http://fotricle.rocket-coding.com/api/customer/${localStorage.getItem('id')}`
      const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      const Gender = {
        1: '女',
        0: '男'
      }
      this.axios
        .get(API, config)
        .then((res) => {
          this.userData = res.data.member
          this.userData.Gender = Gender[this.userData.Gender]
          if (message) {
            this.showAlertAside(message, status)
          }
          this.changeLoading(false)
        })
        .catch((err) => {
          console.log(err)
          this.showAlertButton('資料載入失敗，請重整頁面', 'error')
          this.changeLoading(false)
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
    },
    changeLoading (status) {
      this.isLoading = status
    },
    showAlertAside (message, status) {
      this.$swal({
        toast: true,
        position: 'top-end',
        icon: status,
        title: message,
        showConfirmButton: false,
        timer: 1000
      })
    },
    showAlert (message, status) {
      this.$swal({
        icon: status,
        title: message,
        showConfirmButton: false,
        timer: 1000
      })
    },
    showAlertButton (message, status) {
      this.$swal({
        icon: status,
        title: message,
        showConfirmButton: true
      })
    }
  }
}
</script>
