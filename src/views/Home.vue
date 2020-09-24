<template>
  <div class="home">
    <div class="relative bg-img" style=" background-image: url(http://fotricle.rocket-coding.com:80/Upload/brand/info/20200920103225.jpg);">
        <i class="fas fa-arrow-left text-3xl btn-center text-thirdcolor-500 hover:text-secondcolor-400 pl-5 z-40"
        @click="getOrderList"
        ></i>
        <a class="touch z-30"></a>
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
    <main class="mb-5">
        <section>
            <h3 class="title">尋找附近的餐車美食</h3>
            <div class="relative overflow-hidden">
                <div style="background-image: url(http://fotricle.rocket-coding.com:80/Upload/brand/info/20200924083448.PNG); " class="relative bg-img blur w-full h-767">
                </div>
                <router-link class="btn-main btn-center transX left-half text-3xl px-10 py-5" to="/Search">附近餐車</router-link>
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
                <img class="w-full md:w-1/2" src="http://fotricle.rocket-coding.com:80/Upload/brand/info/20200920103216.jfif" alt="">
            </div>
        </section>
    </main>
  </div>
</template>

<script>

export default {
  created () {
    this.getIdentity()
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(this.success, this.error)
    // } else {
    //   alert('Sorry, 你的裝置不支援地理位置功能。')
    // }
  },
  name: 'Home',
  props: ['brandList'],
  methods: {
    getIdentity () {
      this.$emit('getIdentity')
    },
    getOrderList () {
      this.$emit('getOrderList')
    }
    // error () {
    //   alert('無法取得你的位置')
    // },
    // success (position) {
    //   console.log(position.coords.latitude, position.coords.longitude)
    // }
  }
}
</script>
