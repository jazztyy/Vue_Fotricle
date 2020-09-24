<template>
  <section class="lg:w-1/2 mx-5 rounded-lg shadow-lg bg-secondcolor-400">
    <i class="text-thirdcolor-400 text-3xl absolute fas fa-times p-3 right-0 cursor-pointer"
    @click="closeModal"></i>
    <header
      class="text-2xl text-center bg-maincolor-400 text-thirdcolor-400 rounded-t-lg py-3 mb-3"
    >產品資料</header>
    <form class="rounded-b-lg flex flex-col px-5" action>
      <div class="mb-3 flex flex-col items-center">
        <img class="rounded-lg mb-3 h-64" v-show="product.ProductPhoto" :src="product.ProductPhoto" alt />
        <div class="flex self-stretch">
          <input
            class="w-4/5 bg-thirdcolor-400 rounded-lg indent text-xl"
            type="text"
            name="imageUrl"
            disabled
            placeholder="圖片網址"
            v-model="product.ProductPhoto"
          />
          <input id="fileUploading" class="hidden" @change="uploadFile" type="file">
          <label for="fileUploading" class="ml-4 px-3 bg-maincolor-400 text-thirdcolor-400 rounded-lg flex items-center justify-center"> 選擇上傳圖片 </label>
        </div>
      </div>
      <div>
        <input
          class="w-full text-xl rounded-lg bg-thirdcolor-400 py-1 mb-3 outline-none indent"
          type="text"
          placeholder="產品名稱 (10 字內)"
          v-model="product.ProductName"
        />
        <div class="flex justify-between">
          <select name="產品類別" id="productSort"
          v-model="product.sort"
          class="w-48/100 text-lg rounded-lg bg-thirdcolor-400 mb-3"
          >
            <option value="" disabled selected>產品類別</option>
            <option value="特色小吃">特色小吃</option>
            <option value="甜點">甜點</option>
            <option value="飲料">飲料</option>
            <option value="主食">主食</option>
            <option value="炸物">炸物</option>
            <option value="素食">素食</option>
            <option value="美式">美式</option>
            <option value="日式">日式</option>
            <option value="泰式">泰式</option>
          </select>
          <input
            class="inline-block w-48/100 text-xl rounded-lg bg-thirdcolor-400 py-1 mb-3 outline-none indent"
            type="text"
            placeholder="產品數量"
            v-model="product.Total"
          />
        </div>
        <div class="flex justify-between">
          <input
            class="inline-block w-48/100 text-xl rounded-lg bg-thirdcolor-400 py-1 mb-3 outline-none indent"
            type="text"
            placeholder="產品單位"
            v-model="product.Unit"
          />
          <input
            class="inline-block w-48/100 text-xl rounded-lg bg-thirdcolor-400 py-1 mb-3 outline-none indent"
            type="text"
            placeholder="產品價格"
            v-model="product.Price"
          />
        </div>
        <textarea
          class="w-full bg-thirdcolor-400 rounded-lg mb-3 indent text-xl outline-none"
          rows="2"
          name="advice"
          id
          placeholder="產品描述"
          v-model="product.ProductDetail"
        ></textarea>
      </div>
      <button @click.prevent='judgeStatus' class="py-3 mb-3 btn-main text-xl">確認</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'Product',
  data () {
    return {
      product: { },
      token: '',
      isUse: true,
      isNew: true,
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
    this.token = localStorage.getItem('token')
    this.product.BrandId = localStorage.getItem('id')
  },
  methods: {
    addProduct () {
      const config = { headers: { Authorization: `Bearer ${this.token}` } }
      const product = this.product
      product.ProductSort = this.changeOptions[product.sort]
      const API = 'http://fotricle.rocket-coding.com/ProductList/New'
      this.axios
        .post(API, product, config)
        .then((res) => {
          this.closeModal()
          this.$emit('init')
          this.product = {}
        })
        .catch((err) => {
          console.log(err)
        })
    },
    editProduct () {
      const config = { headers: { Authorization: `Bearer ${this.token}` } }
      const product = this.product
      const API = `http://fotricle.rocket-coding.com/ProductList/Edit?Id=${this.product.Id}`
      product.ProductSort = this.changeOptions[product.sort]
      this.axios
        .patch(API, product, config)
        .then((res) => {
          this.closeModal()
          this.$emit('init')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    openModal (product) {
      this.product = product
      this.isNew = false
    },
    closeModal () {
      this.product = {}
      this.$emit('closeModal')
    },
    judgeStatus () {
      if (this.isNew) {
        this.addProduct()
      } else {
        this.editProduct()
      }
    },
    uploadFile () {
      const file = document.querySelector('#fileUploading').files[0]
      const formData = new FormData()
      const API = `http://fotricle.rocket-coding.com/customer/upload?Id=${this.id}`
      const config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
          'Content-Type': 'multipart/form-data'
        }
      }
      formData.append('file', file)

      this.axios
        .post(API, formData, config)
        .then((res) => {
          console.log(res)
          this.product.ProductPhoto = res.data.imageUrl
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
