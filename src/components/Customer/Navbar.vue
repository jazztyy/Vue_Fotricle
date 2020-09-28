<template>
  <header class="bg-maincolor-100 relative">
    <nav class="px-5 flex justify-between items-center">
      <ul class="nav md:hidden text-xl">
        <li class="nav-btn">
          <i class="fas fa-hamburger cursor-pointer"></i>
        </li>
      </ul>
      <h1 class="w-2/3 py-1 text-thirdcolor-500 text-4xl text-left">
        <router-link to="/Home">Fotricle</router-link>
      </h1>
      <ul class="nav justify-end md:justify-around text-xl">
        <li class="nav-btn hidden md:block">
          <router-link to="/Search">餐車列表</router-link>
        </li>
        <li class="nav-btn hidden md:block relative">
          <div class="flex justify-center">
            <div class="relative">
              <div
                class="flex cursor-pointer"
                @mouseover="dropdownOpen = true"
                @click="dropdownOpen = !dropdownOpen"
              >
                <img class="h-8 w-8 rounded-full mr-3" :src="userData.CusPhoto" alt />
                <p>{{ userData.UserName }}</p>
                <button class="relative z-10 block rounded-md p-2 focus:outline-none">
                  <svg
                    class="h-5 w-5 text-thirdcolor-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="5 2 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <ul
                v-show="dropdownOpen"
                @mouseleave="dropdownOpen = false"
                class="absolute right-0 top-120 mt-2 py-2 w-48 bg-thirdcolor-500 rounded-b-md shadow-xl z-20"
              >
                <li>
                  <router-link
                    to="/Customer/OrderList"
                    class="block px-4 py-2 text-lg capitalize text-gray-700 hover:bg-maincolor-100 hover:text-white"
                  >訂單明細</router-link>
                </li>
                <li>
                  <router-link
                    to="/Customer/UserData"
                    class="block px-4 py-2 text-lg capitalize text-gray-700 hover:bg-maincolor-100 hover:text-white"
                  >個人資料</router-link>
                </li>
                <li>
                  <router-link
                    to="/Customer/MyFollow"
                    class="block px-4 py-2 text-lg capitalize text-gray-700 hover:bg-maincolor-100 hover:text-white"
                  >我的追蹤</router-link>
                </li>
                <li>
                  <router-link
                    to="/Customer/MessageBox"
                    class="block px-4 py-2 text-lg capitalize text-gray-700 hover:bg-maincolor-100 hover:text-white"
                  >訊息通知</router-link>
                </li>
                <li>
                  <router-link
                    to="/Home"
                    @click.native="logout"
                    class="block px-4 py-2 text-lg capitalize text-gray-700 hover:bg-maincolor-100 hover:text-white"
                  >登出</router-link>
                </li>
              </ul>
            </div>
          </div>
          <!-- <div
                v-show="dropdownOpen"
                class="absolute inset-0 h-full w-full z-10"
              >
          </div>-->
        </li>
        <li class="fixed z-10 fixed-br text-5xl xs:90% md:text-thirdcolor-400 md:static md:text-xl">
          <router-link class="w-full block" to="/Customer/MessageBox">
            <div class="relative">
              <i class="nav-btn fas fa-bell"></i>
              <p
                class="bg-red-600 absolute w-5 h-5 text-xs rounded-full bottom-60 left-90"
                v-show="messageBox.length"
              >{{ messageBox.length }}</p>
            </div>
          </router-link>
        </li>
        <li>
          <a class="relative" href="#" @click.prevent="isShowCart = !isShowCart">
            <i class="nav-btn fas fa-shopping-cart cursor-pointer"></i>
            <p
              class="bg-red-600 absolute w-5 h-5 text-xs rounded-full bottom-60 left-90"
              v-show="shoppingCart.length"
            >{{ shoppingCart.length }}</p>
          </a>
          <div
            class="absolute top-100 right-0 md:right-3 z-40 bg-thirdcolor-400 text-black rounded-b-lg md:w-1/3 lg:w-1/4 shadow-lg"
            v-show="isShowCart"
          >
            <p v-if="!shoppingCart[0]">購物車目前是空的</p>
            <ul v-if="shoppingCart[0]">
              <li
                class="flex relative p-4 border-b border-black my-3"
                v-for="product of shoppingCart"
                :key="product.Id"
              >
                <div class="flex items-center justify-center">
                  <h4 class>{{ product.ProductList.ProductName }}</h4>
                  <div class="flex w-1/5">
                    <input
                      class="w-full text-center bg-transparent"
                      v-model="product.ProductList.ProductUnit"
                      type="text"
                      disabled
                    />
                    份
                  </div>
                  <p class="w-1/4 ml-3">{{ product.ProductList.Amount }} 元</p>
                </div>
                <i
                  class="fas fa-times absolute top-0 text-red-500 hover:text-red-700 right-2 cursor-pointer"
                  @click="delShoppingCartProduct(product.Id)"
                ></i>
              </li>
            </ul>
            <div class v-if="shoppingCart[0]">
              <div class="flex justify-between mb-3 px-2">
                <button
                  class="text-lg bg-red-500 hover:bg-red-700 px-2 rounded-lg focus:outline-none"
                  @click="delAllShoppingCartProduct"
                >刪除全品項</button>
                <p>
                  總計：
                  <span>{{ totalPrice }}</span>
                </p>
              </div>
              <div>
                <router-link
                  class="w-full text-thirdcolor-400 bg-maincolor-200 hover:bg-maincolor-200 md:rounded-b-lg inline-block py-3"
                  to="/CheckoutPage"
                  @click.native="isShowCart = false"
                >結帳</router-link>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data () {
    return {
      isShowCart: false,
      dropdownOpen: false
    }
  },
  props: ['totalPrice', 'shoppingCart', 'messageBox', 'userData'],
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
