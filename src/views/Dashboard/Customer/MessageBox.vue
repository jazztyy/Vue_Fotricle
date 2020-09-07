<template>
    <section class="lg:w-3/4 mx-5 shadow-lg">
            <div class="bg-secondcolor-400 rounded-lg">
                <table class="w-full">
                    <thead class=" text-thirdcolor-400 rounded-t-lg">
                        <tr class="bg-maincolor-400">
                            <th class="p-3 text-2xl font-bold uppercase rounded-tl-lg hidden lg:table-cell">
                                餐車名稱</th>
                            <th class="p-3 text-2xl font-bold uppercase  hidden lg:table-cell">
                                發送時間</th>
                            <th class="p-3 text-2xl font-bold uppercase rounded-tr-lg hidden lg:table-cell">訊息內容
                            </th>
                        </tr>
                    </thead>
                    <tbody class="text-xl">
                        <tr
                            class=" lg:hover:bg-secondcolor-600 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-5 lg:mb-0 ">
                            <td
                                class="w-full lg:w-auto p-3 text-center border-b block lg:table-cell relative lg:static">
                                <span
                                    class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase">餐車名稱</span>
                                龐炸食
                            </td>
                            <td
                                class="w-full lg:w-auto p-3 border-b text-center block lg:table-cell relative lg:static">
                                <span
                                    class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase">發送時間</span>
                                20200822 18:00
                            </td>
                            <td
                                class="w-full lg:w-auto p-3  border-b text-center block lg:table-cell relative lg:static ">
                                <span
                                    class="lg:hidden absolute top-half left-0 transY bg-maincolor-400 text-thirdcolor-400 px-3 py-1 text-lg font-bold uppercase">訊息內容</span>
                                您的訂單 A1234156 已成立
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </section>
</template>
