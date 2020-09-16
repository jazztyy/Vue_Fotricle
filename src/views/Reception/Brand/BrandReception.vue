<template>
  <ul class="flex flex-wrap">
    <li class="w-full md:w-1/2 xl:w-1/3 p-5"
    v-for="orderList of OrderFoundList"
    :key="orderList.OrderID"
    >
      <div class="bg-gray-500 rounded-lg text-center">
        <p class="bg-maincolor-400 rounded-t-lg text-3xl text-thirdcolor-400">菜單單號：{{ orderList.OrderDetail[0].MealNumber }}</p>
        <ul class="flex flex-wrap p-2 text-2xl">
          <li v-for="(order, i) of orderList.OrderDetail" :key="i" class="w-1/2">{{ order.ProductName }} * {{ order.ProductUnit }}</li>
        </ul>
        <button
        class="w-full outline-none btn-second text-3xl rounded-t-none py-2"
        @click="changeOrderPhase('FoodCompleted', orderList.OrderID)"
        >製作完成</button>
      </div>
    </li>
  </ul>
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
      this.$emit('changeOrderPhase', phase, orderId)
    }
  }
}
</script>
