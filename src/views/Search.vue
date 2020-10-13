<template>
  <div class="">
    <div
      class="relative bg-img h-96 mb-5"
      style="background-image: url(http://fotricle.rocket-coding.com:80/Upload/customer/20200920104620.jpg?Id=undefined);"
    >
      <div class="mask"></div>
      <div
        class="w-4/5 absolute z-20 top-60 md:top-half left-half trans-center text-xl rounded-lg px-3"
      >
        <div class="relative">
          <multiselect
            class="outline-none rounded-lg w-full"
            v-model="tag"
            tag-placeholder="添加新分類"
            placeholder="選擇餐車分類"
            selectLabel='選擇分類'
            deselectLabel='移除標籤'
            selectedLabel='已選擇'
            label="name"
            track-by="code"
            :options="tagGroup"
            :multiple="true"
            :taggable="true"
            @tag="addTag"
            @input="filterBySort(tag)"
          ></multiselect>
        </div>
      </div>
      <ul
        class="absolute z-20 w-4/5 top-30 md:top-30 left-half trans-center flex flex-wrap justify-start text-xl rounded-lg py-5"
      >
        <li class="w-full mb-3 md:mb-0 md:w-1/4 px-3"
        v-if="identity === '顧客'"
        >
            <multiselect
            class="outline-none rounded-lg w-full"
            v-model="follow"
            placeholder="是否追蹤"
            selectLabel=''
            deselectLabel='移除'
            selectedLabel='已選擇'
            :options="followOptions"
            @input="filterByFollow(follow)"
          ></multiselect>
        </li>
        <li class="w-full mb-3 md:mb-0 md:w-1/4 px-3">
            <multiselect
            class="outline-none rounded-lg w-full"
            v-model="suggest"
            placeholder="選擇餐車評分"
            selectLabel='選擇評分'
            deselectLabel='移除'
            selectedLabel='已選擇'
            :options="suggestOptions"
            @input="filterBySuggest(suggest)"
          ></multiselect>
        </li>
        <li class="w-full mb-3 md:mb-0 md:w-1/4 px-3">
            <multiselect
            class="outline-none rounded-lg w-full"
            v-model="open"
            placeholder="選擇餐車狀態"
            selectLabel='選擇狀態'
            deselectLabel='移除'
            selectedLabel='已選擇'
            :options="openOptions"
            @input="filterByStatus(open)"
          ></multiselect>
        </li>
      </ul>
    </div>
    <main class="container mx-auto">
      <div class="ml-3 mb-3">
        <button class="p-3 rounded-lg mr-3"
        :class="{ 'bg-maincolor-100 text-thirdcolor-400' : isMap, 'bg-secondcolor-400 text-black' : !isMap }"
        @click="isMap = false"
        >列表模式</button>
        <button class="p-3 rounded-lg"
        :class="{ 'bg-maincolor-100  text-thirdcolor-400' : !isMap, 'bg-secondcolor-400 text-black' : isMap }"
        @click="isMap = true"
        >地圖模式</button>
      </div>
      <section v-show="!isMap">
        <p class="text-4xl text-center opacity-50 py-16" v-if="!filterBrandList[0]">沒有相符的搜尋結果</p>
        <ul class="flex flex-col items-stretch md:flex-row md:flex-wrap"
        v-if="brandList[0]"
        >
          <li
            class="md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 px-3 hover:item-scale"
            v-for="brand of filterBrandList"
            :key="brand.Id"
          >
            <div class="shadow-xl rounded-lg bg-thirdcolor-300">
              <div class="relative">
                <router-link
                  class="mask rounded-t-lg opacity-0 hover:opacity-50 flex justify-center items-center text-white"
                  @click.native="getBrandId(brand.Id)"
                  to="/BrandDetail"
                >前往餐車頁面</router-link>
                <img class="rounded-t-lg w-full h-64" :src="brand.LogoPhoto" alt="Logo" />
              </div>
              <div class="p-5">
                <div class="flex justify-between lg:flex-col lg:items-start items-center mb-3">
                  <div class="w-full flex justify-between items-center">
                    <h2 class="text-2xl font-semibold mb-2">{{ brand.BrandName }}</h2>
                    <div class="text-lg bg-secondcolor-400 px-2 rounded-lg">{{ brand.Sort }}</div>
                  </div>
                  <div class="w-full">
                    <star-rating
                      v-model="brand.allSuggest"
                      :read-only="true"
                      :fixed-points="2"
                      :increment="0.01"
                      :show-rating="false"
                      :star-size="30"
                      :rounded-corners='true'
                    ></star-rating>
                  </div>
                </div>
                <p class="mb-2 text-xl">營業時間：
                  <span v-if="brand.opentime[0].Status === '營業中'">{{ brand.opentime[0].SDateTime + '-' + brand.opentime[0].EDateTimeDate }}</span>
                  <span v-if="brand.opentime[0].Status === '未營業'">本日公休</span>
                </p>
                <p class="text-2xl md:text-2xl lg:text-base mb-1 text-hidden">{{ brand.BrandStory }}</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section v-show="isMap" id="#map" ref="map" class="h-767 mb-3">
      </section>
    </main>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  name: 'Search',
  components: {
    Multiselect
  },
  data () {
    return {
      filterBrandList: '',
      isMap: true,
      brandId: '',
      brandList: [],
      tag: [],
      test: [],
      tagGroup: [
        { name: '特色小吃', code: '0' },
        { name: '甜點', code: '1' },
        { name: '飲料', code: '2' },
        { name: '主食', code: '3' },
        { name: '炸物', code: '4' },
        { name: '素食', code: '5' },
        { name: '美式', code: '6' },
        { name: '日式', code: '7' },
        { name: '泰式', code: '8' }
      ],
      follow: '',
      followOptions: ['已追蹤', '未追蹤'],
      suggest: '',
      suggestOptions: ['由低到高', '由高到低'],
      open: '',
      openOptions: ['營業中', '未營業'],
      today: '',
      markers: [],
      infowindow: null,
      map: null,
      lat: 0,
      lng: 0,
      directionsService: null,
      directionsDisplay: null,
      isNew: true
    }
  },
  props: ['identity', 'myFollowBrand'],
  created () {
    this.getLocation()
    this.getBrandList()
  },
  watch: {
    filterBrandList () {
      this.setMapMarker()
    }
  },
  methods: {
    setBrandId (brandId) {
      this.$bus.$emit('getBrandId', brandId)
    },
    getBrandId (brandId) {
      this.brandId = brandId
      this.setBrandId(brandId)
    },
    addTag (newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000)
      }
      this.tagGroup.push(tag)
      this.tag.push(tag)
    },
    filterBySort (tag) {
      this.filterBrandList = JSON.parse(JSON.stringify(this.brandList))
      if (this.tag.length !== 0) {
        const filter = []
        this.tag.forEach(tag => {
          this.filterBrandList.forEach(brand => {
            if (tag.name === brand.Sort) {
              filter.push(brand)
            }
          })
        })
        this.filterBrandList = filter
        if (this.open === '營業中') {
          this.filterBrandList = this.filterBrandList.filter(brand => {
            return brand.status === '營業中'
          })
          if (this.follow === '已追蹤') {
            this.filterBrandList = this.filterBrandList.filter(brand => {
              return brand.isFollow === true
            })
          } else if (this.follow === '未追蹤') {
            this.filterBrandList = this.filterBrandList.filter(brand => {
              return brand.isFollow !== true
            })
          }
        } else if (this.open === '未營業') {
          this.filterBrandList = this.filterBrandList.filter(brand => {
            return brand.status !== '營業中'
          })
          if (this.follow === '已追蹤') {
            this.filterBrandList = this.filterBrandList.filter(brand => {
              return brand.isFollow === true
            })
          } else if (this.follow === '未追蹤') {
            this.filterBrandList = this.filterBrandList.filter(brand => {
              return brand.isFollow !== true
            })
          }
        } else if (this.follow === '已追蹤') {
          this.filterBrandList = this.filterBrandList.filter(brand => {
            return brand.isFollow === true
          })
          if (this.open === '營業中') {
            this.filterBrandList = this.filterBrandList.filter(brand => {
              return brand.status === '營業中'
            })
          } else if (this.open === '未營業') {
            this.filterBrandList = this.filterBrandList.filter(brand => {
              return brand.status !== '營業中'
            })
          }
        } else if (this.follow === '未追蹤') {
          this.filterBrandList = this.filterBrandList.filter(brand => {
            return brand.isFollow !== true
          })
          if (this.open === '營業中') {
            this.filterBrandList = this.filterBrandList.filter(brand => {
              return brand.status === '營業中'
            })
          } else if (this.open === '未營業') {
            this.filterBrandList = this.filterBrandList.filter(brand => {
              return brand.status !== '營業中'
            })
          }
        }
      } else {
        if (this.open === '營業中') {
          this.filterBrandList = this.filterBrandList.filter(brand => {
            return brand.status === '營業中'
          })
          if (this.follow === '已追蹤') {
            this.filterBrandList = this.filterBrandList.filter(brand => {
              return brand.isFollow === true
            })
          } else if (this.follow === '未追蹤') {
            this.filterBrandList = this.filterBrandList.filter(brand => {
              return brand.isFollow !== true
            })
          }
        } else if (this.open === '未營業') {
          this.filterBrandList = this.filterBrandList.filter(brand => {
            return brand.status !== '營業中'
          })
          if (this.follow === '已追蹤') {
            this.filterBrandList = this.filterBrandList.filter(brand => {
              return brand.isFollow === true
            })
          } else if (this.follow === '未追蹤') {
            this.filterBrandList = this.filterBrandList.filter(brand => {
              return brand.isFollow !== true
            })
          }
        } else if (this.follow === '已追蹤') {
          this.filterBrandList = this.filterBrandList.filter(brand => {
            return brand.isFollow === true
          })
          if (this.open === '營業中') {
            this.filterBrandList = this.filterBrandList.filter(brand => {
              return brand.status === '營業中'
            })
          } else if (this.open === '未營業') {
            this.filterBrandList = this.filterBrandList.filter(brand => {
              return brand.status !== '營業中'
            })
          }
        } else if (this.follow === '未追蹤') {
          this.filterBrandList = this.filterBrandList.filter(brand => {
            return brand.isFollow !== true
          })
          if (this.open === '營業中') {
            this.filterBrandList = this.filterBrandList.filter(brand => {
              return brand.status === '營業中'
            })
          } else if (this.open === '未營業') {
            this.filterBrandList = this.filterBrandList.filter(brand => {
              return brand.status !== '營業中'
            })
          }
        }
      }
    },
    filterBySuggest (message) {
      if (message === '由低到高') {
        this.filterBrandList.sort((a, b) => {
          return a.allSuggest - b.allSuggest
        })
      } else if (message === '由高到低') {
        this.filterBrandList.sort((a, b) => {
          return b.allSuggest - a.allSuggest
        })
      }
    },
    filterByFollow (message) {
      this.filterBrandList = JSON.parse(JSON.stringify(this.brandList))
      if (message === '已追蹤') {
        this.filterBrandList = this.filterBrandList.filter(brand => {
          return brand.isFollow === true
        })
        if (this.open === '營業中') {
          this.filterBrandList = this.filterBrandList.filter(brand => {
            return brand.status === '營業中'
          })
          if (this.tag.length !== 0) {
            const filter = []
            this.tag.forEach(tag => {
              this.filterBrandList.forEach(brand => {
                if (tag.name === brand.Sort) {
                  filter.push(brand)
                }
              })
            })
            this.filterBrandList = filter
          }
        } else if (this.open === '未營業') {
          this.filterBrandList = this.filterBrandList.filter(brand => {
            return brand.status !== '營業中'
          })
          if (this.tag.length !== 0) {
            const filter = []
            this.tag.forEach(tag => {
              this.filterBrandList.forEach(brand => {
                if (tag.name === brand.Sort) {
                  filter.push(brand)
                }
              })
            })
            this.filterBrandList = filter
          }
        } else if (this.tag.length !== 0) {
          const filter = []
          this.tag.forEach(tag => {
            this.filterBrandList.forEach(brand => {
              if (tag.name === brand.Sort) {
                filter.push(brand)
              }
            })
          })
          this.filterBrandList = filter
        }
      } else if (message === '未追蹤') {
        this.filterBrandList = this.filterBrandList.filter(brand => {
          return brand.isFollow !== true
        })
        if (this.open === '營業中') {
          this.filterBrandList = this.filterBrandList.filter(brand => {
            return brand.status === '營業中'
          })
          if (this.tag.length !== 0) {
            const filter = []
            this.tag.forEach(tag => {
              this.filterBrandList.forEach(brand => {
                if (tag.name === brand.Sort) {
                  filter.push(brand)
                }
              })
            })
            this.filterBrandList = filter
          }
        } else if (this.open === '未營業') {
          this.filterBrandList = this.filterBrandList.filter(brand => {
            return brand.status !== '營業中'
          })
          if (this.tag.length !== 0) {
            const filter = []
            this.tag.forEach(tag => {
              this.filterBrandList.forEach(brand => {
                if (tag.name === brand.Sort) {
                  filter.push(brand)
                }
              })
            })
            this.filterBrandList = filter
          }
        } else if (this.tag.length !== 0) {
          const filter = []
          this.tag.forEach(tag => {
            this.filterBrandList.forEach(brand => {
              if (tag.name === brand.Sort) {
                filter.push(brand)
              }
            })
          })
          this.filterBrandList = filter
        }
      }
    },
    filterByStatus (status) {
      this.filterBrandList = JSON.parse(JSON.stringify(this.brandList))
      if (status === '營業中') {
        this.filterBrandList = this.filterBrandList.filter(brand => {
          return brand.status === '營業中'
        })
        if (this.follow === '已追蹤') {
          this.filterBrandList = this.filterBrandList.filter(brand => {
            return brand.isFollow === true
          })
          if (this.tag.length !== 0) {
            const filter = []
            this.tag.forEach(tag => {
              this.filterBrandList.forEach(brand => {
                if (tag.name === brand.Sort) {
                  filter.push(brand)
                }
              })
            })
            this.filterBrandList = filter
          }
        } else if (this.follow === '未追蹤') {
          this.filterBrandList = this.filterBrandList.filter(brand => {
            return brand.isFollow !== true
          })
          if (this.tag.length !== 0) {
            const filter = []
            this.tag.forEach(tag => {
              this.filterBrandList.forEach(brand => {
                if (tag.name === brand.Sort) {
                  filter.push(brand)
                }
              })
            })
            this.filterBrandList = filter
          }
        } else if (this.tag.length !== 0) {
          const filter = []
          this.tag.forEach(tag => {
            this.filterBrandList.forEach(brand => {
              if (tag.name === brand.Sort) {
                filter.push(brand)
              }
            })
          })
          this.filterBrandList = filter
        }
      } else if (status === '未營業') {
        this.filterBrandList = this.filterBrandList.filter(brand => {
          return brand.status !== '營業中'
        })
        if (this.follow === '已追蹤') {
          this.filterBrandList = this.filterBrandList.filter(brand => {
            return brand.isFollow === true
          })
          if (this.tag.length !== 0) {
            const filter = []
            this.tag.forEach(tag => {
              this.filterBrandList.forEach(brand => {
                if (tag.name === brand.Sort) {
                  filter.push(brand)
                }
              })
            })
            this.filterBrandList = filter
          }
        } else if (this.follow === '未追蹤') {
          this.filterBrandList = this.filterBrandList.filter(brand => {
            return brand.isFollow !== true
          })
          if (this.tag.length !== 0) {
            const filter = []
            this.tag.forEach(tag => {
              this.filterBrandList.forEach(brand => {
                if (tag.name === brand.Sort) {
                  filter.push(brand)
                }
              })
            })
            this.filterBrandList = filter
          }
        } else if (this.tag.length !== 0) {
          const filter = []
          this.tag.forEach(tag => {
            this.filterBrandList.forEach(brand => {
              if (tag.name === brand.Sort) {
                filter.push(brand)
              }
            })
          })
          this.filterBrandList = filter
        }
      } else if (this.tag.length !== 0) {
        const filter = []
        this.tag.forEach(tag => {
          this.filterBrandList.forEach(brand => {
            if (tag.name === brand.Sort) {
              filter.push(brand)
            }
          })
        })
        this.filterBrandList = filter
      }
    },
    getBrandList () {
      this.$emit('changeLoading', true)
      const API = 'http://fotricle.rocket-coding.com/Brand/All'
      this.axios.get(API)
        .then(res => {
          const today = new Date()
          const year = today.getFullYear()
          const month = (today.getMonth() + 1 > 9 ? '' + (today.getMonth() + 1) : '0' + (today.getMonth() + 1))
          const day = (today.getDate() > 9 ? '' + today.getDate() : '0' + today.getDate())
          this.brandList = res.data.brandAll
          this.today = year + '-' + month + '-' + day
          this.brandList.forEach(brand => {
            brand.feedback = []
            brand.opentime = []
            brand.feedback = res.data.brandfeedback.filter(feedback => {
              return feedback.BrandId === brand.Id
            })
            brand.opentime = res.data.brandopentime.filter(opentime => {
              return opentime.BrandId === brand.Id && opentime.OpenDate === year + '-' + month + '-' + day
            })
            brand.allSuggest = 0
            brand.feedback.forEach(allSuggest => {
              brand.allSuggest += (allSuggest.AllSuggest / brand.feedback.length)
            })
            this.myFollowBrand.forEach(follow => {
              if (brand.Id === follow.BrandId) {
                brand.isFollow = true
              }
            })
            if (today > new Date(this.today + ' ' + brand.opentime[0].SDateTime) && today < new Date(this.today + ' ' + brand.opentime[0].EDateTimeDate)) {
              brand.status = '營業中'
            }
          })
          this.filterBrandList = JSON.parse(JSON.stringify(this.brandList))
          this.setMapMarker()
          this.$emit('changeLoading', false)
        })
        .catch(err => {
          this.$emit('changeLoading', false)
          this.$emit('showAlertButton', '資料載入錯誤，請重新載入', 'error', 'reload')
          console.log(err)
        })
    },
    initMap (lat, lng) {
      this.map = new window.google.maps.Map(this.$refs.map,
        {
          zoom: 16,
          center: { lat, lng },
          mapTypeId: 'terrain',
          zoomControl: false,
          streetViewControl: false,
          fullscreenControl: false,
          mapTypeControl: false
        })
      this.marker = new window.google.maps.Marker({
        position: { lat, lng },
        map: this.map,
        label: {
          text: '目前位置',
          color: 'black',
          fontSize: '16px',
          fontWeight: '700',
          fontFamily: 'Noto Sans TC'
        }
      })
      this.map.setOptions({
        styles: [
          {
            featureType: 'poi.business',
            stylers: [{
              visibility: 'off'
            }]
          }
        ]
      })
    },
    getLocation () {
      const vm = this
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error)
      }
      function error () {
        vm.lat = 22.6051589
        vm.lng = 120.30129609999997
        vm.initMap(22.6051589, 120.30129609999997)
      }
      function success (position) {
        vm.lat = position.coords.latitude
        vm.lng = position.coords.longitude
        vm.initMap(vm.lat, vm.lng)
      }
    },
    setMapMarker () {
      const features = []
      this.filterBrandList.forEach(brand => {
        features.push(
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [brand.opentime[0].Location.split(' ')[1], brand.opentime[0].Location.split(' ')[2]]
            },
            properties: {
              id: brand.Id,
              name: brand.BrandName,
              site: brand.opentime[0].Location.split(' ')[0],
              opentime: brand.opentime[0].SDateTime + '-' + brand.opentime[0].EDateTimeDate,
              status: brand.opentime[0].Status,
              sort: brand.Sort,
              tel: brand.PhoneNumber
            },
            icon: brand.LogoPhoto
          }
        )
      })
      this.removeAllMapMarker()
      features.forEach(marker => {
        const latLng = new window.google.maps.LatLng(marker.geometry.coordinates[0], marker.geometry.coordinates[1])
        const info = new window.google.maps.Marker({
          position: latLng,
          map: this.map,
          label: {
            text: marker.properties.name,
            color: 'black',
            fontSize: '18px',
            fontWeight: '600',
            fontFamily: 'Noto Sans TC'
          },
          icon: {
            url: marker.icon,
            scaledSize: new window.google.maps.Size(60, 60),
            labelOrigin: new window.google.maps.Point(30, 70)
          }
        })
        this.addInfowindow(marker, latLng, info)
        this.markers.push(info)
      })
    },
    addDirections (marker, latLng, info, infowindow) {
      document.querySelector(`#${marker.properties.name.split(' ')[0]}`).addEventListener('click', () => {
        this.directionsService = new window.google.maps.DirectionsService()
        this.directionsDisplay = new window.google.maps.DirectionsRenderer()
        const request = {
          origin: { lat: this.lat, lng: this.lng },
          destination: latLng,
          travelMode: 'DRIVING'
        }
        this.directionsService.route(request, (result, status) => {
          if (status === 'OK') {
            this.isNew = false
            this.directionsDisplay.setDirections(result)
            this.directionsDisplay.setOptions({ suppressMarkers: true })
            this.initMap(this.lat, this.lng)
            this.setMapMarker()
            this.directionsDisplay.setMap(this.map)
            infowindow.close(this.map, info)
          }
        })
      })
    },
    addInfowindow (marker, latLng, info) {
      const infowindow = new window.google.maps.InfoWindow({
        content: `
        <div>
                <div class="flex justify-between lg:flex-col lg:items-start items-center mb-3">
                  <div class="w-full flex justify-between items-center">
                    <h2 class="text-2xl font-semibold mb-2">${marker.properties.name}</h2>
                    <div class="text-lg bg-secondcolor-400 px-2 rounded-lg">${marker.properties.sort}</div>
                  </div>
                </div>
                <p class='mb-2 text-lg'>營業時間：${marker.properties.opentime}</p>
                <p class='mb-2 text-lg'>連絡電話：${marker.properties.tel} </p>
                <div class="flex justify-evenly">
                  <button id='${marker.properties.name.split(' ')[0] + marker.properties.id}' class="bg-maincolor-200 text-thirdcolor-400 py-1 px-3 rounded-lg">前往訂購</button><button id='${marker.properties.name.split(' ')[0]}' class="bg-maincolor-200 text-thirdcolor-400 py-1 px-3 rounded-lg">導航前往</button>
                </div>
        </div>
        `,
        position: latLng,
        maxWidth: 400
      })
      info.addListener('click', () => {
        infowindow.open(this.map, info)
        infowindow.addListener('domready', () => {
          document.querySelector(`#${marker.properties.name.split(' ')[0] + marker.properties.id}`).addEventListener('click', () => {
            this.getBrandId(marker.properties.id)
            window.location = '/index.html#/BrandDetail'
          })
          this.addDirections(marker, latLng, info, infowindow)
        })
      })
    },
    removeAllMapMarker () {
      this.markers.forEach(marker => marker.setMap(null))
      this.markers = []
    }
  },
  beforeDestroy () {
    localStorage.setItem('BrandId', this.brandId)
  }
}
</script>
