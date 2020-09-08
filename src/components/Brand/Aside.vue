<template>
  <aside class="lg:w-1/5 lg:sticky top-0 bg-secondcolor-400 rounded-lg my-5 mx-5 shadow-lg">
    <ul class="hidden lg:flex-col lg:flex justify-evenly text-2xl text-center">
      <li class="border-l-8 rounded-tl-lg"
      :class="{ 'border-maincolor-400 text-black': whichPage === 'EditMenu', 'border-secondcolor-400 text-thirdcolor-400': whichPage !== 'EditMenu'}"
      >
        <router-link
          class="w-full block"
          to="/Brand/Edit/Menu"
          @click.native="whichPage='EditMenu'"
        >餐車菜單編輯</router-link>
      </li>
      <li class="border-l-8"
      :class="{ 'border-maincolor-400 text-black': whichPage === 'EditData', 'border-secondcolor-400 text-thirdcolor-400': whichPage !== 'EditData'}"
      >
        <router-link
          class="w-full block"
          to="/Brand/Edit/Data"
          @click.native="whichPage='EditData'"
        >餐車資料編輯</router-link>
      </li>
      <li class="border-l-8"
      :class="{ 'border-maincolor-400 text-black': whichPage === 'EditCalender', 'border-secondcolor-400 text-thirdcolor-400': whichPage !== 'EditCalender'}"
      >
        <router-link
          class="w-full block"
          to="/Brand/Edit/Calender"
          @click.native="whichPage='EditCalender'"
        >行事曆編輯</router-link>
      </li>
      <li class="border-l-8"
      :class="{ 'border-maincolor-400 text-black': whichPage === 'DataStatistics', 'border-secondcolor-400 text-thirdcolor-400': whichPage !== 'DataStatistics'}"
      >
        <router-link
          class="w-full block"
          to="/Brand/Edit/DataStatistics"
          @click.native="whichPage='DataStatistics'"
        >數據統計</router-link>
      </li>
      <li class="border-l-8 rounded-bl-lg"
      :class="{ 'border-maincolor-400 text-black': whichPage === 'Feedback', 'border-secondcolor-400 text-thirdcolor-400': whichPage !== 'Feedback'}"
      >
        <router-link
          class="w-full block"
          to="/Brand/Edit/Feedback"
          @click.native="whichPage='Feedback'"
        >回饋單</router-link>
      </li>
    </ul>
    <div class="text-center lg:hidden text-3xl rounded-lg">Menu</div>
  </aside>
</template>

<script>
export default {
  data () {
    return {
      whichPage: 'EditMenu'
    }
  }
}
</script>
