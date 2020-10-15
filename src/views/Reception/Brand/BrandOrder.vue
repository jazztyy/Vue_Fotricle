<template>
      <div class="flex flex-col lg:flex-row lg:items-start py-10">
        <order-aside
        />
        <router-view
        :OrderCofirmList='OrderCofirmList'
        :OrderFoundList='OrderFoundList'
        :OrderFoodCompleted='OrderFoodCompleted'
        :BrandProducts='BrandProducts'
        @changeOrderPhase='changeOrderPhase'
        @changeLoading="changeLoading"
        @getBrandOrderList='getBrandOrderList'
        @showAlertAside="showAlertAside"
        @showAlert="showAlert"
        @showAlertButton="showAlertButton"
        >
        </router-view>
      </div>
</template>

<script>
import OrderAside from '../../../components/Brand/OrderAside'

export default {
  name: 'BrandOrder',
  components: {
    OrderAside
  },
  data () {
    return {
      OrderCofirmList: {},
      OrderFoundList: {},
      OrderFoodCompleted: {},
      BrandProducts: {}
    }
  },
  created () {
    this.getBrandOrderList()
    this.getBrandProducts()
  },
  methods: {
    getBrandOrderList (message, status) {
      this.changeLoading(true)
      const API = 'http://fotricle.rocket-coding.com/BrandOrder/Get'
      const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      this.axios
        .get(API, config)
        .then((res) => {
          this.OrderCofirmList = res.data.today.filter(item => {
            return item.status === '訂單處理中'
          })
          this.OrderFoundList = res.data.today.filter(item => {
            return item.status === '訂單成立'
          })
          this.OrderFoodCompleted = res.data.today.filter(item => {
            return item.status === '訂單餐點完成' || item.status === '訂單成立'
          })
          this.changeLoading(false)
          if (message) {
            this.showAlertAside(message, status)
          }
        })
        .catch((err) => {
          console.log(err)
          this.changeLoading(false)
          this.showAlertButton('資料載入失敗，請重整頁面', 'error', 'reload')
        })
    },
    changeOrderPhase (phase, orderId, message, status) {
      const API = 'http://fotricle.rocket-coding.com/update/orderstatus'
      const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      let body = {}

      switch (phase) {
        case 'Comfirm':
          body = {
            OrderId: orderId,
            Status: 1
          }
          this.addMessage(orderId, 1, '您的訂單已成立，可至訂單明細查看詳細資訊')
          break
        case 'Fail':
          body = {
            OrderId: orderId,
            Status: 2,
            Remark2: `${message}`
          }
          this.addMessage(orderId, 2, `您的餐點由於 ${message} 因此被取消。`)
          break
        case 'Finished':
          body = {
            OrderId: orderId,
            Status: 4
          }
          this.addMessage(orderId, 4, '您的訂單已完成，可至訂單明細填寫回饋單')
          break
        case 'FoodCompleted':
          body = {
            OrderId: orderId,
            Status: 3
          }
          this.addMessage(orderId, 3, '您的餐點已完成，可前往取餐')
          break
      }
      this.axios.patch(API, body, config)
        .then(res => {
          this.getBrandOrderList('訂單狀態修改成功', 'success')
        })
        .catch(err => {
          console.log(err)
          this.showAlertButton('操作失敗，請重新操作', 'error')
        })
    },
    getBrandProducts () {
      const API = `http://fotricle.rocket-coding.com/ProductLists/Gets?Id=${localStorage.getItem('id')}`
      this.axios
        .get(API)
        .then((res) => {
          this.BrandProducts = res.data.products.filter(product => {
            return product.IsUse === '是'
          })
        })
        .catch((err) => {
          console.log(err)
          this.showAlertButton('資料載入失敗，請重整頁面', 'error', 'reload')
        })
    },
    addMessage (orderId, OrderStatus, remarks) {
      const API = 'http://fotricle.rocket-coding.com/notice/create'
      const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      const body = {
        OrderId: orderId,
        OrderStatus: OrderStatus,
        Remarks: remarks
      }
      this.axios.post(API, body, config)
        .then(res => {
        })
        .catch(err => {
          console.log(err)
          this.showAlertButton('操作失敗，請重新操作', 'success')
        })
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
