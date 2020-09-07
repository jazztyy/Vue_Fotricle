<template>
    <header class="bg-maincolor-400">
        <nav class="container mx-auto px-5 flex items-center">
            <ul class="nav md:justify-around text-xl">
                <li class="nav-btn hidden md:block">
                    <a href="#">點餐</a>
                </li>
                <li class="nav-btn hidden md:block">
                    <a href="#">關於我們</a>
                </li>
                <li class="nav-btn md:hidden">
                    <i class="fas fa-hamburger cursor-pointer"></i>
                </li>
            </ul>
            <h1 class="flex-1 py-1 text-thirdcolor-500 text-5xl text-center">
                <router-link to="/">Fotricle</router-link>
            </h1>
            <ul class="nav justify-end md:justify-around text-xl">
                <li class="nav-btn hidden md:block">
                    <a href="#">餐車列表</a>
                </li>
                <li class="nav-btn fixed z-20 fixed-br text-5xl xs:90% md:text-thirdcolor-400 md:static md:text-xl">
                    <router-link class="w-full block" to="/Customer/MessageBox"
                    ><i class="fas fa-bell"></i>
                    </router-link>
                </li>
                <li class="nav-btn">
                    <a href="shoppingcart.html"><i class="fas fa-shopping-cart cursor-pointer"></i></a>
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
  methods: {
    logout () {
      document.cookie = 'token=;'
      window.location = '/'
    }
  }
}
</script>
