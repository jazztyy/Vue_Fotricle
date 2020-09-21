<template>
  <section class="max-w-screen-lg lg:w-2/3 mx-5 rounded-lg shadow-lg bg-secondcolor-400">
    <header
      class="text-3xl text-center bg-maincolor-400 text-thirdcolor-400 rounded-t-lg py-3 mb-3"
    >餐車資料</header>
    <div class="p-5 text-xl"
    >
      <div class="flex items-center flex-col md:flex-row">
        <div class="md:w-1/4 mb-3 mr-3 flex flex-col justify-center relative">
          <img
            class="rounded-full w-40 h-40 xl:w-56 xl:h-56"
            :src="brandData.LogoPhoto"
            alt="Logo"
          />
          <input id="BrandLogo" class="hidden" @change="uploadFile('BrandLogo')" type="file">
          <label for="BrandLogo" class="opacity-0 hover:opacity-50 absolute h-40 w-40 xl:w-56 xl:h-56 top-0 bg-black text-white rounded-full flex items-center justify-center"> 選擇上傳圖片 </label>
          <p class="text-center">Logo</p>
        </div>
        <ul class="md:w-3/4 flex flex-wrap">
          <li class="md:w-1/2 mb-3">
            <div class="px-2">
              <label for="brandName" class="inline-block mb-1">餐車名稱：</label>
              <input
              type="text"
              class="w-full focus:outline-none rounded-lg indent py-1"
              id="BrandName"
              v-model="brandData.BrandName"
              />
            </div>
          </li>
          <li class="md:w-1/2 mb-3">
            <div class="px-2">
              <label for="LinePay" class="inline-block mb-1">收款代碼：</label>
              <input
              type="text"
              class="w-full  focus:outline-none rounded-lg indent py-1"
              id="LinePay"
              v-model="brandData.LinePay"
              />
            </div>
          </li>
          <li class="md:w-1/2 mb-3">
            <div class="px-2">
              <label for="Tel" class="inline-block mb-1">電話號碼：</label>
              <input
              type="tel"
              class="w-full focus:outline-none rounded-lg indent py-1"
              id="Tel"
              v-model="brandData.PhoneNumber"
              />
            </div>
          </li>
          <li class="w-full md:w-1/2 mb-3">
            <div class="px-2">
              <span class="inline-block mb-1">分類標籤：</span>
              <multiselect
                class="rounded-lg cursor-pointer"
                v-model="sort"
                :options="options"
                :searchable="false"
                :close-on-select="true"
                :show-labels="false"
                :preserve-search="true"
                placeholder="選擇分類"
              ></multiselect>
            </div>
          </li>
          <li class="w-full mb-3">
            <div class="px-2">
              <label class="inline-block mb-1" for="BrandStory">餐車故事：</label>
              <textarea
                class="w-full focus:outline-none rounded-lg indent p-1"
                name="餐車故事"
                id="BrandStory"
                rows="3"
                v-model="brandData.BrandStory"
              ></textarea>
            </div>
          </li>
        </ul>
      </div>
      <ul class="flex flex-col md:flex-row  text-center md:text-left text-lg">
        <li class="md:w-3/4 mb-3 mr-3 text-center">
          <div class="relative">
            <img
              class="rounded-lg w-full h-56"
              :src="brandData.CarImage"
              alt="Logo"
            />
            <input id="BrandPhoto" class="hidden" @change="uploadFile('BrandPhoto')" type="file">
            <label for="BrandPhoto" class="opacity-0 hover:opacity-50 absolute w-full h-full top-0 bg-black rounded-lg text-white flex items-center justify-center"> 選擇上傳圖片 </label>
          </div>
          <p>餐車照片</p>
        </li>
        <li class="md:w-1/4 mb-3 md:mb-0 text-center">
          <div class="relative">
            <img
              class="rounded-lg w-full h-56"
              :src="brandData.QrCode"
              alt="Logo"
            />
            <input id="QRCode" class="hidden" @change="uploadFile('QRCode')" type="file">
            <label for="QRCode" class="opacity-0 hover:opacity-50 absolute top-0 bg-black text-white rounded-lg w-full h-full flex items-center justify-center"> 選擇上傳圖片 </label>
          </div>
          <p>收款 QR Code</p>
        </li>
      </ul>
    </div>
    <button class="w-full md:w-1/5 block mx-auto rounded-t-none md:rounded-lg bg-maincolor-400 text-thirdcolor-400 py-3 text-2xl md:mb-4 " @click.prevent="editBrandData">送出資料</button>
  </section>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  name: 'BrandData',
  components: {
    Multiselect
  },
  props: ['token', 'id'],
  data () {
    return {
      brandData: {},
      sort: '',
      value: '',
      options: [
        '特色小吃',
        '甜點',
        '飲料',
        '主食',
        '炸物',
        '素食',
        '美式',
        '日式',
        '泰式'
      ],
      changeOptions: {
        特色小吃: 0,
        甜點: 1,
        飲料: 2,
        主食: 3,
        炸物: 4,
        素食: 5,
        美式: 6,
        日式: 7,
        泰式: 8
      }
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      const API = `http://fotricle.rocket-coding.com/Brand/Detail?Id=${localStorage.getItem('id')}`
      this.axios
        .get(API, config)
        .then((res) => {
          this.brandData = res.data.brand
          this.sort = res.data.sort
          console.log(this.brandData)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    editBrandData () {
      const API = `http://fotricle.rocket-coding.com/Brand/Edit?Id=${localStorage.getItem('id')}`
      const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      const BrandData = this.brandData
      BrandData.Sort = this.changeOptions[this.sort]
      console.log(BrandData)
      this.axios
        .patch(API, BrandData, config)
        .then((res) => {
          console.log(res)
          this.getData()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    uploadFile (photoType) {
      const file = document.querySelector(`#${photoType}`).files[0]
      const formData = new FormData()
      const API = 'http://fotricle.rocket-coding.com/BrandPhoto/upload'
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data'
        }
      }
      formData.append('file', file)

      this.axios
        .post(API, formData, config)
        .then((res) => {
          console.log(res)
          console.log(photoType)
          switch (photoType) {
            case 'QRCode':
              this.brandData.QrCode = res.data.imageUrl
              console.log('QrCode', this.brandData.QrCode)
              break
            case 'BrandPhoto':
              this.brandData.CarImage = res.data.imageUrl
              console.log('CarImage', this.brandData.CarImage)
              break
            case 'BrandLogo':
              this.brandData.LogoPhoto = res.data.imageUrl
              console.log('LogoPhoto', this.brandData.LogoPhoto)
              break
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
