<template>
  <v-container fluid fill-height>
    <v-layout row wrap >
<!--      Profile tab-->
      <v-flex md12>
        <template >
          <v-tabs
            color="orange"
            dark
            next-icon="mdi-arrow-right-bold-box-outline"
            prev-icon="mdi-arrow-left-bold-box-outline"
            show-arrows
          >
            <v-tabs-slider color="cyan"></v-tabs-slider>
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

                  <!--                  Thông tin cá nhân-->
                  <v-card-text v-if="item === 'Thông tin cá nhân'" style="background-color: #edf1f5 !important;">
                    <v-container fluid fill-height >
                      <v-layout align-center justify-center >
                        <v-flex d-flex md12>

                          <v-flex md6 sm12 class="ma-2" >
                            <v-layout>
                              <v-flex md12 >
                                <v-card class="pa-3" >

                                  <v-card-title primary-title >
                                    <h3 class="headline mb-0">Thông tin cá nhân</h3>
                                  </v-card-title>

                                  <v-card-text >
                                    <v-flex md12>
                                      <v-text-field
                                        class="not-active"
                                        label="Ngày Đăng Tuyển"
                                        value="11/11/1111"
                                        prepend-icon="mdi-calendar-clock"
                                        readonly
                                        block
                                        color="none"
                                      ></v-text-field>
                                    </v-flex>
                                    <v-flex md12>
                                      <v-text-field
                                        class="not-active"
                                        label="Ngày Đăng Tuyển"
                                        value="11/11/1111"
                                        prepend-icon="mdi-calendar-clock"
                                        readonly
                                        block
                                        color="none"
                                      ></v-text-field>
                                    </v-flex>
                                    <v-flex md12>
                                      <v-text-field
                                        class="not-active"
                                        label="Ngày Đăng Tuyển"
                                        value="11/11/1111"
                                        prepend-icon="mdi-calendar-clock"
                                        readonly
                                        block
                                        color="none"
                                      ></v-text-field>
                                    </v-flex>
                                  </v-card-text>

                                  <v-card-actions class="justify-center">
                                    <v-btn flat color="orange" class="v-btn--outline">Cập Nhật Hồ Sơ</v-btn>
                                  </v-card-actions>

                                </v-card>
                              </v-flex>
                            </v-layout>
                          </v-flex>

                          <v-flex md6 sm12 class="ma-2" >
                            <v-layout>
                              <v-flex md12 >
                                <v-card class="pa-3" >

                                  <v-card-title primary-title >
                                    <h3 class="headline mb-0">Thông tin công ty</h3>
                                  </v-card-title>

                                  <v-card-text >
                                    <v-flex md12>
                                      <v-text-field
                                        class="not-active"
                                        label="Ngày Đăng Tuyển"
                                        value="11/11/1111"
                                        prepend-icon="mdi-calendar-clock"
                                        readonly
                                        block
                                        color="none"
                                      ></v-text-field>
                                    </v-flex>
                                    <v-flex md12>
                                      <v-text-field
                                        class="not-active"
                                        label="Ngày Đăng Tuyển"
                                        value="11/11/1111"
                                        prepend-icon="mdi-calendar-clock"
                                        readonly
                                        block
                                        color="none"
                                      ></v-text-field>
                                    </v-flex>
                                    <v-flex md12>
                                      <v-text-field
                                        class="not-active"
                                        label="Ngày Đăng Tuyển"
                                        value="11/11/1111"
                                        prepend-icon="mdi-calendar-clock"
                                        readonly
                                        block
                                        color="none"
                                      ></v-text-field>
                                    </v-flex>
                                  </v-card-text>

                                  <v-card-actions class="justify-center">
                                    <v-btn flat color="orange" class="v-btn--outline">Cập Nhật Hồ Sơ</v-btn>
                                  </v-card-actions>

                                </v-card>
                              </v-flex>
                            </v-layout>
                          </v-flex>

                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>

                  <!--                  Thông tin công ty-->
                  <v-card-text v-if="item === 'Thông tin công ty'" style="background-color: #edf1f5 !important;">
                    <v-container fluid fill-height >
                      <v-layout align-center justify-center >
                        <v-flex d-flex md12>

                          <v-flex md6 sm12 class="ma-2" >
                            <v-layout>
                              <v-flex md12 >
                                <v-card class="pa-3" >

                                  <v-card-title primary-title >
                                    <h3 class="headline mb-0">Thông tin công ty</h3>
                                  </v-card-title>

                                  <v-card-text >
                                    <v-flex md12>
                                      <v-text-field
                                        class="not-active"
                                        label="Ngày Đăng Tuyển"
                                        value="11/11/1111"
                                        prepend-icon="mdi-calendar-clock"
                                        readonly
                                        block
                                        color="none"
                                      ></v-text-field>
                                    </v-flex>
                                    <v-flex md12>
                                      <v-text-field
                                        class="not-active"
                                        label="Ngày Đăng Tuyển"
                                        value="11/11/1111"
                                        prepend-icon="mdi-calendar-clock"
                                        readonly
                                        block
                                        color="none"
                                      ></v-text-field>
                                    </v-flex>
                                    <v-flex md12>
                                      <v-text-field
                                        class="not-active"
                                        label="Ngày Đăng Tuyển"
                                        value="11/11/1111"
                                        prepend-icon="mdi-calendar-clock"
                                        readonly
                                        block
                                        color="none"
                                      ></v-text-field>
                                    </v-flex>
                                  </v-card-text>

                                  <v-card-actions class="justify-center">
                                    <v-btn flat color="orange" class="v-btn--outline">Cập Nhật Hồ Sơ</v-btn>
                                  </v-card-actions>

                                </v-card>
                              </v-flex>
                            </v-layout>
                          </v-flex>

                          <v-flex md6 sm12 class="ma-2" >
                            <v-layout>
                              <v-flex md12 >
                                <v-card class="pa-3" >

                                  <v-card-title primary-title >
                                    <h3 class="headline mb-0">Logo</h3>
                                  </v-card-title>

                                  <v-card-text>
                                    <v-img src="https://picsum.photos/510/300?random" aspect-ratio="4" contain></v-img>
                                  </v-card-text>

                                  <v-card-actions class="justify-center">
                                    <v-btn flat color="orange" class="v-btn--outline">Cập Nhật Hồ Sơ</v-btn>
                                  </v-card-actions>

                                </v-card>
                              </v-flex>
                            </v-layout>
                          </v-flex>

                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>
                  <!--                  Các cv đã xem-->
                  <v-card-text v-if="item === 'Các cv đã xem'">
                    ccccccccccc
                  </v-card-text>

                  <!--                  Danh sách dịch vụ-->
                  <v-card-text v-if="item === 'Danh sách dịch vụ'">
                    cdddddddddddd
                  </v-card-text>

                  <!--end card content-->
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-tabs>
        </template>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'DashBoard',
    data: function () {
      return {
        tab: null,
        items: [
          'Thông tin cá nhân', 'Thông tin công ty', 'Các cv đã xem', 'Danh sách dịch vụ'
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
          'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
          ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi' +
          ' ut aliquip ex ea commodo consequat.'

      }
    },
    methods:{

    },
  }
</script>

<style scoped>

</style>
