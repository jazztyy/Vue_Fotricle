<template>
  <div>
    <Navbar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Navbar from '../components/Brand/Navbar'

export default {
  name: 'Brand',
  components: {
    Navbar
  },
  data () {
    return {
      token: ''
    }
  },
  created () {
    this.token = document.cookie.replace(/token=/, '', '$1')
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
