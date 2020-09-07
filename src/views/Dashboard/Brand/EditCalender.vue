<template>
  <section class="lg:w-2/3 mx-5 rounded-lg shadow-lg bg-secondcolor-400">
    <header
      class="text-4xl text-center bg-maincolor-400 text-thirdcolor-400 rounded-t-lg py-3 mb-3"
    >行事曆編輯</header>
    <main class="container mx-auto px-5">
      <ul class="flex flex-wrap justify-center lg:justify-start">
        <li class="w-full md:w-4/5 lg:w-1/2 xl:w-1/4 px-2 pb-5">
          <div class="bg-maincolor-400 rounded-lg">
            <div
              class="text-thirdcolor-400 flex items-center text-3xl md:text-4xl lg:text-3xl py-3 px-2"
            >
              <p class="w-3/5 text-left">星期一</p>
              <p class="w-2/5 text-center">9/2</p>
            </div>
            <div class="px-2 text-xl">
              <select
                class="w-full indent outline-none bg-thirdcolor-400 rounded-lg mb-3 text-2xl md:text-3xl lg:text-2xl"
                name="isOpen"
                id="is__open"
              >
                <option value disabled selected>是否營業</option>
                <option value="營業">營業</option>
                <option value="公休">公休</option>
              </select>
              <div class="flex justify-between items-center mb-3 text-2xl md:text-3xl lg:text-2xl">
                <input
                  class="w-10/12 indent outline-none bg-thirdcolor-400 rounded-lg"
                  disabled
                  type="text"
                  placeholder="營業時間"
                />
                <i class="far w-2/12 text-2xl text-center fa-calendar-alt text-thirdcolor-400"></i>
              </div>
              <textarea
                class="w-full indent bg-thirdcolor-400 outline-none rounded-lg mb-3 text-2xl md:text-3xl lg:text-2xl"
                placeholder="營業地點"
                name="營業地點"
                id="openPlace"
                rows="3"
              ></textarea>
            </div>
          </div>
        </li>
        <li class="w-full md:w-4/5 lg:w-1/2 xl:w-1/4 px-2 pb-5">
          <div class="bg-maincolor-400 rounded-lg">
            <div
              class="text-thirdcolor-400 flex items-center text-3xl md:text-4xl lg:text-3xl py-3 px-2"
            >
              <p class="w-3/5 text-left">星期一</p>
              <p class="w-2/5 text-center">9/2</p>
            </div>
            <div class="px-2 text-xl">
              <select
                class="w-full indent outline-none bg-thirdcolor-400 rounded-lg mb-3 text-2xl md:text-3xl lg:text-2xl"
                name="isOpen"
                id="is__open"
              >
                <option value disabled selected>是否營業</option>
                <option value="營業">營業</option>
                <option value="公休">公休</option>
              </select>
              <div class="flex justify-between items-center mb-3 text-2xl md:text-3xl lg:text-2xl">
                <input
                  class="w-10/12 indent outline-none bg-thirdcolor-400 rounded-lg"
                  disabled
                  type="text"
                  placeholder="營業時間"
                />
                <i class="far w-2/12 text-2xl text-center fa-calendar-alt text-thirdcolor-400"></i>
              </div>
              <textarea
                class="w-full indent bg-thirdcolor-400 outline-none rounded-lg mb-3 text-2xl md:text-3xl lg:text-2xl"
                placeholder="營業地點"
                name="營業地點"
                id="openPlace"
                rows="3"
              ></textarea>
            </div>
          </div>
        </li>
        <li class="w-full md:w-4/5 lg:w-1/2 xl:w-1/4 px-2 pb-5">
          <div class="bg-maincolor-400 rounded-lg">
            <div
              class="text-thirdcolor-400 flex items-center text-3xl md:text-4xl lg:text-3xl py-3 px-2"
            >
              <p class="w-3/5 text-left">星期一</p>
              <p class="w-2/5 text-center">9/2</p>
            </div>
            <div class="px-2 text-xl">
              <select
                class="w-full indent outline-none bg-thirdcolor-400 rounded-lg mb-3 text-2xl md:text-3xl lg:text-2xl"
                name="isOpen"
                id="is__open"
              >
                <option value disabled selected>是否營業</option>
                <option value="營業">營業</option>
                <option value="公休">公休</option>
              </select>
              <div class="flex justify-between items-center mb-3 text-2xl md:text-3xl lg:text-2xl">
                <input
                  class="w-10/12 indent outline-none bg-thirdcolor-400 rounded-lg"
                  disabled
                  type="text"
                  placeholder="營業時間"
                />
                <i class="far w-2/12 text-2xl text-center fa-calendar-alt text-thirdcolor-400"></i>
              </div>
              <textarea
                class="w-full indent bg-thirdcolor-400 outline-none rounded-lg mb-3 text-2xl md:text-3xl lg:text-2xl"
                placeholder="營業地點"
                name="營業地點"
                id="openPlace"
                rows="3"
              ></textarea>
            </div>
          </div>
        </li>
        <li class="w-full md:w-4/5 lg:w-1/2 xl:w-1/4 px-2 pb-5">
          <div class="bg-maincolor-400 rounded-lg">
            <div
              class="text-thirdcolor-400 flex items-center text-3xl md:text-4xl lg:text-3xl py-3 px-2"
            >
              <p class="w-3/5 text-left">星期一</p>
              <p class="w-2/5 text-center">9/2</p>
            </div>
            <div class="px-2 text-xl">
              <select
                class="w-full indent outline-none bg-thirdcolor-400 rounded-lg mb-3 text-2xl md:text-3xl lg:text-2xl"
                name="isOpen"
                id="is__open"
              >
                <option value disabled selected>是否營業</option>
                <option value="營業">營業</option>
                <option value="公休">公休</option>
              </select>
              <div class="flex justify-between items-center mb-3 text-2xl md:text-3xl lg:text-2xl">
                <input
                  class="w-10/12 indent outline-none bg-thirdcolor-400 rounded-lg"
                  disabled
                  type="text"
                  placeholder="營業時間"
                />
                <i class="far w-2/12 text-2xl text-center fa-calendar-alt text-thirdcolor-400"></i>
              </div>
              <textarea
                class="w-full indent bg-thirdcolor-400 outline-none rounded-lg mb-3 text-2xl md:text-3xl lg:text-2xl"
                placeholder="營業地點"
                name="營業地點"
                id="openPlace"
                rows="3"
              ></textarea>
            </div>
          </div>
        </li>
        <li class="w-full md:w-4/5 lg:w-1/2 xl:w-1/4 px-2 pb-5">
          <div class="bg-maincolor-400 rounded-lg">
            <div
              class="text-thirdcolor-400 flex items-center text-3xl md:text-4xl lg:text-3xl py-3 px-2"
            >
              <p class="w-3/5 text-left">星期一</p>
              <p class="w-2/5 text-center">9/2</p>
            </div>
            <div class="px-2 text-xl">
              <select
                class="w-full indent outline-none bg-thirdcolor-400 rounded-lg mb-3 text-2xl md:text-3xl lg:text-2xl"
                name="isOpen"
                id="is__open"
              >
                <option value disabled selected>是否營業</option>
                <option value="營業">營業</option>
                <option value="公休">公休</option>
              </select>
              <div class="flex justify-between items-center mb-3 text-2xl md:text-3xl lg:text-2xl">
                <input
                  class="w-10/12 indent outline-none bg-thirdcolor-400 rounded-lg"
                  disabled
                  type="text"
                  placeholder="營業時間"
                />
                <i class="far w-2/12 text-2xl text-center fa-calendar-alt text-thirdcolor-400"></i>
              </div>
              <textarea
                class="w-full indent bg-thirdcolor-400 outline-none rounded-lg mb-3 text-2xl md:text-3xl lg:text-2xl"
                placeholder="營業地點"
                name="營業地點"
                id="openPlace"
                rows="3"
              ></textarea>
            </div>
          </div>
        </li>
        <li class="w-full md:w-4/5 lg:w-1/2 xl:w-1/4 px-2 pb-5">
          <div class="bg-maincolor-400 rounded-lg">
            <div
              class="text-thirdcolor-400 flex items-center text-3xl md:text-4xl lg:text-3xl py-3 px-2"
            >
              <p class="w-3/5 text-left">星期一</p>
              <p class="w-2/5 text-center">9/2</p>
            </div>
            <div class="px-2 text-xl">
              <select
                class="w-full indent outline-none bg-thirdcolor-400 rounded-lg mb-3 text-2xl md:text-3xl lg:text-2xl"
                name="isOpen"
                id="is__open"
              >
                <option value disabled selected>是否營業</option>
                <option value="營業">營業</option>
                <option value="公休">公休</option>
              </select>
              <div class="flex justify-between items-center mb-3 text-2xl md:text-3xl lg:text-2xl">
                <input
                  class="w-10/12 indent outline-none bg-thirdcolor-400 rounded-lg"
                  disabled
                  type="text"
                  placeholder="營業時間"
                />
                <i class="far w-2/12 text-2xl text-center fa-calendar-alt text-thirdcolor-400"></i>
              </div>
              <textarea
                class="w-full indent bg-thirdcolor-400 outline-none rounded-lg mb-3 text-2xl md:text-3xl lg:text-2xl"
                placeholder="營業地點"
                name="營業地點"
                id="openPlace"
                rows="3"
              ></textarea>
            </div>
          </div>
        </li>
        <li class="w-full md:w-4/5 lg:w-1/2 xl:w-1/4 px-2 pb-5">
          <div class="bg-maincolor-400 rounded-lg">
            <div
              class="text-thirdcolor-400 flex items-center text-3xl md:text-4xl lg:text-3xl py-3 px-2"
            >
              <p class="w-3/5 text-left">星期一</p>
              <p class="w-2/5 text-center">9/2</p>
            </div>
            <div class="px-2 text-xl">
              <select
                class="w-full indent outline-none bg-thirdcolor-400 rounded-lg mb-3 text-2xl md:text-3xl lg:text-2xl"
                name="isOpen"
                id="is__open"
              >
                <option value disabled selected>是否營業</option>
                <option value="營業">營業</option>
                <option value="公休">公休</option>
              </select>
              <div class="flex justify-between items-center mb-3 text-2xl md:text-3xl lg:text-2xl">
                <input
                  class="w-10/12 indent outline-none bg-thirdcolor-400 rounded-lg"
                  disabled
                  type="text"
                  placeholder="營業時間"
                />
                <i class="far w-2/12 text-2xl text-center fa-calendar-alt text-thirdcolor-400"></i>
              </div>
              <textarea
                class="w-full indent bg-thirdcolor-400 outline-none rounded-lg mb-3 text-2xl md:text-3xl lg:text-2xl"
                placeholder="營業地點"
                name="營業地點"
                id="openPlace"
                rows="3"
              ></textarea>
            </div>
          </div>
        </li>
      </ul>
    </main>
  </section>
</template>
