<template>
  <section class="lg:w-3/4 mx-5 shadow-lg">
    <ul class="flex justify-evenly text-center text-2xl">
      <li
        class="relative flex-1 rounded-t-lg cursor-pointer"
        :class="{'bg-secondcolor-400': currentPage === 'Checking', 'bg-maincolor-400': currentPage !== 'Checking'}"
        @click.prevent="currentPage='Checking'"
      >
        <button
          :class="{ 'text-black': currentPage === 'Checking', 'border-secondcolor-400 text-thirdcolor-400': currentPage !== 'Checking'}"
          class="focus:outline-none"
        >確認中</button>
        <p
          class="bg-red-600 absolute w-6 h-6 text-base rounded-full bottom-20 right-10"
          v-show="OrderCofirmList.length"
          :class="{ 'text-black': currentPage === 'Checking', 'text-thirdcolor-400': currentPage !== 'Checking'}"
        >{{ OrderCofirmList.length }}</p>
      </li>
      <li
        class="relative flex-1 rounded-t-lg text-thirdcolor-400 cursor-pointer"
        :class="{'bg-secondcolor-400': currentPage === 'Established', 'bg-maincolor-400': currentPage !== 'Established'}"
        @click.prevent="currentPage='Established'"
      >
        <button
          :class="{ 'text-black': currentPage === 'Established', 'border-secondcolor-400 text-thirdcolor-400': currentPage !== 'Established'}"
          class="focus:outline-none"
        >成立</button>
        <p
          class="bg-red-600 absolute w-6 h-6 text-base rounded-full bottom-20 right-10"
          v-show="OrderFoundList.length"
          :class="{ 'text-black': currentPage === 'Established', 'text-thirdcolor-400': currentPage !== 'Established'}"
        >{{ OrderFoundList.length }}</p>
      </li>
      <li
        class="relative flex-1 rounded-t-lg bg-maincolor-400 text-thirdcolor-400 cursor-pointer"
        :class="{'bg-secondcolor-400': currentPage === 'Completed', 'bg-maincolor-400': currentPage !== 'Completed'}"
        @click.prevent="currentPage='Completed'"
      >
        <button
          :class="{ 'text-black': currentPage === 'Completed', 'border-secondcolor-400 text-thirdcolor-400': currentPage !== 'Completed'}"
          class="focus:outline-none"
        >餐點完成</button>
        <p
          class="bg-red-600 absolute w-6 h-6 text-base rounded-full bottom-20 right-10"
          :class="{ 'text-black': currentPage === 'Completed', 'text-thirdcolor-400': currentPage !== 'Completed'}"
          v-show="OrderFoodCompletedList.length"
        >{{ OrderFoodCompletedList.length }}</p>
      </li>
      <li
        class="relative flex-1 rounded-t-lg bg-maincolor-400 text-thirdcolor-400 cursor-pointer"
        :class="{'bg-secondcolor-400': currentPage === 'Success', 'bg-maincolor-400': currentPage !== 'Success'}"
        @click.prevent="currentPage='Success'"
      >
        <button
          :class="{ 'text-black': currentPage === 'Success', 'border-secondcolor-400 text-thirdcolor-400': currentPage !== 'Success'}"
          class="focus:outline-none"
        >成功</button>
        <p
          class="bg-red-600 absolute w-6 h-6 text-base rounded-full bottom-20 right-10"
          :class="{ 'text-black': currentPage === 'Success', 'text-thirdcolor-400': currentPage !== 'Success'}"
          v-show="OrderSuccessList.length"
        >{{ OrderSuccessList.length }}</p>
      </li>
      <li
        class="relative flex-1 rounded-t-lg bg-maincolor-400 text-thirdcolor-400 cursor-pointer"
        :class="{'bg-secondcolor-400': currentPage === 'Fail', 'bg-maincolor-400': currentPage !== 'Fail'}"
        @click.prevent="currentPage='Fail'"
      >
        <button
          :class="{ 'text-black': currentPage === 'Fail', 'border-secondcolor-400 text-thirdcolor-400': currentPage !== 'Fail'}"
          class="focus:outline-none"
        >取消</button>
        <p
          class="bg-red-600 absolute w-6 h-6 text-base rounded-full bottom-20 right-10"
          v-show="OrderFailList.length"
        >{{ OrderFailList.length }}</p>
      </li>
    </ul>
    <div
      class="bg-secondcolor-400 pt-5 rounded-b-lg"
      :is="currentPage"
      :OrderCofirmList="OrderCofirmList"
      :OrderFoundList="OrderFoundList"
      :OrderFoodCompletedList="OrderFoodCompletedList"
      :OrderFailList="OrderFailList"
      :OrderSuccessList="OrderSuccessList"
      @getOrderList="getOrderList"
    ></div>
  </section>
</template>

<script>
import Checking from '../../../components/Customer/OrderStatus/Checking'
import Completed from '../../../components/Customer/OrderStatus/Completed'
import Established from '../../../components/Customer/OrderStatus/Established'
import Fail from '../../../components/Customer/OrderStatus/Fail'
import Success from '../../../components/Customer/OrderStatus/Success'

export default {
  name: 'OrderList',
  components: {
    Checking,
    Completed,
    Established,
    Fail,
    Success
  },
  data () {
    return {
      currentPage: 'Checking'
    }
  },
  props: [
    'OrderCofirmList',
    'OrderFoundList',
    'OrderFoodCompletedList',
    'OrderFailList',
    'OrderSuccessList'
  ],
  methods: {
    getOrderList () {
      this.$emit('getOrderList')
    }
  }
}
</script>
