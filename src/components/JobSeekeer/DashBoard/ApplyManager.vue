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
                <h4>Trạng thái: <i>đã xem</i></h4>
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
        name: "ApplyManager",
      data :()=>{
        return{
          images : {'main' : require('@/assets/jsmain1.jpg')},
          info:'',
          cities:[],
          userId:'',

        }
      },
      methods:{
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
        getInit(){
          this.userId = this.userId1;
          console.log(this.userId)
          if(this.userId != null && this.userId != ""){
            Axios
              .get(Constants.URL+'/apply/list-applied/'+this.userId)
              .then(response => {
                this.info = response.data.data
              console.log(this.info)})
          }
          Axios
            .get(Constants.URL+'/city/getAllCity')
            .then(response => (
              this.cities = response.data.data))

          // this.$nextTick(() => {
          //   // this.getComponent();
          // })
        }
      },
      mounted () {
        this.getInit();
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
