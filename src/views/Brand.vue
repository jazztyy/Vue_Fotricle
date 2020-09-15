<template>
  <div>
    <main class="keep-footer-bottom">
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
    } else {
      this.getData()
    }
  },
  methods: {
    getData () {
    }
  }
}
</script>
