<template>
  <div
    class="w-full md:w-2/3 lg:w-1/3 text-black rounded-lg absolute z-50 bg-thirdcolor-400 top-40 left-half trans-center"
  >
    <i class="text-3xl absolute fas fa-times p-3 right-0 cursor-pointer"
    @click="closeModal"></i>
    <p class="text-secondcolor-400 text-center py-3 text-2xl">選擇付款方式</p>
    <div class="flex justify-evenly w-2/3 mx-auto mb-3 text-xl">
      <button
        class="cursor-pointer w-1/3 py-3 rounded-lg bg-secondcolor-400"
        :class="{ 'text-thirdcolor-400': isCash === true, 'text-black': isCash === false }"
        @click.prevent="isCash = false; payment = 0"
      >LinePay</button>
      <button class="cursor-pointer rounded-lg w-1/3 py-3 bg-secondcolor-400"
      :class="{ 'text-thirdcolor-400': isCash === false, 'text-black': isCash === true }"
      @click.prevent="isCash = true; payment = 1"
      >現金</button>
    </div>
    <div class="flex flex-col justify-center items-center"
    v-show="!isCash"
    >
        <img class="w-2/3 mb-3" :src="QRCode" alt="">
        <input class="w-2/3 mb-3" v-model="LinePay" @input="input" maxlength="5" type="text" placeholder="輸入五碼驗證碼">
    </div>
    <button
      class="block w-1/4 mx-auto py-2 bg-maincolor-400 rounded-lg text-thirdcolor-400 mb-3"
    v-show="isCash"
    >送出訂單</button>
    <button
      class="block w-1/4 mx-auto py-2 bg-maincolor-400 rounded-lg text-thirdcolor-400 mb-3"
    v-show="!isCash"
    :disabled="!access"
    @click="getBrandOrder"
    >送出訂單</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCash: false,
      LinePay: '',
      access: false,
      payment: 0
    }
  },
  props: ['QRCode'],
  methods: {
    closeModal () {
      this.$emit('closeModal')
    },
    input () {
      if (/(^[A-Z])\d{4}/.test(this.LinePay)) {
        this.access = true
      } else {
        this.access = false
      }
    },
    getBrandOrder () {
      this.$emit('getBrandOrder', this.LinePay, this.payment)
    }
  }
}
</script>
