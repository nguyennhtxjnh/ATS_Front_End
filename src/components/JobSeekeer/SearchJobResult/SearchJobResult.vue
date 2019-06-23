<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid>
      <v-layout row wrap align-center justify-center>
<!--        Search Bar-->
        <v-flex xs8 >
            <v-layout style="border-radius: 4px; background-color: #00b9f2!important">
              <v-flex md4 xs12 class="white ma-2" style="border-radius: 4px; height: 58px">
                <v-text-field
                  outline
                  label="Nhập chức danh, vị trí, kỹ năng..."
                  single-line
                  hide-details
                  v-model="selectSkill"
                ></v-text-field>
                </v-flex >
              <v-flex md3 xs12 class="white ma-2" style="border-radius: 4px; height: 59px">
                <v-autocomplete
                  outline
                  v-bind:items="industries"
                  v-model="selectJob"
                  item-text="name"
                  item-value="id"
                  label="Tất cả các ngành nghề"
                  hide-details
                ></v-autocomplete>
              </v-flex>

              <v-flex md3 xs12  class="white ma-2" style="border-radius: 4px; height: 59px">
                <v-autocomplete
                  :items="industries"
                  v-model="selectLocation"
                  item-text="name"
                  item-value="id"
                  outline
                  label="Tất cả địa điểm"
                  hide-details
                ></v-autocomplete>
              </v-flex>
              <v-flex md2 xs12 class="ma-2">
                <v-btn block color="warning" style="height: 78%; border-radius: 4px" @click="searchClick"><h4>Tìm kiếm</h4></v-btn>
              </v-flex>

            </v-layout>
          </v-flex>
<!--        Search filter-->

<!--        Search Result-->
        <v-flex xs8 class="mt-2">
          <v-data-table
            :items="departments"
            :loading="loading"
            :pagination.sync="pagination"
            :no-data-text="'Không có dữ liệu'"
            :no-results-text="'Không tìm thấy dữ liệu tương ứng'"
            :must-sort="true"
            hide-actions
            hide-headers
          >

<!--            <template #pageText="{pageStart, pageStop, itemsLength}">-->
<!--              {{pageStart}} - {{pageStop}} của tổng cộng {{itemsLength}}-->
<!--            </template>-->

            <template #items="{item}" >
              <td class="hoverClass pl-0">
                <v-flex xs12>
                  <v-container fluid grid-list-md class="pa-0">
                    <v-layout row wrap >
                      <v-flex d-flex xs12 md2>
                        <v-img src="https://picsum.photos/510/300?random" contain aspect-ratio="1.6"></v-img>
                      </v-flex>
                      <v-flex d-flex xs12 md7 >

                        <v-layout row wrap class="pa-0 ma-0" >

                          <v-flex d-flex class="pa-0 mt-2" xs12>
                            <h1 class="titleResult">{{item.name}}</h1>
                          </v-flex>
                          <v-flex d-flex class="pa-0 ma-0">
                            <v-layout row wrap class="pa-0 ma-0">
                              <v-flex d-flex xs12>
                                <a style="color: black !important;">Company Will Stay Here</a>
                              </v-flex>
                              <v-flex d-flex xs12>
                                <span style="color: black !important;">Salary Will Stay Here</span>
                              </v-flex>
                              <v-flex d-flex xs12>
                                <span style="color: black !important;">View will stay here</span>  <span style="color: black !important;">Expired Date Here</span>
                              </v-flex>
                              <v-flex d-flex xs12 fill-height>

                              </v-flex>
                            </v-layout>

                          </v-flex>
                        </v-layout>

                      </v-flex>
                      <v-layout xs12 md2 child-flex text-xs-center>
                        <v-flex md12  class="align-center">
                          <v-flex >
                            <v-btn @click="favoriteBtn" :outline="favorite" color="error"><v-icon dark>favorite</v-icon>{{textBtnFav.text}}</v-btn>
                          </v-flex>
                        </v-flex>
                      </v-layout>
                    </v-layout>
                  </v-container>
                </v-flex>

              </td>
            </template>
          </v-data-table>
          <div class="text-xs-center pt-2">
            <v-pagination v-model="pagination.page" :length="Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)"></v-pagination>
          </div>
        </v-flex>

      </v-layout>
    </v-container>
</template>

<script>
  import Axios from 'axios'

  export default {
    name: 'SearchJobResult',
    data : ()=> {
      return {
        cbCompany: ['ABC', '123', 'CT'],
        images: {'main': require('@/assets/jsmain1.jpg')},
        industries: [{id: "1", name: "Foo"}, {id: "2", name: "Bar"}, {id: "3", name: "Baka"}, {id: "4", name: "Pig"},],
        jobs: [0, 1, 2, 3, 4, 5, 6, 7],
        companys: [8, 9, 10, 11, 12],
        icon: 'mdi-coin',
        select: [],
        favorite : true,

        loading: false,
        headers: [
          {text: 'Mã phòng ban', value: ''},
          {text: 'Tên phòng ban', value: 'name'},
          {text: 'Mô tả', value: 'description'},
          {text: 'Trạng thái', value: 'available'},
          {text: 'Thao tác', sortable: false},
        ],
        pagination: {},
        departments: [
          {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',

        },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%'
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%'
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%'
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%'
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%'
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%'
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%'
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%'
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%'
          }
          ,
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%'
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%'
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%'
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%'
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%'
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%'
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%'
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%'
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%'
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%'
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%'
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%'
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%'
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%'
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%'
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%'
          }],

        selectSkill: '',
        selectJob: '',
        selectLocation: '',

        textBtnFav: {
          text: 'Lưu Việc Làm'
        },
      }
    },
    methods: {
      getDepartments() {
      //   this.loading = true;
      //   Axios.get(`http://localhost:8080/departments`)
      //     .then(response => {
      //       this.departments = response.data.content;
      //     })
      //     .catch(console.error)
      //     .finally(() => {
      //       this.loading = false;
      //     })
      // },
    },
      favoriteBtn(){
        this.favorite = !this.favorite;
        this.textBtnFav.text = this.favorite ? 'Lưu Việc Làm' : 'Đã Lưu';
      },
      searchClick(){
        console.log(this.selectSkill + ", " + this.selectJob + ", " + this.selectLocation);
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.selectSkill = sessionStorage.getItem("skill");
        this.selectJob = sessionStorage.getItem("job");
        this.selectLocation = sessionStorage.getItem("location");
        this.searchClick();
      })
    },
    watch: {
      pagination() {
        this.getDepartments();
      }
    },



  }
</script>

<style scoped>
  .hoverClass:hover, titleResult:hover {
    cursor: pointer;
    color: orange;
  }

</style>
