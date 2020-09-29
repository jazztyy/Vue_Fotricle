<template>
    <div class="bg-secondcolor-400 rounded-lg flex flex-col">
      <table class="w-full mb-5 rounded-t-lg">
        <thead class="bg-maincolor-200 text-thirdcolor-400">
          <tr>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell rounded-tl-lg">餐車信箱</th>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">餐車粉絲專頁</th>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell rounded-tr-lg">審核</th>
          </tr>
        </thead>
        <tbody class="text-xl">
          <tr
            class="lg:hover:bg-secondcolor-600 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-5 lg:mb-0"
            v-for="item of brand" :key="item.Id"
          >
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
              >餐車粉絲頁</span>
              {{ item.FbAccount }}
            </td>
            <td
              class="w-full lg:w-auto p-3 border-b text-center block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-half left-0 transY bg-maincolor-200 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
              >審核</span>
              <button class="btn-main p-2 mr-2" @click="accept(item.Id, item.FbAccount)">通過</button>
              <button class="btn-main bg-red-600 p-2" @click="fail(item.Id)">未通過</button>
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
          this.brand = res.data.filter(brand => {
            return brand.Verification === 0
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
    accept (id, page) {
      const API = `http://fotricle.rocket-coding.com/Brand/checkpass?Id=${id}`
      const data = {
        Id: id,
        FbAccount: page,
        Verification: 1
      }
      this.axios.patch(API, data)
        .then(res => {
          this.init()
        })
        .catch(err => {
          console.log(err)
        })
    },
    fail (id) {
      const API = `http://fotricle.rocket-coding.com/Api/Brands/${id}`
      this.axios.delete(API)
        .then(res => {
          this.init()
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
