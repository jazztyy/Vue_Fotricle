<template>
    <section class="lg:w-1/2 mx-5 bg-thirdcolor-300 rounded-lg shadow-lg">
      <header class="bg-maincolor-200 text-thirdcolor-400 rounded-t-lg">
        <p class="text-center text-4xl">個人資料</p>
      </header>
      <main class="p-5 flex flex-col justify-center xs:flex-row" v-if="userData.Id">
        <div class="flex flex-col items-center justify-around">
          <div class="relative">
              <img class="rounded-full mb-5 h-40 w-40" :src="userData.CusPhoto" alt />
              <input id="fileUploading" class="hidden" @change="uploadFile" type="file">
              <label for="fileUploading" class="opacity-0 hover:opacity-50 absolute h-40 w-40 top-0 bg-black text-white rounded-full flex items-center justify-center"> 選擇上傳圖片 </label>
          </div>
          <button class="hidden xs:block btn-main py-2 px-5 text-xl" @click.prevent="editUserData">儲存</button>
        </div>
        <ul class="w-full xs:w-2/3 xs:pl-5 text-xl">
          <li>
            <label class="mb-3" for="name">名稱</label>
            <input
              class="w-full rounded-lg focus:outline-none indent mb-3"
              id="name"
              type="text"
              value
              placeholder="輸入名稱"
              v-model="userData.UserName"
            />
          </li>
          <li>
            <label class="mb-3" for="tel">電話</label>
            <input
              class="w-full rounded-lg focus:outline-none indent mb-3"
              id="tel"
              type="text"
              value
              placeholder="輸入電話"
              v-model="userData.CusPhone"
            />
          </li>
          <li>
            <label class="mb-3" for="gender">性別</label>
            <select
              class="w-full rounded-lg indent mb-3 focus:outline-none"
              name="gender"
              id="gender"
              v-model="userData.Gender"
            >
              <option value disabled selected>選擇性別</option>
              <option value="男">男</option>
              <option value="女">女</option>
              <option value="其他">其他</option>
            </select>
          </li>
          <li>
            <label class="mb-3" for="age">年齡</label>
            <select
              class="w-full rounded-lg indent mb-3 focus:outline-none"
              name="age"
              id="age"
              v-model="userData.Age"
            >
              <option value disabled selected>年齡</option>
              <option value="18 以下">18 以下</option>
              <option value="18-24">18-24</option>
              <option value="25-34">25-34</option>
              <option value="35-44">35-44</option>
              <option value="45-54">45-54</option>
              <option value="55-64">55-64</option>
              <option value="64 以上">64 以上</option>
            </select>
          </li>
        </ul>
        <button class="xs:hidden btn-main py-1 px-5 text-xl" @click.prevent="editUserData">儲存</button>
      </main>
    </section>
</template>

<script>
export default {
  name: 'UserData',
  props: ['userData'],
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    editUserData () {
      this.$emit('changeLoading', true)
      const API = `http://fotricle.rocket-coding.com/customer/Edit?Id=${localStorage.getItem('id')}`
      const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      const { ...userData } = this.userData
      this.axios
        .patch(API, userData, config)
        .then((res) => {
          this.$emit('getUserData', '資料修改成功', 'success')
        })
        .catch((err) => {
          console.log(err)
          this.$emit('changeLoading', false)
          this.$emit('showAlertButton', '個人資料修改失敗，請重新輸入', 'error')
        })
    },
    uploadFile () {
      const file = document.querySelector('#fileUploading').files[0]
      const formData = new FormData()
      const API = `http://fotricle.rocket-coding.com/customer/upload?Id=${localStorage.getItem('id')}`
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data'
        }
      }
      formData.append('file', file)
      this.$emit('changeLoading', true)
      this.axios
        .post(API, formData, config)
        .then((res) => {
          this.userData.CusPhoto = res.data.imageUrl
          this.$emit('changeLoading', false)
          this.$emit('showAlertAside', '圖片上傳成功', 'success')
        })
        .catch((err) => {
          console.log(err)
          this.$emit('showAlertButton', '圖片上傳失敗，請重新上傳', 'error')
        })
    }
  }
}
</script>
