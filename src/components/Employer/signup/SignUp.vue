<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm12 md8>
        <v-card style="border-style: solid; border-color: #ccc; border-width: 1px;" class="elevation-0 border_all">
          <v-toolbar dark color="warning">
            <v-toolbar-title>Đăng Ký Tuyển Dụng</v-toolbar-title>
            <v-spacer></v-spacer>

          </v-toolbar>
          <v-form @submit.prevent="register" ref="form">
            <v-card-text>
              <v-container fluid fill-height>
                <v-layout fill-height wrap>
                  <v-flex  xs12 class="ma-2">
                    <h2  >Thông Tin Đăng Nhập</h2>
                  </v-flex>

                  <v-flex xs12>
                    <v-text-field class="ma-2" prepend-icon="mail" name="Email" label="Email" v-model="formData.email"
                                  type="text"
                                  :rules="[rules.required, rules.cemail]"></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field class="ma-2" prepend-icon="lock" name="Password" label="Mật Khẩu" type="password"
                                  v-model="formData.password" maxlength="25" hint="Từ 8 đến 25 kí tự" persistent-hint
                                  :rules="[rules.required, rules.min, rules.counter]"></v-text-field>
                  </v-flex>
                  <v-flex  xs12>
                    <v-text-field class="ma-2" prepend-icon="lock" name="Password" label="Nhập Lại Mật Khẩu"
                                  v-model="repassword" type="password" maxlength="25" hint="Từ 8 đến 25 kí tự" persistent-hint
                                  :rules="[rules.required, rules.counter, rules.min]"></v-text-field>
                  </v-flex>

                  <v-flex  xs12 >
                    <h2 class="ma-2" >Thông Tin Nhà Tuyển Dụng</h2>
                  </v-flex>

                  <v-flex  xs12>
                    <v-text-field class="ma-2" prepend-icon="person" name="Name" label="Họ Và Tên" type="text"
                                  v-model="formData.fullname" maxlength="25"
                                  :rules="[rules.required, rules.counter]"></v-text-field>
                  </v-flex>

                  <v-flex  xs12>
                    <v-text-field class="ma-2" prepend-icon="phone" name="phone" label="Số Điện Thoại Cá Nhân" type="number"
                                  v-model="formData.telephoneNumber"
                                  :rules="[rules.required, rules.counter]"></v-text-field>
                  </v-flex>

                  <v-flex  xs12 >
                    <v-select class="ma-2"
                      prepend-icon="mdi-account"
                      :items="chooseGender"
                      v-model="formData.gender"
                      item-text="name"
                      item-value="id"
                      label="Giới Tính"
                      :rules="[rules.required]"
                    ></v-select>
                  </v-flex>

                  <v-flex xs12 >

<!--                      <v-combobox class="ma-2"-->
<!--                        v-model="selectedCompany"-->
<!--                        :items="CompanyAPI"-->
<!--                        :rules="[rules.required]"-->
<!--                        item-text="nameCompany"-->
<!--                        item-id="id"-->
<!--                        prepend-icon="mdi-domain"-->
<!--                        :search-input.sync="search"-->
<!--                        hide-selected-->
<!--                        label="Công Ty"-->
<!--                        small-chips-->
<!--                      >-->
<!--                        <template v-slot:no-data>-->
<!--                          <v-list-tile>-->
<!--                            <v-list-tile-content>-->
<!--                              <v-list-tile-title>-->
<!--                                Không tìm thấy công ty phù hợp "<strong>{{ search }}</strong>". Nhấn <kbd>enter</kbd> để tạo mới công ty-->
<!--                              </v-list-tile-title>-->
<!--                            </v-list-tile-content>-->
<!--                          </v-list-tile>-->
<!--                        </template>-->
<!--                      </v-combobox>-->

                    <v-autocomplete class="ma-2"
                                    :rules="[rules.required]"
                                    v-model="selectedCompany"
                                    prepend-icon="mdi-domain"
                                    :items="CompanyAPI"
                                    item-text="nameCompany"
                                    item-value="id"
                                    label="Công Ty"

                    ></v-autocomplete>

                  </v-flex>

                  <v-flex xs12 >
                    <v-autocomplete class="ma-2"
                      :rules="[rules.required]"
                      v-model="formData.jobLevelID"
                      prepend-icon="mdi-account-badge-horizontal"
                      :items="LevelAPI"
                      item-text="jobLevelName"
                      item-value="id"
                      label="Vị Trí Công Tác"

                    ></v-autocomplete>
                  </v-flex>

                  <v-flex xs12 >
                    <v-text-field class="ma-2" prepend-icon="mdi-account-badge" name="Name" label="Chức Danh Cụ Thể"
                                  type="text"
                                  v-model="formData.vacancyName"
                                  :rules="[rules.required]"></v-text-field>
                  </v-flex>

                  <v-flex xs12>
                    <v-autocomplete class="ma-2"
                                    :rules="[rules.required]"
                                    v-model="formData.cityid"
                                    prepend-icon="mdi-map-marker-radius"
                                    :items="CityAPI"
                                    item-text="fullName"
                                    item-value="id"
                                    label="Nơi Làm Việc"
                                    hint="Chọn Tĩnh, Thành Phố"
                                    persistent-hint

                    ></v-autocomplete>
                  </v-flex>

                  <v-btn color="warning" @click="testCompany">Tét Com</v-btn>

                </v-layout>
              </v-container>
            </v-card-text>


            <v-card-actions class="justify-center mb-4">
              <div class="text-xs-center">
                <v-spacer></v-spacer>
                <v-btn color="warning" type="submit">Hoàn Tất</v-btn>
              </div>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Axios from 'axios'

  export default {
    name: 'SignUp',
    data: function () {
      return {
        chooseGender:['Nam', 'Nữ'],
        selectedCompany: null,
        search: null,

        LevelAPI: [],
        CityAPI: [],
        CompanyAPI: [],
        tmpCompany: [],

        formData: {
          email : "",
          password  : "",
          fullname  : "",
          roleId  : 2,
          cityid : "",
          telephoneNumber: '',
          gender: "",
          jobLevelID : "",
          vacancyName: "",
        },
        repassword: '',

        rules: {
          required: value => !!value || 'Không được để trống ô này.',
          counter: value => value.length <= 25 || 'Tối Đa 25 Kí Tự',
          min: v => v.length >= 8 || 'Ít Nhất 8 Kí Tự',
          cemail: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Địa chỉ email không phù hợp.'
          }
        },
      }
    },
    methods: {
      testCompany(){

        // this.CompanyAPI.forEach((itemX) =>{
        //   this.tmpCompany.push(itemX.id)
        //   this.tmpCompany = [...new Set(this.tmpCompany)];
        // })
        //
        // if(!this.tmpCompany.includes(this.selectedCompany.id)){
        //   this.selectedCompany.id = -1
        // }

        // if(this.selectedCompany === null){
        //   this.selectedCompany = -1
        // }

        console.log(this.selectedCompany);
      },
      register () {
        if (this.$refs.form.validate()) {
          if (this.formData.password === this.repassword) {
            const url = 'http://localhost:8080/user/registration'
            const method = 'POST'
            const data = this.formData
            Axios({url, method, data})
              .then(response => {
                if (response.data.success == true) {
                  this.$notify({
                    group: 'foo',
                    type: 'success',
                    title: 'Thành Công',
                    text: 'Tạo Tài Khoản Thành Công!'
                  })
                  this.$router.push('/tuyen-dung-dang-nhap')
                } else {
                  this.$notify({
                    group: 'foo',
                    type: 'error',
                    title: 'Thất Bại',
                    text: 'Tài Khoản Đã Tồn Tại!'
                  })
                }

              })
              .catch(error => {
                console.log(error)
                this.$notify({
                  group: 'foo',
                  type: 'error',
                  title: 'Thất Bại',
                  text: 'Đã Xảy Ra Lỗi!'
                })
              })
              .finally(() => {

              })
          } else {
            this.$notify({
              group: 'foo',
              type: 'warn',
              title: 'Chú Ý',
              text: 'Mật Khẩu Không Trùng Khớp!'
            })
          }
        }
      },
      getInitData(){
        const url = 'http://localhost:8080/user/getRegisterEmployerComponent';
        const method = 'GET';
        Axios({url, method})
          .then(response => {
            console.log(response);
            if (response.data.success == true) {
              console.log(response)
              this.LevelAPI = response.data.data.level;
              this.CityAPI = response.data.data.city;
              this.CompanyAPI.push({
                id : -1,
                nameCompany : "Khác"
              })
              this.CompanyAPI = this.CompanyAPI.concat(response.data.data.company);

            } else {
              this.$notify({
                group: 'foo',
                type: 'error',
                title: 'Thất Bại',
                text: 'Lấy Component Thất Bại!'
              })
            }

          })
          .catch(error => {
            console.log(error)
            this.$notify({
              group: 'foo',
              type: 'error',
              title: 'Thất Bại',
              text: 'Đã Xảy Ra Lỗi!'
            })
          })
          .finally(() => {

          })
      },
    },
    mounted () {
      this.$nextTick(() => {
        this.getInitData();
      });
    },

  }
</script>


<style scoped>

</style>
