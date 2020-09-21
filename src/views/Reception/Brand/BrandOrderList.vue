<template>
  <section class="lg:w-11/12 mx-auto rounded-lg mb-5">
    <ul class="flex justify-between py-5">
      <li>
        <router-link
          class="block btn-second mb-5 md:mr-5 md:mb-0 p-5 text-3xl"
          to="/Brand/Order/Site"
        >點餐系統</router-link>
      </li>
      <li>
        <router-link
          class="block btn-second mb-5 md:mr-5 md:mb-0 p-5 text-3xl"
          to="/Brand/Order/Online"
        >網站訂單</router-link>
      </li>
    </ul>
    <div class="bg-thirdcolor-400 rounded-lg flex flex-col shadow-lg">
      <table class="w-full mb-5 rounded-t-lg">
        <thead class="bg-maincolor-400 text-thirdcolor-400">
          <tr>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell rounded-tl-lg">單號</th>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">訂單編號</th>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">金額</th>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">來源</th>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">驗證碼</th>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">訂單內容</th>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell rounded-tr-lg"></th>
          </tr>
        </thead>
        <tbody class="text-xl">
          <tr class="flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-5 lg:mb-0"
          v-for="order of OrderFoodCompleted" :key="order.Id"
          >
            <td
              class="w-full lg:w-auto p-3 text-center border-b border-black block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
              >單號</span>
              <p
                class="mx-auto order-button w-20 h-20 text-center text-3xl py-4"
                :class="{ 'bg-green-700': order.status === '訂單餐點完成', 'bg-red-600': order.status === '訂單成立' }"
              >{{ order.OrderNumber }}</p>
            </td>
            <td
              class="w-full lg:w-auto p-3 border-b border-black text-center block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
              >訂單編號</span>
              {{ order.Id }}
            </td>
            <td
              class="w-full lg:w-auto p-3 border-b border-black text-center block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
              >金額</span>
              {{ order.Total }}
            </td>
            <td
              class="w-full lg:w-auto p-3 border-b border-black text-center block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
              >來源</span>
              {{ order.Site }}
            </td>
            <td
              class="w-full lg:w-auto p-3 border-b border-black text-center block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
              >驗證碼</span>
              {{ order.LinepayVer }}
            </td>
            <td
              class="w-full lg:w-auto p-3 border-b border-black text-center block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
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
              <button class="btn-main px-5 py-2"
              v-if="order.status === '訂單餐點完成'"
              @click="changeOrderPhase('Finished', order.Id, order.CustomerId)"
              >完成</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OrderList',
  props: ['OrderFoodCompleted'],
  methods: {
    changeOrderPhase (phase, orderId, customerId) {
      this.$emit('changeOrderPhase', phase, orderId, customerId)
    }
  }
}
</script>
