<template>
        <div class="flex flex-col lg:flex-row justify-evenly lg:items-start py-10">
            <Aside/>
            <router-view
            :feedback="feedback"
            :dataAnalysis="dataAnalysis"
            ></router-view>
        </div>
</template>

<script>
import Aside from '../../../components/Brand/Aside'

export default {
  name: 'Edit',
  data () {
    return {
      feedback: [],
      dataAnalysis: []
    }
  },
  created () {
    this.getDataStatistics()
    this.getFeedback()
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
          console.log(res)
          if (res.data['數據統計'].length !== 0) {
            this.dataAnalysis = res.data['數據統計'][0].Time
          }
        })
    },
    getFeedback () {
      const API = `http://fotricle.rocket-coding.com/customer/feedback?id=${localStorage.getItem('id')}`
      this.axios.get(API)
        .then(res => {
          this.feedback = res.data.feedback
        })
    }
  }
}
</script>
