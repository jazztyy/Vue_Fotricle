<template>
  <section class="lg:w-3/4 mx-auto rounded-lg">
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
          to="/Brand/Order/Online"
        >網站訂單</router-link>
      </li>
    </ul>
    <div class="bg-secondcolor-400 rounded-lg flex flex-col shadow-lg">
      <table class="w-full mb-5 rounded-t-lg">
        <thead class="bg-maincolor-400 text-thirdcolor-400">
          <tr>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell rounded-tl-lg">單號</th>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">訂單編號</th>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">金額</th>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">來源</th>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">驗證碼</th>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell">訂單內容</th>
            <th class="p-3 text-2xl font-bold uppercase hidden lg:table-cell rounded-tr-lg"></th>
          </tr>
        </thead>
        <tbody class="text-xl">
          <tr class="flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-5 lg:mb-0">
            <td
              class="w-full lg:w-auto p-3 text-center border-b block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase"
              >單號</span>
              <p
                class="mx-auto order-button w-20 h-20 bg-green-700 hover:bg-green-800 text-center text-3xl py-4"
              >1</p>
            </td>
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
              >來源</span>
              網站
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
              <button class="btn-main px-8 py-2">完成</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
