<template>
  <v-container fluid class="pt-0">
    <v-layout row wrap align-right>

      <v-flex xs12>
        <v-container fluid class="pt-0">
          <v-layout row wrap align-right>
            <v-flex xs7>
              <h2 class="textCustom">Tất Cả Phản Hồi</h2>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs5>
              <v-text-field
                v-model="search"
                append-icon="search"
                label="Tìm kiếm theo tên công ty"
                single-line
                hide-details
                outline
                @input="getAllFeedback()"
                class="mb-3"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>

      <v-flex xs12>
        <v-data-table
          :items="feedback"
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
            <td class="text-xs">{{item.companyName}}</td>
            <td class="text-xs">{{item.jobName}}</td>
            <td class="text-xs">{{moment(item.createdDate).format('DD-MM-YYYY')}}</td>
            <td class="text-xs">{{item.description}}</td>

            <td class="text-xs-left">

              <!--              <v-btn outline flat fab small @click="viewInfo(item.id)" color="grey">-->
              <!--                <v-icon>mdi-eye-outline</v-icon>-->
              <!--              </v-btn>-->
              <v-btn v-if="item.isReply === 0"
                outline flat fab small color="blue"
                @click="viewInfo(item.userId, item.jobId)"
                @click.stop="dialog = true">
                <v-icon  >mdi-email-check-outline</v-icon>
              </v-btn>
              <v-btn v-if="item.isReply === 1"
                     outline flat fab small color="grey"
              disabled
              >
                <v-icon  >mdi-email-check-outline</v-icon>
              </v-btn>

            </td>
          </template>

        </v-data-table>

      </v-flex>

    </v-layout>
    <!--    detailView-->
<!--    <v-dialog-->
<!--      v-model="dialog"-->
<!--      max-width="900px">-->
<!--      <v-card>-->
<!--        <v-card-title class="headline"><b>Thông tin công ty</b></v-card-title>-->

<!--        <v-divider></v-divider>-->
<!--        <v-card-text>-->
<!--          <v-container class=" mb-3" fluid grid-list-md style=" border: 1px solid red; border-radius: 5px;">-->
<!--            <v-layout row wrap>-->
<!--              <v-flex xs4 class="align-center justify-center">-->
<!--                &lt;!&ndash;                <p class="text-xs-center"><b>Logo Công Ty</b></p>&ndash;&gt;-->
<!--                <v-img src="https://www.seekpng.com/png/detail/25-257121_icon-big-image-png-camera-icon.png" contain-->
<!--                       aspect-ratio="2" v-if="!companyDetail.logoImg"/>-->
<!--                <v-img contain :src="companyDetail.logoImg" aspect-ratio="2" v-if="companyDetail.logoImg"></v-img>-->
<!--              </v-flex>-->
<!--              <v-flex xs8>-->
<!--                <v-flex xs12><b>Tên công ty:</b> {{companyDetail.nameCompany}}</v-flex>-->
<!--                <v-flex xs12><b>Thành phố:</b> {{companyDetail.cityName}}</v-flex>-->
<!--                <v-flex xs12><b>Ngày tạo:</b> {{moment(companyDetail.createdDate).format('DD-MM-YYYY')}}</v-flex>-->
<!--                <v-flex xs12><b>Email công ty:</b> {{companyDetail.email}}</v-flex>-->
<!--                <v-flex xs12><b>Email nhà tuyển dụng chính:</b> {{companyDetail.usersEmail}}</v-flex>-->
<!--                <v-flex xs12><b>Số điện thoại công ty:</b> {{companyDetail.telephoneNumber}}</v-flex>-->
<!--                <v-flex xs12><b>Thông tin chi tiết:</b>-->
<!--                  <p style="word-wrap: break-word;" v-html="companyDetail.description"></p></v-flex>-->
<!--              </v-flex>-->

<!--            </v-layout>-->
<!--          </v-container>-->
<!--          &lt;!&ndash;        tab&ndash;&gt;-->

<!--        </v-card-text>-->

<!--        <v-card-actions>-->
<!--          <v-spacer></v-spacer>-->
<!--          <v-btn-->
<!--            v-if="companyDetail.status === 'ban'"-->
<!--            flat="flat"-->
<!--            color="green"-->
<!--            @click="addCompanyId(companyDetail.id)"-->
<!--            @click.stop="dialogActive = true">-->
<!--            <span>Kích hoạt</span>-->
<!--          </v-btn>-->
<!--          <v-btn-->
<!--            v-if="companyDetail.status !== 'ban'"-->
<!--            flat="flat"-->
<!--            color="error"-->
<!--            @click="addCompanyId(companyDetail.id)"-->
<!--            @click.stop="dialogBan = true">-->
<!--            <span>Ban</span>-->
<!--          </v-btn>-->
<!--          <v-btn-->
<!--            color="green darken-1"-->
<!--            flat="flat"-->
<!--            @click="dialog = false">-->
<!--            Đóng-->
<!--          </v-btn>-->

<!--        </v-card-actions>-->
<!--      </v-card>-->
<!--    </v-dialog>-->
    <!--    reply-->
    <v-dialog
      v-model="dialog"
      max-width="500px">
      <v-card>
        <v-card-title class="headline orange"><b style="color: white">Trả lời phản hồi</b></v-card-title>

        <v-divider></v-divider>
        <v-card-text>
          <h4>Nội dung</h4>
          <v-form ref="form">
          <v-textarea :rules="[rules.required]" v-model="replyy.description"  name="input-7-1"  hint="Hint text"  outline=""></v-textarea>
          </v-form>
        </v-card-text>

        <v-card-actions class="align-center justify-center">

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="closeD">
            Đóng
          </v-btn>

          <v-btn
            flat="flat"
            color="green darken-1"
            @click="reply()"
          >
            Gửi
          </v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>


  </v-container>
</template>

<script>
  import Axios from 'axios'
  import Constants from '@/stores/constant.js'

  export default {
    name: 'AdminViewFeedBack',
    data() {
      return {
        search: '',
        Company: [],
        dialogActive: false,
        dialogBan: false,
        loading: false,
        dialog: false,
        headers: [
          {text: 'Tên công ty', value: 'companyName',},
          {text: 'Tên việc làm', value: 'jobName', sortable: false},
          {text: 'Ngày tạo', value: 'createdDate',},
          {text: 'Nội dung', value: 'description',},
          {text: 'Phản hồi', sortable: false},
        ],
        pagination: {
          sortBy: 'companyName',
          ascending: true
        },
        rules: {
          required: value => !!value || 'Không được để trống ô này.',},
        replyy:{
          userId:'',
          jobId:'',
          description:''
        },
        tmp:{
          userId:'',
          jobId:'',
          description:''
        },
        feedback:[],
        companyDetail: {
          usersEmail: '',
          address: '',
          cityName: '',
          cityId: '',
          companyindustriesById: '',
          createdDate: '',
          description: '',
          email: '',
          id: '',
          lastModify: '',
          logoImg: '',
          nameCompany: '',
          status: '',
          telephoneNumber: ''
        },
        formJobStatusData: {
          id: '',
          status: '',
        },

      }
    },
    methods: {
      closeD(){
        Object.assign(this.replyy, this.tmp);
        this.dialog = false;
        this.$refs.form.reset()
      },
      reply(){
        if (this.$refs.form.validate()) {
          // console.log('/email/reply?userId=' + this.replyy.userId + '&jobId=' + this.replyy.jobId + '&contain=' + this.replyy.description);
          Axios.get(Constants.URL + '/email/reply?userId=' + this.replyy.userId + '&jobId=' + this.replyy.jobId + '&contain=' + this.replyy.description)
            .then(response => {
              // this.feedback = response.data.data.content;
              this.$notify({
                group: 'foo',
                type: 'success',
                title: 'Thành công',
                text: 'Trả lời phản hồi thành công '
              })
              Object.assign(this.replyy, this.tmp);
              this.getAllFeedback();
              this.$refs.form.reset()
              this.dialog = false;

            })
            .catch(err => console.log(err))

        }

      },
      addCompanyId(id) {
        this.formJobStatusData.id = id;
      },
      changeStatus(status) {
        this.formJobStatusData.status = status;
        const url = Constants.URL + '/company/changeCompanyStatus'
        const method = 'POST'
        const data = this.formJobStatusData
        console.log(data)
        Axios({url, method, data})
          .then(response => {
            if (data.status === 'ban') {
              this.$notify({
                group: 'foo',
                type: 'success',
                title: 'Thành công',
                text: 'Cấm công ty thành công!'
              })
            } else {
              if (data.status === 'approved') {
                this.$notify({
                  group: 'foo',
                  type: 'success',
                  title: 'Thành công',
                  text: 'Kích hoạt công ty thành công!'
                })
              }
              // this.$notify({
              //   group: 'foo',
              //   type: 'success',
              //   title: 'Thành công',
              //   text: 'Từ chối duyệt công ty thành công!'
              // })
            }
            this.getAllFeedback();
            this.dialogActive = false;
            this.dialogBan = false;
            this.dialog = false;
          })
          .catch(error => {
            console.log(error)
          })
      },
      viewInfo(userid, jobid) {
        for ( var i in this.feedback){
          if(this.feedback[i].jobId === jobid){
            this.feedback[i].isReply = 0;
          }

        }
       this.replyy.userId = userid;
       this.replyy.jobId = jobid;
      },
      getAllFeedback() {
        this.loading = true;
        Axios.get(Constants.URL + '/feedback/getAllFeedBack?search=' + this.search )
          .then(response => {
            this.feedback = response.data.data.content;
            console.log( this.feedback)
          })
          .catch(err => console.log(err))
          .finally(() => this.loading = false);
      },

    },
    watch: {
      pagination() {
        this.getAllFeedback()
      },
    },
    beforeMount() {

    },
  }
</script>

<style scoped>
  .textCustom {
    color: #ff5e2d;
  }
</style>
