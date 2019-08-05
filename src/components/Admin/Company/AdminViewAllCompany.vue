<template>
  <v-container fluid class="pt-0">
    <v-layout row wrap align-right>

      <v-flex xs12>
        <v-container fluid class="pt-0">
          <v-layout row wrap align-right>
            <v-flex xs7>
              <h2 class="textCustom">Tất Cả Công Ty</h2>
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
                @input="getAllCompany()"
                class="mb-3"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>

      <v-flex xs12>
        <v-data-table
          :items="Company"
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
            <td  class="text-xs">{{item.nameCompany}}</td>
            <td  class="text-xs">{{item.usersEmail}}</td>
            <td  class="text-xs">{{item.cityName}}</td>
            <td  class="text-xs">{{moment(item.createdDate).format('DD-MM-YYYY')}}</td>
            <td  class="text-xs-left">
              <v-chip color="error" v-if="item.status === 'new'">
                <span style="color: white !important;">Đang chờ duyệt</span>
              </v-chip>
              <v-chip color="success" v-if="item.status === 'approved'">
                <span style="color: white !important;">Đã duyệt</span>
              </v-chip>
              <v-chip color="error" v-if="item.status === 'ban'">
                <span style="color: white !important;">Đã cấm</span>
              </v-chip>
              <v-chip color="grey" v-if="item.status === 'deny'">
                <span style="color: white !important;">Từ chối duyệt</span>
              </v-chip>

            </td>


            <td class="text-xs-left">

              <!--              <v-btn outline flat fab small @click="viewInfo(item.id)" color="grey">-->
              <!--                <v-icon>mdi-eye-outline</v-icon>-->
              <!--              </v-btn>-->
              <v-btn
                outline flat fab small color="grey"
                @click="viewInfo(item.id)"
                @click.stop="dialog = true">
                <v-icon>mdi-eye-outline</v-icon>
              </v-btn>

            </td>
          </template>

        </v-data-table>

      </v-flex>

    </v-layout>
    <!--    detailView-->
    <v-dialog
      v-model="dialog"
      max-width="900px">
      <v-card>
        <v-card-title class="headline"><b>Thông tin công ty</b></v-card-title>

        <v-divider></v-divider>
        <v-card-text>
          <v-container class=" mb-3" fluid grid-list-md style=" border: 1px solid red; border-radius: 5px;">
            <v-layout row wrap>
              <v-flex xs4 class="align-center justify-center" >
<!--                <p class="text-xs-center"><b>Logo Công Ty</b></p>-->
                <v-img src="https://www.seekpng.com/png/detail/25-257121_icon-big-image-png-camera-icon.png"  contain aspect-ratio="2"  v-if="!companyDetail.logoImg"/>
                <v-img contain :src="companyDetail.logoImg" aspect-ratio="2" v-if="companyDetail.logoImg"></v-img>
              </v-flex>
              <v-flex xs8>
                <v-flex xs12><b>Tên công ty:</b> {{companyDetail.nameCompany}}</v-flex>
                <v-flex xs12><b>Thành phố:</b> {{companyDetail.cityName}}</v-flex>
                <v-flex xs12><b>Ngày tạo:</b> {{moment(companyDetail.createdDate).format('DD-MM-YYYY')}}</v-flex>
                <v-flex xs12><b>Email công ty:</b> {{companyDetail.email}}</v-flex>
                <v-flex xs12><b>Email nhà tuyển dụng chính:</b> {{companyDetail.usersEmail}}</v-flex>
                <v-flex xs12><b>Số điện thoại công ty:</b> {{companyDetail.telephoneNumber}}</v-flex>
                <v-flex xs12><b>Thông tin chi tiết:</b> <p style="word-wrap: break-word;" v-html="companyDetail.description"></p></v-flex>
              </v-flex>

            </v-layout>
          </v-container>
          <!--        tab-->

        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            flat="flat"
            color="success"
            @click="addCompanyId(companyDetail.id)"
            @click.stop="dialogBan = true">
            <span>Ban</span>
          </v-btn>
          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialog = false">
            Đóng
          </v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>
    <!--    ban-->
    <v-dialog
      v-model="dialogBan"
      max-width="500px">
      <v-card>
        <v-card-title class="headline orange"><b style="color: white">Ban công ty</b></v-card-title>

        <v-divider></v-divider>
        <v-card-text>
          <v-flex xs12 class="justify-center align-center"> <p style="text-align: center">Bạn muốn cấm công ty này?</p> </v-flex>
        </v-card-text>

        <v-card-actions class="align-center justify-center">

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialogBan = false">
            Đóng
          </v-btn>

          <v-btn
            color="error"
            @click="changeStatus('ban')"
          >
            Cấm
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
    name: 'AdminViewAllCompany',
    data() {
      return {
        search: '',
        Company: [],
        dialogBan: false,
        loading: false,
        dialog: false,
        headers: [
          {text: 'Tên công ty', value: 'nameCompany',},
          {text: 'Email nhà tuyển dụng chính', value: 'usersEmail',},
          {text: 'Thành phố', value: 'cityName', sortable: false},
          {text: 'Ngày tạo', value: 'createdDate',},
          {text: 'Trạng thái công ty', value: 'status', },
          {text: 'Thao tác', sortable: false},
        ],
        pagination: {
          sortBy: 'nameCompany',
          ascending: true
        },
        companyDetail:{
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
        formJobStatusData:{
          id: '',
          status: '',
        },

      }
    },
    methods: {
      addCompanyId(id){
        this.formJobStatusData.id = id;
      },
      changeStatus(status){
        this.formJobStatusData.status = status;
        const url = Constants.URL+'/company/changeCompanyStatus'
        const method = 'POST'
        const data = this.formJobStatusData
        console.log(data)
        Axios({url, method, data})
          .then(response => {
            if(data.status === 'ban'){
              this.$notify({
                group: 'foo',
                type: 'success',
                title: 'Thành công',
                text: 'Cấm công ty thành công!'
              })
            } else {
              // this.$notify({
              //   group: 'foo',
              //   type: 'success',
              //   title: 'Thành công',
              //   text: 'Từ chối duyệt công ty thành công!'
              // })
            }
            this.getAllCompany();
            this.dialogBan = false;
            this.dialog = false;
          })
          .catch(error => {
            console.log(error)
          })
      },
       viewInfo(id){
        for (let i = 0; i < this.Company.length; i++){
          if(id === this.Company[i].id){
            this.companyDetail = this.Company[i]
          }
        }
      },
      getAllCompany() {
        this.loading = true;
        Axios.get(Constants.URL+'/company/getCompanyAdmin?search=' + this.search + '&status=')
          .then(response => {
            this.Company = response.data.data.content;
            console.log(this.Company)
          })
          .catch(err => console.log(err))
          .finally(() => this.loading = false);
      },

    },
    watch: {
      pagination() {
        this.getAllCompany()
      },
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
