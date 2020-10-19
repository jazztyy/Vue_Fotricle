<template>
  <header class="bg-secondcolor-400">
    <nav class="px-5 flex justify-between items-center container mx-auto">
      <h1 class="w-1/2 md:w-1/5 py-1">
        <router-link to="/Home"><img src="/img/logo.svg" alt=""></router-link>
      </h1>
      <ul class="flex justify-end md:justify-around text-xl text-maincolor-400">
        <li class="hidden md:block p-3 hover:bg-maincolor-400">
          <router-link to="/Search" class="hover:text-secondcolor-400" >餐車列表</router-link>
        </li>
        <li class="flex justify-center py-3">
            <div class="relative">
              <div
                class="flex cursor-pointer"
                @mouseover="dropdownOpen = true"
                @click="dropdownOpen = !dropdownOpen"
              >
                <img :src="brandData.CarImage" class="h-8 w-8 rounded-full mr-3"/>
                <p>{{ brandData.BrandName }}</p>
                <button class="relative z-10 block rounded-md p-2 focus:outline-none">
                  <svg
                    class="h-5 w-5 text-maincolor-400"
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
                class="absolute right-0 top-100 mt-2 py-2 w-48 bg-thirdcolor-300 rounded-b-md shadow-xl z-20 text-center"
              >
                <li>
                  <router-link
                    to="/Search"
                    class="block md:hidden px-4 py-2 text-lg capitalize text-gray-700 hover:bg-maincolor-100 hover:text-white"
                  >餐車列表</router-link>
                </li>
                <li>
                  <router-link
                    to="/Brand/Edit/Menu"
                    class="block px-4 py-2 text-lg capitalize text-gray-700 hover:bg-maincolor-100 hover:text-white"
                  >後臺系統</router-link>
                </li>
                <li>
                  <router-link
                    router-link to="/Brand/Order/Site"
                    class="block px-4 py-2 text-lg capitalize text-gray-700 hover:bg-maincolor-100 hover:text-white"
                  >訂單系統</router-link>
                </li>
                <li>
                  <router-link
                    to="/Brand/Order/Reception"
                    class="block px-4 py-2 text-lg capitalize text-gray-700 hover:bg-maincolor-100 hover:text-white"
                  >廚房端</router-link>
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
          </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  props: ['whichPage', 'brandData'],
  data () {
    return {
      dropdownOpen: false
    }
  },
  methods: {
    logout () {
      localStorage.setItem('token', '')
      localStorage.setItem('id', '')
      this.$emit('changeIdentity', 'Visitors')
    }
  }
}
</script>
