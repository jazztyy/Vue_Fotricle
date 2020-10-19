<template>
  <header class="bg-secondcolor-400">
    <nav class="px-5 flex items-center justify-between relative container mx-auto">
      <h1 class="w-1/2 md:w-1/5 py-1">
        <router-link to="/Home"><img src="/img/logo.svg" alt=""></router-link>
      </h1>
      <ul
        class="absolute hidden top-100 right-0 mx-3 px-5 text-maincolor-400 rounded-b-lg justify-end md:flex md:bg-transparent md:static text-xl"
      >
        <li class="nav-btn md:block md:mb-0 p-4  hover:bg-maincolor-400 font-semibold">
          <router-link to="/Search">餐車列表</router-link>
        </li>
        <li class="nav-btn md:block p-4  hover:bg-maincolor-400 font-semibold">
          <router-link to="/Login">會員登入 / 註冊</router-link>
        </li>
        <div class="relative"></div>
      </ul>
      <div
        class="flex cursor-pointer md:hidden"
        @mouseover="dropdownOpen = true"
        @click="dropdownOpen = !dropdownOpen"
      ><i class="fas fa-hamburger cursor-pointer text-maincolor-400 text-xl hover:text-thirdcolor-600"></i></div>
      <ul
        v-show="dropdownOpen"
        @mouseleave="dropdownOpen = false"
        class="absolute right-0 top-100 py-2 w-48 bg-thirdcolor-300 rounded-b-md shadow-xl z-20 text-center"
      >
        <li>
          <router-link
            to="/Search"
            class="block px-4 py-2 text-lg capitalize text-gray-700 hover:bg-maincolor-100 hover:text-white"
          >餐車列表</router-link>
        </li>
        <li>
          <router-link
            to="/Login"
            class="block px-4 py-2 text-lg capitalize text-gray-700 hover:bg-maincolor-100 hover:text-white"
          >會員登入 / 註冊</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    changeIdentity (identity) {
      this.$emit('changeIdentity', identity)
    }
  },
  data () {
    return {
      dropdownOpen: false
    }
  }
}
</script>
