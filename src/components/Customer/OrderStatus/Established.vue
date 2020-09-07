<template>
  <table class="w-full">
    <thead>
      <tr>
        <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">訂單編號</th>
        <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">餐車名稱</th>
        <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">候餐單號</th>
        <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">目前單號</th>
        <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">金額</th>
        <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">訂單明細</th>
      </tr>
    </thead>
    <tbody class="text-xl">
      <tr
        class="lg:hover:bg-secondcolor-600 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-5 lg:mb-0"
      >
        <td
          class="w-full lg:w-auto py-3 pl-20 xs:pl-0 text-center border-b block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
          >訂單編號</span>
          A123456789
        </td>
        <td
          class="w-full lg:w-auto py-3 pl-20 xs:pl-0 border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
          >餐車名稱</span>
          龐炸食
        </td>
        <td
          class="w-full lg:w-auto py-3 pl-20 xs:pl-0 border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
          >候餐單號</span>
          18
        </td>
        <td
          class="w-full lg:w-auto py-3 pl-20 xs:pl-0 border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
          >目前單號</span>
          15
        </td>
        <td
          class="w-full lg:w-auto py-3 pl-20 xs:pl-0 border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
          >金額</span>
          180
        </td>
        <td
          class="w-full lg:w-auto py-3 pl-24 sm:pl-10 lg:pl-0 border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
          >訂單明細</span>
          雞米花*1 脆薯*1 炸雞翅*1 甜不辣*1
        </td>
      </tr>
    </tbody>
  </table>
</template>
