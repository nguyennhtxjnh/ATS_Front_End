<template>
  <v-container fluid class="pt-0">
    <v-layout row wrap align-center>



      <v-flex xs12 class="pt-5 pb-5">
        <h2 class="textCustom text-xs-center pl-2">Dịch vụ</h2>
      </v-flex>
      <v-flex xs2></v-flex>
      <v-flex xs8 class="align-center justify-center">

        <v-container class="mb-3 bgCustom" fluid grid-list-md >
          <v-layout row wrap>
            <v-flex d-flex xs12 md6>
                <v-flex d-flex class="pa-0 ma-0">
                  <v-layout row wrap class="pa-0 ma-0">
                    <v-flex d-flex xs12>
                     <h2 class="textCustom">Dịch Vụ Đăng Tuyển Cơ Bản</h2>
                    </v-flex>
                    <v-flex xs12 class="pl-3">
                      <v-icon >mdi-checkbox-marked-circle-outline</v-icon><span class="pl-3">Đăng tin tuyển dụng trong vòng 30 ngày</span>
                    </v-flex>
                    <v-flex xs12 class="pl-3">
                      <v-icon >mdi-checkbox-marked-circle-outline</v-icon><span class="pl-3">Tìm kiếm những hồ sơ cho công việc</span>
                    </v-flex>
                    <v-flex  class="pl-3">
                    <v-icon >mdi-checkbox-marked-circle-outline</v-icon><span class="pl-3">Nhận được những hồ sơ ứng tuyển phù hợp với công việc</span>
                  </v-flex>

                  </v-layout>

                </v-flex>
            </v-flex>
            <v-flex xs3></v-flex>
            <v-flex xs3 class="pt-5">
              <v-btn block @click="$router.push('/thanh-toan')" outline color="primary">Mua Dịch vụ</v-btn>
            </v-flex>

          </v-layout>
        </v-container>
      </v-flex>
      <v-flex xs12 class="pt-5 pb-5">
        <h2 class="textCustom text-xs-center pl-2">Những dịch vụ thêm</h2>
      </v-flex>
      <v-container fluid class="pt-0">
        <v-layout row wrap align-center class="justify-center">
          <v-flex md8 xs12>
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
                <td  class="text-xs"><v-flex xs12>{{item.name}}</v-flex></td>
                <td  class="text-xs-center"><v-flex xs12>{{item.price}}</v-flex></td>
                <td class="text-xs-right">
                  <v-flex xs12>
                    <v-btn
                      outline flat fab small color="grey"
                      @click="viewInfo(item.id)"
                      @click.stop="dialog = true">
                      <v-icon>mdi-eye-outline</v-icon>
                    </v-btn>

                    <v-btn
                      outline flat small color="primary"
                      @click="$router.push(`/thanh-toan/${item.id}`)">
                      Mua dịch vụ
                    </v-btn>
                  </v-flex>


                </td>
              </template>

            </v-data-table>
          </v-flex>
        </v-layout>
      </v-container>


    </v-layout>

    <!--    detailView-->
    <v-dialog
      v-model="dialog"
      max-width="500px">
      <v-card>
        <v-card-title class="headline"><b>Thông tin dịch vụ</b></v-card-title>

        <v-divider></v-divider>
        <v-card-text>
          <v-container class=" mb-3" fluid grid-list-md>
            <v-layout row wrap>

              <v-flex xs12><b>Tên dịch vụ: </b> {{formPackDetail.name}}</v-flex>
              <v-flex xs12><b>Thông tin dịch vụ: </b> {{formPackDetail.description}}</v-flex>
              <v-flex xs12><b>Thời hạn dịch vụ cung cấp: </b> {{formPackDetail.duration}} ngày</v-flex>
              <v-flex xs12><b>Giá: </b> {{formPackDetail.price}}</v-flex>
              <v-flex xs12>
                <b>Các chức năng dịch vụ sẽ cung cấp:</b>
                <template v-for="item in formPackDetail.listFunction">
                  <v-flex xs12>
                    {{item}}
                  </v-flex>
                </template>
              </v-flex>

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

        </v-card-actions>
      </v-card>
    </v-dialog>
    <!--    Change Service Status-->
    <v-dialog
      v-model="dialogStatus"
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
            @click="dialogStatus = false">
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
    <!--    Create new service-->
    <v-dialog
      v-model="dialogCreateStatus"
      max-width="800px">

      <v-card>
        <v-form ref="form" @submit.prevent="createService">
          <v-card-title class="headline"><b>Tạo dịch vụ mới</b></v-card-title>

          <v-divider></v-divider>

          <v-card-text>
            <v-container class=" mb-3" fluid grid-list-md>
              <v-layout row wrap class="justify-center align-center">
                <v-flex  xs10>
                  <v-text-field class="ma-2" prepend-icon="mdi-account-badge" name="name" label="Tên dịch vụ" type="text"
                                v-model="formDataServiceCreate.name"
                                :rules="[rules.required]"></v-text-field>
                </v-flex>
                <v-flex  xs10>
                  <v-text-field class="ma-2" prepend-icon="mdi-account-badge" name="info" label="Thông tin dịch vụ" type="text"
                                v-model="formDataServiceCreate.description"
                                :rules="[rules.required]"></v-text-field>
                </v-flex>
                <v-flex  xs10>
                  <v-text-field class="ma-2" prepend-icon="mdi-account-badge" name="duration" label="Thời hạn dịch vụ" type="number"
                                v-model="formDataServiceCreate.duration"
                                :rules="[rules.required]"></v-text-field>
                </v-flex>
                <v-flex  xs10>
                  <v-text-field class="ma-2" prepend-icon="mdi-account-badge" name="price" label="Giá dịch vụ" type="number"
                                v-model="formDataServiceCreate.price"
                                :rules="[rules.required]"></v-text-field>
                </v-flex>

                <v-flex  xs10>
                  <v-autocomplete
                    chips
                    class="ma-2"
                    prepend-icon="mdi-account-badge"
                    multiple
                    v-model="formDataServiceCreate.listFunction"
                    :items="functionAPI"
                    item-text="functionName"
                    item-value="id"
                    label="Các chức năng dịch vụ sẽ cung cấp"
                    :rules="[rules.required]"
                  >
                  </v-autocomplete>
                </v-flex>

              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions class="justify-center align-center">

            <v-btn
              color="green darken-1"
              flat="flat"
              @click="dialogCreateStatus = false">
              Đóng
            </v-btn>

            <v-btn
              color="success"
              type="submit">
              Xác nhận
            </v-btn>

          </v-card-actions>
        </v-form>
      </v-card>

    </v-dialog>

  </v-container>
</template>

<script>
  import Axios from 'axios'

  export default {
    name: 'EmployerGetService',
    data() {
      return {
        search: '',
        Service: [],
        tempSearch: '',
        isUpdating: false,
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
        loading: false,
        dialog: false,
        dialogStatus: false,
        dialogCreateStatus: false,
        headers: [
          {text: 'Tên dịch vụ', value: 'name', sortable: false},
          {text: 'Giá dịch vụ', value: 'price', sortable: false},
          {text: 'Thao tác', sortable: false},
        ],
        rules: {
          noMinus: value => value >= 0 || 'Lương Không Được Nhỏ Hơn 0',
          maxRecruit: value => value <= 20 || 'Số Lượng Tuyển Tối Đa 20 Người',
          minRecruit: value => value > 0 || 'Số Lượng Tuyển Tối Thiểu 1 Người',
          required: value => !!value || 'Không được để trống ô này.',
          counter: value => value.length <= 40 || 'Tối Đa 40 Kí Tự',
          cemail: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Địa chỉ email không phù hợp.'
          }
        },
        pagination: {
          sortBy: 'name',
          ascending: true
        },
        formServiceStatusData: {
          id: '',
          status: ''
        },
        formPackDetail: {
          id: '',
          name: '',
          status: '',
          duration: '',
          description: '',
          createdDate: '',
          price: '',
          functionpackagesById: [
            {
              id: '',
              servicePackageId: '',
              serviceFunctionId: ''
            }
          ],
          receiptsById: []
        },
        formDataServiceCreate:{
          name: '',
          status: 'Active',
          duration: '',
          description: '',
          price: '',
          listFunction: []
        },
        functionAPI: []
      }
    },
    methods: {
      async viewInfo(id){
        this.loading = true;
        await Axios.get(`http://localhost:1122/servicePack/getServicePackDetail?id=${id}`)
          .then(response => {
            this.formPackDetail = response.data.data;
            this.formPackDetail.createdDate = this.moment(this.formPackDetail.createdDate).format('DD-MM-YYYY');
            console.log(this.formPackDetail)
          })
          .catch(console.error)
          .finally(() => {
            this.loading = false;
          })
      },
      addServiceId(id){
        this.formServiceStatusData.id = id;
      },
      getAllService() {
        if(this.statusSelect === "Tất cả trạng thái") this.tempSearch = "";
        if(this.statusSelect === "Đang hoạt động") this.tempSearch = "Active";
        if(this.statusSelect === "Đã bị khóa") this.tempSearch = "Disable";
        Axios.get('http://localhost:1122/servicePack/getAll?search=' + this.search + '&status=Active')
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
    },
    watch: {
      pagination() {
        this.getAllService()
      },
    },
  }
</script>

<style scoped>
  .textCustom {
    color: #ff5e2d;
    font-size: 30px;
  }
  .bgCustom {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-bottom: 4px solid #ff5e2d;
  }
</style>
