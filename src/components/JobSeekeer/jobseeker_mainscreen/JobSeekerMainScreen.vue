
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
                    label="Nhập chức danh, vị trí, kỹ năng..."
                    :items="searchAPI"
                    :search-input.sync="searchValue"
                    v-model="searchValue"
                  ></v-combobox>
                </v-flex>

                <v-flex md3 xs12 class="mr-2">
                  <v-autocomplete
                    v-bind:items="industries"
                    v-model="searchIndustry"
                    item-text="name"
                    item-value="id"
                    return-object
                    label="Tất cả các ngành nghề"
                  ></v-autocomplete>
                </v-flex>

                <v-flex md3 xs12  class="mr-2">
                  <v-autocomplete
                    :items="industries"
                    v-model="searchCity"
                    item-text="name"
                    item-value="id"
                    return-object
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
    <v-card style="background-color: white">
      <v-container align-center>
        <v-layout row wrap >
          <v-flex md12 xs12 >
            <h1 align="center">Các Kênh Việc Làm Của Chúng Tôi</h1>
          </v-flex>
          <v-flex md12 xs12>
            <v-layout row wrap>
              <v-flex md4 class="pa-3 industryimg"  align-center>
                <v-img  :src="images.main" height="100%"
                        gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
                        class=""
                >
                  <v-container align-center class="miđdle">
                    <v-layout row wrap>
                      <v-flex md12 xs12 style="height: auto">
                        <v-btn
                          style="height: auto"
                          dark
                          icon
                        >
                          <v-icon size="100px" class="miđdle">mdi-account-group</v-icon>
                        </v-btn>
                      </v-flex>
                      <v-flex md12 xs12 white--text>
                        <h2 >Việc làm cấp quản lý</h2>
                      </v-flex>
                      <v-flex md12 xs12 >
                        <v-btn color="orange" style="color: white"><h4>Tìm ứng viên</h4></v-btn>
                      </v-flex>
                    </v-layout>


                  </v-container>
                </v-img>
              </v-flex>
              <v-flex md4 class="pa-3" align-center>
                <v-img  :src="images.main" height="100%"     gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)">
                  <v-container align-center>
                    <v-layout row wrap>
                      <v-flex md12 xs12 style="height: auto">
                        <v-btn
                          style="height: auto"
                          dark
                          icon
                        >
                          <v-icon size="100px">mdi-code-tags</v-icon>
                        </v-btn>
                      </v-flex>
                      <v-flex md12 xs12 white--text>
                        <h2 >Việc làm ngành IT</h2>
                      </v-flex>
                      <v-flex md12 xs12 >
                        <v-btn color="orange" style="color: white"><h4>Tìm ứng viên</h4></v-btn>
                      </v-flex>
                    </v-layout>


                  </v-container>
                </v-img>
              </v-flex>
              <v-flex md4 class="pa-3">
                <v-img  :src="images.main" height="100%"     gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)">
                  <v-container align-center>
                    <v-layout row wrap>
                      <v-flex md12 xs12 style="height: auto;" align="center">
                        <v-btn
                          style="height: auto; "
                          dark
                          icon
                        >
                          <v-icon size="100px">mdi-school</v-icon>
                        </v-btn>
                      </v-flex>
                      <v-flex md12 xs12 white--text>
                        <h2 >Mới tốt nghiệp</h2>
                      </v-flex>
                      <v-flex md12 xs12 >
                        <v-btn color="orange" style="color: white"><h4>Tìm ứng viên</h4></v-btn>
                      </v-flex>
                    </v-layout>


                  </v-container>
                </v-img>
              </v-flex>
            </v-layout>

          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
    <!--    8 công việc đăng gần nhất-->
    <v-card style="background-color:#efebeb">
      <v-container md12 xs12 align-center>
        <h1>Việc làm nổi bật hôm nay</h1>
        <v-layout wrap md12 xs12>
          <template v-for="job in info">
            <v-flex md5 xs12 style="background-color: white" class="ma-3 pa-2" :key="job">
              <v-layout row wrap>
                <v-flex md4>
                  <v-img  :src="images.main"
                          height="100%"></v-img>
                </v-flex>
                <v-flex md1/>
                <v-flex md7>
                  <h3 align-left>
                    {{job.title}}
                  </h3>
                  <h5 align-lef>
                    {{job.companyName}} - {{job.cityName}}
                  </h5>
                  <v-flex align-left>
                    <h4>  <v-btn icon>
                      <v-icon color="orange darken-2" >mdi-coin</v-icon>
                    </v-btn>{{job.salaryTo}} - {{job.salaryFrom}} triệu</h4>
                  </v-flex>
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

  export default {
    name: "JobSeekerMainScreen",
    data : ()=>{ return {
      images : {'main' : require('@/assets/jsmain1.jpg')},
      industries : [ { id: "1", name: "Foo" }, { id: "2", name: "Bar" }, { id: "3", name: "Baka" }, { id: "4", name: "Pig" }, ],
      jobs : [0,1,2,3,4,5,6,7],
      companys : [8,9,10,11,12],
      icon : 'mdi-coin',
      info : null,

      searchValue: '',
      searchIndustry: '',
      searchCity: '',
      searchAPI: [],
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

      startSearch(){
        sessionStorage.setItem("skill", this.searchValue);
        sessionStorage.setItem("job", this.searchIndustry);
        sessionStorage.setItem("location", this.searchCity);
        this.$router.push('/tim-kiem');
      }
    },
    mounted () {
      Axios
        .get('http://10.82.139.57:8080/job/getTop8')
        .then(response => (this.info = response.data))
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
