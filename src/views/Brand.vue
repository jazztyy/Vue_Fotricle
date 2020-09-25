<template>
  <div>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>

export default {
  name: 'Brand',
  data () {
    return {
      token: ''
    }
  },
  created () {
    this.token = localStorage.getItem('token')
    if (this.token === '') {
      window.location = '/#/Login'
    }
  }
}
</script>
