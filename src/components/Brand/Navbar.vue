<template>
  <header class="bg-maincolor-400">
    <nav class="container mx-auto px-5 flex justify-between items-center">
      <h1 class="w-3/5 py-1 text-thirdcolor-500 text-5xl">
        <router-link to="/Home">Fotricle</router-link>
      </h1>
      <ul class="w-2/5 nav justify-end md:justify-around text-xl">
        <li class="nav-btn md:block">
          <router-link to="/Brand/Order/Site">訂單系統</router-link>
        </li>
        <li class="nav-btn md:block">
          <router-link to="/Brand/Edit/Menu">後台系統</router-link>
        </li>
        <li class="nav-btn md:block">
          <router-link to="/Brand/Reception">廚房端</router-link>
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
  props: ['whichPage'],
  methods: {
    logout () {
      localStorage.setItem('token', '')
      localStorage.setItem('id', '')
      window.location = '/Home'
    }
  }
}
</script>
