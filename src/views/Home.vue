<template>
  <div class="home">
    <navbar/>
    <div class="relative bg-img" style="background-image: url(/img/tamas-munkacsi-1_10VeQ_sEI-unsplash.jpg)">
        <i class="fas fa-arrow-left text-3xl btn-center text-thirdcolor-500 hover:text-secondcolor-400 pl-5 z-40"></i>
        <a href="#" class="touch z-30"></a>
        <div class="mask"></div>
        <div class="flex flex-row-reverse justify-center py-10 h-full relative z-20">
            <h2 class="text-thirdcolor-500 rl text-5xl self-start">龐炸食</h2>
            <p class="text-thirdcolor-400 rl px-1 text-xl">只要沒死，就只是輕傷。</p>
            <p class="text-thirdcolor-400 rl px-1 text-xl">這是老闆一直秉持的精神，為了給顧客吃到好吃又無添加的食品。</p>
            <p class="text-thirdcolor-400 rl px-1 text-xl">花了無數時間與精力，就為了研發出讓客人滿意的作品。</p>
        </div>
        <i
            class="fas fa-arrow-right text-3xl btn-center right-0 text-thirdcolor-500 hover:text-secondcolor-400 pr-5 z-40"></i>
    </div>
    <main>
        <section>
            <h3 class="title">尋找附近的餐車美食</h3>
            <div class="relative overflow-hidden">
                <div style="background-image: url(/img/地圖.PNG); " class="relative bg-img blur w-full h-767">
                </div>
                <a href="cartMap.html" class="outline-none btn-main btn-center transX left-half text-3xl px-10 py-5">附近餐車</a>
            </div>
        </section>
        <section>
            <h3 class="title">這是我們的故事</h3>
            <div class="flex flex-col-reverse md:flex-row justify-between ">
                <div class="w-full flex flex-col px-5 md:w-1/2 md:px-10">
                    <h2 class="self-start py-3 text-center text-5xl text-maincolor-400 ">Fotricle</h2>
                    <p class=" md:pb-3 text-2xl text-maincolor-400">由食物及三輪車的英文 Food 及 Tricycle
                        組合而成，想藉由大家的力量，將餐車的文化一步一步，推廣到台灣的各處，讓所有人都能享受到不同於夜市或餐廳，獨特的風味。</p>
                </div>
                <img class="w-full md:w-1/2" src="../../public/img/adam-lee-58mqS3HGHZo-unsplash.jpg" alt="">
            </div>
        </section>
        <section class="container mx-auto px-5 flex flex-col justify-center">
            <h3 class="title">這是你故事的起點</h3>
            <ul class="flex flex-col md:flex-row md:flex-wrap justify-between">
                <li class="md:w-48/100 lg:w-23/100 rounded-lg shadow-xl mb-4 ">
                    <div class="relative">
                        <a href="#"
                            class="mask rounded-t-lg opacity-0 hover:opacity-50 flex justify-center items-center text-white ">點往餐車頁面</a>
                        <img class="rounded-t-lg " src="../../public/img/alex-munsell-Yr4n8O_3UPc-unsplash.jpg" alt="">
                    </div>
                    <div class="p-5">
                        <div class="flex justify-between lg:flex-col lg:items-start items-center mb-2">
                            <h2 class="text-4xl font-semibold mb-2">龐炸食</h2>
                            <div>
                                <i class="fas fa-star text-secondcolor-500  text-2xl"></i>
                                <i class="fas fa-star text-secondcolor-500  text-2xl"></i>
                                <i class="fas fa-star text-secondcolor-500  text-2xl"></i>
                                <i class="fas fa-star text-secondcolor-500  text-2xl"></i>
                                <i class="fas fa-star text-secondcolor-500  text-2xl"></i>
                            </div>
                        </div>
                        <p class="text-2xl md:text-2xl lg:text-base mb-1">是該來吃個雞米花，也可以來聊個天，不一樣的炸物，錯過就可惜了！</p>
                    </div>
                </li>
                <li class="md:w-48/100 lg:w-23/100 rounded-lg shadow-xl mb-4 ">
                    <div class="relative">
                        <a href="#"
                            class="mask rounded-t-lg opacity-0 hover:opacity-50 flex justify-center items-center text-white ">點往餐車頁面</a>
                        <img class="rounded-t-lg " src="../../public/img/alex-munsell-Yr4n8O_3UPc-unsplash.jpg" alt="">
                    </div>
                    <div class="p-5">
                        <div class="flex justify-between lg:flex-col lg:items-start items-center mb-2">
                            <h2 class="text-4xl font-semibold mb-2">龐炸食</h2>
                            <div>
                                <i class="fas fa-star text-secondcolor-500  text-2xl"></i>
                                <i class="fas fa-star text-secondcolor-500  text-2xl"></i>
                                <i class="fas fa-star text-secondcolor-500  text-2xl"></i>
                                <i class="fas fa-star text-secondcolor-500  text-2xl"></i>
                                <i class="fas fa-star text-secondcolor-500  text-2xl"></i>
                            </div>
                        </div>
                        <p class="text-2xl md:text-2xl lg:text-base mb-1">是該來吃個雞米花，也可以來聊個天，不一樣的炸物，錯過就可惜了！</p>
                    </div>
                </li>
                <li class="md:w-48/100 lg:w-23/100 rounded-lg shadow-xl mb-4 ">
                    <div class="relative">
                        <a href="#"
                            class="mask rounded-t-lg opacity-0 hover:opacity-50 flex justify-center items-center text-white ">點往餐車頁面</a>
                        <img class="rounded-t-lg " src="../../public/img/alex-munsell-Yr4n8O_3UPc-unsplash.jpg" alt="">
                    </div>
                    <div class="p-5">
                        <div class="flex justify-between lg:flex-col lg:items-start items-center mb-2">
                            <h2 class="text-4xl font-semibold mb-2">龐炸食</h2>
                            <div>
                                <i class="fas fa-star text-secondcolor-500  text-2xl"></i>
                                <i class="fas fa-star text-secondcolor-500  text-2xl"></i>
                                <i class="fas fa-star text-secondcolor-500  text-2xl"></i>
                                <i class="fas fa-star text-secondcolor-500  text-2xl"></i>
                                <i class="fas fa-star text-secondcolor-500  text-2xl"></i>
                            </div>
                        </div>
                        <p class="text-2xl md:text-2xl lg:text-base mb-1">是該來吃個雞米花，也可以來聊個天，不一樣的炸物，錯過就可惜了！</p>
                    </div>
                </li>
                <li class="md:w-48/100 lg:w-23/100 rounded-lg shadow-xl mb-4 ">
                    <div class="relative">
                        <a href="#"
                            class="mask rounded-t-lg opacity-0 hover:opacity-50 flex justify-center items-center text-white ">點往餐車頁面</a>
                        <img class="rounded-t-lg " src="../../public/img/alex-munsell-Yr4n8O_3UPc-unsplash.jpg" alt="">
                    </div>
                    <div class="p-5">
                        <div class="flex justify-between lg:flex-col lg:items-start items-center mb-2">
                            <h2 class="text-4xl font-semibold mb-2">龐炸食</h2>
                            <div>
                                <i class="fas fa-star text-secondcolor-500  text-2xl"></i>
                                <i class="fas fa-star text-secondcolor-500  text-2xl"></i>
                                <i class="fas fa-star text-secondcolor-500  text-2xl"></i>
                                <i class="fas fa-star text-secondcolor-500  text-2xl"></i>
                                <i class="fas fa-star text-secondcolor-500  text-2xl"></i>
                            </div>
                        </div>
                        <p class="text-2xl md:text-2xl lg:text-base mb-1">是該來吃個雞米花，也可以來聊個天，不一樣的炸物，錯過就可惜了！</p>
                    </div>
                </li>
            </ul>
            <button class="btn-main text-2xl px-10 py-2 shadow-xl mb-10">加入我們</button>
        </section>
    </main>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default {
  name: 'Home',
  components: {
    Navbar,
    Footer
  }
}
</script>
