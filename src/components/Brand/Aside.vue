<template>
  <aside class="lg:w-1/5 lg:sticky top-10 bg-secondcolor-400 rounded-lg my-5 mx-5 shadow-lg">
    <div class="text-center lg:hidden text-3xl rounded-lg cursor-pointer"
    @click="isShow = !isShow"
    >Menu</div>
    <ul class="lg:flex-col lg:flex justify-evenly text-2xl text-center"
    :class="{'block': isShow, 'hidden': !isShow}"
    >
      <li
        class="border-l-8 rounded-tl-none lg:rounded-t-lg"
        :class="{ 'border-maincolor-200 text-black': whichPage === '#/Brand/Edit/Menu', 'border-secondcolor-400 text-thirdcolor-400': whichPage !== '#/Brand/Edit/Menu'}"
      >
        <router-link
          class="w-full block"
          to="/Brand/Edit/Menu"
          @click.native="whichPage='#/Brand/Edit/Menu'"
        >餐車菜單編輯</router-link>
      </li>
      <li
        class="border-l-8"
        :class="{ 'border-maincolor-200 text-black': whichPage === '#/Brand/Edit/Data', 'border-secondcolor-400 text-thirdcolor-400': whichPage !== '#/Brand/Edit/Data'}"
      >
        <router-link
          class="w-full block"
          to="/Brand/Edit/Data"
          @click.native="whichPage='#/Brand/Edit/Data'"
        >餐車資料編輯</router-link>
      </li>
      <li
        class="border-l-8"
        :class="{ 'border-maincolor-200 text-black': whichPage === '#/Brand/Edit/Calender', 'border-secondcolor-400 text-thirdcolor-400': whichPage !== '#/Brand/Edit/Calender'}"
      >
        <router-link
          class="w-full block"
          to="/Brand/Edit/Calender"
          @click.native="whichPage='#/Brand/Edit/Calender'"
        >行事曆編輯</router-link>
      </li>
      <li
        class="border-l-8"
        :class="{ 'border-maincolor-200 text-black': whichPage === '#/Brand/Edit/DataStatistics', 'border-secondcolor-400 text-thirdcolor-400': whichPage !== '#/Brand/Edit/DataStatistics'}"
      >
        <router-link
          class="w-full block"
          to="/Brand/Edit/DataStatistics"
          @click.native="whichPage='#/Brand/Edit/DataStatistics'"
        >數據統計</router-link>
      </li>
      <li
        class="border-l-8 rounded-bl-lg"
        :class="{ 'border-maincolor-200 text-black': whichPage === '#/Brand/Edit/Feedback', 'border-secondcolor-400 text-thirdcolor-400': whichPage !== '#/Brand/Edit/Feedback'}"
      >
        <router-link
          class="w-full block"
          to="/Brand/Edit/Feedback"
          @click.native="whichPage='#/Brand/Edit/Feedback'"
        >回饋單</router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  data () {
    return {
      whichPage: '',
      isShow: false
    }
  },
  created () {
    this.whichPage = window.location.hash
  },
  mounted () {
    window.onresize = () => {
      if (document.body.clientWidth <= 1024) {
        this.isShow = false
      }
    }
  }
}
</script>
