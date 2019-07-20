
<template>

  <v-card>
    <!--    image top-->
    <v-img
      :src="images.main"
      height="400px"

    >

      <v-layout
        column
        fill-height class="pt-5"
      >
        <v-card-title>
          <v-container  style="background: rgba(255,255,255, 0.7)"
                        prominent
                        height="auto"
                        class="pt-4  pb-4"
          >

            <v-flex md12  black--text title  >
              <h3>Tìm công việc phù hợp</h3>
            </v-flex>
            <v-flex md12 class="pr-0 mr-0">
              <v-layout row wrap>
                <v-flex md4 xs12 class="mr-2" >
<!--                  <v-text-field-->
<!--                    label="Nhập chức danh, vị trí, kỹ năng..."-->
<!--                    v-model="searchValue"-->
<!--                    single-line-->
<!--                  ></v-text-field>-->
                  <v-combobox
                    single-line
                    label="Tên công việc, vị trí bạn muốn ứng tuyển..."
                    :items="searchAPI.all"
                    :search-input.sync="searchValue"
                    v-model="searchValue"
                  ></v-combobox>
                </v-flex>

                <v-flex md3 xs12 class="mr-2">
                  <v-autocomplete
                    :items="industries"
                    v-model="searchIndustry"
                    item-text="name"
                    item-value="name"
                    label="Tất cả các ngành nghề"
                  ></v-autocomplete>
                </v-flex>

                <v-flex md3 xs12  class="mr-2">
                  <v-autocomplete
                    :items="cities"
                    v-model="searchCity"
                    item-text="fullName"
                    item-value="fullName"
                    label="Tất cả địa điểm"
                  ></v-autocomplete>
                </v-flex>
                <v-flex md1 xs12 >
                  <v-btn color="warning" @click="startSearch"><h4>Tìm kiếm</h4></v-btn>
                </v-flex>
              </v-layout>
            </v-flex>


          </v-container>
        </v-card-title>

        <v-spacer></v-spacer>

      </v-layout>
    </v-img>
    <!--    5 cong ty hàng đầu-->
    <v-card style="background-color: #efebeb">
      <v-container align-center>
        <v-layout row wrap>
          <v-flex md12 xs12 >
            <h1 align="center">Các công ty hàng đầu</h1>
          </v-flex>
          <v-flex md12 xs12>
            <v-container>

              <v-layout row wrap>
                <v-spacer/>
                <template v-for="company in companys">
                  <v-flex md2 xs12 class="pa-3 ma-1" style="background-color: white" :key="company">
                    <v-flex md12 xs12>
                      <v-img  :src="images.main"
                              height="100%"></v-img>
                    </v-flex>
                    <v-flex md12 xs12 class="text-lg-center">
                      <h3 >Company name</h3>
                    </v-flex>
                  </v-flex>
                </template>
                <v-spacer/>
              </v-layout>

            </v-container>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
    <!--    ngôn ngữ-->
<!--    <v-card style="background-color: white">-->
<!--      <v-container align-center>-->
<!--        <v-layout row wrap >-->
<!--          <v-flex md12 xs12 >-->
<!--            <h1 align="center">Các Kênh Việc Làm Của Chúng Tôi</h1>-->
<!--          </v-flex>-->
<!--          <v-flex md12 xs12>-->
<!--            <v-layout row wrap>-->
<!--              <v-flex md4 class="pa-3 industryimg"  align-center>-->
<!--                <v-img  :src="images.main" height="100%"-->
<!--                        gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"-->
<!--                        class=""-->
<!--                >-->
<!--                  <v-container align-center class="miđdle">-->
<!--                    <v-layout row wrap>-->
<!--                      <v-flex md12 xs12 style="height: auto">-->
<!--                        <v-btn-->
<!--                          style="height: auto"-->
<!--                          dark-->
<!--                          icon-->
<!--                        >-->
<!--                          <v-icon size="100px" class="miđdle">mdi-account-group</v-icon>-->
<!--                        </v-btn>-->
<!--                      </v-flex>-->
<!--                      <v-flex md12 xs12 white&#45;&#45;text>-->
<!--                        <h2 >Việc làm cấp quản lý</h2>-->
<!--                      </v-flex>-->
<!--                      <v-flex md12 xs12 >-->
<!--                        <v-btn color="orange" style="color: white"><h4>Tìm ứng viên</h4></v-btn>-->
<!--                      </v-flex>-->
<!--                    </v-layout>-->


<!--                  </v-container>-->
<!--                </v-img>-->
<!--              </v-flex>-->
<!--              <v-flex md4 class="pa-3" align-center>-->
<!--                <v-img  :src="images.main" height="100%"     gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)">-->
<!--                  <v-container align-center>-->
<!--                    <v-layout row wrap>-->
<!--                      <v-flex md12 xs12 style="height: auto">-->
<!--                        <v-btn-->
<!--                          style="height: auto"-->
<!--                          dark-->
<!--                          icon-->
<!--                        >-->
<!--                          <v-icon size="100px">mdi-code-tags</v-icon>-->
<!--                        </v-btn>-->
<!--                      </v-flex>-->
<!--                      <v-flex md12 xs12 white&#45;&#45;text>-->
<!--                        <h2 >Việc làm ngành IT</h2>-->
<!--                      </v-flex>-->
<!--                      <v-flex md12 xs12 >-->
<!--                        <v-btn color="orange" style="color: white"><h4>Tìm ứng viên</h4></v-btn>-->
<!--                      </v-flex>-->
<!--                    </v-layout>-->


<!--                  </v-container>-->
<!--                </v-img>-->
<!--              </v-flex>-->
<!--              <v-flex md4 class="pa-3">-->
<!--                <v-img  :src="images.main" height="100%"     gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)">-->
<!--                  <v-container align-center>-->
<!--                    <v-layout row wrap>-->
<!--                      <v-flex md12 xs12 style="height: auto;" align="center">-->
<!--                        <v-btn-->
<!--                          style="height: auto; "-->
<!--                          dark-->
<!--                          icon-->
<!--                        >-->
<!--                          <v-icon size="100px">mdi-school</v-icon>-->
<!--                        </v-btn>-->
<!--                      </v-flex>-->
<!--                      <v-flex md12 xs12 white&#45;&#45;text>-->
<!--                        <h2 >Mới tốt nghiệp</h2>-->
<!--                      </v-flex>-->
<!--                      <v-flex md12 xs12 >-->
<!--                        <v-btn color="orange" style="color: white"><h4>Tìm ứng viên</h4></v-btn>-->
<!--                      </v-flex>-->
<!--                    </v-layout>-->


<!--                  </v-container>-->
<!--                </v-img>-->
<!--              </v-flex>-->
<!--            </v-layout>-->

<!--          </v-flex>-->
<!--        </v-layout>-->
<!--      </v-container>-->
<!--    </v-card>-->
    <!--    8 công việc đăng gần nhất-->
    <v-card style="background-color:#efebeb">
      <v-container md12 xs12 align-center>
        <h1>Việc làm nổi bật hôm nay</h1>

        <v-layout row wrap md8 xs12 align-center>

            <template v-for="job in info" >

              <v-flex md5 xs12 style="background-color: white" class="ma-2 pa-1" :key="job.id" @click="$router.push(`/thong-tin-cong-viec/${job.id}`)">

                <v-layout row wrap>
                  <v-flex md4  xs4>
                    <v-img  :src="job.companyLogoImg"
                            height="100%"></v-img>
                  </v-flex>
                  <v-flex md1/>
                  <v-flex md7 xs7 class="pt-2">
                    <h2 align-left>
                      {{job.title}}
                    </h2>
                    <v-flex align-left>
                      <h4>{{job.companyName}}</h4>
                      <!--                    <h4>  <v-btn icon>-->
                      <!--                      <v-icon color="orange darken-2" >mdi-coin</v-icon>-->
                      <!--                    </v-btn>{{job.salaryTo}} - {{job.salaryFrom}} triệu</h4>-->
                    </v-flex>
                    <span align-lef>
                   {{job.cityName}}

                  </span>

                  </v-flex>

                </v-layout>

              </v-flex>

            </template>



        </v-layout>
      </v-container>
    </v-card>

  </v-card>



</template>

<script>
  import Axios from 'axios'
  import Constants from '@/stores/constant.js'
  export default {
    name: "JobSeekerMainScreen",
    data : ()=>{ return {
      loading: false,
      images : {'main' : require('@/assets/jsmain1.jpg')},
      industries : [],
      items:[],
      cities:[],
      jobs : [0,1,2,3,4,5,6,7],
      companys : [0,1,2,3,4],
      cmpnys:[],
      icon : 'mdi-coin',
      info : '',
      search: null,
      searchValue: '',
      searchIndustry: '',
      searchCity: '',
      searchAPI: [],
    }
    },

    methods: {

      getComponent(){
        Axios
          .get(Constants.URL+'/city/getAllCity')
          .then(response => (
            this.cities = response.data.data))

        Axios
          .get(Constants.URL+'/industry')
          .then(response => (
            this.industries = response.data))
        Axios
          .get(Constants.URL+'/job/getTop8')
          .then(response => (this.info = response.data.data.content))
        const url = Constants.URL+'/job/getSearchComponent';
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

      startSearch(){
        if(this.searchValue === null || this.searchValue === ''){
          sessionStorage.setItem("skill", '');
        }else{
          sessionStorage.setItem("skill", this.searchValue);
        }
        sessionStorage.setItem("job", this.searchIndustry);
        sessionStorage.setItem("location", this.searchCity);
        this.$router.push('/tim-kiem');
      }
    },
    mounted () {

      this.$nextTick(() => {
        this.getComponent();
      })
    }
  }
</script>

<style scoped>
  .industryimg :hover{
    opacity: 0.3;
  }
  .miđdle :hover{
    opacity: 1;
  }
  .v-menu__content{
    left : 0px !important;
    top : 105%!important;

  }
  h1,h2,h3,h4,h5 {
    font-family: "Times New Roman";
  }


</style>
