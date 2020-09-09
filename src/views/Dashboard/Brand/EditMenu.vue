<template>
  <div class="lg:w-2/3">
    <section class="mx-5 rounded-lg shadow-lg">
      <div class="bg-secondcolor-400 rounded-lg flex flex-col">
        <table class="w-full mb-5 rounded-t-lg">
          <thead class="bg-maincolor-400 text-thirdcolor-400">
            <tr>
              <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell rounded-tl-lg">圖片</th>
              <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">分類</th>
              <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">名稱</th>
              <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">價格</th>
              <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">是否上架</th>
              <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">數量</th>
              <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell rounded-tr-lg">編輯</th>
            </tr>
          </thead>
          <tbody class="text-xl">
            <tr
              class="lg:hover:bg-secondcolor-600 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-5 lg:mb-0"
              v-for="product of products" :key="product.Id"
            >
              <td
                class="w-full lg:w-auto p-3 text-center border-b block lg:table-cell relative lg:static"
              >
                <span
                  class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
                >圖片</span>
                <img
                  class="w-32 mx-auto rounded-lg"
                  src="/img/robin-stickel-tzl1UCXg5Es-unsplash.jpg"
                  alt
                />
              </td>
              <td
                class="w-full lg:w-auto p-3 border-b text-center block lg:table-cell relative lg:static"
              >
                <span
                  class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
                >分類</span>
                {{ product.sort }}
              </td>
              <td
                class="w-full lg:w-auto p-3 border-b text-center block lg:table-cell relative lg:static"
              >
                <span
                  class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
                >名稱</span>
                {{ product.ProductName }}
              </td>
              <td
                class="w-full lg:w-auto p-3 border-b text-center block lg:table-cell relative lg:static"
              >
                <span
                  class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
                >價格</span>
                {{ product.Price }}
              </td>
              <td
                class="w-full lg:w-auto p-3 border-b text-center block lg:table-cell relative lg:static"
              >
                <span
                  class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
                >是否上架</span>
                是
                <!-- <div
                  class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
                >
                  <input
                    type="checkbox"
                    name="toggle"
                    id="toggle"
                    class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer outline-none"
                  />
                  <label
                    for="toggle"
                    class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                  ></label>
                </div> -->
              </td>
              <td
                class="w-full lg:w-auto p-3 border-b text-center block lg:table-cell relative lg:static"
              >
                <span
                  class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
                >數量</span>
                {{ product.Total }}
              </td>
              <td
                class="w-full lg:w-auto p-3 border-b text-center block lg:table-cell relative lg:static"
              >
                <span
                  class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
                >編輯</span>
                <button class="btn-main p-2 mr-2 focus:outline-none" @click.prevent="openModal(product)">編輯</button>
                <button class="btn-main bg-red-600 p-2 focus:outline-none" @click.prevent="deleteProduct(product.Id)">刪除</button>
              </td>
            </tr>
          </tbody>
        </table>
        <button class="btn-main rounded-t-none text-2xl px-5 py-2" @click="isShow = true">新增產品</button>
      </div>
    </section>
    <Product
      @closeModal="closeModal"
      @init='init'
      class="fixed top-half left-half trans-center z-20"
      v-show="isShow"
      ref="product"
    ></Product>
    <div class="mask fixed" v-show="isShow"></div>
  </div>
</template>

<script>
import Product from '../../../components/Brand/Product'

export default {
  name: 'EditMenu',
  data () {
    return {
      isShow: false,
      products: []
    }
  },
  props: ['token', 'id'],
  created () {
    this.init()
  },
  methods: {
    closeModal () {
      this.isShow = false
    },
    init () {
      console.log('init')
      const config = { headers: { Authorization: `Bearer ${this.token}` } }
      const API = 'http://fotricle.rocket-coding.com/ProductLists/Gets'
      this.axios
        .get(API, config)
        .then((res) => {
          console.log(res)
          this.products = res.data.products
        })
        .catch((err) => {
          console.log(err)
        })
    },
    deleteProduct (id) {
      const API = `http://fotricle.rocket-coding.com/ProductList/Delete?Id=${id}`
      const config = { headers: { Authorization: `Bearer ${this.token}` } }
      this.axios
        .delete(API, config)
        .then((res) => {
          console.log(res)
          this.init()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    openModal (product) {
      this.isShow = true
      this.$refs.product.openModal(product)
    }
  },
  components: {
    Product
  }
}
</script>
