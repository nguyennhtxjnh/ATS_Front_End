<template>
  <v-container fluid class="pt-0">
    <v-layout row wrap align-right>

      <v-flex xs12>

        <v-container fluid class="pt-0">
        <v-layout row wrap align-right>
          <v-flex xs7>
            <h2 class="textCustom">Tất cả người dùng</h2>
          </v-flex>
          <v-spacer></v-spacer>
          <v-flex xs3>
            <v-text-field
              v-model="search"
              append-icon="search"
              label="Tìm kiếm theo tên hoặc email"
              single-line
              hide-details
              outline
              @input="getAllAccount()"
              class="mb-3"
            ></v-text-field>
          </v-flex>

          <v-flex xs2 class="pl-2">
            <v-autocomplete
              outline
              v-model="statusSelect"
              :items="status"
              item-text="name"
              item-value="name"
              label="Trạng thái"
            ></v-autocomplete>
          </v-flex>
        </v-layout>
        </v-container>


      </v-flex>
      <v-flex xs12>


        <v-data-table
          :items="Account"
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
            <td  class="text-xs">{{item.email}}</td>
            <td  class="text-xs">{{item.fullName}}</td>
            <td  class="text-xs">{{moment(item.createdDate).format('DD-MM-YYYY')}}</td>
            <td  class="text-xs-left">
              <v-chip color="grey" v-if="item.status === 'new'">
                <span style="color: white !important;">Chưa kích hoạt</span>
              </v-chip>
              <v-chip color="success" v-if="item.status === 'active'">
                <span style="color: white !important;">Đang hoạt động</span>
              </v-chip>
              <v-chip color="error" v-if="item.status === 'ban'">
                <span style="color: white !important;">Đã bị khóa</span>
              </v-chip>
              <v-chip color="error" v-if="item.status === 'active ban'">
                <span style="color: white !important;">Đã bị khóa</span>
              </v-chip>
            </td>


            <td class="text-xs-left">

              <v-btn
                outline flat fab small color="primary"
                @click="addAccountId(item.id)"
                @click.stop="dialog = true">
                <v-icon>mdi-pencil-outline</v-icon>
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
  import Constants from '@/stores/constant.js'

  export default {
    name: 'AdminViewAllAccount',
    data() {
      return {
        search: '',
        tempSearch: '',
        statusSelect: 'Tất cả trạng thái',
        statusChangeSelect: 'Đang hoạt động',
        status: [
          {
            id: 0,
            name: "Tất cả trạng thái"
          },
          {
            id: 1,
            name: "Đang hoạt động"
          },
          {
            id: 2,
            name: "Đã bị khóa"
          },
          {
            id: 3,
            name: "Chưa kích hoạt"
          },
        ],
        statusChange: [
          {
            id: 1,
            name: "Đang hoạt động"
          },
          {
            id: 2,
            name: "Đã bị khóa"
          },
        ],
        Account: [],
        loading: false,
        dialog: false,
        headers: [
          {text: 'Email', value: 'email', },
          {text: 'Họ và tên', value: 'fullName', },
          {text: 'Ngày tạo', value: 'createdDate', },
          {text: 'Trạng thái', value: 'status', },
          {text: 'Thao tác', sortable: false},
        ],
        pagination: {
          sortBy: 'createdDate',
          descending: true
        },
        formAccountStatusData: {
          id: '',
          status: ''
        },
      }
    },
    methods: {
      addAccountId(id){
        this.formAccountStatusData.id = id;
      },
      changeStatus(){

        if(this.statusChangeSelect === "Đang hoạt động") this.statusChangeSelect = "active";
        if(this.statusChangeSelect === "Đã bị khóa") this.statusChangeSelect = "ban";
        this.formAccountStatusData.status = this.statusChangeSelect;
        const url = Constants.URL+'/user/changeUserStatus'
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

      getAllAccount() {
        if(this.statusSelect === "Tất cả trạng thái") this.tempSearch = "";
        if(this.statusSelect === "Đang hoạt động") this.tempSearch = "active";
        if(this.statusSelect === "Đã bị khóa") this.tempSearch = "ban";
        if(this.statusSelect === "Chưa kích hoạt") this.tempSearch = "new";
        Axios.get(Constants.URL+'/user/getAllUser?search=' + this.search + '&status=' + this.tempSearch)
          .then(response => {
            if(response.data.data !== null){
              this.Account = response.data.data.content;
              console.log(response)
            }else {
              this.Account = []
            }
          })
          .catch(err => console.log(err.response.data))
          .finally(() => this.loading = false);
      },

    },
    watch: {
      pagination() {
        this.getAllAccount()
      },
      statusSelect(){
        this.getAllAccount()
      }
    },
    beforeMount(){

    },
  }
</script>

<style scoped>
  .textCustom {
    color: #ff5e2d;
  }
</style>
