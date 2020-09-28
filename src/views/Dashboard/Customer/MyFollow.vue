<template>
    <section class="lg:w-3/4 mx-5 shadow-lg">
            <div class="bg-thirdcolor-400 rounded-lg">
                <table class="w-full">
                    <thead class=" text-thirdcolor-400 rounded-t-lg">
                        <tr class="bg-maincolor-200">
                            <th class="p-3 text-2xl font-bold uppercase rounded-tl-lg hidden lg:table-cell">
                                餐車名稱</th>
                            <th class="p-3 text-2xl font-bold uppercase  hidden lg:table-cell">
                                是否營業</th>
                            <th class="p-3 text-2xl font-bold uppercase rounded-tr-lg hidden lg:table-cell">店家地址
                            </th>
                        </tr>
                    </thead>
                    <tbody class="text-xl">
                        <tr
                            class=" lg:hover:bg-thirdcolor-600 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap "
                            v-for="brand of myFollowBrand" :key="brand.Id"
                            >
                            <td
                                class="w-full lg:w-auto p-3 text-center border-b border-black block lg:table-cell relative lg:static">
                                <span
                                    class="lg:hidden absolute top-half left-0 transY bg-maincolor-200 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase">餐車名稱</span>
                                {{ brand.BrandName }}
                            </td>
                            <td
                                class="w-full lg:w-auto p-3 border-b text-center border-black  block lg:table-cell relative lg:static">
                                <span
                                    class="lg:hidden absolute top-half left-0 transY bg-maincolor-200 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase">是否營業</span>
                                <span v-if="brand.SDateTime !== brand.EDateTimeDate">營業時間：{{ brand.SDateTime + '-' + brand.EDateTimeDate }}</span>
                                <span v-if="brand.SDateTime === brand.EDateTimeDate">本日公休</span>
                            </td>
                            <td
                                class="w-full lg:w-auto p-3  border-b text-center border-black  block lg:table-cell relative lg:static ">
                                <span
                                    class="lg:hidden absolute top-half left-0 transY bg-maincolor-200 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase">營業地址</span>
                                {{ brand.Location }}
                                <button v-if="brand.Location" class="btn-main ml-5 px-5 py-2">導航</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
</template>

<script>
export default {
  name: 'MyFollow',
  props: ['myFollowBrand']
}
</script>
