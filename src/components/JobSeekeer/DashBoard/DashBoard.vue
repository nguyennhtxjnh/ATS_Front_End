<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-container fluid fill-height>
    <v-layout row wrap>

      <v-flex xs12 sm12 md3>

<!--        User Card-->
        <template>
          <v-layout align-center justify-center mt-2>
            <v-flex md10>
              <v-card class="pa-3 ">
                <v-card-title primary-title class="justify-center text-md-center">
                  <div>
                    <h3 class="headline mb-0">User Name Here</h3>
                    <p>Sinh viên</p>
                    <p>Mới tốt nghiệp</p>
                    <p>Công ty gần đây</p>
                    <p>Bằng cấp mới nhất</p>
                  </div>
                </v-card-title>

                <v-card-actions class="justify-center">
                  <v-btn flat color="orange" class="v-btn--outline">Cập Nhật Hồ Sơ</v-btn>
                </v-card-actions>
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
              <ManageCV></ManageCV>
            </v-card>
            <v-card flat v-if="i.id === '3'">
              <JobSaved></JobSaved>
            </v-card>
            <v-card flat v-if="i.id === '4'">
              <ApplyManager></ApplyManager>
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
  export default {
    name: 'DashBoard',
    components: {JobAnnouncement, JobSaved, ApplyManager, ManageCV},
    data: function () {
      return{
        active: null,
        isActive: true,

        tab: null,
        menu: [
          {name:'Thông Báo Việc Làm', id:'1'},   {name:'Quản Lý Hồ Sơ', id:'2'},
          {name:'Việc làm đã lưu', id:'3'},{name:'Việc làm đã ứng tuyển', id:'4'}
        ],


      }
    }
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
