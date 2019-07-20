<template>
    <v-flex style="background-color: whitesmoke">
      <v-container>
        <v-layout wrap md12 xs12>
          <template  v-for="job in info">
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
                <v-flex md3 class="pt-3 pr-2">

                    <v-btn style="height: auto"
                           color="warning" outline class="pa-2" block @click="$router.push('/goi-y-CV')">
                      Gợi ý ứng viên
                    </v-btn>
                    <v-btn style="height: auto"
                           color="warning" outline class="pa-2" block  @click="$router.push('/CV-ung-tuyen/'+job.id)">
                      Ứng viên đã ứng tuyển
                    </v-btn>



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
        name: "ListJobPost",
      data :()=>{
        return{
          images : {'main' : require('@/assets/jsmain1.jpg')},
          info:[],
          job:'',
          cities:[],

        }
      },
      mounted () {
        this.userId = this.userId2;
        Axios
          .get(Constants.URL+'/city/getAllCity')
          .then(response => (
            this.cities = response.data.data))
        Axios
          .get(Constants.URL+'/job/list-valid/'+this.userId)
          .then(response => (this.info = response.data.data))
      },
      methods: {
        remove(position){
          this.info.splice(position, 1);
          if (this.info.length === 0) {
            this.btnsubmit = false;
          }
          console.log('delete')
        }
      },
      computed: {
        ...mapGetters('AUTHENTICATION_STORE',{
          email : 'email2',
          roleId: 'roleId2',
          fullName: 'fullName2',
          userId2: 'userId2'
        }),
      },
    }
</script>

<style scoped>

</style>
