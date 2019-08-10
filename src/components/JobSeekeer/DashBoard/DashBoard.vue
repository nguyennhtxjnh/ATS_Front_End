<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-container fluid fill-height>
    <v-layout row wrap>

      <v-flex xs12 sm12 md3>

<!--        User Card-->
        <template>
          <v-layout align-center justify-center>
            <v-flex md10>
              <v-img :src="require('@/assets/br.jpg')"  height="100px" >
                <v-layout
                  column
                  fill-height class="pt-3"
                >
                  <v-card-title primary-title class="justify-center text-md-center">
                    <div >
                      <h3 class="headline" style="color: white">{{userDetail.fullname}}</h3>
                    </div>
                  </v-card-title>
                </v-layout>
              </v-img>
              <v-card class="pa-3 ">


                <v-card-text class="justify-center text-md-center">
                  <span> {{userDetail.email}}</span><br/>
                  <span> {{userDetail.telephoneNumber}}</span>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </template>
        <!--        End User Card-->

      </v-flex>
<!--      Begin tab-->
      <v-flex xs12 sm12 md9>
        <v-tabs
          fixed-tabs
          v-model="active"
          slider-color="yellow"
        >
          <v-tab
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
              <JobAnnouncement></JobAnnouncement>
            </v-card>
            <v-card flat v-if="i.id === '2'">
              <Profile></Profile>
            </v-card>

          </v-tab-item>
        </v-tabs>
      </v-flex>


    </v-layout>
  </v-container>
</template>

<script>
  import ManageCV from "../manageCV/ManageCV";
  import ApplyManager from "./ApplyManager";
  import JobSaved from "./JobSaved";
  import JobAnnouncement from "./JobAnnouncement";
  import Profile from "./Profile";
  import axios from 'axios'
  import {mapGetters} from 'vuex';
  import Constants from '@/stores/constant.js'
  export default {
    name: 'DashBoard',
    components: {Profile, JobAnnouncement, JobSaved, ApplyManager, ManageCV},
    data: function () {
      return{
        userId:'',
        active: null,
        isActive: true,
        userDetail:'',

        tab: null,
        menu: [
          {name:'Thông Báo Việc Làm', id:'1'},   {name:'Cập nhật thông tin cá nhân', id:'2'}
        ],
      }
    },
    methods:{
      getComponent(){
        if(this.userId1 != null && this.userId1 != ""){
          this.userId = this.userId1;
          axios
            .post(Constants.URL+'/user/findUserByUserId?id='+this.userId)
            .then(response => {
                if(response.data.success === true){
                  this.userDetail = response.data.data;
                }

              }
            )
        }

      }
    },
    mounted(){
      this.getComponent();
    },
    watch:{
      userId1(){
        this.getComponent();
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
  p {
     margin-bottom: 5px;
  }
  .hoverCSSa:hover{
    color: orange !important;
    cursor: pointer;
  }
  .v-divider{
    display: table-row-group !important;
  }
</style>
