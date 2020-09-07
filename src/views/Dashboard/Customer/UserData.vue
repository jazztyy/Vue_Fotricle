<template>
    <section class="lg:w-3/4 mx-5  bg-secondcolor-400 rounded-lg shadow-lg">
            <header class="bg-maincolor-400 text-thirdcolor-400 rounded-t-lg">
                <p class="text-center text-4xl">個人資料</p>
            </header>
            <main class="flex p-5">
                <div class="w-1/3 flex flex-col justify-center">
                    <img class="rounded-lg mb-5 " src="/img/女媧01.jpg" alt="">
                    <button class="btn-main p-1 text-xl">上傳照片</button>
                </div>
                <form class="w-2/3 pl-5 text-2xl flex-col flex " action="">
                    <input class="mb-5 outline-none w-full rounded-lg indent" type="text" name="用戶名" placeholder="請輸入用戶名">
                    <input class="mb-5 outline-none w-full rounded-lg indent" type="tel" name="電話" placeholder="請輸入電話">
                    <select class="mb-5 outline-none w-full rounded-lg indent" name="性別" id="">
                        <option value="" disabled selected>選擇性別</option>
                        <option value="男">男</option>
                        <option value="女">女</option>
                        <option value="其他">其他</option>
                    </select>
                    <select class="mb-5 outline-none w-full rounded-lg indent" name="年齡" id="">
                        <option value="" disabled selected>選擇年齡</option>
                        <option value="18 以下">18 以下</option>
                        <option value="18-24">18-24</option>
                        <option value="25-34">25-34</option>
                        <option value="35-44">35-44</option>
                        <option value="45-54">45-54</option>
                        <option value="55-64">55-64</option>
                        <option value="64 以上">64 以上</option>
                    </select>
                </form>
            </main>
        </section>
</template>
