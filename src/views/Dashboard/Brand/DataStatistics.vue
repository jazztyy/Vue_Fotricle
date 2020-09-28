<template>
  <section class="lg:w-2/3 mx-5 rounded-lg shadow-lg">
    <div class="bg-thirdcolor-400 rounded-lg flex flex-col">
      <table class="w-full mb-5 rounded-t-lg">
        <thead class="bg-maincolor-200 text-thirdcolor-400">
          <tr>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell rounded-tl-lg">日期</th>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">訂單總量</th>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">營業時間</th>
            <th class="p-3 text-2xl font-bold uppercase rounded-tr-lg hidden lg:table-cell">營業額</th>
          </tr>
        </thead>
        <tbody class="text-2xl"
        v-if="dataAnalysis[0]"
        >
          <tr
            class="lg:hover:bg-thirdcolor-600 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-5 lg:mb-0"
            v-for="data of dataAnalysis" :key="data.Ordertime"
          >
            <td
              class="w-full lg:w-auto p-3 text-center border-b border-black block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-half left-0 transY bg-maincolor-200 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
              >日期</span>
              {{ data.Ordertime }}
            </td>
            <td
              class="w-full lg:w-auto p-3 border-b text-center border-black block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-half left-0 transY bg-maincolor-200 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
              >訂單總量</span>
              {{ data.count }}
            </td>
            <td
              class="w-full lg:w-auto p-3 border-b text-center border-black block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-half left-0 transY bg-maincolor-200 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
              >營業時間</span>
              {{ data.workhour }} 小時
            </td>
            <td
              class="w-full lg:w-auto p-3 border-b text-center border-black block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-half left-0 transY bg-maincolor-200 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
              >營業額</span>
              {{ data.total }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: 'dataAnalysis',
  props: ['dataAnalysis']
}
</script>
