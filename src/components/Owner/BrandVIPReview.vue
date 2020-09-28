<template>
    <div class="bg-secondcolor-400 rounded-lg flex flex-col">
      <table class="w-full mb-5 rounded-t-lg">
        <thead class="bg-maincolor-200 text-thirdcolor-400">
          <tr>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell rounded-tl-lg">申請時間</th>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">餐車信箱</th>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">匯款帳號</th>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell rounded-tr-lg">VIP 審核</th>
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
                class="lg:hidden absolute top-half left-0 transY bg-maincolor-200 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
              >申請時間</span>
              20200907 18:00
            </td>
            <td
              class="w-full lg:w-auto p-3 border-b text-center block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-half left-0 transY bg-maincolor-200 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
              >餐車信箱</span>
              abc@gmail.com
            </td>
            <td
              class="w-full lg:w-auto p-3 border-b text-center block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-half left-0 transY bg-maincolor-200 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
              >匯款帳號</span>
              812123454879
            </td>
            <td
              class="w-full lg:w-auto p-3 border-b text-center block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-half left-0 transY bg-maincolor-200 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
              >審核</span>
              <button class="btn-main p-2 mr-2">通過</button>
              <button class="btn-main bg-red-600 p-2">未通過</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
