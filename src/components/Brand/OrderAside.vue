<template>
  <aside class="lg:w-1/5 lg:sticky top-10 bg-secondcolor-400 rounded-lg my-5 mx-5 shadow-lg">
    <div class="text-center lg:hidden text-3xl rounded-lg cursor-pointer"
    @click="isShow = !isShow"
    >Menu</div>
    <ul class="lg:flex-col lg:flex justify-evenly text-2xl text-center"
    :class="{'block': isShow, 'hidden': !isShow}">
      <li class="border-l-8 rounded-tl-none md:rounded-tl-lg"
      :class="{ 'border-maincolor-200 text-black': whichPage === '#/Brand/Order/Site', 'border-secondcolor-400 text-thirdcolor-400': whichPage !== '#/Brand/Order/Site'}"
      >
        <router-link
          class="w-full block"
          to="/Brand/Order/Site"
          @click.native="whichPage='#/Brand/Order/Site'"
        >現場訂單</router-link>
      </li>
      <li class="border-l-8"
      :class="{ 'border-maincolor-200 text-black': whichPage === '#/Brand/Order/List', 'border-secondcolor-400 text-thirdcolor-400': whichPage !== '#/Brand/Order/List'}"
      >
        <router-link
          class="w-full block"
          to="/Brand/Order/List"
          @click.native="whichPage='#/Brand/Order/List'"
        >候餐列表</router-link>
      </li>
      <li class="border-l-8"
      :class="{ 'border-maincolor-200 text-black': whichPage === '#/Brand/Order/Online', 'border-secondcolor-400 text-thirdcolor-400': whichPage !== '#/Brand/Order/Online'}"
      >
        <router-link
          class="w-full block"
          to="/Brand/Order/Online"
          @click.native="whichPage='#/Brand/Order/Online'"
        >網路訂單</router-link>
      </li>
      <li class="border-l-8 rounded-bl-lg"
      :class="{ 'border-maincolor-200 text-black': whichPage === '#/Brand/Order/Reception', 'border-secondcolor-400 text-thirdcolor-400': whichPage !== '#/Brand/Order/Reception'}"
      >
        <router-link
          class="w-full block"
          to="/Brand/Order/Reception"
          @click.native="whichPage='#/Brand/Order/Reception'"
        >廚房端</router-link>
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
