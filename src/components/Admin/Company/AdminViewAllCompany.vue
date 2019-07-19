<template>
  <v-container fluid class="pt-0">
    <v-layout row wrap align-right>
      <v-flex xs12 class="mb-5">
        <h2>Tất Cả Công Ty</h2>
      </v-flex>
      <v-flex xs12>
        <v-flex d-flex xs5>
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


<!--          <v-flex xs2>-->
<!--            <v-btn style="height: 56px; position: relative; bottom: 5px" color="primary" @click="getAllCompany()">Tìm</v-btn>-->
<!--          </v-flex>-->
        </v-flex>


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
            <td  class="text-xs">{{item.cityByCityId.fullName}}</td>
            <td  class="text-xs">{{moment(item.createdDate).format('DD-MM-YYYY')}}</td>
            <td  class="text-xs-left">
              <v-chip color="error" v-if="item.status === 'new'">
                <span style="color: white !important;">Đang chờ duyệt</span>
              </v-chip>
              <v-chip color="success" v-if="item.status === 'approved'">
                <span style="color: white !important;">Đã duyệt</span>
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
          <!--          <template v-slot:no-results>-->
          <!--            <v-alert :value="true" color="error" icon="warning">-->
          <!--              Không tìm thấy kết quả cho từ khóa "{{ search }}".-->
          <!--            </v-alert>-->
          <!--          </template>-->
        </v-data-table>



      </v-flex>
    </v-layout>
    <!--    detailView-->
    <v-dialog
      v-model="dialog"
      max-width="1200px">
      <v-card>
        <v-card-title class="headline"><b>Thông tin công ty</b></v-card-title>

        <v-divider></v-divider>
        <v-card-text>
          <v-container class=" mb-3" fluid grid-list-md style=" border: 1px solid red; border-radius: 5px;">
            <v-layout row wrap>
              <v-flex d-flex xs12 sm6 md3 class="align-center pa-0">
                <v-img src="https://www.seekpng.com/png/detail/25-257121_icon-big-image-png-camera-icon.png"  contain aspect-ratio="2"  v-if="!companyDetail.logoImg"/>
                <v-img contain :src="companyDetail.logoImg" aspect-ratio="2" v-if="companyDetail.logoImg"></v-img>
              </v-flex>
              abc
            </v-layout>
          </v-container>
          <!--        tab-->

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

  </v-container>
</template>

<script>
  import Axios from 'axios'

  export default {
    name: 'AdminViewAllCompany',
    data() {
      return {
        search: '',
        Company: [],
        loading: false,
        dialog: false,
        headers: [
          {text: 'Tên công ty', value: 'nameCompany',},
          {text: 'Thành phố', value: 'cityByCityId.fullName', sortable: false},
          {text: 'Ngày tạo', value: 'createdDate',},
          {text: 'Trạng thái công ty', value: 'status', },
          {text: 'Thao tác', sortable: false},
        ],
        pagination: {
          sortBy: 'nameCompany',
          ascending: true
        },
        companyDetail:{
            address: '',
            address: '',
            cityByCityId: {
              fullName: '',
              id: ''
            },
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

      }
    },
    methods: {
       viewInfo(id){
        for (let i = 0; i < this.Company.length; i++){
          if(id === this.Company[i].id){
            this.companyDetail = this.Company[i]
          }
        }
      },
      getAllCompany() {
        this.loading = true;
        Axios.get('http://localhost:8080/company/getCompanyAdmin?search=' + this.search + '&status=')
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

</style>
