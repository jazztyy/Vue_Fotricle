<template>
      <router-view
      :OrderCofirmList='OrderCofirmList'
      :OrderFoundList='OrderFoundList'
      :OrderFoodCompleted='OrderFoodCompleted'
      @changeOrderPhase='changeOrderPhase'
      >
      </router-view>
</template>

<script>

export default {
  name: 'BrandOrder',
  data () {
    return {
      OrderCofirmList: {},
      OrderFoundList: {},
      OrderFoodCompleted: {}
    }
  },
  methods: {
    getBrandOrderList () {
      const API = `http://fotricle.rocket-coding.com/BrandOrder/Get?Id=${localStorage.getItem('id')}`
      const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      this.axios
        .get(API, config)
        .then((res) => {
          console.log(res)
          this.OrderCofirmList = res.data.today.filter(item => {
            return item.status === '訂單處理中'
          })
          this.OrderFoundList = res.data.today.filter(item => {
            return item.status === '訂單成立'
          })
          this.OrderFoodCompleted = res.data.today.filter(item => {
            return item.status === '訂單餐點完成'
          })
          console.log(this.OrderCofirmList, '處理中')
          console.log(this.OrderFoundList, '成立')
          console.log(this.OrderFoodCompleted, '餐點')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    changeOrderPhase (phase, orderId, message) {
      const API = 'http://fotricle.rocket-coding.com/update/orderstatus'
      const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      let body = {}
      switch (phase) {
        case 'Comfirm':
          body = {
            OrderId: orderId,
            Status: 1,
            Remark1: '您的訂單已成立，可至訂單明細查看詳細資訊'
          }
          break
        case 'Fail':
          body = {
            OrderId: orderId,
            Status: 2,
            Remark2: `您的訂單已失敗，${message}`
          }
          break
        case 'Finished':
          body = {
            OrderId: orderId,
            Status: 4,
            Remark4: '您的訂單已完成，可至訂單明細填寫回饋單'
          }
          break
        case 'FoodCompleted':
          body = {
            OrderId: orderId,
            Status: 3,
            Remark3: '您的餐點已完成，可前往取餐'
          }
          break
      }
      this.axios.patch(API, body, config)
        .then(res => {
          console.log(res)
          this.getBrandOrderList()
        })
    }
  },
  created () {
    this.getBrandOrderList()
  }
}
</script>
