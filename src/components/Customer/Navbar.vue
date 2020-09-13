<template>
  <header class="bg-maincolor-400 relative">
    <nav class="container mx-auto px-5 flex items-center">
      <ul class="nav md:justify-around text-xl">
        <li class="nav-btn hidden md:block">
          <router-link to="/Search">點餐</router-link>
        </li>
        <li class="nav-btn hidden md:block">
          <router-link to="/About">關於我們</router-link>
        </li>
        <li class="nav-btn md:hidden">
          <i class="fas fa-hamburger cursor-pointer"></i>
        </li>
      </ul>
      <h1 class="flex-1 py-1 text-thirdcolor-500 text-5xl text-center">
        <router-link to="/Home">Fotricle</router-link>
      </h1>
      <ul class="nav justify-end md:justify-around text-xl">
        <li class="nav-btn hidden md:block">
          <router-link to="/Search">餐車列表</router-link>
        </li>
        <li
          class="nav-btn fixed z-10 fixed-br text-5xl xs:90% md:text-thirdcolor-400 md:static md:text-xl"
        >
          <router-link class="w-full block" to="/Customer/MessageBox">
            <i class="fas fa-bell"></i>
          </router-link>
        </li>
        <li>
          <a class="nav-btn" href="#" @click="isShowCart = !isShowCart">
            <i class="fas fa-shopping-cart cursor-pointer"></i>
          </a>
          <div class="absolute top-100 right-0 md:right-3 z-20 bg-thirdcolor-400 text-black rounded-b-lg md:w-1/3 lg:w-1/4 shadow-lg"
          v-show="isShowCart"
          >
            <p v-if="!shoppingCart[0]">購物車目前是空的</p>
            <ul v-if="shoppingCart[0]">
              <li class="flex relative p-4 border-b border-black my-3"
              v-for="product of shoppingCart" :key="product.Id"
              >
                <div class="flex items-center justify-center">
                  <h4 class="">{{ product.ProductList.ProductName }}</h4>
                  <div class="flex w-1/5">
                    <input class="w-full text-center bg-transparent" v-model="product.ProductList.ProductUnit" type="text" disabled />
                    份
                  </div>
                  <p class="w-1/4 ml-3"> {{ product.ProductList.Amount }} 元</p>
                </div>
                  <i class="fas fa-times absolute top-0 text-red-500 hover:text-red-700 right-2 cursor-pointer"
                  @click=" delShoppingCartProduct(product.Id)"
                  ></i>
              </li>
            </ul>
            <div class=""
            v-if="shoppingCart[0]"
            >
              <div class="flex justify-between mb-3 px-2">
                <button class="text-lg bg-red-500 hover:bg-red-700 px-2 rounded-lg focus:outline-none"
                @click="delAllShoppingCartProduct"
                >刪除全品項</button>
                <p>
                  總計：
                  <span>{{ totalPrice }}</span>
                </p>
              </div>
              <div class="">
                <button class="w-1/2 bg-maincolor-400 hover:bg-maincolor-600 md:rounded-bl-lg inline-block text-thirdcolor-400 py-3">查看購物車</button>
                <button class="w-1/2 bg-secondcolor-400 hover:bg-secondcolor-600 md:rounded-br-lg inline-block py-3">結帳</button>
              </div>
            </div>
          </div>
        </li>
        <li class="nav-btn">
          <a href="#" @click.prevent="logout">登出</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data () {
    return {
      shoppingCart: {},
      totalPrice: 0,
      id: '',
      token: '',
      isShowCart: false
    }
  },
  created () {
    this.id = localStorage.getItem('id')
    this.token = localStorage.getItem('token')
    this.getShoppingCartProduct()
  },
  methods: {
    logout () {
      localStorage.setItem('token', '')
      localStorage.setItem('id', '')
      window.location = '/Home'
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
    getShoppingCartProduct () {
      const config = { headers: { Authorization: `Bearer ${this.token}` } }
      const API = `http://fotricle.rocket-coding.com/cart/customer/${this.id}`
      this.axios
        .get(API, config)
        .then((res) => {
          this.totalPrice = 0
          if (res.data.carts.length === 0) {
            localStorage.setItem('ShoppingCartId', '')
          }
          res.data.carts.forEach(productList => {
            this.totalPrice += productList.ProductList.Amount
          })
          this.shoppingCart = res.data.carts
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
