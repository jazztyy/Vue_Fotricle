<template>
        <aside class="lg:w-1/5 lg:sticky top-0 bg-secondcolor-400 rounded-lg my-5 mx-5 shadow-lg">
            <ul class="hidden lg:flex-col lg:flex justify-evenly text-2xl text-center ">
                <li class="border-l-8 rounded-tl-lg"
                    :class="{ 'border-maincolor-400 text-black': whichPage === 'OrderList', 'border-secondcolor-400 text-thirdcolor-400': whichPage !== 'OrderList'}"
                >
                    <router-link class="w-full block" to="/Customer/OrderList"
                    @click.native="whichPage='OrderList'"
                    >訂單明細</router-link>
                    </li>
                <li class="border-l-8"
                    :class="{ 'border-maincolor-400 text-black': whichPage === 'UserData', 'border-secondcolor-400 text-thirdcolor-400': whichPage !== 'UserData'}"
                >
                    <router-link class="w-full block" to="/Customer/UserData"
                    @click.native="whichPage='UserData'"
                    >個人資料</router-link>
                    </li>
                <li class="border-l-8 rounded-bl-lg"
                    :class="{ 'border-maincolor-400 text-black': whichPage === 'MyFollow', 'border-secondcolor-400 text-thirdcolor-400': whichPage !== 'MyFollow'}"
                >
                    <router-link class="w-full block" to="/Customer/MyFollow"
                    @click.native="whichPage='MyFollow'"
                    >我的追蹤</router-link>
                    </li>
                <li class="border-l-8 rounded-bl-lg"
                    :class="{ 'border-maincolor-400 text-black': whichPage === 'MessageBox', 'border-secondcolor-400 text-thirdcolor-400': whichPage !== 'MessageBox'}"
                >
                    <router-link class="w-full block" to="/Customer/MessageBox"
                    @click.native="whichPage='MessageBox'"
                    >訊息通知</router-link>
                    </li>
            </ul>
            <div class="text-center lg:hidden text-3xl rounded-lg">Menu</div>
        </aside>
</template>

<script>
export default {
  data () {
    return {
      whichPage: 'OrderList'
    }
  }
}
</script>
