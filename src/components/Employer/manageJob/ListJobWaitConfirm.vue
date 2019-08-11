<template>
    <v-flex style="background-color: whitesmoke">
      <v-container>

            <v-layout row wrap v-if="info.length === 0">
              <v-spacer/>
              <img :src="require('@/assets/empty-product.png')" height="240px" >
              <v-spacer/>
            </v-layout>

        <v-layout wrap md12 xs12>
          <template  v-for="job in info">
            <v-container md7 xs12 style="background-color: white" class="ma-3 pa-2" >
              <v-layout row wrap @click="viewJobDetail(job.id)">

                  <v-flex md2 xs3 class="pa-2" >
                    <v-img  :src="job.companyLogoImg"
                            height="100%"></v-img>

                  </v-flex>
                  <v-spacer/>
                  <v-flex md5>
                    <h2 style="color: #ff5e2d" align-left>
                      {{job.title}}
                    </h2>
                    <h4 align-lef>


                      {{job.companyName}} - {{job.cityName}}

                    </h4>
                  <v-flex align-left>
                    <span>

                    <v-flex d-flex xs12 v-if="job.salaryTo === 0 && job.salaryFrom > 0">
                      <span> <b>Mức lương: </b> từ {{job.salaryFrom}}đ trở lên</span>
                    </v-flex>
                    <v-flex d-flex xs12 v-if="job.salaryFrom === 0 && job.salaryTo > 0">
                      <span> <b>Mức lương:</b> lên đến {{job.salaryTo}}đ</span>
                    </v-flex>
                    <v-flex d-flex xs12 v-if="job.salaryTo > 0 && job.salaryFrom > 0">
                      <span> <b>Mức lương:</b> từ {{job.salaryFrom}}đ đến {{job.salaryTo}}đ</span>
                    </v-flex>
                    <v-flex d-flex xs12 v-if="job.salaryTo === 0 && job.salaryFrom === 0">
                      <span><b>Mức lương:</b> thương lượng</span>
                    </v-flex>
                    </span>
                  </v-flex>
                </v-flex>
                <v-flex md3 class="pt-3 pr-2">
<!--                    <v-btn style="height: auto"-->
<!--                           color="warning" outline class="pa-2" block @click="$router.push('/goi-y-CV/'+job.id)">-->
<!--                      Gợi ý ứng viên-->
<!--                    </v-btn>-->
<!--                    <v-btn style="height: auto"-->
<!--                           color="warning" outline class="pa-2" block  @click="$router.push('/xem-CV-ung-tuyen/'+job.id)">-->
<!--                      Ứng viên đã ứng tuyển-->
<!--                    </v-btn>-->
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
        name: "ListJobWaitConfirm",
      data :()=>{
        return{
          images : {'main' : require('@/assets/jsmain1.jpg')},
          info:[],
          job:'',
          cities:[],

        }
      },

      methods: {
        viewJobDetail(id){
            const {href} = this.$router.resolve({name: 'editjob', params: {jobid: id}})
          window.open(href, '_blank');
        },
        remove(position){
          this.info.splice(position, 1);
          if (this.info.length === 0) {
            this.btnsubmit = false;
          }
          console.log('delete')
        },
        getComponent(){
          console.log("pót"+this.userId2);
          this.userId = this.userId2;
          Axios
            .get(Constants.URL+'/city/getAllCity')
            .then(response => (
              this.cities = response.data.data))
          if(this.userId != null && this.userId !="" ){
            Axios
              .get(Constants.URL+'/job/getJobByEmployerId?employerId='+this.userId+'&status=new')
              .then(response => (this.info = response.data.data.content))
          }

        }
      },
      mounted(){
        this.getComponent();
      },
      watch:{
        userId2(){
          this.getComponent();
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
