<template>
  <section class="mx-5 rounded-lg">
    <ul class="flex justify-between py-5">
      <li>
        <router-link
          class="block btn-second mb-5 md:mr-5 md:mb-0 p-5 text-3xl"
          to="/Brand/Order/Site"
        >點餐系統</router-link>
      </li>
      <li>
        <router-link
          class="block btn-second mb-5 md:mr-5 md:mb-0 p-5 text-3xl"
          to="/Brand/Order/List"
        >候餐列表</router-link>
      </li>
    </ul>
    <div class="bg-secondcolor-400 rounded-lg flex flex-col shadow-lg">
      <table class="w-full mb-5 rounded-t-lg">
        <thead class="bg-maincolor-400 text-thirdcolor-400">
          <tr>
            <th class="p-3 text-2xl font-bold uppercase rounded-tl-lg hidden lg:table-cell">訂單編號</th>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">金額</th>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">驗證碼</th>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">訂單內容</th>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell rounded-tr-lg"></th>
          </tr>
        </thead>
        <tbody class="text-xl">
          <tr class="flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-5 lg:mb-0">
            <td
              class="w-full lg:w-auto p-3 border-b text-center block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
              >訂單編號</span>
              A1231546
            </td>
            <td
              class="w-full lg:w-auto p-3 border-b text-center block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
              >金額</span>
              150
            </td>
            <td
              class="w-full lg:w-auto p-3 border-b text-center block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
              >驗證碼</span>
              V5467
            </td>
            <td
              class="w-full lg:w-auto p-3 border-b text-center block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
              >訂單內容</span>
              雞米花*1 脆薯*1 炸雞翅*1 甜不辣*1
            </td>
            <td
              class="w-full lg:w-auto p-3 border-b text-center block lg:table-cell relative lg:static"
            >
              <button class="btn-main px-10 py-5 bg-red-600 mr-8">拒絕</button>
              <button class="btn-main px-10 py-5">接受</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
