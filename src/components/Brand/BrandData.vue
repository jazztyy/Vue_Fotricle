<template>
  <section class="lg:w-2/3 mx-5 rounded-lg shadow-lg bg-secondcolor-400">
    <header
      class="text-3xl text-center bg-maincolor-200 text-thirdcolor-400 rounded-t-lg py-3 mb-3"
    >餐車資料
    <i class="text-thirdcolor-400 text-3xl absolute fas fa-times p-3 right-0 cursor-pointer"
    @click="closeModal"></i>
    </header>
    <form class="bg-secondcolor-400 flex flex-col px-5" action="#"
    >
      <div class="mb-3 flex flex-col lg:flex-row">
          <img
          class="w-full mb-3 rounded-lg lg:w-1/4 md:mr-3 lg:mb-0"
          src="/img/thomas-tucker-MNtag_eXMKw-unsplash.jpg"
          alt
        />
        <div class="w-full lg:w-3/4 flex flex-col justify-between">
          <div class="flex flex-col lg:flex-row mb-3">
            <input
              class="flex-3 bg-thirdcolor-400 rounded-lg indent text-xl mb-3 lg:mb-0"
              type="text"
              name="imageUrl"
              disabled
              placeholder="店家大頭貼"
              v-model="data.LogoPhoto"
            />
            <button class="flex-1 btn-main py-1 lg:ml-2">上傳圖片</button>
          </div>
          <div class="flex flex-col lg:flex-row mb-3">
            <input
              class="flex-3 bg-thirdcolor-400 rounded-lg indent text-xl mb-3 lg:mb-0"
              type="text"
              name="imageUrl"
              disabled
              placeholder="餐車照片"
              v-model="data.CarImage"
            />
            <button class="flex-1 btn-main py-1 lg:ml-2">上傳圖片</button>
          </div>
          <div class="flex flex-col lg:flex-row mb-3 md:mb-0">
            <input
              class="flex-3 bg-thirdcolor-400 rounded-lg indent text-xl mb-3 lg:mb-0"
              type="text"
              name="imageUrl"
              disabled
              placeholder="收款 QR Code"
              v-model="data.QrCode"
            />
            <button class="flex-1 btn-main py-1 lg:ml-2">上傳圖片</button>
          </div>
        </div>
      </div>
      <div>
        <div class="flex justify-between">
          <input
            class="w-48/100 text-xl rounded-lg bg-thirdcolor-400 py-1 mb-3 outline-none indent"
            type="text"
            placeholder="餐車名稱"
            v-model="data.BrandName"
          />
          <input
            class="w-48/100 text-xl rounded-lg bg-thirdcolor-400 py-1 mb-3 outline-none indent"
            type="text"
            placeholder="收款代碼"
            v-model="data.LinePay"
          />
        </div>
        <input
          class="w-full text-xl rounded-lg bg-thirdcolor-400 py-1 mb-3 outline-none indent"
          type="tel"
          placeholder="電話號碼"
          v-model="data.PhoneNumber"
        />
        <input
          class="w-full text-xl rounded-lg bg-thirdcolor-400 py-1 mb-3 outline-none indent"
          type="text"
          name="分類標籤"
          placeholder="分類標籤"
          v-model="data.Sort"
        />
        <textarea
          class="w-full bg-thirdcolor-400 rounded-lg mb-3 indent text-lg outline-none"
          rows="2"
          name="品牌故事"
          id
          placeholder="餐車故事"
          v-model="data.BrandStory"
        ></textarea>
      </div>
    <button class="btn-main py-3 text-2xl mb-4" @click.prevent="editBrandData">送出資料</button>
    </form>
  </section>
</template>

<script>
export default {
  data () {
    return {
      data: {},
      token: '',
      id: ''
    }
  },
  created () {
    this.token = localStorage.getItem('token')
    this.id = localStorage.getItem('id')
  },
  methods: {
    editBrandData () {
      const API = `http://fotricle.rocket-coding.com/Brand/Edit?Id=${this.id}`
      const config = { headers: { Authorization: `Bearer ${this.token}` } }
      const BrandData = this.data
      this.axios.patch(API, BrandData, config
      ).then(res => {
        this.closeModal()
      }).catch(err => {
        console.log(err)
      })
    },
    closeModal () {
      this.$emit('closeModal')
    },
    showBrandData (data) {
      this.data = data
    }
  }
}
</script>
