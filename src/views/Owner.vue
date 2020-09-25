<template>
  <div class="flex flex-col lg:flex-row justify-evenly lg:items-start py-10">
    <aside class="lg:w-1/5 lg:sticky top-0 bg-secondcolor-400 rounded-lg my-5 mx-5 shadow-lg">
      <ul class="hidden lg:flex-col lg:flex justify-evenly text-2xl text-center">
        <li
          class="border-l-8 rounded-tl-lg"
          :class="{ 'border-maincolor-400 text-black': whichPage === 'Review', 'border-secondcolor-400 text-thirdcolor-400': whichPage !== 'Review'}"
        >
          <button class="w-full block focus:outline-none" @click="whichPage='Review'">餐車審核</button>
        </li>
        <li
          class="border-l-8"
          :class="{ 'border-maincolor-400 text-black': whichPage === 'VIP', 'border-secondcolor-400 text-thirdcolor-400': whichPage !== 'VIP'}"
        >
          <button class="w-full block focus:outline-none" @click="whichPage='VIP'">VIP 餐車申請</button>
        </li>
        <li
          class="border-l-8"
          :class="{ 'border-maincolor-400 text-black': whichPage === 'BrandList', 'border-secondcolor-400 text-thirdcolor-400': whichPage !== 'BrandList'}"
        >
          <button class="w-full block focus:outline-none" @click="whichPage='BrandList'">餐車列表</button>
        </li>
        <li
          class="border-l-8 rounded-bl-lg"
          :class="{ 'border-maincolor-400 text-black': whichPage === 'BlackList', 'border-secondcolor-400 text-thirdcolor-400': whichPage !== 'BlackList'}"
        >
          <button class="w-full block focus:outline-none" @click="whichPage='BlackList'">消費者黑名單</button>
        </li>
      </ul>
      <div class="text-center lg:hidden text-3xl rounded-lg">Menu</div>
    </aside>
    <section class="lg:w-4/5 mx-5 rounded-lg shadow-lg" :is='whichPage'>
      </section>
  </div>
</template>

<script>
import Review from '../components/Owner/BrandReview'
import VIP from '../components/Owner/BrandVIPReview'
import BrandList from '../components/Owner/BrandList'
import BlackList from '../components/Owner/CustomerBlackList'

export default {
  name: 'Owner',
  components: {
    Review,
    VIP,
    BrandList,
    BlackList
  },
  data () {
    return {
      whichPage: 'Review'
    }
  }
}
</script>
