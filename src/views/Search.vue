<template>
  <div>
    <div
      class="relative bg-img h-96 mb-5"
      style="background-image: url(http://fotricle.rocket-coding.com:80/Upload/customer/20200920104620.jpg?Id=undefined);"
    >
      <div class="mask"></div>
      <div
        class="w-4/5 absolute z-20 top-60 md:top-half left-half trans-center text-xl rounded-lg px-3"
      >
        <div class="relative">
          <multiselect
            class="outline-none rounded-lg w-full"
            v-model="tag"
            tag-placeholder="添加新分類"
            placeholder="選擇餐車分類"
            selectLabel='選擇分類'
            deselectLabel='移除標籤'
            selectedLabel='已選擇'
            label="name"
            track-by="code"
            :options="tagGroup"
            :multiple="true"
            :taggable="true"
            @tag="addTag"
            @select="filterBySort"
          ></multiselect>
        </div>
      </div>
      <ul
        class="absolute z-20 w-4/5 top-30 md:top-30 left-half trans-center flex flex-wrap justify-start text-xl rounded-lg py-5"
      >
        <!-- <li class="w-full mb-3 md:mb-0 md:w-1/4 px-3">
          <div class="relative">
            <select
              class="outline-none rounded-lg w-full relative z-10 indent"
              name="追蹤"
              id="follow"
            >
              <option class="border-none" value disabled selected>是否追蹤</option>
              <option value="已追蹤">已追蹤</option>
              <option value="所有餐車">所有餐車</option>
            </select>
          </div>
        </li> -->
        <li class="w-full mb-3 md:mb-0 md:w-1/4 px-3">
          <div class="relative">
            <multiselect
            class="outline-none rounded-lg w-full"
            v-model="suggest"
            placeholder="選擇餐車評分"
            selectLabel='選擇評分'
            deselectLabel='移除'
            selectedLabel='已選擇'
            :options="suggestOptions"
            @select="filterBySuggest"
          ></multiselect>
          </div>
        </li>
        <li class="w-full mb-3 md:mb-0 md:w-1/4 px-3">
          <div class="relative">
            <multiselect
            class="outline-none rounded-lg w-full"
            v-model="open"
            placeholder="選擇餐車狀態"
            selectLabel='選擇狀態'
            deselectLabel='移除'
            selectedLabel='已選擇'
            :options="openOptions"
            @select="filterByStatus"
          ></multiselect>
          </div>
        </li>
        <!-- <li class="w-full mb-3 md:mb-0 md:w-1/4 px-3">
          <div class="relative">
            <select
              class="outline-none rounded-lg w-full relative z-10 indent"
              name="距離"
              id="distance"
            >
              <option value disabled selected>距離</option>
              <option value="一公里內">一公里內</option>
              <option value="三公里內">三公里內</option>
              <option value="五公里內">五公里內</option>
            </select>
          </div>
        </li> -->
      </ul>
    </div>
    <main class="container mx-auto">
      <!-- <ul class="flex mb-3 text-xl px-3">
        <li>
          <button
            class="focus:outline-none px-3 py-2 mr-5"
            :class="{ 'btn-main': !isMap, 'btn-second': isMap }"
            @click="isMap = true"
          >地圖模式</button>
        </li>
        <li>
          <button
            class="focus:outline-none px-3 py-2"
            :class="{ 'btn-main': isMap, 'btn-second': !isMap }"
            @click="isMap = false"
          >列表模式</button>
        </li>
      </ul>-->
      <section v-show="!isMap">
        <ul class="flex flex-col items-stretch md:flex-row md:flex-wrap">
          <li
            class="md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 px-3 hover:item-scale"
            v-for="brand of brandList"
            :key="brand.Id"
          >
            <div class="shadow-xl rounded-lg">
              <div class="relative">
                <router-link
                  class="mask rounded-t-lg opacity-0 hover:opacity-50 flex justify-center items-center text-white"
                  @click.native="getBrandId(brand.Id)"
                  to="/BrandDetail"
                >前往餐車頁面</router-link>
                <img class="rounded-t-lg w-full h-64" :src="brand.LogoPhoto" alt="Logo" />
              </div>
              <div class="p-5">
                <div class="flex justify-between lg:flex-col lg:items-start items-center mb-3">
                  <div class="w-full flex justify-between items-center">
                    <h2 class="text-2xl font-semibold mb-2">{{ brand.BrandName }}</h2>
                    <div class="text-lg bg-secondcolor-400 px-2 rounded-lg">{{ brand.Sort }}</div>
                  </div>
                  <div class="w-full">
                    <star-rating
                      v-model="brand.allSuggest"
                      :read-only="true"
                      :rating="0.1"
                      :show-rating="false"
                      :star-size="30"
                      inactive-color="#e2e8f000"
                      :rounded-corners="true"
                      :round-start-rating="false"
                    ></star-rating>
                    <!-- <button class="btn-main p-3">導航前往</button> -->
                  </div>
                </div>
                <p class="text-2xl md:text-2xl lg:text-base mb-1 text-hidden">{{ brand.BrandStory }}</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section v-show="isMap" class="px-3 pb-3">
        <iframe
          class="w-full h-767"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14733.403778310749!2d120.3044352!3d22.603366400000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1szh-TW!2stw!4v1599200359968!5m2!1szh-TW!2stw"
          frameborder="0"
          style="border:0;"
          allowfullscreen
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </section>
    </main>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  name: 'Search',
  components: {
    Multiselect
  },
  data () {
    return {
      filterBrandList: [],
      isMap: false,
      brandId: '',
      tag: [],
      tagGroup: [
        { name: '特色小吃', code: '0' },
        { name: '甜點', code: '1' },
        { name: '飲料', code: '2' },
        { name: '主食', code: '3' },
        { name: '炸物', code: '4' },
        { name: '素食', code: '5' },
        { name: '美式', code: '6' },
        { name: '日式', code: '7' },
        { name: '泰式', code: '8' }
      ],
      suggest: '',
      suggestOptions: ['由低到高', '由高到低'],
      open: '',
      openOptions: ['營業中', '未營業', '所有餐車']
    }
  },
  props: ['brandList'],
  created () {
    this.filterBrandList = this.brandList
  },
  methods: {
    setBrandId (brandId) {
      this.$bus.$emit('getBrandId', brandId)
    },
    getBrandId (brandId) {
      this.brandId = brandId
      this.setBrandId(brandId)
    },
    addTag (newTag) {
      console.log(newTag)
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000)
      }
      this.tagGroup.push(tag)
      this.tag.push(tag)
    },
    filterBySort () {
      // if (this.tag.lenght === 0) {
      //   this.filterBrandList = this.brandList
      // } else {
      //   this.filterBrandList = this.filterBrandList.filter(brand => {
      //     return brand.Sort === this.tag.forEach(tag => {
      //       return tag.name
      //     })
      //   })
      // }
    },
    filterBySuggest () {
      if (this.suggest === '由低到高') {
        this.brandList.sort((a, b) => {
          return b.allSuggest - a.allSuggest
        })
      } else {
        this.brandList.sort((a, b) => {
          return a.allSuggest - b.allSuggest
        })
      }
    },
    filterByStatus () {
      switch (this.open) {
        case '營業中':
          this.brandList.filter(brand => {

          })
      }
    }
  },
  beforeDestroy () {
    localStorage.setItem('BrandId', this.brandId)
  }
}
</script>
