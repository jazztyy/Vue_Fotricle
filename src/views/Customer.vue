<template>
  <div>
    <main class="flex flex-col lg:flex-row justify-evenly lg:items-start py-10">
      <Aside />
      <router-view
      :myFollowBrand='myFollowBrand'
      :OrderCofirmList='OrderCofirmList'
      :OrderFoundList='OrderFoundList'
      :OrderFoodCompletedList='OrderFoodCompletedList'
      :OrderFailList='OrderFailList'
      :OrderSuccessList='OrderSuccessList'
      :messageBox='messageBox'
      :userData='userData'
      @getOrderList="getOrderList"
      @getMessage='getMessage'
      @getUserData='getUserData'
      @changeLoading='changeLoading'
      @showAlertButton='showAlertButton'
      @showAlertAside='showAlertAside'
      @showAlert='showAlert'
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
  props: ['myFollowBrand', 'OrderCofirmList', 'OrderFoundList', 'OrderFoodCompletedList', 'OrderFailList', 'OrderSuccessList', 'messageBox', 'userData'],
  created () {
    this.token = localStorage.getItem('token')
    if (this.token === '') {
      window.location = '/#/Login'
    }
  },
  methods: {
    getOrderList () {
      this.$emit('getOrderList')
    },
    getMessage (message, status) {
      this.$emit('getMessage', message, status)
    },
    getUserData (message, status) {
      this.$emit('getUserData', message, status)
    },
    changeLoading (status) {
      this.$emit('changeLoading', status)
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
