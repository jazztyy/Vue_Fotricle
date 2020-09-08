<template>
  <div>
    <Navbar />
    <div
      class="relative bg-img h-96 mb-5"
      style="background-image: url(../img/eaters-collective-ddZYOtZUnBk-unsplash.jpg)"
    >
      <div class="mask"></div>
      <div
        class="w-4/5 absolute z-20 top-60 md:top-half left-half trans-center text-xl rounded-lg text-thirdcolor-400 px-3"
      >
        <div class="relative">
            <div class="background-mask bg-maincolor-400"></div>
            <button
              class="outline-none rounded-lg w-full bg-transparent relative z-10 text-left indent"
            > 分類標籤：</button>
        </div>
      </div>
      <ul
        class="absolute z-20 w-4/5 top-30 md:top-40 left-half trans-center flex flex-wrap justify-around text-xl rounded-lg py-5 text-thirdcolor-400"
      >
        <li class="w-full mb-3 md:mb-0 md:w-1/4 px-3">
          <div class="relative">
            <div class="background-mask bg-maincolor-400"></div>
            <select
              class="outline-none rounded-lg w-full bg-transparent relative z-10 indent"
              name="追蹤"
              id="follow"
            >
              <option class="border-none" value disabled selected>是否追蹤</option>
              <option value="已追蹤">已追蹤</option>
              <option value="未追蹤">未追蹤</option>
              <option value="所有餐車">所有餐車</option>
            </select>
          </div>
        </li>
        <li class="w-full mb-3 md:mb-0 md:w-1/4 px-3">
          <div class="relative">
            <div class="background-mask bg-maincolor-400"></div>
            <select
              class="outline-none rounded-lg w-full bg-transparent relative z-10 indent"
              name="評分"
              id="score"
            >
              <option class="border-none" value disabled selected>選擇評分</option>
              <option value="由高到低">由高到低</option>
              <option value="由低到高">由低到高</option>
            </select>
          </div>
        </li>
        <li class="w-full mb-3 md:mb-0 md:w-1/4 px-3">
          <div class="relative">
            <div class="background-mask bg-maincolor-400"></div>
            <select
              class="outline-none rounded-lg w-full bg-transparent relative z-10 indent"
              name="營業"
              id="isOpen"
            >
              <option value disabled selected>店家狀態</option>
              <option value="營業中">營業中</option>
              <option value="未營業">未營業</option>
              <option value="所有餐車">所有餐車</option>
            </select>
          </div>
        </li>
        <li class="w-full mb-3 md:mb-0 md:w-1/4 px-3">
          <div class="relative">
            <div class="background-mask bg-maincolor-400"></div>
            <select
              class="outline-none rounded-lg w-full bg-transparent relative z-10 indent"
              name="距離"
              id="distance"
            >
              <option value disabled selected>距離</option>
              <option value="一公里內">一公里內</option>
              <option value="三公里內">三公里內</option>
              <option value="五公里內">五公里內</option>
            </select>
          </div>
        </li>
      </ul>
    </div>
    <main class="container mx-auto">
      <ul class="flex mb-3 text-xl px-3">
        <li>
          <button class="focus:outline-none px-3 py-2 mr-5"
          :class="{ 'btn-main': !isMap, 'btn-second': isMap }"
          @click="isMap = true"
          >地圖模式</button>
        </li>
        <li>
          <button class="focus:outline-none px-3 py-2"
          :class="{ 'btn-main': isMap, 'btn-second': !isMap }"
          @click="isMap = false"
          >列表模式</button>
        </li>
      </ul>
      <section v-show="!isMap">
        <ul class="flex flex-col md:flex-row md:flex-wrap">
          <li class="md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 px-3 hover:item-scale">
            <div class="shadow-xl rounded-lg">
              <div class="relative">
                <router-link class="mask rounded-t-lg opacity-0 hover:opacity-50 flex justify-center items-center text-white" to="/BrandDetail">前往餐車頁面</router-link>
                <img class="rounded-t-lg" src="/img/alex-munsell-Yr4n8O_3UPc-unsplash.jpg" alt />
              </div>
              <div class="p-5">
                <div class="flex justify-between lg:flex-col lg:items-start items-center mb-2">
                  <div class="w-full flex justify-between items-center">
                    <h2 class="text-4xl font-semibold mb-2">龐炸食</h2>
                    <button class="btn-main p-3">導航前往</button>
                  </div>
                  <div>
                    <i class="fas fa-star text-secondcolor-500 text-2xl"></i>
                    <i class="fas fa-star text-secondcolor-500 text-2xl"></i>
                    <i class="fas fa-star text-secondcolor-500 text-2xl"></i>
                    <i class="fas fa-star text-secondcolor-500 text-2xl"></i>
                    <i class="fas fa-star text-secondcolor-500 text-2xl"></i>
                  </div>
                </div>
                <p class="text-2xl md:text-2xl lg:text-base mb-1">是該來吃個雞米花，也可以來聊個天，不一樣的炸物，錯過就可惜了！</p>
              </div>
            </div>
          </li>
          <li class="md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 px-3 hover:item-scale">
            <div class="shadow-xl rounded-lg">
              <div class="relative">
                <router-link class="mask rounded-t-lg opacity-0 hover:opacity-50 flex justify-center items-center text-white" to="/BrandDetail">前往餐車頁面</router-link>
                <img class="rounded-t-lg" src="/img/alex-munsell-Yr4n8O_3UPc-unsplash.jpg" alt />
              </div>
              <div class="p-5">
                <div class="flex justify-between lg:flex-col lg:items-start items-center mb-2">
                  <div class="w-full flex justify-between items-center">
                    <h2 class="text-4xl font-semibold mb-2">龐炸食</h2>
                    <button class="btn-main p-3">導航前往</button>
                  </div>
                  <div>
                    <i class="fas fa-star text-secondcolor-500 text-2xl"></i>
                    <i class="fas fa-star text-secondcolor-500 text-2xl"></i>
                    <i class="fas fa-star text-secondcolor-500 text-2xl"></i>
                    <i class="fas fa-star text-secondcolor-500 text-2xl"></i>
                    <i class="fas fa-star text-secondcolor-500 text-2xl"></i>
                  </div>
                </div>
                <p class="text-2xl md:text-2xl lg:text-base mb-1">是該來吃個雞米花，也可以來聊個天，不一樣的炸物，錯過就可惜了！</p>
              </div>
            </div>
          </li>
          <li class="md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 px-3 hover:item-scale">
            <div class="shadow-xl rounded-lg">
              <div class="relative">
                <router-link class="mask rounded-t-lg opacity-0 hover:opacity-50 flex justify-center items-center text-white" to="/BrandDetail">前往餐車頁面</router-link>
                <img class="rounded-t-lg" src="/img/alex-munsell-Yr4n8O_3UPc-unsplash.jpg" alt />
              </div>
              <div class="p-5">
                <div class="flex justify-between lg:flex-col lg:items-start items-center mb-2">
                  <div class="w-full flex justify-between items-center">
                    <h2 class="text-4xl font-semibold mb-2">龐炸食</h2>
                    <button class="btn-main p-3">導航前往</button>
                  </div>
                  <div>
                    <i class="fas fa-star text-secondcolor-500 text-2xl"></i>
                    <i class="fas fa-star text-secondcolor-500 text-2xl"></i>
                    <i class="fas fa-star text-secondcolor-500 text-2xl"></i>
                    <i class="fas fa-star text-secondcolor-500 text-2xl"></i>
                    <i class="fas fa-star text-secondcolor-500 text-2xl"></i>
                  </div>
                </div>
                <p class="text-2xl md:text-2xl lg:text-base mb-1">是該來吃個雞米花，也可以來聊個天，不一樣的炸物，錯過就可惜了！</p>
              </div>
            </div>
          </li>
          <li class="md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 px-3 hover:item-scale">
            <div class="shadow-xl rounded-lg">
              <div class="relative">
                <router-link class="mask rounded-t-lg opacity-0 hover:opacity-50 flex justify-center items-center text-white" to="/BrandDetail">前往餐車頁面</router-link>
                <img class="rounded-t-lg" src="/img/alex-munsell-Yr4n8O_3UPc-unsplash.jpg" alt />
              </div>
              <div class="p-5">
                <div class="flex justify-between lg:flex-col lg:items-start items-center mb-2">
                  <div class="w-full flex justify-between items-center">
                    <h2 class="text-4xl font-semibold mb-2">龐炸食</h2>
                    <button class="btn-main p-3">導航前往</button>
                  </div>
                  <div>
                    <i class="fas fa-star text-secondcolor-500 text-2xl"></i>
                    <i class="fas fa-star text-secondcolor-500 text-2xl"></i>
                    <i class="fas fa-star text-secondcolor-500 text-2xl"></i>
                    <i class="fas fa-star text-secondcolor-500 text-2xl"></i>
                    <i class="fas fa-star text-secondcolor-500 text-2xl"></i>
                  </div>
                </div>
                <p class="text-2xl md:text-2xl lg:text-base mb-1">是該來吃個雞米花，也可以來聊個天，不一樣的炸物，錯過就可惜了！</p>
              </div>
            </div>
          </li>
          <li class="md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 px-3 hover:item-scale">
            <div class="shadow-xl rounded-lg">
              <div class="relative">
                <router-link class="mask rounded-t-lg opacity-0 hover:opacity-50 flex justify-center items-center text-white" to="/BrandDetail">前往餐車頁面</router-link>
                <img class="rounded-t-lg" src="/img/alex-munsell-Yr4n8O_3UPc-unsplash.jpg" alt />
              </div>
              <div class="p-5">
                <div class="flex justify-between lg:flex-col lg:items-start items-center mb-2">
                  <div class="w-full flex justify-between items-center">
                    <h2 class="text-4xl font-semibold mb-2">龐炸食</h2>
                    <button class="btn-main p-3">導航前往</button>
                  </div>
                  <div>
                    <i class="fas fa-star text-secondcolor-500 text-2xl"></i>
                    <i class="fas fa-star text-secondcolor-500 text-2xl"></i>
                    <i class="fas fa-star text-secondcolor-500 text-2xl"></i>
                    <i class="fas fa-star text-secondcolor-500 text-2xl"></i>
                    <i class="fas fa-star text-secondcolor-500 text-2xl"></i>
                  </div>
                </div>
                <p class="text-2xl md:text-2xl lg:text-base mb-1">是該來吃個雞米花，也可以來聊個天，不一樣的炸物，錯過就可惜了！</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section v-show="isMap" class="px-3 pb-3">
        <iframe
          class="w-full h-767"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14733.403778310749!2d120.3044352!3d22.603366400000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1szh-TW!2stw!4v1599200359968!5m2!1szh-TW!2stw"
          frameborder="0"
          style="border:0;"
          allowfullscreen
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default {
  data () {
    return {
      isMap: true
    }
  },
  name: 'Search',
  components: {
    Navbar,
    Footer
  }
}
</script>
