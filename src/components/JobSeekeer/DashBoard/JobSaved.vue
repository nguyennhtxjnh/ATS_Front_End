<template>
  <v-flex style="background-color: whitesmoke">
    <v-container>
    <v-layout row wrap v-if="info.length === 0">
      <v-spacer/>
      <img :src="require('@/assets/empty-product.png')" >
      <v-spacer/>
    </v-layout>
      <v-layout wrap md12 xs12 v-if="info.length !== 0">
        <template v-for="job in info">
          <v-container md7 xs12 style="background-color: white" class="ma-3 pa-2" >
            <v-layout row wrap>
              <v-flex md2 xs3 class="pa-2">
                <v-img  :src="job.companyByCompanyId.logoImg"
                        height="100%"></v-img>

              </v-flex>
              <v-spacer/>
              <v-flex md5>
                <h2 align-left>
                  {{job.title}}
                </h2>
                <h3 align-lef>
                  <template v-for="city in cities">
                    <v-flex v-if="city.id === job.cityId">
                      {{job.companyByCompanyId.nameCompany}} - {{city.fullName}}
                    </v-flex>
                  </template>
                </h3>
                <v-flex align-left>
                  <h4>  <v-btn icon>
                    <v-icon color="orange darken-2" >mdi-coin</v-icon>
                  </v-btn>{{job.salaryTo}} - {{job.salaryFrom}} triệu</h4>
                </v-flex>
              </v-flex>
              <v-flex md3 class="pt-5">
                <v-btn style="height: auto"
                       dark
                       icon @click="remove(index)">
                  <v-icon color="orange darken-2">mdi-delete</v-icon></v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </template>

      </v-layout>
    </v-container>
  </v-flex>
</template>

<script>
  import Axios from 'axios'
  import Constants from '@/stores/constant.js'
  import {mapGetters} from 'vuex';
    export default {
      name: "JobSaved",
      data :()=>{
        return{
          images : {'main' : require('@/assets/jsmain1.jpg')},
          info:'',
          cities:[],

        }
      },
      mounted () {
        this.getInit();
      },
      methods: {
        remove(position){
          this.jobs.splice(position, 1);
          if (this.jobs.length === 0) {
            this.btnsubmit = false;
          }
          console.log('delete')
        },
        getInit(){
          this.userId = this.userId1;
          Axios
            .get(Constants.URL+'/city/getAllCity')
            .then(response => (
              this.cities = response.data.data))
          Axios
            .get(Constants.URL+'/jobseekerlikejob/list/'+this.userId)
            .then(response => (this.info = response.data.data))
        }
      },
      watch:{
        userId1(){
          this.getInit();

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
