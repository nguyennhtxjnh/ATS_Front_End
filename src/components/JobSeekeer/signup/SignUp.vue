<template>
  <!--  <v-container>-->
  <!--    <v-layout>-->
  <!--      <v-form>-->
  <!--        <v-text-field-->
  <!--          v-model="abc"-->
  <!--          label="Ten dang nhap"-->
  <!--          clearable-->
  <!--        ></v-text-field>-->
  <!--        <v-btn @click="ala">-->

  <!--        </v-btn>-->
  <!--        <template v-for="job in jobs"-->
  <!--        >-->
  <!--          <v-text-field v-model="job.name" @click="`routers.push(detail/${job.id})`"></v-text-field>-->
  <!--          <v-text-field v-model="job.location"></v-text-field>-->
  <!--        </template>-->
  <!--      </v-form>-->
  <!--    </v-layout>-->
  <!--  </v-container>-->

  <v-container fluid fill-height>
    <v-layout align-center justify-center>

      <v-flex xs12 sm12 md8>
        <v-card style="border-style: solid; border-color: #ccc; border-width: 1px;" class="elevation-0 border_all">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Đăng Kí</v-toolbar-title>
            <v-spacer></v-spacer>

          </v-toolbar>
          <v-form @submit.prevent="register" ref="form">
            <v-card-text>
              <v-container fluid fill-height>
                <v-layout fill-height wrap>
                  <v-flex md6 xs12>
                    <v-text-field class="ma-2" prepend-icon="mail" name="Email" label="Email" v-model="formData.email"
                                  type="text" maxlength="40"
                                  :rules="[rules.required, rules.counter, rules.cemail]"></v-text-field>
                  </v-flex>
                  <v-flex md6 xs12>
                    <v-text-field class="ma-2" prepend-icon="person" name="Name" label="Họ Và Tên" type="text"
                                  v-model="formData.fullname" maxlength="40"
                                  :rules="[rules.required, rules.counter]"></v-text-field>
                  </v-flex>
                  <v-flex md6 xs12>
                    <v-text-field class="ma-2" prepend-icon="lock" name="Password" label="Mật Khẩu" type="password"
                                  v-model="formData.password" maxlength="40"
                                  :rules="[rules.required, rules.counter]"></v-text-field>
                  </v-flex>
                  <v-flex md6 xs12>
                    <v-text-field class="ma-2" prepend-icon="lock" name="Password" label="Nhập Lại Mật Khẩu"
                                  v-model="repassword" type="password" maxlength="40"
                                  :rules="[rules.required, rules.counter]"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
              <v-alert v-model="alert" dismissible transition="scale-transition">
                Đăng kí thất bại
              </v-alert>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn color="error" style="width: 30%">Đăng Nhập Với Google <v-icon right dark>mail</v-icon></v-btn>

            </v-card-actions>

            <v-card-actions class="justify-center mb-4">
              <div class="text-xs-center">
                <v-spacer></v-spacer>
                <v-btn color="primary" type="submit">Đăng Kí</v-btn>
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
        alert: false,
        formData: {
          email : "",
          password  : "",
          fullname  : "",
          roleId  : 1,
          jobLevelID :1,
          cityid : 1,
        },

        dialog: false,
        repassword: '',
        rules: {
          required: value => !!value || 'Không được để trống ô này.',
          counter: value => value.length <= 40 || 'Tối Đa 40 Kí Tự',
          cemail: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Địa chỉ email không phù hợp.'
          }
        },
      }
    },
    methods: {
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
                  this.$router.push('/dang-nhap')
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
      }
    },
    computed: {}
  }
</script>

<style scoped>

</style>
