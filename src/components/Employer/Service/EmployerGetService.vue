<template>
  <v-container fluid class="pt-5">
    <v-layout row wrap align-right>

      <v-flex xs12 class="align-center justify-center">
        <p class="textCustom text-xs-center"><b>Tất Cả Dịch Vụ</b></p>
      </v-flex>

      <v-flex xs12>
        <v-data-table
          :items="Service"
          :headers="headers"
          :loading="loading"
          :pagination.sync="pagination"
          :total-items="pagination.totalItems"

          hide-actions
          hide-headers

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
            <td  class="text-xs"></td>
            <td  class="text-xs"></td>
            <td  class="text-xs">{{moment().format('DD-MM-YYYY')}}</td>
            <td  class="text-xs-left">
              <v-chip color="success" v-if="item.status === 'new'">
                <span style="color: white !important;">Đang hoạt động</span>
              </v-chip>
              <v-chip color="error" v-if="item.status === 'ban'">
                <span style="color: white !important;">Đã bị khóa</span>
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
                outline flat small color="primary"
                @click="addServiceId(item.id)"
                @click.stop="dialog = true">
                Mua Dịch Vụ
              </v-btn>

            </td>
          </template>

        </v-data-table>
      </v-flex>
    </v-layout>

    <!--    detailView-->
    <v-dialog
      v-model="dialog"
      max-width="500px">
      <v-card>
        <v-card-title class="headline"><b>Đổi trạng thái tài khoản</b></v-card-title>

        <v-divider></v-divider>
        <v-card-text>
          <v-container class=" mb-3" fluid grid-list-md>
            <v-layout row wrap>

              <v-autocomplete
                outline
                v-model="statusChangeSelect"
                :items="statusChange"
                item-text="name"
                item-value="name"
                label="Trạng thái"
              ></v-autocomplete>

            </v-layout>
          </v-container>
        </v-card-text>

        <v-card-actions class="justify-center align-center">

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialog = false">
            Đóng
          </v-btn>

          <v-btn
            color="success"
            @click="changeStatus()">
            Xác nhận
          </v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-container>
</template>

<script>
  import Axios from 'axios'

  export default {
    name: 'EmployerGetService',
    name: 'AdminAllService',
    data() {
      return {
        search: '',
        Service: [],
        loading: false,
        dialog: false,
        headers: [
          {text: 'Email', value: '', },
          {text: 'Họ và tên', value: '', },
          {text: 'Ngày tạo', value: '', },
          {text: 'Trạng thái', value: 'status', },
          {text: 'Thao tác', sortable: false},
        ],
        pagination: {
          sortBy: '',
          descending: true
        },
        formServiceStatusData: {
          id: '',
          status: ''
        },
      }
    },
    methods: {
      async viewInfo(id){
        this.loading = true;
        await Axios.get(`http://localhost:1122/job/getJobDetail?id=${id}`)
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
      addServiceId(id){
        this.formAccountStatusData.id = id;
      },
      changeStatus(){
        if(this.statusChangeSelect === "Đang hoạt động") this.statusChangeSelect = "new";
        if(this.statusChangeSelect === "Đã bị khóa") this.statusChangeSelect = "ban";
        this.formAccountStatusData.status = this.statusChangeSelect;
        const url = 'http://localhost:8080//'
        const method = 'POST'
        const data = this.formAccountStatusData
        console.log(data)
        Axios({url, method, data})
          .then(response => {
            if(response.data.success === true){
              this.$notify({
                group: 'foo',
                type: 'success',
                title: 'Thành công',
                text: 'Đổi trạng thái thành công!'
              })
              this.dialog = false;
              this.statusChangeSelect = "Đang hoạt động"
              this.getAllAccount();
            } else {
              this.$notify({
                group: 'foo',
                type: 'error',
                title: 'Lỗi',
                text: 'Đổi trạng thái thất bại!'
              })
            }



          })
          .catch(error => {
            console.log(error)
          })
      },
      getAllService() {
        Axios.get('http://localhost:1122/user/getAllUser?search=' + this.search + '&status=')
          .then(response => {
            if(response.data.data !== null){
              this.Service = response.data.data.content;
              console.log(response)
            }else {
              this.Service = []
            }
          })
          .catch(err => console.log(err.response.data))
          .finally(() => this.loading = false);
      },
      createService(){

      }
    },
    watch: {
      pagination() {
        this.getAllService()
      },
    },
    beforeMount(){

    },
  }
</script>

<style scoped>
  .textCustom {
    color: #ff5e2d;
    font-size: 30px;
  }
  .btnCustom {
    background-color: #ff5e2d;
    color: white;
  }
</style>
