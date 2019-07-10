<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid>
      <v-layout row wrap align-center justify-center>
<!--        Search Bar-->
        <v-flex xs8 >
            <v-layout style="border-radius: 4px; background-color: #00b9f2!important">
              <v-flex md4 xs12 class="white ma-2" style="border-radius: 4px; height: 58px">
<!--                <v-text-field-->
<!--                  outline-->
<!--                  label="Nhập chức danh, vị trí, kỹ năng..."-->
<!--                  single-line-->
<!--                  hide-details-->
<!--                  v-model="selectSkill"-->
<!--                ></v-text-field>-->
<!--                <v-combobox-->
<!--                  v-model="selectSkill"-->
<!--                  :items="items"-->
<!--                  outline-->
<!--                  single-line-->
<!--                  label="Nhập chức danh, vị trí, kỹ năng..."-->
<!--                ></v-combobox>-->
                    <v-combobox
                      single-line
                      outline
                      label="Nhập chức danh, vị trí, kỹ năng..."
                      :items="searchAPI"
                      :search-input.sync="selectSkill"
                      v-model="selectSkill"
                    ></v-combobox>
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
            :items="job"
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
              <td class="pl-0" >
                <v-flex xs12 class="pa-0">
                  <v-container fluid grid-list-md class="pa-0">
                    <v-layout row wrap class="pa-0">

                      <v-img class="hoverClass" src="https://cdn-images.threadless.com/threadless-media/artist_shops/shops/vue/products/195796/shirt-1490420513-abd7b25b157f3450ce8c2a09ee51c36e.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiZmZmZmZmIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19" @click="$router.push(`/thong-tin-cong-viec/${item.id}`)" contain aspect-ratio="1.6"></v-img>

                      <v-flex d-flex xs12 md7 class="pt-0 pb-0 pr-0 pl-3" >

                        <v-layout row wrap class="pa-0 ma-0" >

                          <v-flex d-flex class="pa-0 mt-2" xs12>
                            <h2 class="hoverClass" style="color: red" @click="$router.push(`/thong-tin-cong-viec/${item.id}`)">{{item.title}}</h2>
                          </v-flex>
                          <v-layout row wrap class="pa-0 ma-0">
                            <v-flex d-flex xs12>
                              <span> <b>Công ty:</b> {{item.companyName}}</span>
                            </v-flex>
                            <v-flex d-flex xs12 v-if="item.salaryTo === 0 && item.salaryFrom > 0">
                              <span> <b>Mức lương: </b> từ {{item.salaryFrom}}đ trở lên</span>
                            </v-flex>
                            <v-flex d-flex xs12 v-if="item.salaryFrom === 0 && item.salaryTo > 0">
                              <span> <b>Mức lương:</b> lên đến {{item.salaryTo}}đ</span>
                            </v-flex>
                            <v-flex d-flex xs12 v-if="item.salaryTo > 0 && item.salaryFrom > 0">
                              <span> <b>Mức lương:</b> từ {{item.salaryFrom}}đ đến {{item.salaryTo}}đ</span>
                            </v-flex>
                            <v-flex d-flex xs12 v-if="item.salaryTo === 0 && item.salaryFrom === 0">
                              <span><b>Mức lương:</b> thương lượng</span>
                            </v-flex>
                            <v-flex d-flex xs12>
                              <!--                      <span>View will stay here</span> -->
                              <span><b>Khu vực:</b> {{item.cityName}}</span>
                            </v-flex>
                            <v-flex d-flex xs12 fill-height>

                            </v-flex>
                          </v-layout>
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
  import Constants from '@/stores/constant.js'
  import Axios from 'axios'

  export default {
    name: 'SearchJobResult',
    data : ()=> {
      return {
        items: [
          'Programming',
          'Design',
          'Vue',
          'Vuetify'
        ],

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
        job: [],

        selectSkill: '',
        selectJob: '',
        selectLocation: '',
        searchAPI: [],

        textBtnFav: {
          text: 'Lưu Việc Làm'
        },
      }
    },
    methods: {
      getComponent(){
        const url = 'http://localhost:8080/job/getSearchComponent';
        const method = 'GET';
        const data = '';
        let config = {
          headers: {
            accessToken: localStorage.getItem('token1')
          }
        }

        Axios({url, method, data, config})
          .then(response => {
            if (response.data.success == true) {
              this.searchAPI =  response.data.data;
              console.log(this.searchAPI)

            }
          })
          .catch(console.error)
          .finally(() => {
            this.loading = false;
          })
      },

      getjob() {
      //   this.loading = true;
      //   Axios.get(`http://localhost:8080/job`)
      //     .then(response => {
      //       this.job = response.data.content;
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
        sessionStorage.setItem("skill", this.selectSkill);
        sessionStorage.setItem("job", this.selectJob);
        sessionStorage.setItem("location", this.selectLocation);
        console.log(this.selectSkill + ", " + this.selectJob + ", " + this.selectLocation);

          this.loading = true;
          Axios.get(Constants.URL+`/job/search?search=` + this.selectSkill)
            .then(response => {
              this.job = response.data.data;
              console.log(this.job)
            })
            .catch(console.error)
            .finally(() => {
              this.loading = false;
            })


      }
    },
    mounted() {
      this.$nextTick(() => {
        this.selectSkill = sessionStorage.getItem("skill");
        this.selectJob = sessionStorage.getItem("job");
        this.selectLocation = sessionStorage.getItem("location");
        this.searchClick();
        this.getComponent();
      })
    },
    watch: {
      pagination() {
        this.getjob();
      }
    },



  }
</script>

<style scoped>
  .hoverClass:hover, titleResult:hover {
    cursor: pointer;
    color: orange !important;
  }

</style>
