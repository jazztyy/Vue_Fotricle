<template>
  <div>
    <main class="keep-footer-bottom flex flex-col justify-evenly lg:items-start">
      <div class="container mx-auto py-5 px-5">
        <ul class="md:flex justify-between items-center">
          <li class="flex text-center mb-5 md:mb-0">
            <div class="btn-second w-1/2 px-5 mr-5">
              <p class="text-xl text-black font-medium">目前單號</p>
              <p class="text-4xl">15</p>
            </div>
            <div class="btn-second w-1/2 px-5">
              <p class="text-xl text-black font-medium">全部單號</p>
              <p class="text-4xl">20</p>
            </div>
          </li>
          <li class="md:flex">
            <router-link
              class="block btn-second mb-5 md:mr-5 md:mb-0 p-5 text-3xl"
              to="/Brand/Order/List"
            >候餐列表</router-link>
            <router-link
              class="block btn-second mb-5 md:mr-5 md:mb-0 p-5 text-3xl"
              to="/Brand/Order/Online"
            >網站訂單</router-link>
          </li>
        </ul>
      </div>
      <section class="w-full px-5 mb-5">
        <main class="container mx-auto rounded-lg bg-gray-500 shadow-lg">
          <ul class="flex flex-wrap justify-center items-center">
            <li class="w-full md:w-1/3 flex md:flex-col items-center p-3">
              <div class="w-full text-center text-4xl bg-secondcolor-400 rounded-lg px-2 py-8">雞米花</div>
            </li>
            <li class="w-full md:w-1/3 flex md:flex-col items-center p-3">
              <div class="w-full text-center text-4xl bg-secondcolor-400 rounded-lg px-2 py-8">雞米花</div>
            </li>
            <li class="w-full md:w-1/3 flex md:flex-col items-center p-3">
              <div class="w-full text-center text-4xl bg-secondcolor-400 rounded-lg px-2 py-8">雞米花</div>
            </li>
            <li class="w-full md:w-1/3 flex md:flex-col items-center p-3">
              <div class="w-full text-center text-4xl bg-secondcolor-400 rounded-lg px-2 py-8">雞米花</div>
            </li>
            <li class="w-full md:w-1/3 flex md:flex-col items-center p-3">
              <div class="w-full text-center text-4xl bg-secondcolor-400 rounded-lg px-2 py-8">雞米花</div>
            </li>
            <li class="w-full md:w-1/3 flex md:flex-col items-center p-3">
              <div class="w-full text-center text-4xl bg-secondcolor-400 rounded-lg px-2 py-8">雞米花</div>
            </li>
            <li class="w-full md:w-1/3 flex md:flex-col items-center p-3">
              <div class="w-full text-center text-4xl bg-secondcolor-400 rounded-lg px-2 py-8">雞米花</div>
            </li>
            <li class="w-full md:w-1/3 flex md:flex-col items-center p-3">
              <div class="w-full text-center text-4xl bg-secondcolor-400 rounded-lg px-2 py-8">雞米花</div>
            </li>
            <li class="w-full md:w-1/3 flex md:flex-col items-center p-3">
              <div class="w-full text-center text-4xl bg-secondcolor-400 rounded-lg px-2 py-8">雞米花</div>
            </li>
          </ul>
        </main>
      </section>
      <section class="w-full px-5 relative mb-10">
        <h3 class="container mx-auto text-center text-4xl bg-gray-500 rounded-t-lg py-2">訂單明細</h3>
        <div class="container mx-auto max-h-1/5 overflow-y-auto relative">
          <table class="w-full bg-gray-500 sticky top-0">
            <thead class="bg-maincolor-400 text-thirdcolor-400">
              <tr>
                <th class="p-3 text-2xl font-bold uppercase lg:table-cell">產品名稱</th>
                <th class="p-3 text-2xl font-bold uppercase lg:table-cell">金額</th>
                <th class="p-3 text-2xl font-bold uppercase lg:table-cell">數量</th>
                <th class="p-3 text-2xl font-bold uppercase lg:table-cell">編輯</th>
              </tr>
            </thead>
            <tbody class="text-2xl">
              <tr class="table-row mb-5 lg:mb-0">
                <td class="w-auto p-3 text-center border-b table-cell">雞米花</td>
                <td class="w-auto p-3 border-b text-center table-cell">60</td>
                <td class="w-auto p-3 border-b text-center table-cell">
                  <div class="flex justify-between items-center">
                    <i class="fas fa-plus cursor-pointer text-3xl text-secondcolor-400"></i>
                    1
                    <i
                      class="fas fa-minus cursor-pointer text-3xl text-red-600"
                    ></i>
                  </div>
                </td>
                <td class="w-auto p-3 border-b text-center table-cell">
                  <button class="btn-second bg-red-600 py-3 px-5">刪除</button>
                </td>
              </tr>
              <tr class="table-row mb-5 lg:mb-0">
                <td class="w-auto p-3 text-center border-b table-cell">雞米花</td>
                <td class="w-auto p-3 border-b text-center table-cell">60</td>
                <td class="w-auto p-3 border-b text-center table-cell">
                  <div class="flex justify-between items-center">
                    <i class="fas fa-plus cursor-pointer text-3xl text-secondcolor-400"></i>
                    1
                    <i
                      class="fas fa-minus cursor-pointer text-3xl text-red-600"
                    ></i>
                  </div>
                </td>
                <td class="w-auto p-3 border-b text-center table-cell">
                  <button class="btn-second bg-red-600 py-3 px-5">刪除</button>
                </td>
              </tr>
              <tr class="table-row mb-5 lg:mb-0">
                <td class="w-auto p-3 text-center border-b table-cell">雞米花</td>
                <td class="w-auto p-3 border-b text-center table-cell">60</td>
                <td class="w-auto p-3 border-b text-center table-cell">
                  <div class="flex justify-between items-center">
                    <i class="fas fa-plus cursor-pointer text-3xl text-secondcolor-400"></i>
                    1
                    <i
                      class="fas fa-minus cursor-pointer text-3xl text-red-600"
                    ></i>
                  </div>
                </td>
                <td class="w-auto p-3 border-b text-center table-cell">
                  <button class="btn-second bg-red-600 py-3 px-5">刪除</button>
                </td>
              </tr>
              <tr class="table-row mb-5 lg:mb-0">
                <td class="w-auto p-3 text-center border-b table-cell">雞米花</td>
                <td class="w-auto p-3 border-b text-center table-cell">60</td>
                <td class="w-auto p-3 border-b text-center table-cell">
                  <div class="flex justify-between items-center">
                    <i class="fas fa-plus cursor-pointer text-3xl text-secondcolor-400"></i>
                    1
                    <i
                      class="fas fa-minus cursor-pointer text-3xl text-red-600"
                    ></i>
                  </div>
                </td>
                <td class="w-auto p-3 border-b text-center table-cell">
                  <button class="btn-second bg-red-600 py-3 px-5">刪除</button>
                </td>
              </tr>
              <tr class="table-row mb-5 lg:mb-0">
                <td class="w-auto p-3 text-center border-b table-cell">雞米花</td>
                <td class="w-auto p-3 border-b text-center table-cell">60</td>
                <td class="w-auto p-3 border-b text-center table-cell">
                  <div class="flex justify-between items-center">
                    <i class="fas fa-plus cursor-pointer text-3xl text-secondcolor-400"></i>
                    1
                    <i
                      class="fas fa-minus cursor-pointer text-3xl text-red-600"
                    ></i>
                  </div>
                </td>
                <td class="w-auto p-3 border-b text-center table-cell">
                  <button class="btn-second bg-red-600 py-3 px-5">刪除</button>
                </td>
              </tr>
              <tr class="table-row mb-5 lg:mb-0">
                <td class="w-auto p-3 text-center border-b table-cell">雞米花</td>
                <td class="w-auto p-3 border-b text-center table-cell">60</td>
                <td class="w-auto p-3 border-b text-center table-cell">
                  <div class="flex justify-between items-center">
                    <i class="fas fa-plus cursor-pointer text-3xl text-secondcolor-400"></i>
                    1
                    <i
                      class="fas fa-minus cursor-pointer text-3xl text-red-600"
                    ></i>
                  </div>
                </td>
                <td class="w-auto p-3 border-b text-center table-cell">
                  <button class="btn-second bg-red-600 py-3 px-5">刪除</button>
                </td>
              </tr>
              <tr class="table-row mb-5 lg:mb-0">
                <td class="w-auto p-3 text-center border-b table-cell">雞米花</td>
                <td class="w-auto p-3 border-b text-center table-cell">60</td>
                <td class="w-auto p-3 border-b text-center table-cell">
                  <div class="flex justify-between items-center">
                    <i class="fas fa-plus cursor-pointer text-3xl text-secondcolor-400"></i>
                    1
                    <i
                      class="fas fa-minus cursor-pointer text-3xl text-red-600"
                    ></i>
                  </div>
                </td>
                <td class="w-auto p-3 border-b text-center table-cell">
                  <button class="btn-second bg-red-600 py-3 px-5">刪除</button>
                </td>
              </tr>
            </tbody>
          </table>
          <button class="w-full btn-second py-5 rounded-t-none text-2xl">確認訂單</button>
        </div>
      </section>
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'BrandOrder',
  components: {},
  data () {
    return {
      whichPage: ''
    }
  }
}
</script>
