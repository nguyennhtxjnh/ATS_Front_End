<template>
  <v-flex style="background-color: whitesmoke" class="pt-2">
    <v-container>
      <v-card class="pa-3" style="background-color: white">
        <v-card-title>
          <h2 style="color: #ff5e2d ">Các việc của công ty </h2>
        </v-card-title>
        <v-divider class="pb-3"></v-divider>
        <v-layout row wrap v-if="info.length === 0">
          <v-spacer/>
          <img :src="require('@/assets/empty-product.png')" height="240px">
          <v-spacer/>
        </v-layout>
      <v-layout wrap md12 xs12>
        <template v-for="job in info">
          <v-container md7 xs12 style="background-color: white" class="ma-3 pa-2" @click="viewJobDetail(job.id)">
            <v-layout row wrap>
              <v-flex md2 xs3 class="pa-2">
                <v-img  :src="job.companyLogoImg"
                        height="100%"></v-img>

              </v-flex>
              <v-spacer/>
              <v-flex md5>
                <h2 style="color: #ff5e2d" align-left @click="viewJobDetail(job.id)">
                  {{job.title}}
                </h2>
                <h3 align-lef>
                  {{job.companyName}} - {{job.cityName}}
                </h3>
                <v-flex align-left>
                    <span>

                    <v-flex d-flex xs12 v-if="job.salaryTo === 0 && job.salaryFrom > 0">
                      <span> <b>Mức lương: </b> từ {{job.salaryFrom}}đ trở lên</span>
                    </v-flex>
                    <v-flex d-flex xs12 v-if="job.salaryFrom === 0 && job.salaryTo > 0">
                      <span> <b>Mức lương:</b> lên đến {{item.salaryTo}}đ</span>
                    </v-flex>
                    <v-flex d-flex xs12 v-if="job.salaryTo > 0 && job.salaryFrom > 0">
                      <span> <b>Mức lương:</b> từ {{job.salaryFrom}}đ đến {{item.salaryTo}}đ</span>
                    </v-flex>
                    <v-flex d-flex xs12 v-if="job.salaryTo === 0 && job.salaryFrom === 0">
                      <span><b>Mức lương:</b> thương lượng</span>
                    </v-flex>
                    </span>
                </v-flex>

              </v-flex>
              <v-flex md3 class="pt-5">
<!--                <v-btn style="height: auto"-->
<!--                       dark-->
<!--                       icon @click="remove(index)">-->
<!--                  <v-icon color="orange darken-2">mdi-delete</v-icon></v-btn>-->
              </v-flex>
            </v-layout>
          </v-container>
        </template>

      </v-layout>
      </v-card>
    </v-container>
  </v-flex>
</template>

<script>
  import Axios from 'axios'
  import Constants from '@/stores/constant.js'
  import {mapGetters} from 'vuex';
    export default {
        name: "ListJobOfCompany",
      data  : function () {
        return {
          info: '',
          cities: [],
          cvid: this.$route.params.cvid,
          companyid: this.$route.params.companyid


        }
      },
       mounted () {
        this.getComponent();
      },
      watch:{
        userId1(){
          this.getComponent();
        }
      },
      methods: {
        viewJobDetail(id){
          if(this.userId1 != null && this.userId1 != ""){
            this.userId = this.userId1
          }
          else {
            this.userId = 0;
          }
          const {href} = this.$router.resolve({name: 'jobseekerviewjob', params: {id: id, userId: this.userId}})
          window.open(href, '_blank')
        },
        getComponent(){
          this.userId = this.userId1;
          Axios
            .get(Constants.URL+'/city/getAllCity')
            .then(response => (
              this.cities = response.data.data))

          if(this.companyid != null && this.companyid != ""){
            Axios
              .get(Constants.URL+'/job//getJobByCompanyId?companyId='+this.companyid)
              .then(response => {
                if(response.data.success === true){
                  this.info = response.data.data.content;
                  console.log(this.info)
                }
               })
          }


        }
      },
      computed: {
        ...mapGetters('AUTHENTICATION_STORE',{
          email : 'email1',
          roleId: 'roleId1',
          fullName: 'fullName1',
          userId1: 'userId1'
        }),
      },
    }
</script>

<style scoped>

</style>
