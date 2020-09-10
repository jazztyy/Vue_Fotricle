<template>
  <section class="lg:w-2/3 mx-5 rounded-lg shadow-lg bg-secondcolor-400">
    <header
      class="text-3xl text-center bg-maincolor-400 text-thirdcolor-400 rounded-t-lg py-3 mb-3"
    >餐車資料</header>
    <div class="px-5 text-2xl">
      <ul class="w-full flex flex-col md:flex-row justify-between text-center md:text-left text-lg">
        <li class="mb-3 mr-3">
          <img class="rounded-lg" src="/img/thomas-tucker-MNtag_eXMKw-unsplash.jpg" alt="Logo" />
          <p>Logo</p>
        </li>
        <li class="mb-3 mr-3">
          <img class="rounded-lg" src="/img/thomas-tucker-MNtag_eXMKw-unsplash.jpg" alt="Logo" />
          <p>餐車照片</p>
        </li>
        <li class="mb-3 md:mb-0">
          <img class="rounded-lg" src="/img/thomas-tucker-MNtag_eXMKw-unsplash.jpg" alt="Logo" />
          <p>收款 QR Code</p>
        </li>
      </ul>
      <div>
        <div class="flex flex-wrap">
          <p class="w-full md:w-1/2 mb-3">餐車名稱： {{ data.BrandName }}</p>
          <p class="w-full md:w-1/2 mb-3">收款代碼： {{ data.LinePay }}</p>
          <p class="w-full md:w-1/2 mb-3">電話號碼： {{ data.PhoneNumber }}</p>
          <p class="w-full md:w-1/2 mb-3">分類標籤： {{ sort }}</p>
          <p class="mb-3">品牌故事： {{ data.BrandStory }}</p>
        </div>
      </div>
      <button
        class="w-full btn-main py-3 text-2xl mb-4"
        @click.prevent="isShow = true; $refs.BrandData.showBrandData(data)"
      >編輯資料</button>
    </div>
    <div>
      <label class="typo__label">Single select</label>
      <multiselect
        v-model="value"
        :options="options"
        :searchable="false"
        :close-on-select="false"
        :show-labels="false"
        placeholder="Pick a value"
      ></multiselect>
      <!-- <pre class="language-json"><code>{{ value  }}</code></pre> -->
    </div>
    <brand-data
      @closeModal="closeModal"
      class="fixed top-half left-half trans-center z-20"
      v-show="isShow"
      :brand="data"
      ref="BrandData"
    ></brand-data>
    <div class="fixed mask" v-show="isShow"></div>
  </section>
</template>

<script>
import BrandData from '../../../components/Brand/BrandData'
import Multiselect from 'vue-multiselect'

export default {
  components: {
    BrandData,
    Multiselect
  },
  props: ['token', 'id'],
  data () {
    return {
      data: {
        BrandName: 'Fotricle'
      },
      sort: '',
      isShow: false,
      value: '',
      options: ['123', '456', '789']
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.getData()
    },
    getData () {
      const config = { headers: { Authorization: `Bearer ${this.token}` } }
      const API = `http://fotricle.rocket-coding.com/Brand/Detail?Id=${this.id}`
      this.axios
        .get(API, config)
        .then((res) => {
          this.data = res.data.brand
          this.sort = res.data.sort
          console.log(this.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    closeModal () {
      this.isShow = false
    }
  }
}
</script>
