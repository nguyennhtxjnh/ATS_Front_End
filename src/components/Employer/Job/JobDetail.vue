<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-container fluid fill-height >
    <v-layout align-center justify-center >
      <v-flex xs12 sm12 md10 >
          <!--header title-->
          <v-container class=" mb-3" fluid grid-list-md style="background-color: #efebeb">
            <v-layout row wrap>
              <v-flex d-flex xs12 sm6 md3 class="align-center pa-0">
                <v-img contain src="https://picsum.photos/510/300?random" aspect-ratio="2"></v-img>
              </v-flex>
              <v-flex d-flex xs12 sm6 md6>

                <v-layout row wrap class="pa-0 ma-0">

                  <v-flex d-flex class="pa-0 ma-0">
                    <h1>Job Title Will Stay Here</h1>
                  </v-flex>
                  <v-flex d-flex class="pa-0 ma-0">
                    <v-layout row wrap class="pa-0 ma-0">
                      <v-flex d-flex xs12>
                        <a>Company Will Stay Here</a>
                      </v-flex>
                      <v-flex d-flex xs12>
                        <span>Salary Will Stay Here</span>
                      </v-flex>
                      <v-flex d-flex xs12>
                        <span>View will stay here</span>  <span>Expired Date Here</span>
                      </v-flex>
                      <v-flex d-flex xs12 fill-height>

                      </v-flex>
                    </v-layout>

                  </v-flex>
                </v-layout>

              </v-flex>
              <v-layout xs12 sm6 md3 child-flex text-xs-center>
                <v-flex md12  class="align-center">
                      <v-flex xs12 >
                        <v-btn block color="primary">Nộp Đơn</v-btn>
                      </v-flex>

                      <v-flex xs12 >
                      <v-btn  block outline color="error"><v-icon dark>favorite</v-icon>Lưu Việc Làm</v-btn>
                      </v-flex>

                </v-flex>
              </v-layout>
            </v-layout>
          </v-container>
        <!--end header title-->

<!--        tab-->
        <template >
          <v-tabs
            color="cyan"
            dark
            next-icon="mdi-arrow-right-bold-box-outline"
            prev-icon="mdi-arrow-left-bold-box-outline"
            show-arrows
          >
            <v-tabs-slider color="yellow"></v-tabs-slider>
            <v-tab
              v-for="item in items"
              :key="item"
            >
              {{ item }}
            </v-tab>

            <v-tabs-items>
              <v-tab-item
                v-for="item in items"
                :key="item"
              >
                <v-card flat>
<!--card content-->

<!--                  Thông Tin-->
                  <v-card-text v-if="item === 'Thông Tin'">
                    <v-container fluid fill-height>
                      <v-layout align-center justify-center >
                        <v-flex d-flex md12>

                          <v-flex md8 sm12>
                            a
                          </v-flex>

                          <v-flex md4 sm12>
                            <v-card flat>
                              <v-card-text >
                                <div style="border: 1px solid rgba(0,185,242,.5);" class="pa-3">
                                <v-text-field
                                  class="not-active"
                                  label="Ngày Đăng Tuyển"
                                  value="11/11/1111"
                                  prepend-icon="mdi-calendar-clock"
                                  readonly
                                  color="none"
                                ></v-text-field>
                                <v-text-field class="not-active"
                                  label="Cấp Bậc"
                                  value="Nhân viên"
                                  prepend-icon="mdi-calendar-clock"
                                  readonly
                                  color="none"
                                ></v-text-field>
                                <v-text-field class="not-active"
                                  label="Ngành Nghề"
                                  value="Giáo dục/Đào tạo"
                                  prepend-icon="mdi-calendar-clock"
                                  readonly
                                  color="none"
                                ></v-text-field>
                                <v-text-field class="not-active"
                                  label="Kĩ năng"
                                  value="Telesale Skill, Bán Hàng"
                                  prepend-icon="mdi-calendar-clock"
                                  readonly
                                  color="none"
                                ></v-text-field>
                                <v-text-field class="not-active"
                                  label="Ngôn Ngữ Trình Bày"
                                  value="Bất kỳ"
                                  prepend-icon="mdi-calendar-clock"
                                  readonly
                                  color="none"
                                ></v-text-field>
                                </div>
                              </v-card-text>
                            </v-card>

                          </v-flex>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>
<!--                  End Thông Tin-->

<!--                  Công Ty-->
                  <v-card-text v-if="item === 'Công Ty'">
                    bbbbbbbbbbb
                  </v-card-text>
<!--                  End Công Ty-->

<!--                  Việc Làm Khác Từ Công Ty-->
                  <v-card-text v-if="item === 'Việc Làm Khác Từ Công Ty'">
                    ccccccccccc
                  </v-card-text>
<!--                  End Việc Làm Khác Từ Công Ty-->

<!--                  Khóa Học Phù Hợp-->
                  <v-card-text v-if="item === 'Khóa Học Phù Hợp'">
                    cdddddddddddd
                  </v-card-text>
<!--                  End Khóa Học Phù Hợp-->

<!--end card content-->
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-tabs>
        </template>
<!--     end tab-->

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'JobDetail',
    data: function () {
      return {
        tab: null,
        items: [
          'Thông Tin', 'Công Ty', 'Việc Làm Khác Từ Công Ty', 'Khóa Học Phù Hợp'
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
          'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
          ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi' +
          ' ut aliquip ex ea commodo consequat.'

      }
    },
    methods: {

    },

  }


</script>

<style scoped>

  .not-active {
    pointer-events: none;
    cursor: default;
    text-decoration: none;
    color: black;
  }

</style>
