<template>
  <section class="w-full mx-5 rounded-lg">
    <div class="bg-thirdcolor-400 rounded-lg flex flex-col shadow-lg mb-5">
      <table class="w-full mb-5 rounded-t-lg">
        <thead class="bg-maincolor-200 text-thirdcolor-400">
          <tr>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell rounded-tl-lg">金額</th>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">驗證碼</th>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">訂單內容</th>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell rounded-tr-lg"></th>
          </tr>
        </thead>
        <tbody class="text-xl">
          <tr
            class="flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-5 lg:mb-0 "
            v-for="order of OrderCofirmList"
            :key="order.Id"
          >
            <td
              class="w-full lg:w-auto p-3 border-b border-black text-center block lg:table-cell relative lg:static rounded-tl-lg"
            >
              <span
                class="lg:hidden absolute top-half left-0 transY bg-maincolor-200 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
              >金額</span>
              {{ order.Total }}
            </td>
            <td
              class="w-full lg:w-auto p-3 border-b border-black text-center block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-half left-0 transY bg-maincolor-200 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
              >驗證碼</span>
              {{ order.LinepayVer }}
            </td>
            <td
              class="w-full lg:w-auto p-3 border-b border-black text-center block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-half left-0 transY bg-maincolor-200 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
              >訂單內容</span>
              <span
                class="pr-3"
                v-for="(item, i) of order.OrderDetails"
                :key="i"
              >{{ item.ProductName + '*' + item.ProductUnit }}</span>
            </td>
            <td
              class="w-full lg:w-auto p-3 border-b border-black text-center block lg:table-cell relative lg:static"
            >
              <button
                class="text-thirdcolor-400 rounded-lg px-10 py-5 bg-red-600 hover:bg-red-800 mr-8"
                @click="isShow = true; orderId = order.Id"
              >拒絕</button>
              <button class="btn-main px-10 py-5" @click="changeOrderPhase('Comfirm', order.Id, '現場')">接受</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div
        class="absolute top-30 left-half trans-center z-50 bg-thirdcolor-400 flex-col flex rounded-lg"
        v-if="isShow"
      >
        <i
          class="text-black text-xl absolute fas fa-times p-3 right-0 cursor-pointer"
          @click="isShow = false"
        ></i>
        <label class="px-5 my-5 text-center text-2xl text-secondcolor-600" for="message">選擇拒絕理由</label>
        <select
          class="rounded-lg text-xl indent mx-5 mb-5 focus:outline-none"
          name
          id="message"
          v-model="message"
        >
          <option value="現場客人過多" selected>現場客人過多</option>
          <option value="餐點庫存不足">餐點庫存不足</option>
          <option value="驗證碼或金額錯誤">驗證碼或金額錯誤</option>
          <option value="目前非營業時間">目前非營業時間</option>
        </select>
        <button
          class="w-full text-xl py-2 bg-secondcolor-400 rounded-b-lg"
          @click="changeOrderPhase('Fail', orderId, message); isShow = false"
        >送出</button>
      </div>
      <div class="mask z-40" v-if="isShow"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OrderOnline',
  props: ['OrderCofirmList'],
  data () {
    return {
      message: '現場客人過多',
      isShow: false,
      orderId: ''
    }
  },
  created () {},
  methods: {
    changeOrderPhase (phase, orderId) {
      this.$emit('changeOrderPhase', phase, orderId)
    }
  }
}
</script>
