<template>
  <table class="w-full rounded-b-lg">
    <thead>
      <tr>
        <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell ">訂單編號</th>
        <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">餐車名稱</th>
        <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">訂單明細</th>
        <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">取消原因</th>
      </tr>
    </thead>
    <tbody class="text-xl">
      <tr
        class="lg:hover:bg-secondcolor-600 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-5 lg:mb-0"
        v-for="order of OrderFailList" :key="order.Id"
      >
        <td
          class="w-full lg:w-auto p-3 text-center border-b block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-half left-0 transY bg-maincolor-200 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
          >訂單編號</span>
          {{ order.Id }}
        </td>
        <td
          class="w-full lg:w-auto p-3 border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-half left-0 transY bg-maincolor-200 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
          >餐車名稱</span>
          {{ order.brandName }}
        </td>
        <td
          class="w-full lg:w-auto p-3 border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-half left-0 transY bg-maincolor-200 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
          >訂單明細</span>
          <span
                class="pr-3"
                v-for="(item, i) of order.OrderDetails"
                :key="i"
              >{{ item.ProductName + '*' + item.ProductUnit }}</span>
        </td>
        <td
          class="w-full lg:w-auto p-3 border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-half left-0 transY bg-maincolor-200 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
          >失敗原因</span>
          {{ order.Remark2 }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ['OrderFailList']
}
</script>
