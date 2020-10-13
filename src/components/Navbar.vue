<template>
  <header class="bg-maincolor-200">
    <nav class="px-5 flex items-center justify-between relative">
      <ul class="nav hidden md:block md:justify-around text-xl">
        <li class="nav-btn">
          <router-link to="/About">關於我們</router-link>
        </li>
      </ul>
      <h1 class="py-1 text-thirdcolor-500 text-4xl">
        <router-link to="/Home">Fotricle</router-link>
      </h1>
      <ul
        class="nav absolute hidden top-100 right-0 mx-3 py-3 px-5 text-black rounded-b-lg justify-end md:flex md:bg-transparent md:text-thirdcolor-400 md:static md:justify-around text-xl"
      >
        <li class="nav-btn mb-2 md:block md:mb-0">
          <router-link to="/Search">餐車列表</router-link>
        </li>
        <li class="nav-btn md:block">
          <router-link to="/Login">會員登入</router-link>
        </li>
        <div class="relative"></div>
      </ul>
      <div
        class="flex cursor-pointer"
        @mouseover="dropdownOpen = true"
        @click="dropdownOpen = !dropdownOpen"
      ><i class="fas fa-hamburger cursor-pointer text-thirdcolor-400 text-xl nav-btn md:hidden"></i></div>
      <ul
        v-show="dropdownOpen"
        @mouseleave="dropdownOpen = false"
        class="absolute right-0 top-100 py-2 w-48 bg-thirdcolor-500 rounded-b-md shadow-xl z-20 text-center"
      >
        <li>
          <router-link
            to="/About"
            class="block px-4 py-2 text-lg capitalize text-gray-700 hover:bg-maincolor-100 hover:text-white"
          >關於我們</router-link>
        </li>
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
          >會員登入</router-link>
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
