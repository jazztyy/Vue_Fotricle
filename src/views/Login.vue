<template>
  <div>
    <main class="relative">
        <div style="background-image: url(/img/photo-1547620917-786ebcbc55af.jfif)" class="bg-img h-767 blur "></div>
        <form action="" class="absolute top-half left-half trans-center w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
            <div class="flex flex-col xs:flex-row justify-between text-center text-2xl text-white">
                <h2 class="flex-1 cursor-pointer rounded-t-lg px-5 py-3"
                @click.prevent="isCustomer = true"
                :class="{ 'bg-maincolor-400 hover:bg-maincolor-600': isCustomer,'bg-secondcolor-600 hover:bg-secondcolor-800': !isCustomer }"
                >消費者</h2>
                <h2 class="flex-1 cursor-pointer rounded-t-lg px-5 py-3"
                @click.prevent="isCustomer = false"
                :class="{ 'bg-maincolor-400 hover:bg-maincolor-600': !isCustomer,'bg-secondcolor-600 hover:bg-secondcolor-800': isCustomer }"
                >餐車業者</h2>
            </div>
            <div class="bg-thirdcolor-500 p-5 rounded-b-lg ">
                <h3 v-show="isCustomer" class="text-2xl text-center mb-5">消費者登入</h3>
                <h3 v-show="!isCustomer" class="text-2xl text-center mb-5">餐車業主登入</h3>
                <ul>
                    <li class="mb-5">
                        <input class="w-full py-4 rounded-lg indent text-xl outline-none" type="email" name="email" id="email" v-model="email" placeholder="電子信箱">
                    </li>
                    <li class="mb-5">
                        <input class="w-full py-4 rounded-lg indent text-xl outline-none" type="password" name="password" id="password" v-model="password" placeholder="密碼">
                    </li>
                </ul>
                <button class="relative btn-second w-full py-3 mb-5 text-2xl"><a class="touch" href="#" @click.prevent="login"></a>登入</button>
                <p class="text-lg">還不是會員？<router-link class="text-secondcolor-600 hover:text-secondcolor-800" to="/Register">按此註冊</router-link></p>
            </div>
        </form>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      isCustomer: true,
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const CustomerApi = 'http://fotricle.rocket-coding.com/customer/login'
      const BrandApi = 'http://fotricle.rocket-coding.com/Brand/login'
      const user = {
        email: this.email,
        password: this.password
      }
      if (this.isCustomer) {
        this.axios.post(CustomerApi, user)
          .then(res => {
            const token = res.data.token
            const id = res.data.id
            localStorage.setItem('token', token)
            localStorage.setItem('id', id)
            window.location = '/#/Customer/OrderList'
            this.changeIdentity('顧客')
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        this.axios.post(BrandApi, user)
          .then(res => {
            console.log(res)
            const token = res.data.token
            const id = res.data.id
            localStorage.setItem('token', token)
            localStorage.setItem('id', id)
            window.location = '/#/Brand/Edit/Menu'
            this.changeIdentity('餐車')
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    changeIdentity (identity) {
      this.$emit('changeIdentity', identity)
    }
  }
}
</script>
