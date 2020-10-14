<template>
        <aside class="lg:w-1/5 lg:sticky top-10 bg-secondcolor-400 rounded-lg my-5 mx-5 shadow-lg">
            <div class="text-center lg:hidden text-3xl rounded-lg cursor-pointer"
            @click="isShow = !isShow"
            >Menu</div>
            <ul class="lg:flex-col lg:flex justify-evenly text-2xl text-center"
            :class="{'block': isShow, 'hidden': !isShow}"
            >
                <li class="border-l-8 rounded-tl-lg"
                    :class="{ 'border-maincolor-200 text-black': whichPage === '#/Customer/OrderList', 'border-secondcolor-400 text-thirdcolor-400': whichPage !== '#/Customer/OrderList'}"
                >
                    <router-link class="w-full block" to="/Customer/OrderList"
                    @click.native="whichPage='#/Customer/OrderList'"
                    >訂單明細</router-link>
                    </li>
                <li class="border-l-8"
                    :class="{ 'border-maincolor-200 text-black': whichPage === '#/Customer/UserData', 'border-secondcolor-400 text-thirdcolor-400': whichPage !== '#/Customer/UserData'}"
                >
                    <router-link class="w-full block" to="/Customer/UserData"
                    @click.native="whichPage='#/Customer/UserData'"
                    >個人資料</router-link>
                    </li>
                <li class="border-l-8 rounded-bl-lg"
                    :class="{ 'border-maincolor-200 text-black': whichPage === '#/Customer/MyFollow', 'border-secondcolor-400 text-thirdcolor-400': whichPage !== '#/Customer/MyFollow'}"
                >
                    <router-link class="w-full block" to="/Customer/MyFollow"
                    @click.native="whichPage='#/Customer/MyFollow'"
                    >我的追蹤</router-link>
                    </li>
                <li class="border-l-8 rounded-bl-lg"
                    :class="{ 'border-maincolor-200 text-black': whichPage === '#/Customer/MessageBox', 'border-secondcolor-400 text-thirdcolor-400': whichPage !== '#/Customer/MessageBox'}"
                >
                    <router-link class="w-full block" to="/Customer/MessageBox"
                    @click.native="whichPage='#/Customer/MessageBox'"
                    >訊息通知</router-link>
                    </li>
            </ul>
        </aside>
</template>

<script>
export default {
  data () {
    return {
      whichPage: '',
      isShow: true
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
