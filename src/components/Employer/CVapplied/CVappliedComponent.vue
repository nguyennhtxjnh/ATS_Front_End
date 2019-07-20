<template>
  <v-container>
    <v-card class="pa-3">
      <v-card-title>
        <h2 style="color: #ff5e2d ">Các CV đã ứng tuyển</h2>
      </v-card-title>
      <v-divider class="pb-3"></v-divider>
      <v-layout row wrap v-if="cvs.length === 0">
        <v-spacer/>
        <img :src="require('@/assets/empty-product.png')" >
        <v-spacer/>
      </v-layout>

      <template v-for="cv in cvs">

        <v-layout row wrap @click="$router.push('/xem-CV-ung-tuyen/'+cv.id)">
          <v-flex md2 xs3>
            <v-avatar size="150px" align="center">
              <v-img v-bind:src="cv.img"></v-img>
            </v-avatar>
          </v-flex>
          <v-flex md8 xs8>
            <v-layout row wrap>
              <v-flex md8 xs8>
                <h2>{{cv.lastName}} {{cv.firstName}}</h2>
                <v-layout row wrap  >
                <span><i>Học vấn:</i>
                <template v-if="cv.educationsById.length > 0" v-for="edu in cv.educationsById ">
                   Trường {{edu.schoolName}}
                </template>
                </span>
                </v-layout>
                <v-layout row wrap  >
                <span><i>Kinh nghiệm:</i>
                <template v-if="cv.workexperiencesById.length > 0" v-for="edu in cv.workexperiencesById ">
                  Công ty {{edu.companyName}} - chức vụ {{edu.vacancyName}}
                </template>
                </span>
                </v-layout>
<!--                <span><i>Vị trí ứng tuyển:</i> {{cv.industryByIndustryId.name}}</span>-->
<!--                <v-layout row wrap>-->
<!--                  <v-icon class="">mdi-bag-personal</v-icon>-->
<!--                  <span>Quản lý cửa hàng - Cửu hàng điện thoại di động</span>-->
<!--                </v-layout>-->
<!--                <v-layout row wrap>-->
<!--                  <v-icon class="">mdi-bag-personal</v-icon>-->
<!--                  <span>Nhân viên thu hồi nợ qua điện thoại - Công ty tài chính FECredit</span>-->
<!--                </v-layout>-->
<!--                <v-layout row wrap>-->
<!--                  <v-icon class="">mdi-school</v-icon>-->
<!--                  <span>Quản lý cửa hàng - Cửu hàng điện thoại di động</span>-->
<!--                </v-layout>-->
                <v-layout row wrap  >
                  <v-flex md5 xs4 style="border: 2px #2c3e50; border-style: dotted"  class="pa-1 mr-2">
                    <v-icon class="">mdi-map-marker</v-icon>
                    <span>Địa điểm: {{cv.cityByCityId.fullName}}</span>
                  </v-flex>
                <v-spacer/>
                  <v-flex md6 xs4 style="border: 2px #2c3e50; border-style: dotted"  class="pa-1" v-if="cv.yearExperience !== ''">
                    <v-icon class="">mdi-calendar-blank</v-icon>
                    <span>Thời gian làm việc thực tế {{cv.yearExperience}} năm</span>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-spacer/>
              <v-flex md3 xs4>
                <i style="float: right"><v-icon>mdi-update</v-icon>  {{cv.createdDate}}</i>
              </v-flex>
            </v-layout>
            <v-layout row wrap class="mt-3">
              <v-flex md10 xs4 style="border: 2px #2c3e50; border-style: dotted"  class="pa-1">
                <v-icon class="">mdi-star</v-icon>
                <span>Mục tiêu: {{cv.description}}
                </span>
              </v-flex>
            </v-layout>

          </v-flex>
        </v-layout>
        <v-divider class="mt-2 mb-2" v-if=""></v-divider>

      </template>


<!--      page-->
      <v-layout row wrap>
        <v-spacer/>
        <v-flex md8 xs12 >
          <v-pagination
            v-model="page"
            :length="15"
          ></v-pagination>
        </v-flex>
        <v-spacer/>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
  import axios from 'axios';
  import Constants from '@/stores/constant.js'
  export default {
    name: "CVappliedComponent",
    // props: {
    //   jobid: Number
    // },
    data: function ()  {
      return{
        imgURL: '',
        cvs: [],
        page: 1,
        jobid: this.$route.params.jobid,
      }
    }
    ,
    mounted() {
      console.log(this.jobid)
      axios
        .get(Constants.URL+'/apply/cv-applied/'+this.jobid)
        .then(response => {
          this.cvs = response.data.data;
          for(var cv in this.cvs){
            var date = new Date(this.cvs[cv].createdDate);
            // var tmp = date.getDay()

            this.cvs[cv].createdDate = date.toISOString().substr(0, 10);
          }
          this.cvs.sort(function(a, b){return b.id - a.id});
        })

    }
  }
</script>

<style scoped>

</style>

