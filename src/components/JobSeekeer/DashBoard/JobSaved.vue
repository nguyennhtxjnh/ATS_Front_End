<template>
  <v-flex style="background-color: whitesmoke">
    <v-container>
    <v-layout row wrap v-if="info.length === 0" class="pa-2">
      <v-spacer/>
      <img :src="require('@/assets/empty-product.png')" height="240px" >
      <v-spacer/>
    </v-layout>
      <v-layout wrap md12 xs12 v-if="info.length !== 0">
        <template v-for="(job, index) in info">
          <v-container md7 xs12 style="background-color: white" class="ma-3 pa-2" >
            <v-layout row wrap>
              <v-flex md2 xs3 class="pa-2 " @click="viewJobDetail(job.id)">
                <v-img  :src="job.companyByCompanyId.logoImg"
                        height="100%"></v-img>

              </v-flex>
              <v-spacer/>
              <v-flex md5>
                <h2 style="color: #ff5e2d" align-left @click="viewJobDetail(job.id)">
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
                <v-flex align-left>
                    <span>

                    <v-flex d-flex xs12 v-if="job.workingType === 'FULLTIME'">
                      <span> <b>Hình thức làm việc: </b> Toàn thời gian</span>
                    </v-flex>
                    <v-flex d-flex xs12 v-if="job.workingType === 'PARTTIME'">
                      <span> <b>Hình thức làm việc:</b> Bán thời gian</span>
                    </v-flex>
                    <v-flex d-flex xs12 v-if="job.workingType === 'INTERN'">
                      <span> <b>Hình thức làm việc:</b> Thực tập</span>
                    </v-flex>

                    </span>
                </v-flex>
              </v-flex>
              <v-flex md3 class="pt-5">
                <v-btn style="height: auto"
                       dark
                       icon @click="remove(index, job.id)">
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
        viewJobDetail(id){
          let route = this.$router.resolve({path: '/thong-tin-cong-viec/'+id});
          window.open(route.href, '_blank');
        },
        remove(position, jobid){
          if(position > -1){
            this.userId = this.userId1;
            Axios
              .post(Constants.URL+'/jobseekerlikejob/uncheck/'+this.userId+'/'+ jobid)
              .then(response => {
                  if(response.data.success === true){
                    this.saved = false;
                    this.$notify({
                      group: 'foo',
                      type: 'success',
                      title: 'Thành công',
                      text: 'Bỏ lưu thành công'
                    })
                  }

                }
              )
            this.info.splice(position, 1);
            if (this.info.length === 0) {
              this.btnsubmit = false;
            }
            console.log('delete')
          }




        },
        getInit(){
          this.userId = this.userId1;
          Axios
            .get(Constants.URL+'/city/getAllCity')
            .then(response => (
              this.cities = response.data.data))
          if(this.userId != null && this.userId != ""){
          Axios
            .get(Constants.URL+'/jobseekerlikejob/list/'+this.userId)
            .then(response => {
              this.info = response.data.data;
              console.log(this.info)
            })}

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
