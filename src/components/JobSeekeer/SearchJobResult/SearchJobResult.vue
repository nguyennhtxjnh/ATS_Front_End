<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-flex style="background-color: #efebeb">


    <!--        Search Bar-->
    <v-flex style="background: #ffffd5"
            prominent
            height="auto"
            class="py-3 px-5"
    >

      <v-flex md12 black--text title>
        <h3>Tìm công việc phù hợp</h3>
      </v-flex>
      <v-flex md12 class="pr-0 mr-0">
        <v-layout row wrap>
          <v-flex md4 xs12 class="mr-2">

            <v-text-field
              single-line
              label="Tên công việc, vị trí bạn muốn ứng tuyển..."
              :items="searchAPI.all"
              :search-input.sync="searchValue"
              v-model="searchValue"
            ></v-text-field>
          </v-flex>

          <v-flex md3 xs12 class="mr-2">
            <v-autocomplete
              v-bind:items="industries"
              v-model="searchIndustry"
              item-text="name"
              item-value="name"
              label="Ngành nghề"
            ></v-autocomplete>
          </v-flex>

          <v-flex md3 xs12 class="mr-2">
            <v-autocomplete
              :items="cities"
              v-model="selectLocation"
              item-text="fullName"
              item-value="fullName"
              label="Địa điểm"
            ></v-autocomplete>
          </v-flex>
          <v-flex md1 xs12>
            <v-btn color="warning" @click="searchClick"><h4>Tìm kiếm</h4></v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-flex>
    <!--        Search filter-->

    <!--        Search Result-->
    <v-layout row wrap v-if="checkJob === false" class="white">

          <v-spacer/>
          <img :src="require('@/assets/empty-product.png')" height="240px">
          <v-spacer/>

    </v-layout>
    <v-layout row wrap class="mt-2" v-if="checkJob">
      <v-spacer/>
      <v-flex xs12 md9 class="mt2 white">
        <v-data-table
          :items="job"
          :loading="loading"
          :total-items="pagination.totalItems"
          :no-data-text="'Hiện không có công việc nào theo tiêu chí này. '"
          :no-results-text="'Không tìm thấy dữ liệu tương ứng'"
          :must-sort="true"
          hide-actions
          hide-headers
        >


          <template #items="{item}">
            <td class="pl-0">
              <v-flex xs12 class="pa-0">
                <v-container fluid grid-list-md class="pa-0">
                  <v-layout row wrap class="pa-0 item" >
                    <v-spacer/>
                    <v-flex md2 xs3 class="ml-4">
                      <v-img class="hoverClass" :src="item.companyLogoImg"
                             @click="viewJobDetail(item.id)" contain aspect-ratio="1.6"></v-img>
                    </v-flex>

<v-spacer/>
                    <v-flex d-flex xs12 md7 class="pt-0 pb-0 pr-0 pl-5">

                      <v-layout row wrap class="pa-0 ma-0">

                        <v-flex d-flex class="pa-0 mt-2" xs12>
                          <h2 class="hoverClass" style="color: red"
                              @click="viewJobDetail(item.id)">{{item.title}}</h2>
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
                    <v-spacer/>
<!--                    <v-layout xs12 md2 child-flex text-xs-center>-->
<!--                      <v-flex md12 class="align-center">-->
<!--                        <v-flex>-->
<!--&lt;!&ndash;                          <v-btn @click="favoriteBtn" :outline="favorite" color="error">&ndash;&gt;-->
<!--&lt;!&ndash;                            <v-icon dark>favorite</v-icon>&ndash;&gt;-->
<!--&lt;!&ndash;                            {{textBtnFav.text}}&ndash;&gt;-->
<!--&lt;!&ndash;                          </v-btn>&ndash;&gt;-->
<!--                        </v-flex>-->
<!--                      </v-flex>-->
<!--                    </v-layout>-->
                  </v-layout>
                </v-container>
              </v-flex>

            </td>
          </template>
        </v-data-table>
        <div class="text-xs-center pt-2">
          <v-pagination v-model="page"
                        :page="page"
                        @input="reloadPage"
                        :length="pagination.totalItems"></v-pagination>
        </div>
      </v-flex>
      <v-spacer/>
    </v-layout>


  </v-flex>
</template>

<script>
  import Constants from '@/stores/constant.js'
  import Axios from 'axios'

  export default {
    name: 'SearchJobResult',
    data: () => {
      return {
        items: [
          'Programming',
          'Design',
          'Vue',
          'Vuetify'
        ],
        checkJob: false,
          lengthPage:'',

        cbCompany: ['ABC', '123', 'CT'],
        images: {'main': require('@/assets/jsmain1.jpg')},
        industries: [],
        cities: [],
        jobs: [0, 1, 2, 3, 4, 5, 6, 7],
        companys: [8, 9, 10, 11, 12],
        icon: 'mdi-coin',
        select: [],
        favorite: true,
        page: 0,
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
        searchValue: '',
        searchIndustry: '',
        searchCity: '',
        selectSkill: '',
        selectJob: '',
        selectLocation: '',
        searchAPI: [],
        checkSearch: '',

        textBtnFav: {
          text: 'Lưu Việc Làm'
        },
      }
    },
    methods: {
        reloadPage(){
            if (this.searchValue === null || this.searchValue === "null") {
                this.searchValue = ""
            }
            if (this.searchIndustry === null || this.searchIndustry === "null") {
                this.searchIndustry = ""
            }
            if (this.selectLocation === null || this.selectLocation === "null") {
                this.selectLocation = ""
            }
            if (this.searchIndustry === "Tất cả ngành nghề") {
                this.searchIndustry = ""
            }
            if (this.selectLocation === "Tất cả địa điểm") {
                this.selectLocation = ""
            }
            console.log(this.searchValue + ", " + this.searchIndustry + ", " + this.selectLocation +this.page);

            this.loading = true;
             Axios.get(Constants.URL + '/job/search?search=' + this.searchValue + '&city=' + this.selectLocation + '&industry=' + this.searchIndustry  +'&page='+ (this.page - 1))
                .then(response => {
                    if(response.data.success === true) {
                        sessionStorage.setItem("skill", '');
                        sessionStorage.setItem("job", '');
                        sessionStorage.setItem("location", '');
                        if (response.data.data != null) {
                            this.checkJob = true;
                            this.job = response.data.data.content;
                            this.pagination.totalItems = response.data.data.totalPages;
                            console.log(response)
                        } else {
                            this.job = '';
                            this.checkJob = false;
                        }
                    }
                })
                .catch(console.error)
                .finally(() => {
                    this.loading = false;
                })




        },
      viewJobDetail(id){
        let route = this.$router.push({path: '/thong-tin-cong-viec/'+id});
        window.open(route.href, '_blank');
      },
      getComponent() {


        this.checkSearch = sessionStorage.getItem("check");


        if(this.checkSearch === "true"){
          this.searchValue = sessionStorage.getItem("skill");
          this.searchIndustry = sessionStorage.getItem("job");
          this.selectLocation = sessionStorage.getItem("location");
          console.log(this.checkSearch)
          this.searchClick();
          sessionStorage.setItem("check", false);
        }
        Axios
          .get(Constants.URL + '/job/getSearchComponent')
          .then(response =>
            (
              this.searchAPI = response.data.data))

        Axios
          .get(Constants.URL + '/industry')
          .then(response => (
            this.industries = response.data))
        Axios
          .get(Constants.URL + '/city/getAllCity')
          .then(response => (
            this.cities = response.data.data))
      },
      favoriteBtn() {
        this.favorite = !this.favorite;
        this.textBtnFav.text = this.favorite ? 'Lưu Việc Làm' : 'Đã Lưu';
      },
      async searchClick() {
        if (this.searchValue === null || this.searchValue === "null") {
          this.searchValue = ""
        }
        if (this.searchIndustry === null || this.searchIndustry === "null") {
          this.searchIndustry = ""
        }
        if (this.selectLocation === null || this.selectLocation === "null") {
          this.selectLocation = ""
        }
        if (this.searchIndustry === "Tất cả ngành nghề") {
          this.searchIndustry = ""
        }
        if (this.selectLocation === "Tất cả địa điểm") {
          this.selectLocation = ""
        }
        console.log(this.searchValue + ", " + this.searchIndustry + ", " + this.selectLocation);

        this.loading = true;
        await Axios.get(Constants.URL + '/job/search?search=' + this.searchValue + '&city=' + this.selectLocation + '&industry=' + this.searchIndustry)
          .then(response => {
              if(response.data.success === true) {
                  sessionStorage.setItem("skill", '');
                  sessionStorage.setItem("job", '');
                  sessionStorage.setItem("location", '');
                  if (response.data.data != null) {
                      this.checkJob = true;
                      this.job = response.data.data.content;
                      this.pagination.totalItems = response.data.data.totalPages;
                      console.log(response)
                  } else {
                      this.job = '';
                      this.checkJob = false;
                  }
              }
              })
            .catch(console.error)
            .finally(() => {
                this.loading = false;
            })




      },

    },
    mounted() {
      this.$nextTick(() => {
       this.getComponent();
      })
    },
    watch: {
      pagination() {
        this.getComponent();
      }
    },


  }
</script>

<style scoped>
  .hoverClass:hover, titleResult:hover {
    cursor: pointer;
    color: orange !important;
  }
  .item:hover {
    background-color: #f1f8e9;
  }

  h3, h2, h1, h4, h5, span {
    font-family: "Times New Roman";
  }

</style>
