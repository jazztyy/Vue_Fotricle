<template>
  <section class="lg:w-2/3 mx-5 rounded-lg shadow-lg bg-thirdcolor-400">
    <header
      class="text-4xl text-center bg-maincolor-200 text-thirdcolor-400 rounded-t-lg py-3 mb-3"
    >行事曆編輯</header>
    <main class="container mx-auto px-5">
      <ul class="flex flex-wrap justify-center lg:justify-start">
        <li class="w-full md:w-4/5 lg:w-1/2 xl:w-1/4 px-2 pb-5" v-for="day of date" :key="day.Id">
          <div class="bg-maincolor-200 rounded-lg px-3 pb-3">
            <div
              class="text-thirdcolor-400 flex items-center text-3xl md:text-4xl lg:text-3xl py-3 px-2"
            >
            <p class="w-2/5 text-center">{{ new Date(day.OpenDate).getMonth() + 1 +'/'+ new Date(day.OpenDate).getDate() }}</p>
              <p class="w-3/5 text-right text-xl">{{  weekDay[new Date(day.OpenDate).getDay()] }}</p>
            </div>
            <div class="px-2 text-xl">
              <select
                class="w-full indent outline-none bg-thirdcolor-400 rounded-lg mb-3 text-2xl md:text-3xl lg:text-2xl"
                name="isOpen"
                id="is__open"
                v-model="day.Status"
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
            <button class="block btn-second py-2 px-3 text-xl mx-auto focus:outline-none" @click.prevent="editCalender(day, day.Id, weekDay[new Date(day.OpenDate).getDay()])">確認行事曆</button>
          </div>
        </li>
      </ul>
    </main>
  </section>
</template>

<script>
export default {
  name: 'BrandCalender',
  data () {
    return {
      date: {},
      today: '',
      weekDay: {
        0: '星期日',
        1: '星期一',
        2: '星期二',
        3: '星期三',
        4: '星期四',
        5: '星期五',
        6: '星期六'
      },
      week: [
        {},
        {},
        {},
        {},
        {},
        {},
        {}
      ]
    }
  },
  mounted () {
    this.getCalender()
  },
  methods: {
    getWeekDay () {
      const now = new Date()
      const month = now.getMonth()
      const year = now.getFullYear()
      const date = now.getDate()
      let nextmonth = month + 1
      let nextdate = date
      nextmonth = (nextmonth > 9) ? ('' + nextmonth) : ('0' + nextmonth)
      nextdate = (nextdate > 9) ? ('' + nextdate) : ('0' + nextdate)
      this.today = year + '/' + nextmonth + '/' + nextdate
      for (let i = 0; i < 7; i++) {
        this.week[i].Date = this.weekDay[new Date(year, month, date + i).getDay()]
        this.week[i].opdate = new Date(year, month + 1, date + i).getFullYear() + '/' + new Date(year, month + 1, date + i).getMonth() + '/' + new Date(year, month + 1, date + i).getDate()
        if (this.date[i]) {
          this.week[i].Id = this.date[i].Id
        }
      }
    },
    checkWeekDay () {
      if (new Date(this.today) > new Date(this.date[6].OpenDate)) {
        this.week.forEach(day => {
          this.resetCalender(day, day.Id)
        })
      }
    },
    getCalender (message, status) {
      this.changeLoading(true)
      const API = `http://fotricle.rocket-coding.com/OpenTime/Get?Id=${localStorage.getItem('id')}`
      this.axios
        .get(API)
        .then((res) => {
          if (res.data.result.open.length === 0) {
            this.getWeekDay()
            this.week.forEach(day => {
              this.addCalender(day)
            })
          } else {
            this.date = res.data.result.open.sort((a, b) => {
              return new Date(a.OpenDate) - new Date(b.OpenDate)
            })
            this.date.forEach(date => {
              date.Location = date.Location.split(' ')[0]
            })
            this.getWeekDay()
            this.checkWeekDay()
            if (message) {
              this.$emit('showAlertAside', message, status)
            }
          }
          this.changeLoading(false)
        })
        .catch((err) => {
          console.log(err)
          this.changeLoading(false)
          this.$emit('showAlertButton', '行事曆載入失敗，請重新載入', 'error', 'reload')
        })
    },
    editCalender (day, id, weekday) {
      this.changeLoading(true)
      this.geocoder = new window.google.maps.Geocoder()
      const API = `http://fotricle.rocket-coding.com/OpenTime/Edit?id=${id}`
      const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      const changeStatus = {
        營業中: '1',
        未營業: '0'
      }
      let lat = ''
      let lng = ''
      let body = {}
      this.geocoder.geocode({ address: day.Location.split(' ')[0] }, (res, status) => {
        if (res.length !== 0) {
          const position = res[0].geometry.location
          lat = position.lat()
          lng = position.lng()
          body = {
            OpenDate: day.OpenDate,
            BrandName: day.BrandName,
            BrandId: day.BrandId,
            Date: weekday,
            Status: changeStatus[day.Status],
            SDateTime: day.OpenDate + ' ' + day.SDateTime,
            EDateTimeDate: day.OpenDate + ' ' + day.EDateTimeDate,
            Location: day.Location.split(' ')[0] + ' ' + lat + ' ' + lng
          }
          this.axios
            .patch(API, body, config)
            .then((res) => {
              this.getCalender('行事曆編輯成功', 'success')
            })
            .catch((err) => {
              console.log(err)
              this.changeLoading(false)
              this.$emit('showAlertButton', '行事曆修改失敗，請重新操作', 'error')
            })
        } else {
          body = {
            OpenDate: day.OpenDate,
            BrandName: day.BrandName,
            BrandId: day.BrandId,
            Date: weekday,
            Status: changeStatus[day.Status],
            SDateTime: day.OpenDate + ' ' + day.SDateTime,
            EDateTimeDate: day.OpenDate + ' ' + day.EDateTimeDate,
            Location: day.Location
          }
          this.axios
            .patch(API, body, config)
            .then((res) => {
              this.getCalender('行事曆編輯成功', 'success')
            })
            .catch((err) => {
              console.log(err)
              this.changeLoading(false)
              this.$emit('showAlertButton', '行事曆修改失敗，請重新操作', 'error')
            })
        }
      })
    },
    resetCalender (date, id) {
      this.changeLoading(true)
      const API = `http://fotricle.rocket-coding.com/OpenTime/Edit?Id=${id}`
      const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      const body = {
        Opendate: date.opdate,
        BrandId: localStorage.getItem('id'),
        Date: date.Date,
        Status: 0,
        SDateTime: `${date.opdate} 00:00`,
        EDateTimeDate: `${date.opdate} 00:00`,
        Location: ''
      }
      this.axios
        .patch(API, body, config)
        .then((res) => {
          this.getCalender('行事曆重置成功', 'success')
        })
        .catch((err) => {
          console.log(err)
          this.resetCalender(date, id)
        })
    },
    addCalender (date) {
      const API = 'http://fotricle.rocket-coding.com/OpenTime/New'
      const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      const body = {
        Opendate: date.opdate,
        BrandId: localStorage.getItem('id'),
        Date: date.Date,
        Status: 0,
        SDateTime: `${date.opdate} 00:00`,
        EDateTimeDate: `${date.opdate} 00:00`,
        Location: ''
      }
      this.axios
        .post(API, body, config)
        .then((res) => {
          this.getCalender()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    changeLoading (status) {
      this.$emit('changeLoading', status)
    }
  }
}
</script>
