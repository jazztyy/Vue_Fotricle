<template>
  <table class="w-full">
    <thead>
      <tr>
        <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">訂單時間</th>
        <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">餐車名稱</th>
        <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">訂單明細</th>
        <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">驗證碼</th>
        <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">金額</th>
      </tr>
    </thead>
    <tbody class="text-xl">
      <tr
        class="lg:hover:bg-secondcolor-600 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-5 lg:mb-0"
        v-for="order of OrderCofirmList" :key="order.Id"
      >
        <td
          class="w-full lg:w-auto p-3 text-center border-b block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
          >訂單時間</span>
          {{ new Date(order.OrderDetails[0].InitDate).getFullYear() + '-' + (new Date(order.OrderDetails[0].InitDate).getMonth() + 1) + '-' + new Date(order.OrderDetails[0].InitDate).getDate() + ' ' + ((new Date(order.OrderDetails[0].InitDate).getHours() > 9 ) ? ('' + new Date(order.OrderDetails[0].InitDate).getHours()) : ('0' + new Date(order.OrderDetails[0].InitDate).getHours())) + ':' + ((new Date(order.OrderDetails[0].InitDate).getMinutes() > 9 ) ? ('' + new Date(order.OrderDetails[0].InitDate).getMinutes()) : ('0' + new Date(order.OrderDetails[0].InitDate).getMinutes())) }}
        </td>
        <td
          class="w-full lg:w-auto p-3 border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
          >餐車名稱</span>
          {{ order.brandName }}
        </td>
        <td
          class="w-full lg:w-auto p-3 border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
          >訂單明細</span>
          <span
                class="pr-3"
                v-for="(item, i) of order.OrderDetails"
                :key="i"
              >{{ item.ProductName + ' ' + item.ProductUnit + ' ' + '份' }}</span>
        </td>
        <td
          class="w-full lg:w-auto p-3 border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
          >驗證碼</span>
          {{ order.LinepayVer }}
        </td>
        <td
          class="w-full lg:w-auto p-3 border-b text-center block lg:table-cell relative lg:static"
        >
          <span
            class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
          >金額</span>
          {{ order.Total }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ['OrderCofirmList']
}
</script>
