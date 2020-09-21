<template>
  <table class="w-full">
    <thead>
      <tr>
        <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">訂單編號</th>
        <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">餐車名稱</th>
        <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">訂單明細</th>
        <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">金額</th>
        <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell"></th>
      </tr>
    </thead>
    <tbody class="text-xl">
      <tr
        class="lg:hover:bg-secondcolor-600 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-5 lg:mb-0"
        v-for="order of OrderSuccessList" :key="order.Id"
      >
        <td
          class="w-full lg:w-auto p-3 text-center border-b block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
          >訂單編號</span>
          {{ order.Id }}
        </td>
        <td
          class="w-full lg:w-auto p-3 border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
          >餐車名稱</span>
          {{ order.brandName }}
        </td>
        <td
          class="w-full lg:w-auto p-3 border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
          >訂單明細</span>
          <span
                class="pr-3"
                v-for="(item, i) of order.OrderDetails"
                :key="i"
              >{{ item.ProductName + '*' + item.ProductUnit }}</span>
        </td>
        <td
          class="w-full lg:w-auto p-3 border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
          >金額</span>
          {{ order.Total }}
        </td>
        <td
          class="w-full lg:w-auto p-3 border-b text-center block lg:table-cell relative lg:static"
        >
          <button class="btn-main px-5 py-2" @click="isShow = true; orderId = order.Id">回饋單</button>
          <div class="w-1/3 rounded-lg bg-thirdcolor-400 absolute top-half left-half trans-center z-50" v-if="isShow">
          <i class="text-3xl absolute fas fa-times p-3 right-0 cursor-pointer"
    @click="isShow = false"></i>
            <p class="text-secondcolor-600 py-3 text-3xl">回饋單</p>
            <ul class="text-2xl">
              <li class="flex items-center justify-evenly py-3">
                <p>餐點滿意度</p>
                <star-rating
                v-model="foodRating"
                :increment='1'
                :show-rating='false'
                :star-size='35'
                ></star-rating>
              </li>
              <li class="flex items-center justify-evenly py-3">
                <p>服務滿意度</p>
                <star-rating
                v-model="serviceRating"
                :increment='1'
                :show-rating='false'
                :star-size='35'
                ></star-rating>
              </li>
              <li class="flex items-center justify-evenly py-3">
                <p>整體滿意度</p>
                <star-rating
                v-model="allRating"
                :increment='1'
                :show-rating='false'
                :star-size='35'
                ></star-rating>
              </li>
              <li class="flex flex-col justify-center items-center py-3">
                <label for="advice" class="mb-3">給予餐車建議</label>
                <textarea class="w-3/4 rounded-lg text-xl indent" name="建議" id="advice" rows="3"
                v-model="advice"
                >
                </textarea>
              </li>
            </ul>
            <button class="bg-maincolor-400 text-thirdcolor-400 rounded-lg px-5 py-2 mb-3" @click="addFeedback">送出</button>
          </div>
          <div class="mask z-40" v-if="isShow"></div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ['OrderSuccessList'],
  data () {
    return {
      isShow: false,
      foodRating: 0,
      allRating: 0,
      serviceRating: 0,
      advice: '',
      orderId: 0
    }
  },
  methods: {
    addFeedback () {
      const API = 'http://fotricle.rocket-coding.com/feedback/create'
      const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      const body = {
        OrderId: this.orderId,
        Food: this.foodRating,
        Service: this.serviceRating,
        AllSuggest: this.allRating,
        CarSuggest: this.advice
      }
      console.log(API, config)
      console.log(body)
      this.axios.post(API, body, config)
        .then(res => {
          console.log(res)
          this.changeOrderPhase()
          this.isShow = false
          this.foodRating = 0
          this.allRating = 0
          this.serviceRating = 0
          this.advice = ''
          this.orderId = 0
        })
    },
    changeOrderPhase () {
      const API = 'http://fotricle.rocket-coding.com/update/orderstatus'
      const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      const body = {
        OrderId: this.orderId,
        Status: 5
      }
      this.axios.patch(API, body, config)
        .then(res => {
          console.log(res)
          this.getOrderList()
        })
    },
    getOrderList () {
      this.$emit('getOrderList')
    }

  }
}
</script>
