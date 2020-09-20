<template>
  <header class="bg-maincolor-400 sticky top-0 z-40">
    <nav class="container mx-auto px-5 flex items-center">
      <ul class="nav md:justify-around text-xl">
        <li class="nav-btn hidden md:block">
          <router-link to="/Search">點餐</router-link>
        </li>
        <li class="nav-btn hidden md:block">
          <router-link to="/Customer/OrderList">會員專區</router-link>
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
          class="fixed z-10 fixed-br text-5xl xs:90% md:text-thirdcolor-400 md:static md:text-xl"
        >
          <router-link class="w-full block" to="/Customer/MessageBox">
            <div class="relative">
              <i class="nav-btn fas fa-bell"></i>
              <p class="bg-red-600 absolute w-5 h-5 text-xs rounded-full bottom-60 left-90 " v-show="messageBox.length"> {{ messageBox.length }} </p>
            </div>
          </router-link>
        </li>
        <li>
          <a class="relative" href="#" @click.prevent="isShowCart = !isShowCart">
            <i class="nav-btn  fas fa-shopping-cart cursor-pointer"></i>
            <p class="bg-red-600 absolute w-5 h-5 text-xs rounded-full bottom-60 left-90 " v-show="shoppingCart.length"> {{ shoppingCart.length }} </p>
          </a>
          <div class="absolute top-100 right-0 md:right-3 z-40 bg-thirdcolor-400 text-black rounded-b-lg md:w-1/3 lg:w-1/4 shadow-lg"
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
                  @click="delShoppingCartProduct(product.Id)"
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
              <div>
                <router-link class="w-full text-thirdcolor-400 bg-maincolor-400 hover:bg-maincolor-600 md:rounded-b-lg inline-block py-3" to="/CheckoutPage" @click.native="isShowCart = false">結帳</router-link>
              </div>
            </div>
          </div>
        </li>
        <li class="nav-btn">
          <router-link to="/Home" @click.native="logout">登出</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data () {
    return {
      isShowCart: false
    }
  },
  props: ['totalPrice', 'shoppingCart', 'messageBox'],
  created () {
    this.id = localStorage.getItem('id')
    this.token = localStorage.getItem('token')
    this.getShoppingCartProduct()
  },
  methods: {
    logout () {
      localStorage.setItem('token', '')
      localStorage.setItem('id', '')
      this.$emit('changeIdentity', 'Visitors')
    },
    getShoppingCartProduct () {
      this.$emit('getShoppingCartProduct')
    },
    delShoppingCartProduct (id) {
      this.$emit('delShoppingCartProduct', id)
    },
    delAllShoppingCartProduct () {
      this.$emit('delAllShoppingCartProduct')
    }
  }
}
</script>
