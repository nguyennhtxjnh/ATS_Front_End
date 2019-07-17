<template>
  <v-container fluid class="pt-0">
    <v-layout row wrap align-right>
      <v-flex xs12 class="mb-5">
        <h2>Tất Cả Công Việc</h2>
      </v-flex>
      <v-flex xs12>

              <v-flex d-flex xs5>
                <v-text-field
                  v-model="search"
                  append-icon="search"
                  label="Tìm kiếm theo tiêu đề hoặc công ty"
                  single-line
                  hide-details
                  outline
                  class="mb-3"
                ></v-text-field>


              <v-flex xs2>
                <v-btn style="height: 56px; position: relative; bottom: 5px" color="primary" @click="getAllJob()">Tìm</v-btn>
              </v-flex>
              </v-flex>



        <!--        <v-text-field-->
<!--          v-model="search"-->
<!--          append-icon="search"-->
<!--          label="Tìm kiếm theo tiêu đề hoặc công ty"-->
<!--          single-line-->
<!--          hide-details-->
<!--          outline-->
<!--          class="mb-3"-->
<!--        ></v-text-field>-->

        <v-data-table
          :items="Job"
          :headers="headers"
          :loading="loading"
          :pagination.sync="pagination"
          :total-items="pagination.totalItems"

          :rows-per-page-text="'Số hàng mỗi trang'"
          :rows-per-page-items="[10, 25, 50, {text: 'Tất cả', value: -1}]"
          :no-data-text="'Không có dữ liệu'"
          :no-results-text="'Không tìm thấy dữ liệu tương ứng'"
          :must-sort="true"
        >

          <template #pageText="{pageStart, pageStop, itemsLength}">
            {{pageStart}} - {{pageStop}} của tổng cộng {{itemsLength}}
          </template>

          <template #items="{item}">
            <td  class="text-xs">{{item.title}}</td>
            <td  class="text-xs">{{item.companyByCompanyId.nameCompany}}</td>
            <td  class="text-xs">{{moment(item.createdDate).format('DD-MM-YYYY')}}</td>
            <td  class="text-xs-left">
              <v-chip color="error" v-if="item.status === 'new'">
                <span style="color: white !important;">Đang chờ duyệt</span>
              </v-chip>
              <v-chip color="success" v-if="item.status === 'approved'">
                <span style="color: white !important;">Đã duyệt</span>
              </v-chip>

            </td>


            <td class="text-xs-left">

              <v-btn
                outline flat fab small color="grey"
                @click="viewInfo(item.id)"
                @click.stop="dialog = true">
                <v-icon>mdi-eye-outline</v-icon>
              </v-btn>

              <v-btn
                outline flat fab small color="primary"
                @click="addStatusId(item.id)"
                @click.stop="dialogStatus = true">
                <v-icon>mdi-check-bold</v-icon>
              </v-btn>

            </td>
          </template>

        </v-data-table>



      </v-flex>
    </v-layout>
    <!--    detailView-->
    <v-dialog
      v-model="dialog"
      max-width="1200px">
      <v-card>
        <v-card-title class="headline"><b>Thông tin công việc</b></v-card-title>

        <v-divider></v-divider>
        <v-card-text>
          <v-container class=" mb-3" fluid grid-list-md style=" border: 1px solid red; border-radius: 5px;">
            <v-layout row wrap>
              <v-flex d-flex xs12 sm6 md3 class="align-center pa-0">
                <v-img src="https://www.seekpng.com/png/detail/25-257121_icon-big-image-png-camera-icon.png"  contain aspect-ratio="2"  v-if="!jobFull.company.logoImg"/>
                <v-img contain :src="jobFull.company.logoImg" aspect-ratio="2" v-if="jobFull.company.logoImg"></v-img>
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
                        <span><b>Khu vực:</b> {{jobFull.city.fullName}} <v-divider vertical class="ml-2 mr-2"></v-divider>
                        <b>Ngày hết hạn nộp:</b> {{jobFull.endDateForApply}}</span>
                      </v-flex>
                      <v-flex d-flex xs12 fill-height>

                      </v-flex>
                    </v-layout>

                  </v-flex>
                </v-layout>

              </v-flex>
            </v-layout>
          </v-container>
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
                              <h4>Quyền lợi ứng viên</h4>
                              <v-flex md12 v-html="jobFull.candidateBenefits" class="pb-3">
                              </v-flex>
                              <h4>Thông tin công việc</h4>
                              <v-flex md12 v-html="jobFull.jobDescription" class="pb-3">
                              </v-flex>
                              <h4>Yêu cầu công việc</h4>
                              <v-flex md12 v-html="jobFull.additionalRequest" class="pb-3">
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
                              <v-flex md12 v-html="jobFull.company.description">

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

                    <!--end card content-->
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-tabs>
          </template>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialog = false">
            Đóng
          </v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- Duyet-->
    <v-dialog
      v-model="dialogStatus"
      max-width="500px">
      <v-card>
        <v-card-title class="headline orange"><b style="color: white">Duyệt công việc</b></v-card-title>

        <v-divider></v-divider>
        <v-card-text>
          <v-flex xs12 class="justify-center align-center"> <p style="text-align: center">Bạn muốn duyệt công việc này</p> </v-flex>
        </v-card-text>

        <v-card-actions class="align-center justify-center">

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialogStatus = false">
            Đóng
          </v-btn>

          <v-btn
            color="error"
            outline=""
            @click="confirmDialog('spam')"
          >
            Báo cáo spam
          </v-btn>

          <v-btn
            color="success"
            @click="confirmDialog('approved')"
          >
            Duyệt
          </v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>
    <!--confirm-->
    <v-dialog
      v-model="dialogConfirm"
      max-width="500px"
      style="height: 200px">
      <v-card>
        <v-card-title class="headline orange"><b style="color: white">Thông báo</b></v-card-title>

        <v-divider></v-divider>
        <v-card-text>
          <v-flex xs12 class="justify-center align-center"> <p style="text-align: center">Bạn có chắc thực hiện thao tác này</p> </v-flex>
        </v-card-text>

        <v-card-actions class="align-center justify-center">

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialogConfirm = false">
            Đóng
          </v-btn>

          <v-btn
            color="success"
            flat="flat"
            @click="changeStatus()"
          >
            Xác Nhận
          </v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-container>
</template>

<script>
  import Axios from 'axios'

  export default {
    name: 'AdminViewAllJob',
    data() {
      return {
        search: '',
        Job: [],
        loading: false,
        dialog: false,
        dialogStatus: false,
        dialogConfirm: false,
        items: [
          'Thông Tin', 'Công Ty',
        ],
        headers: [
          {text: 'Tiêu đề công việc', value: 'title', sortable: false},
          {text: 'Công ty', value: 'companyByCompanyId.nameCompany', sortable: false},
          {text: 'Ngày đăng', value: 'createdDate', sortable: false},
          {text: 'Trạng thái công việc', value: 'status', sortable: false},
          {text: 'Thao tác', sortable: false},
        ],
        pagination: {
          sortBy: 'createdDate',
          descending: true
        },
        jobFull: {
          id : '',
          userId: '',
          companyId:'',
          company: {
            id: '',
            nameCompany: '',
            cityId: '',
            address: '',
            telephoneNumber: '',
            email: '',
            logoImg: '',
            description: '',
            createdDate: '',
            lastModify:'',
            status: '',
            companyindustriesById: []
          },
          title: '',
          cityId:'',
          industryId: '',
          city:{
            id: '',
            fullName: ''},
          address: '',
          joblevelId: '',
          joblevelName: '',
          workingtype: '',
          numberofrecruitment: '',
          salaryFrom: '',
          salaryTo: '',
          yearExperience: '',
          createdDate: '',
          endDateForApply: '',
          jobDescription: '',
          additionalRequest: '',
          candidateBenefits: '',
          status: '',
          listSkillName: [],
          listJobSameCompany: []
        },
        formJobStatusData: {
          id: '',
          status: 'approved'
        },
      }
    },
    methods: {
      addStatusId(id) {
        this.formJobStatusData.id = id;
      },
      confirmDialog(status){
        this.dialogConfirm = true;
        this.formJobStatusData.status = status;
      },
      changeStatus(){
        const url = 'http://localhost:8080/job/changeJobStatus'
        const method = 'POST'
        const data = this.formJobStatusData
        console.log(data)
        Axios({url, method, data})
          .then(response => {
            if(data.status === 'approved'){
              this.$notify({
                group: 'foo',
                type: 'success',
                title: 'Thành công',
                text: 'Duyệt thành công!'
              })
            } else {
              this.$notify({
                group: 'foo',
                type: 'success',
                title: 'Thành công',
                text: 'Báo cáo spam!'
              })
            }
            this.getAllJob();
            this.dialogStatus = false;
            this.dialogConfirm = false;
          })
          .catch(error => {
            console.log(error)
          })
      },
      async viewInfo(id){
        this.loading = true;
        await Axios.get(`http://localhost:8080/job/getJobDetail?id=${id}`)
          .then(response => {
            this.jobFull = response.data.data;
            this.jobFull.createdDate = this.moment(this.jobFull.createdDate).format('DD-MM-YYYY');
            this.jobFull.endDateForApply = this.moment(this.jobFull.endDateForApply).format('DD-MM-YYYY');
          })
          .catch(console.error)
          .finally(() => {
            this.loading = false;
          })
      },
      getAllJob() {
        Axios.get('http://localhost:8080/job/getAllJob?search=' + this.search + '&status=new')
          .then(response => {
            this.Job = response.data.data.content;
            console.log(response)
          })
          .catch(err => console.log(err.response.data))
          .finally(() => this.loading = false);
      },

    },
    watch: {
      pagination() {
        this.getAllJob()
      },
    },
    beforeMount(){

    },
  }
</script>

<style scoped>

</style>
