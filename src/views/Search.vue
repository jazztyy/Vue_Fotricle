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
            <div class="shadow-xl rounded-lg bg-thirdcolor-400">
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
      isMap: false,
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
      today: ''
    }
  },
  props: ['identity', 'myFollowBrand'],
  created () {
    this.getBrandList()
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
          const day = (today.getDate() > 9 ? '' + today.getDate() : '0' + today.getDay())
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
          this.$emit('changeLoading', false)
        })
        .catch(err => {
          this.$emit('changeLoading', false)
          this.$emit('showAlertButton', '資料載入錯誤，請重新載入', 'error', 'reload')
          console.log(err)
        })
    }
  },
  beforeDestroy () {
    localStorage.setItem('BrandId', this.brandId)
  }
}
</script>
