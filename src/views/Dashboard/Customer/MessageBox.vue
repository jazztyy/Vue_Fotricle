<template>
  <section class="lg:w-3/4 mx-5 shadow-lg">
    <div class="bg-thirdcolor-300 rounded-lg">
      <table class="w-full">
        <thead class="text-thirdcolor-400 rounded-t-lg">
          <tr class="bg-maincolor-200">
            <th class="p-3 text-2xl font-bold uppercase rounded-tl-lg hidden lg:table-cell">發送時間</th>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">餐車名稱</th>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">訂單編號</th>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">訊息內容</th>
            <th class="p-3 text-2xl font-bold uppercase rounded-tr-lg hidden lg:table-cell"></th>
          </tr>
        </thead>
        <tbody class="text-xl">
          <tr
            class=" flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-5 lg:mb-0"
            v-for="message of messageBox" :key="message.InitDate"
          >
          <td
              class="w-full lg:w-auto p-3 border-b text-center border-black block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-half left-0 transY bg-maincolor-200 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
              >發送時間</span>
              {{
                  new Date(message.InitDate).getMonth() + '/' +
                  new Date(message.InitDate).getDate() + ' ' +
                  ((new Date(message.InitDate).getHours() > 9 ) ? ('' + new Date(message.InitDate).getHours()) : ('0' + new Date(message.InitDate).getHours())) + ':' +
                  ((new Date(message.InitDate).getMinutes() > 9 ) ? ('' + new Date(message.InitDate).getMinutes()) : ('0' + new Date(message.InitDate).getMinutes()))
                  }}
            </td>
            <td
              class="w-full lg:w-auto p-3 text-center border-b border-black block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-half left-0 transY bg-maincolor-200 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
              >餐車名稱</span>
              {{ message.BrandName }}
            </td>
            <td
              class="w-full lg:w-auto p-3 text-center border-b border-black block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-half left-0 transY bg-maincolor-200 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
              >訂單編號</span>
              {{ message.OrderId }}
            </td>
            <td
              class="w-full lg:w-auto p-3 border-b text-center border-black block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-half left-0 transY bg-maincolor-200 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
              >訊息內容</span>
              {{ message.Remarks }}
            </td>
            <td
              class="w-full lg:w-auto p-3 border-b text-center border-black block lg:table-cell relative lg:static"
            >
              <button class="px-3 text-2xl hover:bg-secondcolor-600 bg-secondcolor-400 rounded-lg" @click="changeMessagePhase(message.Id)">已讀</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Message',
  props: ['messageBox'],
  methods: {
    changeMessagePhase (id) {
      const API = `http://fotricle.rocket-coding.com/notice/update?Id=${id}`
      const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      const body = {
        Isread: 1
      }
      this.axios.patch(API, body, config)
        .then(res => {
          this.getMessage()
        })
    },
    getMessage () {
      this.$emit('getMessage', '成功修改', 'success')
    },
    changeLoading (status) {
      this.$emit('changeLoading', status)
    }
  }
}
</script>
