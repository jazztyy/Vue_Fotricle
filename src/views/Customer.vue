<template>
  <div>
    <Navbar />
    <main class="keep-footer-bottom flex flex-col lg:flex-row justify-evenly lg:items-start py-10">
      <Aside />
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Customer/Navbar'
import Footer from '../components/Footer'
import Aside from '../components/Customer/Aside'

export default {
  name: 'Customer',
  components: {
    Navbar,
    Footer,
    Aside
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
