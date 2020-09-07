<template>
  <section class="lg:w-2/3 mx-5 rounded-lg shadow-lg bg-secondcolor-400">
    <header
      class="text-3xl text-center bg-maincolor-400 text-thirdcolor-400 rounded-t-lg py-3 mb-3"
    >餐車資料</header>
    <form class="bg-secondcolor-400 flex flex-col px-5" action>
      <div class="mb-3 md:flex md:flex-row-reverse">
        <div class="md:w-3/4 flex flex-col justify-between">
          <div class="flex mb-3 md:mb-0">
            <input
              class="flex-3 bg-thirdcolor-400 rounded-lg indent text-xl"
              type="text"
              name="imageUrl"
              disabled
              placeholder="店家大頭貼"
              v-model="Photo"
            />
            <button class="flex-1 btn-main py-2 ml-2">上傳圖片</button>
          </div>
          <div class="flex mb-3 md:mb-0">
            <input
              class="flex-3 bg-thirdcolor-400 rounded-lg indent text-xl"
              type="text"
              name="imageUrl"
              disabled
              placeholder="餐車照片"
              v-model="Img"
            />
            <button class="flex-1 btn-main py-2 ml-2">上傳圖片</button>
          </div>
          <div class="flex mb-3 md:mb-0">
            <input
              class="flex-3 bg-thirdcolor-400 rounded-lg indent text-xl"
              type="text"
              name="imageUrl"
              disabled
              placeholder="收款 QR Code"
              v-model="QRCode"
            />
            <button class="flex-1 btn-main py-2 ml-2">上傳圖片</button>
          </div>
        </div>
        <img
          class="rounded-lg md:w-1/4 md:mr-3"
          src="/img/thomas-tucker-MNtag_eXMKw-unsplash.jpg"
          alt
        />
      </div>
      <div>
        <div class="flex justify-between">
          <input
            class="w-48/100 text-xl rounded-lg bg-thirdcolor-400 py-1 mb-3 outline-none indent"
            type="text"
            placeholder="餐車名稱"
            v-model="Name"
          />
          <input
            class="w-48/100 text-xl rounded-lg bg-thirdcolor-400 py-1 mb-3 outline-none indent"
            type="text"
            placeholder="收款代碼"
            v-model="PayCode"
          />
        </div>
        <input
          class="w-full text-xl rounded-lg bg-thirdcolor-400 py-1 mb-3 outline-none indent"
          type="tel"
          placeholder="電話號碼"
          v-model="Tel"
        />
        <input
          class="w-full text-xl rounded-lg bg-thirdcolor-400 py-1 mb-3 outline-none indent"
          type="text"
          name="分類標籤"
          placeholder="分類標籤"
          v-model="Tags"
        />
        <textarea
          class="w-full bg-thirdcolor-400 rounded-lg mb-3 indent text-xl outline-none"
          rows="5"
          name="品牌故事"
          id
          placeholder="餐車故事"
          v-model="Story"
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
      Name: '',
      Tel: '',
      Tags: '',
      Story: '',
      PayCode: '',
      QRCode: '',
      Img: '',
      Photo: '',
      token: ''
    }
  },
  methods: {
    init () {
      this.token = document.cookie.replace(/token=/, '', '$1')
      if (this.token === '') {
        window.location = '/#/Login'
      } else {
        this.getData()
      }
    },
    editBrandData () {
      const API = 'http://fotricle.rocket-coding.com/Brand/Edit'
      const data = {
        Name: this.Name,
        Tel: this.Tel,
        Tags: this.Tags,
        Story: this.Story,
        PayCode: this.PayCode,
        QRCode: this.QRCode,
        Img: this.Img,
        Photo: this.Photo
      }
      this.axios.get(API, data, {
        headers: {
          token: `Bearer ${this.token}`
        }
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    getData () {
      // const API = 'http://fotricle.rocket-coding.com/Brand/Detail'
      // this.axios.get(API, {
      //   headers: {
      //     token: `Bearer ${this.token}`
      //   }
      // }).then(res => {
      //   console.log(res)
      // }).catch(err => {
      //   console.log(err)
      // })
    }
  },
  created () {
    this.init()
  }
}
</script>
