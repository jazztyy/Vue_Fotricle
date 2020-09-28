<template>
  <div class="w-full">
    <ul class="flex flex-wrap"
    v-if="OrderFoundList[0]"
    >
      <li class="w-full md:w-1/2 xl:w-1/3 p-5"
      v-for="orderList of OrderFoundList"
      :key="orderList.OrderID"
      >
        <div class="bg-gray-500 rounded-lg text-center">
          <p class="bg-maincolor-200 rounded-t-lg text-3xl text-thirdcolor-400">菜單單號：{{ orderList.OrderNumber }}</p>
          <ul class="flex flex-wrap p-2 text-2xl">
            <li v-for="(order, i) of orderList.OrderDetails" :key="i" class="w-1/2">{{ order.ProductName }} * {{ order.ProductUnit }}</li>
          </ul>
          <button
          class="w-full outline-none btn-second text-3xl rounded-t-none py-2"
          @click="changeOrderPhase('FoodCompleted', orderList.Id)"
          >製作完成</button>
        </div>
      </li>
      <li>
      </li>
    </ul>
    <p class="text-3xl text-center text-gray-600 h-80 flex items-end justify-center"
    v-if="!OrderFoundList[0]"
    >目前沒有訂單</p>
  </div>
</template>

<script>
export default {
  name: 'Receptiion',
  data () {
    return {
    }
  },
  props: ['OrderFoundList'],
  methods: {
    changeOrderPhase (phase, orderId) {
      this.$emit('changeOrderPhase', phase, orderId, '現場')
    }
  }
}
</script>
