<template>
    <div class="bg-secondcolor-400 rounded-lg flex flex-col">
      <table class="w-full mb-5 rounded-t-lg">
        <thead class="bg-maincolor-400 text-thirdcolor-400">
          <tr>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell rounded-tl-lg">客戶帳號</th>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">棄單次數</th>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell rounded-tr-lg">黑名單</th>
          </tr>
        </thead>
        <tbody class="text-xl">
          <tr
            class="lg:hover:bg-secondcolor-600 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-5 lg:mb-0"
          >
            <td
              class="w-full lg:w-auto p-3 text-center border-b block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
              >客戶帳號</span>
              1234@gmail.com
            </td>
            <td
              class="w-full lg:w-auto p-3 border-b text-center block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
              >棄單次數</span>
              20
              <button class="btn-main p-2 ml-2">詳細資料</button>
            </td>
            <td
              class="w-full lg:w-auto p-3 border-b text-center block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
              >黑名單</span>
              <button class="btn-main p-2 mr-2">加入黑名單</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
