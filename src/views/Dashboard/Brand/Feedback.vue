<template>
  <section class="lg:w-3/4 mx-5 rounded-lg shadow-lg">
    <div class="bg-thirdcolor-400 rounded-lg flex flex-col">
      <table class="w-full mb-5 rounded-t-lg">
        <thead class="bg-maincolor-400 text-thirdcolor-400">
          <tr>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell rounded-tl-lg"></th>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">顧客名稱</th>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">日期</th>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">餐點分數</th>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">服務分數</th>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">整體分數</th>
            <th class="p-3 text-2xl font-bold uppercase rounded-tr-lg hidden lg:table-cell">評價</th>
          </tr>
        </thead>
        <tbody class="text-2xl"
        >
          <tr
            class="lg:hover:bg-thirdcolor-600 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-5 lg:mb-0"
            v-for="person of feedback" :key="person.OrderId"
          >
            <td
              class="w-full lg:w-auto p-3 text-center border-b border-black block lg:table-cell relative lg:static "
            >
              <img class="w-20 h-20 rounded-full" :src='person.CusPhoto' alt="">
            </td>
            <td
              class="w-full lg:w-auto p-3 text-center border-b border-black block lg:table-cell relative lg:static "
            >
              <span
                class="lg:hidden absolute top-half left-0 transY block bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
              >顧客名稱</span>
                {{ person.UserName }}
            </td>
            <td
              class="w-full lg:w-auto p-3 border-b text-center border-black block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
              >日期</span>
              {{ person.Date }}
            </td>
            <td
              class="w-full lg:w-auto p-3 border-b text-center border-black block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
              >餐點分數</span>
              {{ person.Food }}
            </td>
            <td
              class="w-full lg:w-auto p-3 border-b text-center border-black block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
              >服務分數</span>
              {{ person.Service }}
            </td>
            <td
              class="w-full lg:w-auto p-3 border-b text-center border-black block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
              >整體分數</span>
              {{ person.AllSuggest }}
            </td>
            <td
              class="w-full lg:w-auto p-3 border-b text-center border-black block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
              >評價</span>
              {{ person.CarSuggest }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: 'feedback',
  props: ['feedback']
}
</script>
