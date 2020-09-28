<template>
  <div>
    <main>
      <router-view
      @changeLoading='changeLoading'
      @getBrandData='getBrandData'
      :brandData='brandData'
      :sort='sort'
      ></router-view>
    </main>
  </div>
</template>

<script>

export default {
  name: 'Brand',
  props: ['brandData', 'sort'],
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
  },
  methods: {
    changeLoading (status) {
      this.$emit('changeLoading', status)
    },
    getBrandData () {
      this.$emit('getBrandData')
    }
  }
}
</script>
