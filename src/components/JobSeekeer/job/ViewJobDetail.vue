<template>
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

              <v-layout row wrap class="pa-0 ma-0" >

                <v-flex d-flex class="pa-0 ma-0" md12>
                  <h1>{{jobFull.title}}</h1>
                </v-flex>
                <v-flex d-flex class="pa-0 ma-0" md12>
                  <v-layout row wrap class="pa-0 ma-0">
                    <v-flex d-flex xs12>
                      <span> <b>Công ty:</b> {{jobFull.company.nameCompany}}</span>
                    </v-flex>
                    <v-flex d-flex xs12 v-if="jobFull.salaryTo === 0 && jobFull.salaryFrom > 0">
                      <span> <b>Mức lương: </b> từ {{jobFull.salaryFrom}}đ trở lên</span>
                    </v-flex>
                    <v-flex d-flex xs12 v-if="jobFull.salaryFrom === 0 && jobFull.salaryTo > 0">
                      <span> <b>Mức lương:</b> lên đến {{jobFull.salaryTo}}đ</span>
                    </v-flex>
                    <v-flex d-flex xs12 v-if="jobFull.salaryTo > 0 && jobFull.salaryFrom > 0">
                      <span> <b>Mức lương:</b> từ {{jobFull.salaryFrom}}đ đến {{jobFull.salaryTo}}đ</span>
                    </v-flex>
                    <v-flex d-flex xs12 v-if="jobFull.salaryTo === 0 && jobFull.salaryFrom === 0">
                      <span><b>Mức lương:</b> thương lượng</span>
                    </v-flex>
                    <v-flex d-flex xs12>
<!--                      <span>View will stay here</span> -->
                      <span><b>Ngày hết hạn nộp:</b> {{jobFull.endDateForApply}}</span>
                    </v-flex>
                    <v-flex d-flex xs12 fill-height>

                    </v-flex>
                  </v-layout>

                </v-flex>
              </v-layout>

            </v-flex>
            <v-layout xs12 sm6 md3 child-flex text-xs-center>
              <v-flex md12  class="align-center">
                <v-flex xs12 v-if="roleId === 1">
                  <v-btn block color="primary">Nộp Đơn</v-btn>
                </v-flex>

                <v-flex xs12 v-if="roleId === 1">
                  <v-btn  block outline color="error"><v-icon dark>favorite</v-icon>Lưu Việc Làm</v-btn>
                </v-flex>

              </v-flex>
            </v-layout>
          </v-layout>
        </v-container>
        <!--end header title-->


          <!--        tab-->
            <template  >
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

                <v-tabs-items >
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
                                <h4>Thông tin công việc</h4>
                                <v-flex md12 v-html="jobFull.jobDescription" class="pb-3">
                                </v-flex>
                                <h4>Yêu cầu công việc</h4>
                                <v-flex md12 v-html="jobFull.additionalRequest" class="pb-3">
                                </v-flex>
                                <h4>Quyền lợi ứng viên</h4>
                                <v-flex md12 v-html="jobFull.candidateBenefits" class="pb-3">
                                </v-flex>
                              </v-flex>

                              <v-flex md4 sm12>
                                <v-card flat>
                                  <v-card-text >
                                    <div style="border: 1px solid rgba(0,185,242,.5);" class="pa-3">

                                      <v-text-field class="not-active"
                                                    label="Ngày Đăng Tuyển"
                                                    v-model="jobFull.createdDate"
                                                    prepend-icon="mdi-calendar-clock"
                                                    readonly
                                                    color="none"
                                      ></v-text-field>
                                      <v-text-field class="not-active"
                                                    label="Cấp Bậc"
                                                    v-model="jobFull.joblevelName"
                                                    prepend-icon="mdi-account "
                                                    readonly
                                                    color="none"
                                      ></v-text-field>
                                      <v-text-field class="not-active"
                                                    label="Địa chỉ làm việc"
                                                    v-model="jobFull.address"
                                                    prepend-icon="mdi-map-marker"
                                                    readonly
                                                    color="none"
                                      ></v-text-field>
                                      <v-text-field class="not-active"
                                                    label="Kĩ năng yêu cầu"
                                                    v-model="jobFull.listSkillName"
                                                    prepend-icon="mdi-account-star"
                                                    readonly
                                                    color="none"
                                      ></v-text-field>
                                      <!--                                  <v-text-field class="not-active"-->
                                      <!--                                                label="Ngôn Ngữ Trình Bày"-->
                                      <!--                                                value="Bất kỳ"-->
                                      <!--                                                prepend-icon="mdi-calendar-clock"-->
                                      <!--                                                readonly-->
                                      <!--                                                color="none"-->
                                      <!--                                  ></v-text-field>-->
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
                        <v-container fluid fill-height>
                          <v-layout align-center justify-center >
                            <v-flex d-flex md12>

                              <v-flex md8 sm12>
                                <h4>Thông tin công ty</h4>
                                <v-flex md12>
                                  {{jobFull.company.description}}
                                </v-flex>
                              </v-flex>

                              <v-flex md4 sm12>
                                <v-card flat>
                                  <v-card-text >
                                    <div style="border: 1px solid rgba(0,185,242,.5);" class="pa-3">
                                      <v-text-field class="not-active"
                                                    label="Địa điểm"
                                                    v-model="jobFull.company.address"
                                                    prepend-icon="mdi-map-marker"
                                                    readonly
                                                    color="none"
                                      ></v-text-field>
                                      <v-text-field class="not-active"
                                                    label="Số điện thoại liên hệ"
                                                    v-model="jobFull.company.telephoneNumber"
                                                    prepend-icon="mdi-phone"
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
                      <!--                  End Công Ty-->

                      <!--                  Việc Làm Khác Từ Công Ty-->
                      <v-card-text v-if="item === 'Việc làm khác từ công ty'">
                        <!--        company job-->
                        <v-flex xs12 class="mt-2">
                          <v-data-table
                            :items="jobFull.listJobSameCompany"
                            :loading="loading"
                            :no-data-text="'Không có dữ liệu'"
                            :no-results-text="'Không tìm thấy dữ liệu tương ứng'"
                            :must-sort="true"
                            hide-actions
                            hide-headers
                          >
                            <template #items="{item}">
                              <td class="hoverClass pl-0" >
                                <v-flex xs12 @click="goToJob(item.id)">
                                  <v-container fluid grid-list-md class="pa-0">
                                    <v-layout row wrap >
                                      <v-flex d-flex xs12 md7 >

                                        <v-layout row wrap class="pa-0 ma-0" >

                                          <v-flex d-flex class="pa-0 mt-2" xs12>
                                            <h1 class="titleResult">{{item.title}}</h1>
                                          </v-flex>
                                          <v-flex d-flex class="pa-0 ma-0">
                                            <v-layout row wrap class="pa-0 ma-0">
                                              <v-flex d-flex xs12>
                                                <a style="color: black !important;">{{item.companyName}}</a>
                                              </v-flex>
                                              <v-flex d-flex xs12 v-if="item.salaryTo === 0 && item.salaryFrom > 0">
                                                <span> <b>Mức lương: </b> từ {{item.salaryFrom}}đ trở lên</span>
                                              </v-flex>
                                              <v-flex d-flex xs12 v-if="item.salaryFrom === 0 && item.salaryTo > 0">
                                                <span> <b>Mức lương:</b> lên đến {{item.salaryTo}}đ</span>
                                              </v-flex>
                                              <v-flex d-flex xs12 v-if="item.salaryTo > 0 && item.salaryFrom > 0">
                                                <span> <b>Mức lương:</b> từ {{item.salaryFrom}}đ đến {{item.salaryTo}}đ</span>
                                              </v-flex>
                                              <v-flex d-flex xs12 v-if="item.salaryTo === 0 && item.salaryFrom === 0">
                                                <span><b>Mức lương:</b> thương lượng</span>
                                              </v-flex>
                                              <v-flex d-flex xs12 fill-height>

                                              </v-flex>
                                            </v-layout>

                                          </v-flex>
                                        </v-layout>

                                      </v-flex>
                                    </v-layout>
                                  </v-container>
                                </v-flex>

                              </td>
                            </template>
                          </v-data-table>
<!--                                            <div class="text-xs-center pt-2">-->
<!--                                              <v-pagination v-model="pagination.page" :length="Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)"></v-pagination>-->
<!--                                            </div>-->
                        </v-flex>
                      </v-card-text>
                      <!--                  End Việc Làm Khác Từ Công Ty-->



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
  import Axios from 'axios'
  import {mapGetters} from 'vuex';

  export default {
    name: 'ViewJobDetail',
    data: function () {
      return {
        tab: null,
        loading: false,
        pagination: {},
        items: [
          'Thông Tin', 'Công Ty', 'Việc làm khác từ công ty',
        ],
        jobFull: [],

      }
    },
    props: {
      id: Number,
    },
    methods: {
      goToJob(index){
        this.$router.push(`/thong-tin-cong-viec/${index}`);
        this.$router.go('/thong-tin-cong-viec/' + `${index}`);
      },
      getjob(){

      },
      getJobDetail(){
        this.loading = true;
        Axios.get(Constants.URL+`/job/getJobDetail?id=${+this.id}`)
          .then(response => {
            this.jobFull = response.data.data;
            this.jobFull.createdDate = this.moment(this.jobFull.createdDate).format('DD-MM-YYYY');
            this.jobFull.endDateForApply = this.moment(this.jobFull.endDateForApply).format('DD-MM-YYYY');
            console.log(this.jobFull);
          })
          .catch(console.error)
          .finally(() => {
            this.loading = false;
          })
      },
      formatDate(unix) {
        const date = new Date(unix * 1000); // convert to milliseconds
        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();

        // Check if day or month is only 1 digit
        // this because Moment.js works with 0 leading values
        if (day.toString().length !== 2) day = `0${day}`;
        if (month.toString().length !== 2) month = `0${month}`;

        return `${year}-${month}-${day}`;
      },

    },
    mounted() {
      this.$nextTick(() => {
        this.getJobDetail();
      })
    },
    computed: {
      ...mapGetters('AUTHENTICATION_STORE',{
        email : 'email1',
        roleId: 'roleId1',
        fullName: 'fullName1',
      }),
    },
    watch: {
      pagination() {
        this.getjob();
      }
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
  .hoverClass:hover, titleResult:hover {
    cursor: pointer;
    color: orange;
  }
</style>
