<template>
        <div class="flex flex-col lg:flex-row justify-evenly lg:items-start py-10">
            <Aside/>
            <router-view
            :feedback="feedback"
            :dataAnalysis="dataAnalysis"
            :sort='sort'
            :brandData='brandData'
            @changeLoading='changeLoading'
            @getBrandData='getBrandData'
            @showAlertAside="showAlertAside"
            @showAlert="showAlert"
            @showAlertButton="showAlertButton"
            ></router-view>
        </div>
</template>

<script>
import Aside from '../../../components/Brand/Aside'

export default {
  name: 'Edit',
  props: ['brandData', 'sort'],
  data () {
    return {
      feedback: [],
      dataAnalysis: []
    }
  },
  created () {
    const vm = this
    this.axios.all(
      [
        vm.changeLoading(true),
        vm.getDataStatistics(),
        vm.getFeedback()
      ]).then(vm.axios.spread((...res) => {
      vm.changeLoading(false)
    }))
  },
  components: {
    Aside
  },
  methods: {
    getDataStatistics () {
      const API = 'http://fotricle.rocket-coding.com/OrderSale/Get'
      const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      this.axios.get(API, config)
        .then(res => {
          if (res.data['數據統計'].length !== 0) {
            this.dataAnalysis = res.data['數據統計'][0].Time.sort((a, b) => {
              return new Date(b.Ordertime) - new Date(a.Ordertime)
            })
          }
        })
    },
    getFeedback () {
      const API = `http://fotricle.rocket-coding.com/customer/feedback?id=${localStorage.getItem('id')}`
      this.axios.get(API)
        .then(res => {
          this.feedback = res.data.fback.sort((a, b) => {
            return new Date(b.Date) - new Date(a.Date)
          })
        })
    },
    getBrandData () {
      this.$emit('getBrandData')
    },
    showAlertAside (message, status) {
      this.$emit('showAlertAside', message, status)
    },
    showAlert (message, status) {
      this.$emit('showAlert', message, status)
    },
    showAlertButton (message, status, reload) {
      this.$emit('showAlertButton', message, status, reload)
    },
    changeLoading (status) {
      this.$emit('changeLoading', status)
    }
  }
}
</script>
