<template>
  <div>
    <main class="keep-footer-bottom flex flex-col lg:flex-row justify-evenly lg:items-start py-10">
      <Aside />
      <router-view
      :myFollowBrand='myFollowBrand'
      ></router-view>
    </main>
  </div>
</template>

<script>
import Aside from '../components/Customer/Aside'

export default {
  name: 'Customer',
  components: {
    Aside
  },
  data () {
    return {
      token: ''
    }
  },
  props: ['myFollowBrand'],
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
