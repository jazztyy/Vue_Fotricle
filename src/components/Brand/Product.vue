<template>
  <section class="lg:w-1/2 mx-5 rounded-lg shadow-lg bg-secondcolor-400">
    <i class="text-thirdcolor-400 text-3xl absolute fas fa-times p-3 right-0 cursor-pointer"
    @click="closeModal"></i>
    <header
      class="text-3xl text-center bg-maincolor-400 text-thirdcolor-400 rounded-t-lg py-3 mb-3"
    >產品資料</header>
    <form class="rounded-b-lg flex flex-col px-5" action>
      <div class="mb-3 flex flex-col items-center">
        <img class="rounded-lg mb-3 h-80" src="/img/thomas-tucker-MNtag_eXMKw-unsplash.jpg" alt />
        <div class="flex self-stretch">
          <input
            class="w-2/3 bg-thirdcolor-400 rounded-lg indent text-xl"
            type="text"
            name="imageUrl"
            disabled
            placeholder="圖片網址"
          />
          <button class="w-1/3 btn-main py-2 ml-2">上傳圖片</button>
        </div>
      </div>
      <div>
        <input
          class="w-full text-xl rounded-lg bg-thirdcolor-400 py-1 mb-3 outline-none indent"
          type="text"
          placeholder="產品名稱 (10 字內)"
        />
        <div class="flex justify-between">
          <input
            class="inline-block w-48/100 text-xl rounded-lg bg-thirdcolor-400 py-1 mb-3 outline-none indent"
            type="text"
            placeholder="產品分類"
          />
          <input
            class="inline-block w-48/100 text-xl rounded-lg bg-thirdcolor-400 py-1 mb-3 outline-none indent"
            type="text"
            placeholder="產品數量"
          />
        </div>
        <div class="flex justify-between">
          <input
            class="inline-block w-48/100 text-xl rounded-lg bg-thirdcolor-400 py-1 mb-3 outline-none indent"
            type="text"
            placeholder="產品單位"
          />
          <input
            class="inline-block w-48/100 text-xl rounded-lg bg-thirdcolor-400 py-1 mb-3 outline-none indent"
            type="text"
            placeholder="產品價格"
          />
        </div>
        <textarea
          class="w-full bg-thirdcolor-400 rounded-lg mb-3 indent text-xl outline-none"
          rows="5"
          name="advice"
          id
          placeholder="產品描述"
        ></textarea>
      </div>
      <button class="py-3 mb-3 btn-main text-xl">確認</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'Product',
  data () {
    return {}
  },
  methods: {
    closeModal () {
      this.$emit('closeModal')
    }
  }
}
</script>
