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
      @getOrderList="getOrderList"
      @getMessage='getMessage'
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
  props: ['myFollowBrand', 'OrderCofirmList', 'OrderFoundList', 'OrderFoodCompletedList', 'OrderFailList', 'OrderSuccessList', 'messageBox'],
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
    getMessage () {
      this.$emit('getMessage')
    }
  }
}
</script>
