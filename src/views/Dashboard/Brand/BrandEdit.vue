<template>
        <div class="keep-footer-bottom flex flex-col lg:flex-row justify-evenly lg:items-start py-10">
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
          this.dataAnalysis = res.data['數據統計'][0].Time
          console.log(res)
          console.log(this.dataAnalysis)
        })
    },
    getFeedback () {
      const API = 'http://fotricle.rocket-coding.com/customer/feedback'
      const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      this.axios.get(API, config)
        .then(res => {
          this.feedback = res.data.feedback
          console.log(res)
          console.log(this.feedback)
        })
    }
  }
}
</script>
