<template>
  <header class="bg-maincolor-200">
    <nav class="px-5 flex justify-between items-center">
      <h1 class="w-3/5 py-1 text-thirdcolor-500 text-4xl">
        <router-link to="/Home">Fotricle</router-link>
      </h1>
      <ul class="w-2/5 nav justify-end md:justify-around text-xl">
        <li class="nav-btn">
          <router-link to="/Search" >餐車列表</router-link>
        </li>
        <li class="nav-btn md:block">
          <router-link to="/Brand/Order/Site">訂單系統</router-link>
        </li>
        <li class="nav-btn md:block">
          <router-link to="/Brand/Edit/Menu">後台系統</router-link>
        </li>
        <li class="nav-btn md:block">
          <router-link to="/Brand/Order/Reception">廚房端</router-link>
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
  props: ['whichPage'],
  methods: {
    logout () {
      localStorage.setItem('token', '')
      localStorage.setItem('id', '')
      this.$emit('changeIdentity', 'Visitors')
    }
  }
}
</script>
