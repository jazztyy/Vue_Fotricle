<template>
  <section class="lg:w-3/4 mx-5 rounded-lg shadow-lg">
    <div class="bg-secondcolor-400 rounded-lg flex flex-col">
      <table class="w-full mb-5 rounded-t-lg">
        <thead class="bg-maincolor-400 text-thirdcolor-400">
          <tr>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell rounded-tl-lg">用戶名稱</th>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">日期</th>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">餐點分數</th>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">服務分數</th>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">整體分數</th>
            <th class="p-3 text-2xl font-bold uppercase rounded-tr-lg hidden lg:table-cell">評價</th>
          </tr>
        </thead>
        <tbody class="text-2xl">
          <tr
            class="lg:hover:bg-secondcolor-600 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-5 lg:mb-0"
          >
            <td
              class="w-full lg:w-auto p-3 text-center border-b block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
              >用戶名</span>
              林阿魚
            </td>
            <td
              class="w-full lg:w-auto p-3 border-b text-center block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
              >日期</span>
              20200822
            </td>
            <td
              class="w-full lg:w-auto p-3 border-b text-center block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
              >餐點分數</span>
              5
            </td>
            <td
              class="w-full lg:w-auto p-3 border-b text-center block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
              >服務分數</span>
              4
            </td>
            <td
              class="w-full lg:w-auto p-3 border-b text-center block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
              >整體分數</span>
              4
            </td>
            <td
              class="w-full lg:w-auto p-3 border-b text-center block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
              >評價</span>
              雞米花多汁好吃，根本是我的摯愛。
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
