<template>
  <div>
    <main class="relative">
        <div style="background-image: url(/img/photo-1547620917-786ebcbc55af.jfif)" class="bg-img h-767 blur "></div>
        <form action="" class="absolute top-half left-half trans-center w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
            <div class="flex flex-col xs:flex-row justify-between text-center text-2xl text-white">
                <h2 class="flex-1 cursor-pointer md:rounded-t-lg px-5 py-3"
                @click.prevent="isCustomer = true"
                :class="{ 'bg-maincolor-400 hover:bg-maincolor-600': isCustomer,'bg-secondcolor-600 hover:bg-secondcolor-800': !isCustomer }"
                >消費者</h2>
                <h2 class="flex-1 cursor-pointer md:rounded-t-lg px-5 py-3"
                @click.prevent="isCustomer = false"
                :class="{ 'bg-maincolor-400 hover:bg-maincolor-600': !isCustomer,'bg-secondcolor-600 hover:bg-secondcolor-800': isCustomer }"
                >餐車業者</h2>
            </div>
            <div class="bg-thirdcolor-500 p-5 rounded-b-lg ">
                <h3 v-show="isCustomer" class="text-2xl text-center mb-5">消費者註冊</h3>
                <h3 v-show="!isCustomer" class="text-2xl text-center mb-5">餐車業主註冊</h3>
                <ul>
                    <li class="mb-5">
                        <input class="w-full py-4 rounded-lg indent text-xl outline-none" type="email" name="email" id="email" placeholder="電子信箱"
                        v-model="email">
                    </li>
                    <li class="mb-5">
                        <input class="w-full py-4 rounded-lg indent text-xl outline-none" type="password" name="password" id="password" placeholder="密碼"
                        v-model="password">
                    </li>
                    <li class="mb-5">
                        <input class="w-full py-4 rounded-lg indent text-xl outline-none" type="password"
                            name="confirmPassword" id="confirmPassword" placeholder="確認密碼"
                        v-model="confirmPassword">
                    </li>
                    <li v-show="!isCustomer" class="mb-5">
                        <input class="w-full py-4 rounded-lg indent text-xl outline-none" type="text" name="fanspage" id="fanspage" placeholder="粉絲團網址"
                        v-model="fanspage">
                    </li>
                </ul>
                <button class="relative btn-second w-full py-3 mb-5 text-2xl"><a class="touch" href="#" @click.prevent="register"></a>註冊</button>
                <router-link class="text-secondcolor-600 hover:text-secondcolor-800" to="/Login">返回登入頁面</router-link>
            </div>
        </form>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Register',

  data () {
    return {
      isCustomer: true,
      email: '',
      password: '',
      confirmPassword: '',
      fanspage: ''
    }
  },
  methods: {
    register () {
      const CustomerApi = 'http://fotricle.rocket-coding.com/customer/register'
      const BrandApi = 'http://fotricle.rocket-coding.com/Brand/register'
      const user = {
        email: this.email,
        password: this.password
      }
      const brand = {
        email: this.email,
        password: this.password,
        FbAccount: this.fanspage
      }
      console.log(user)
      if (this.isCustomer) {
        this.axios.post(CustomerApi, user)
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        this.axios.post(BrandApi, brand)
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
}
</script>
