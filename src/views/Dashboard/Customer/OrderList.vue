<template>
    <section class=" lg:w-3/4 mx-5 shadow-lg">
            <ul class="flex justify-evenly text-center text-2xl">
                <li class="flex-1 rounded-t-lg"
                :class="{'bg-secondcolor-400': currentPage === 'Checking', 'bg-maincolor-400': currentPage !== 'Checking'}">
                    <a href="#"
                    @click.prevent="currentPage='Checking'"
                    :class="{ 'text-black': currentPage === 'Checking', 'border-secondcolor-400 text-thirdcolor-400': currentPage !== 'Checking'}">確認中</a>
                    </li>
                <li class="flex-1 rounded-t-lg text-thirdcolor-400"
                :class="{'bg-secondcolor-400': currentPage === 'Established', 'bg-maincolor-400': currentPage !== 'Established'}">
                    <a href="#"
                    @click.prevent="currentPage='Established'"
                    :class="{ 'text-black': currentPage === 'Established', 'border-secondcolor-400 text-thirdcolor-400': currentPage !== 'Established'}">成立</a>
                    </li>
                <li class="flex-1 rounded-t-lg bg-maincolor-400 text-thirdcolor-400"
                :class="{'bg-secondcolor-400': currentPage === 'Completed', 'bg-maincolor-400': currentPage !== 'Completed'}">
                    <a href="#"
                    @click.prevent="currentPage='Completed'"
                    :class="{ 'text-black': currentPage === 'Completed', 'border-secondcolor-400 text-thirdcolor-400': currentPage !== 'Completed'}">餐點完成</a>
                    </li>
                <li class="flex-1 rounded-t-lg bg-maincolor-400 text-thirdcolor-400"
                :class="{'bg-secondcolor-400': currentPage === 'Success', 'bg-maincolor-400': currentPage !== 'Success'}">
                    <a href="#"
                    @click.prevent="currentPage='Success'"
                    :class="{ 'text-black': currentPage === 'Success', 'border-secondcolor-400 text-thirdcolor-400': currentPage !== 'Success'}">成功</a>
                    </li>
                <li class="flex-1 rounded-t-lg bg-maincolor-400 text-thirdcolor-400"
                :class="{'bg-secondcolor-400': currentPage === 'Fail', 'bg-maincolor-400': currentPage !== 'Fail'}">
                    <a href="#"
                    @click.prevent="currentPage='Fail'"
                    :class="{ 'text-black': currentPage === 'Fail', 'border-secondcolor-400 text-thirdcolor-400': currentPage !== 'Fail'}">取消</a>
                    </li>
            </ul>
            <div class="bg-secondcolor-400 pt-5 rounded-b-lg "
            :is='currentPage'
            :OrderCofirmList='OrderCofirmList'
            :OrderFoundList='OrderFoundList'
            :OrderFoodCompletedList='OrderFoodCompletedList'
            :OrderFailList='OrderFailList'
            :OrderSuccessList='OrderSuccessList'
            @getOrderList="getOrderList"
            >
            </div>
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
  props: ['OrderCofirmList', 'OrderFoundList', 'OrderFoodCompletedList', 'OrderFailList', 'OrderSuccessList'],
  methods: {
    getOrderList () {
      this.$emit('getOrderList')
    }
  }
}
</script>
