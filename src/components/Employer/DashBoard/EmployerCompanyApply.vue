<template>
  <v-container fluid class="pt-0">
    <v-layout row wrap align-right>
      <v-flex xs12 class="mt-5">
        <h2>Những nhà tuyển dụng muốn tham gia</h2>
      </v-flex>
      <v-flex xs12>
        <v-flex d-flex xs5>
          <v-text-field
            v-model="search"
            append-icon="search"
            label="Tìm kiếm theo email"
            single-line
            hide-details
            outline
            @input="getEmployer()"
            class="mb-3"
          ></v-text-field>
        </v-flex>


        <v-data-table
          :items="Employer"
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
            <td  class="text-xs">{{item.userEmail}}</td>
            <td  class="text-xs">{{item.userFullName}}</td>
            <td  class="text-xs">{{moment(item.createdDate).format('DD-MM-YYYY')}}</td>

            <td class="text-xs-left">
              <v-btn
                outline flat fab small color="success"
                @click="addEmployerId(item.userId)"
                @click.stop="dialogStatusApproved = true">
                <v-icon>mdi-check</v-icon>
              </v-btn>

              <v-btn
                outline flat fab small color="error"
                @click="addEmployerId(item.userId)"
                @click.stop="dialogStatusDeny = true">
                <v-icon>mdi-window-close</v-icon>
              </v-btn>

            </td>
          </template>

        </v-data-table>



      </v-flex>
    </v-layout>
    <!-- Duyet-->
    <v-dialog
      v-model="dialogStatusApproved"
      max-width="500px">
      <v-card>
        <v-card-title class="headline orange"><b style="color: white">Duyệt công ty</b></v-card-title>

        <v-divider></v-divider>
        <v-card-text>
          <v-flex xs12 class="justify-center align-center"> <p style="text-align: center">Bạn muốn chấp nhận đơn gia nhập này?</p> </v-flex>
        </v-card-text>

        <v-card-actions class="align-center justify-center">

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialogStatusApproved = false">
            Đóng
          </v-btn>

          <v-btn
            color="success"
            @click="changeStatus('approved')"
          >
            Duyệt
          </v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>
    <!--deny-->
    <v-dialog
      v-model="dialogStatusDeny"
      max-width="500px">
      <v-card>
        <v-card-title class="headline orange"><b style="color: white">Từ chối công ty</b></v-card-title>

        <v-divider></v-divider>
        <v-card-text>
          <v-flex xs12 class="justify-center align-center"> <p style="text-align: center">Từ chối đơn gia nhập?</p> </v-flex>
        </v-card-text>

        <v-card-actions class="align-center justify-center">

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialogStatusDeny = false">
            Đóng
          </v-btn>

          <v-btn
            color="error"
            @click="changeStatus('deny')"
          >
            Từ chối
          </v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-container>
</template>

<script>
  import Axios from 'axios'
  import {mapGetters} from 'vuex';

  export default {
    name: 'employerCompanyApply',
    data() {
      return {
        search: '',
        Employer: [],
        loading: false,
        dialog: false,
        dialogStatusApproved: false,
        dialogStatusDeny: false,
        headers: [
          {text: 'Email', value: 'userEmail',},
          {text: 'Họ và tên', value: 'userFullName',},
          {text: 'Ngày nộp đơn', value: 'createdDate',},
          {text: 'Thao tác', sortable: false},
        ],
        pagination: {
          sortBy: 'createdDate',
          descending: true
        },
        formEmployerStatusData:{
          userId: '',
          status: '',
        },
      }
    },
    methods: {
      addEmployerId(id){
        this.formEmployerStatusData.userId = id;
      },
      changeStatus(status){
        this.formEmployerStatusData.status = status;
        const url = 'http://localhost:1122/employercompany/changeEmployerCompanyStatus'
        const method = 'POST'
        const data = this.formEmployerStatusData
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
                text: 'Từ chối gia nhập thành công!'
              })
            }
            this.getEmployer();
            this.dialogStatusApproved = false;
            this.dialogStatusDeny = false;
          })
          .catch(error => {
            console.log(error)
          })
      },
      getEmployer() {
          this.loading = true;
          if( this.userId2 != null &&  this.userId2 != ""){
          Axios.get('http://localhost:1122/employercompany/getAllEmployerCompanyByStatus?search=' +
            this.search + '&status=onhold&userId=' + this.userId2)
            .then(response => {
              if(response.data.data !== null){
                this.Employer = response.data.data.content;
              } else{
                this.Employer = []
              }
              // console.log(response)
            })
            .catch(err => console.log(err))
            .finally(() => this.loading = false);}
      },
    },
    watch: {


      userId2(){
        this.getEmployer();
      },
      pagination() {
        this.getEmployer()
      },
    },
    computed: {
      ...mapGetters('AUTHENTICATION_STORE',{
        email : 'email2',
        roleId: 'roleId2',
        fullName: 'fullName2',
        userId2: 'userId2',
      }),
    },

  }
</script>

<style scoped>

</style>
