<template>
  <section class="lg:w-2/3 mx-5 rounded-lg shadow-lg bg-secondcolor-400">
    <header
      class="text-4xl text-center bg-maincolor-400 text-thirdcolor-400 rounded-t-lg py-3 mb-3"
    >行事曆編輯</header>
    <main class="container mx-auto px-5">
      <ul class="flex flex-wrap justify-center lg:justify-start">
        <li class="w-full md:w-4/5 lg:w-1/2 xl:w-1/4 px-2 pb-5" v-for="day of date" :key="day.Id">
          <div class="bg-maincolor-400 rounded-lg px-3 pb-3">
            <div
              class="text-thirdcolor-400 flex items-center text-3xl md:text-4xl lg:text-3xl py-3 px-2"
            >
              <p class="w-3/5 text-left">{{  weekDay[new Date(day.Date).getDay()] }}</p>
              <p class="w-2/5 text-center">{{ new Date(day.Date).getMonth() + 1 +'/'+ new Date(day.Date).getDate() }}</p>
            </div>
            <div class="px-2 text-xl">
              <select
                class="w-full indent outline-none bg-thirdcolor-400 rounded-lg mb-3 text-2xl md:text-3xl lg:text-2xl"
                name="isOpen"
                id="is__open"
                v-model="day.status"
              >
                <option value='' disabled selected>是否營業</option>
                <option value="營業中">營業中</option>
                <option value="未營業">未營業</option>
              </select>
              <div class="text-2xl md:text-3xl lg:text-2xl">
                <vue-timepicker
                  v-model="day.SDateTime"
                  placeholder="開始時間"
                  manual-input
                  hour-label="時"
                  minute-label="分"
                  :minute-interval='30'
                ></vue-timepicker>
                <vue-timepicker
                  v-model="day.EDateTimeDate"
                  placeholder="結束時間"
                  manual-input
                  hour-label="時"
                  minute-label="分"
                  :minute-interval='30'
                ></vue-timepicker>
              </div>
              <textarea
                class="w-full indent bg-thirdcolor-400 outline-none rounded-lg mb-3 text-2xl md:text-3xl lg:text-2xl"
                placeholder="營業地點"
                name="營業地點"
                id="openPlace"
                rows="3"
                v-model="day.Location"
              ></textarea>
            </div>
            <button class="block btn-second py-2 px-3 text-xl mx-auto focus:outline-none" @click.prevent="editCalender(day, day.id, weekDay[new Date(day.Date).getDay()])">確認行事曆</button>
          </div>
        </li>
      </ul>
    </main>
  </section>
</template>

<script>
export default {
  data () {
    return {
      date: {},
      week: [
        {},
        {},
        {},
        {},
        {},
        {},
        {}
      ],
      weekDay: {
        0: '星期日',
        1: '星期一',
        2: '星期二',
        3: '星期三',
        4: '星期四',
        5: '星期五',
        6: '星期六'
      }
    }
  },
  mounted () {
    this.getCalender()
  },
  methods: {
    getWeekDay (id) {
      const now = new Date()
      const month = now.getMonth()
      const year = now.getFullYear()
      const date = now.getDate()
      for (let i = 0; i <= 6; i++) {
        const day = new Date(year, month, date + i)
        const nextyear = day.getFullYear()
        let nextmonth = day.getMonth() + 1
        let nextdate = day.getDate()
        nextmonth = (nextmonth > 9) ? ('' + nextmonth) : ('0' + nextmonth)
        nextdate = (nextdate > 9) ? ('' + nextdate) : ('0' + nextdate)
        this.week[i].Date = nextyear + '/' + nextmonth + '/' + nextdate
        this.week[i].Id = id[i].id
      }
    },
    checkWeekDay () {
      if (this.date[6].Date < this.week[0].Date) {
        this.week.forEach(day => {
          this.resetCalender(day.Date, day.Id)
        })
      }
    },
    getCalender () {
      const API = `http://fotricle.rocket-coding.com/OpenTime/Get?Id=${localStorage.getItem('id')}`
      this.axios
        .get(API)
        .then((res) => {
          console.log(res)
          this.date = res.data.open
          this.getWeekDay(res.data.open)
          this.checkWeekDay()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    editCalender (day, id, weekday) {
      const API = `http://fotricle.rocket-coding.com/OpenTime/Edit?Id=${id}`
      const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      const changeStatus = {
        營業中: '1',
        未營業: '0'
      }
      const body = {
        OpenDate: day.Date,
        BrandId: day.BrandId,
        Date: weekday,
        Status: changeStatus[day.status],
        SDateTime: day.Date + ' ' + day.SDateTime,
        EDateTimeDate: day.Date + ' ' + day.EDateTimeDate,
        Location: day.Location
      }
      console.log(body)
      this.axios
        .patch(API, body, config)
        .then((res) => {
          console.log(res)
          this.getCalender()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    resetCalender (date, id) {
      const API = `http://fotricle.rocket-coding.com/OpenTime/Edit?Id=${id}`
      const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      const body = {
        OpenDate: date,
        BrandId: localStorage.getItem('id'),
        Date: this.weekDay[new Date(date).getDay()],
        Status: 0,
        SDateTime: `${date} 00:00`,
        EDateTimeDate: `${date} 00:00`,
        Location: ''
      }
      console.log(body)
      this.axios
        .patch(API, body, config)
        .then((res) => {
          console.log(res)
          this.getCalender()
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
