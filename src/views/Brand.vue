<template>
  <div>
    <main>
      <router-view
        @changeLoading="changeLoading"
        @getBrandData="getBrandData"
        @showAlertAside="showAlertAside"
        @showAlert="showAlert"
        @showAlertButton="showAlertButton"
        :brandData="brandData"
        :sort="sort"
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
    getBrandData (message, status) {
      this.$emit('getBrandData', message, status)
    },
    showAlertAside (message, status) {
      this.$emit('showAlertAside', message, status)
    },
    showAlert (message, status) {
      this.$emit('showAlert', message, status)
    },
    showAlertButton (message, status, reload) {
      this.$emit('showAlertButton', message, status, reload)
    }
  }
}
</script>
