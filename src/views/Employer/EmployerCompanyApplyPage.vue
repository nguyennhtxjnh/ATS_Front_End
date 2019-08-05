<template>
    <EmployerMainLayout>
      <v-flex>
        <v-flex xs12 sm12 md12 >
          <v-tabs
            v-model="active"
            slider-color="yellow"
            grow
          >

            <v-tab
              v-if="roleId === 3"
              fixed
              v-for="tab in menu1"
              :key="tab.id"
            >
              {{ tab.name}}

            </v-tab>

            <v-tab
              v-if="roleId === 2"
              fixed
              v-for="tab in menu"
              :key="tab.id"
              ripple
            >
              {{ tab.name}}

            </v-tab>
            <v-tab-item
              v-for="i in menu"
              :key="i.id"
            >
              <v-card flat v-if="i.id === '1'">
               <CreateCompany v-if="check === false"></CreateCompany>
                <CompanyDetail v-if="check === true && companyStatus !== st " v-bind:company="company" ></CompanyDetail>
                <v-flex v-if="companyStatus === st">
                  <v-card>
                    <v-card-title>

                  <v-layout row wrap class="pa-5">
                    <v-spacer/>
                    <v-flex md4 xs12>
                      <h2 > Đang đợi duyệt vào công ty</h2>
                    </v-flex>
                    <v-spacer/>
                  </v-layout>
                    </v-card-title>
                  </v-card>
                </v-flex>

              </v-card>
              <v-card flat v-if="i.id === '2' && roleId === 2 ">
                <EmployerCompanyApply></EmployerCompanyApply>
              </v-card>

            </v-tab-item>
          </v-tabs>
        </v-flex>
      </v-flex>

    </EmployerMainLayout>
</template>

<script>
  import EmployerMainLayout from '../../layouts/EmployerMainLayout'
  import EmployerCompanyApply from '../../components/Employer/DashBoard/EmployerCompanyApply'
  import CreateCompany from "../../components/Employer/Company/CreateCompany";
  import Axios from 'axios'
  import {mapGetters} from 'vuex'
  import Constants from '@/stores/constant.js'
  import CompanyDetail from "../../components/Employer/Company/CompanyDetail";

  export default {
    name: 'EmployerCompanyApplyPage',
    components: {CompanyDetail, CreateCompany, EmployerCompanyApply, EmployerMainLayout},
    data: function () {
      return{
        check:false,
        formCompany:{
          userId:'',
        },
        companyStatus:'',
        st : "onhold",
        active: null,
        companyId:'',
        tab: null,
        tmp:'',
        menu1:[
          {name:'Quản lý công ty', id:'1'},
        ],
        menu: [
          {name:'Quản lý công ty', id:'1'},
          {name:'Duyệt nhà tuyển dụng', id:'2'}
        ],
      }
    },
    methods : {

       getCompany(){
        console.log(this.formCompany.userId);
         console.log(this.roleId)

         if(this.userId2 != null && this.userId2 != ""){
        const url = Constants.URL+'/employercompany/getCompanyByUserId'
        const method = 'POST'
        const data = this.formCompany
         Axios({url, method, data})
          .then(response => {
            if (response.data.success === true) {
              this.company = response.data.data;
              this.tmp = response.data.data.employercompaniesById;
              for (var i in this.tmp){
                if(this.tmp[i].userId === this.userId2){
                  this.companyStatus = this.tmp[i].status;
                  console.log(this.companyStatus)
                }
              }
              this.check = true;
            } else {

            }
          })
          .catch(error => {
            console.log(error)
            this.$notify({
              group: 'foo',
              type: 'error',
              title: 'Thất Bại',
              text: 'Đã Xảy Ra Lỗi!'
            })
          })
          .finally(() => {

          })}
      },
    },
    mounted () {
      this.formCompany.userId = this.userId2;
      this.getCompany();
    },
    watch:{
      userId2(){

        this.formCompany.userId = this.userId2;
        this.getCompany();
      }
    },
    computed: {
      ...mapGetters('AUTHENTICATION_STORE',{
        email : 'email2',
        roleId: 'roleId2',
        fullName: 'fullName2',
        userId2: 'userId2'
      }),
    }
  }
</script>

<style scoped>

</style>
