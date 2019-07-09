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
<!--              <v-card class="pa-3 mt-2">-->
<!--                <v-layout row wrap>-->
<!--                  <v-flex md12 sm12 xs12>-->
<!--                    <v-switch v-model="isActive" class="pl-3">-->
<!--                      <template v-slot:label>-->
<!--                        <div v-if="isActive"> Trạng thái tìm việc<strong class="primary&#45;&#45;text"> BẬT</strong></div>-->
<!--                        <div v-if="!isActive"> Trạng thái tìm việc <strong class="primary&#45;&#45;text"> TẮT</strong></div>-->
<!--                      </template>-->
<!--                    </v-switch>-->
<!--                  </v-flex>-->
<!--                  <v-flex md12 sm12 xs12>-->
<!--                    <span>Bật tìm việc để nhận được nhiều cơ hội việc làm tốt nhất</span>-->
<!--                  </v-flex>-->

<!--                </v-layout>-->
<!--              </v-card>-->
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
              <Overview></Overview>

            </v-card>
            <v-card flat v-if="i.id === '2'">
              <ListRecruitment></ListRecruitment>
            </v-card>

          </v-tab-item>
        </v-tabs>
      </v-flex>


    </v-layout>
  </v-container>
</template>

<script>

  import Overview from "./Overview";
  import ListRecruitment from "./ListRecruitment";
  export default {
    name: 'DashBoard',
    components: {ListRecruitment, Overview},
    data: function () {
      return{
        active: null,
        isActive: true,

        tab: null,
        menu: [
          {name:'Thống kê', id:'1'},   {name:'Danh sách tin tuyển dụng', id:'2'},
        ],
        tabSub:[

          {name:'Tin đang hiển thị', id:'1'},   {name:'Tin hết hạn / chưa hiển thị', id:'2'},

        ]


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
