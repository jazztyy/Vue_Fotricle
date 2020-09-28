<template>
    <div class="bg-secondcolor-400 rounded-lg flex flex-col">
      <table class="w-full mb-5 rounded-t-lg">
        <thead class="bg-maincolor-200 text-thirdcolor-400">
          <tr>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell rounded-tl-lg">餐車名稱</th>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">餐車信箱</th>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">是否為 VIP</th>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell rounded-tr-lg"></th>
          </tr>
        </thead>
        <tbody class="text-xl">
          <tr
            class="lg:hover:bg-secondcolor-600 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-5 lg:mb-0"
            v-for="item of brand" :key="item.Id"
          >
            <td
              class="w-full lg:w-auto p-3 text-center border-b block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-half left-0 transY bg-maincolor-200 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
              >餐車名稱</span>
              {{ item.BrandName }}
            </td>
            <td
              class="w-full lg:w-auto p-3 border-b text-center block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-half left-0 transY bg-maincolor-200 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
              >餐車信箱</span>
              {{ item.Email }}
            </td>
            <td
              class="w-full lg:w-auto p-3 border-b text-center block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-half left-0 transY bg-maincolor-200 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
              >是否為 VIP</span>
              <p v-if="item.Vip">是</p>
              <p v-if="!item.Vip">否</p>
            </td>
            <td
              class="w-full lg:w-auto p-3 border-b text-center block lg:table-cell relative lg:static"
            >
              <button class="btn-main p-2 mr-2">詳細資料</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
export default {
  data () {
    return {
      brand: []
    }
  },
  methods: {
    init () {
      const API = 'http://fotricle.rocket-coding.com/Brand/All'
      this.axios.get(API)
        .then(res => {
          console.log(res.data)
          this.brand = res.data.filter(brand => {
            return brand.Verification === 1
          })
          console.log(this.brand)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.init()
  }
}
</script>
