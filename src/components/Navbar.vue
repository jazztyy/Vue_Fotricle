<template>
     <header class="bg-maincolor-400 sticky top-0 z-40">
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
                <li class="nav-btn hidden md:block">
                    <router-link to="/Login">會員登入</router-link>
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
  }
}
</script>
