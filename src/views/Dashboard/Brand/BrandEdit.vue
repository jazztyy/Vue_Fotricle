<template>
        <div class="keep-footer-bottom flex flex-col lg:flex-row justify-evenly lg:items-start py-10">
            <Aside/>
            <router-view :token='token' :id='id' />
        </div>
</template>

<script>
import Aside from '../../../components/Brand/Aside'

export default {
  name: 'Edit',
  data () {
    return {
      token: '',
      id: ''
    }
  },
  created () {
    this.token = localStorage.getItem('token')
    this.id = localStorage.getItem('id')
  },
  components: {
    Aside
  }
}
</script>
