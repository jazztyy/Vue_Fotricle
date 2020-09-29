<template>
  <div class="lg:w-2/3">
    <section class="mx-5 rounded-lg shadow-lg">
      <div class="bg-thirdcolor-400 rounded-lg flex flex-col">
        <table class="w-full mb-5 rounded-t-lg">
          <thead class="bg-maincolor-200 text-thirdcolor-400">
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
              class="flex lg:table-row hover:bg-thirdcolor-600 flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-5 lg:mb-0"
              v-for="product of products" :key="product.Id"
            >
              <td
                class="w-full lg:w-auto p-3 text-center border-black border-b block lg:table-cell relative lg:static"
              >
                <span
                  class="lg:hidden absolute top-half left-0 transY bg-maincolor-200 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
                >圖片</span>
                <img
                  class="w-32 mx-auto rounded-lg"
                  :src="product.ProductPhoto"
                  alt
                />
              </td>
              <td
                class="w-full lg:w-auto p-3 border-b border-black  text-center block lg:table-cell relative lg:static"
              >
                <span
                  class="lg:hidden absolute top-half left-0 transY bg-maincolor-200 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
                >分類</span>
                {{ product.sort }}
              </td>
              <td
                class="w-full lg:w-auto p-3 border-b border-black  text-center block lg:table-cell relative lg:static"
              >
                <span
                  class="lg:hidden absolute top-half left-0 transY bg-maincolor-200 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
                >名稱</span>
                {{ product.ProductName }}
              </td>
              <td
                class="w-full lg:w-auto p-3 border-b border-black  text-center block lg:table-cell relative lg:static"
              >
                <span
                  class="lg:hidden absolute top-half left-0 transY bg-maincolor-200 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
                >價格</span>
                {{ product.Price }}
              </td>
              <td
                class="w-full lg:w-auto p-3 border-b border-black  text-center block lg:table-cell relative lg:static"
              >
                <span
                  class="lg:hidden absolute top-half left-0 transY bg-maincolor-200 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
                >是否上架</span>
                <div
                  class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
                >
                  <input
                    type="checkbox"
                    name="toggle"
                    :id="'toggle'+ product.Id"
                    v-model="product.IsUse"
                    @click="changeProductStatus(product.Id, product.IsUse)"
                    class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer outline-none"
                  />
                  <label
                    :for="'toggle'+ product.Id"
                    class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                  ></label>
                </div>
              </td>
              <td
                class="w-full lg:w-auto p-3 border-b border-black  text-center block lg:table-cell relative lg:static"
              >
                <span
                  class="lg:hidden absolute top-half left-0 transY bg-maincolor-200 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
                >數量</span>
                {{ product.Total }}
              </td>
              <td
                class="w-full lg:w-auto p-3 border-b border-black  text-center block lg:table-cell relative lg:static"
              >
                <span
                  class="lg:hidden absolute top-half left-0 transY bg-maincolor-200 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
                >編輯</span>
                <button class="btn-main p-2 mr-2 focus:outline-none" @click.prevent="openModal(product)">編輯</button>
                <button class="bg-red-600 hover:bg-red-700 text-thirdcolor-400 rounded-lg p-2 focus:outline-none" @click.prevent="changeProductStatus(product.Id, 'del')">刪除</button>
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
      class="fixed top-half left-half trans-center z-50"
      v-show="isShow"
      ref="product"
    ></Product>
    <div class="mask fixed z-40" v-show="isShow"></div>
  </div>
</template>

<script>
import Product from '../../../components/Brand/Product'

export default {
  name: 'EditMenu',
  data () {
    return {
      check: false,
      isShow: false,
      products: [],
      status: {
        是: true,
        否: false,
        刪除: '刪除'
      },
      changeOptions: {
        0: '特色小吃',
        1: '甜點',
        2: '飲料',
        3: '主食',
        4: '炸物',
        5: '素食',
        6: '美式',
        7: '日式',
        8: '泰式'
      }
    }
  },
  created () {
    this.init()
  },
  methods: {
    closeModal () {
      this.isShow = false
    },
    init () {
      this.changeLoading(true)
      const API = `http://fotricle.rocket-coding.com/ProductLists/Gets?Id=${localStorage.getItem('id')}`
      this.axios
        .get(API)
        .then((res) => {
          this.products = res.data.products
          this.products.forEach(product => {
            product.IsUse = this.status[product.IsUse]
          })
          this.products = this.products.filter(products => {
            return products.IsUse !== '刪除'
          })
          this.changeLoading(false)
        })
        .catch((err) => {
          console.log(err)
          this.changeLoading(false)
          this.$emit('showAlertButton', '資料載入失敗，請重新整理', 'error', 'reload')
        })
    },
    changeProductStatus (id, status) {
      this.changeLoading(true)
      const API = `http://fotricle.rocket-coding.com/Products/Use?Id=${id}`
      const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      const changeStr = {
        false: 1,
        true: 0,
        del: 2
      }
      const body = {
        IsUse: changeStr[status]
      }
      console.log(body)
      this.axios
        .patch(API, body, config)
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
    },
    uploadFile () {
      const file = document.querySelector('#fileUploading').files[0]
      const formData = new FormData()
      const API = 'http://fotricle.rocket-coding.com/ProductPhoto/upload'
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
          this.$emit('showAlertAside', '圖片上傳成功', 'success')
        })
        .catch((err) => {
          console.log(err)
          this.$emit('showAlertButton', '圖片上傳失敗，請重新上傳', 'error')
        })
    },
    changeLoading (status) {
      this.$emit('changeLoading', status)
    }
  },
  components: {
    Product
  }
}
</script>
