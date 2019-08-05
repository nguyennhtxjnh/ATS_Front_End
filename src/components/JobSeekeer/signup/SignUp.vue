<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>

      <v-flex xs12 sm12 md8>
        <v-card style="border-style: solid; border-color: #ccc; border-width: 1px;" class="elevation-0 border_all">
          <v-toolbar dark color="orange">
            <v-toolbar-title>Đăng Ký</v-toolbar-title>
            <v-spacer></v-spacer>

          </v-toolbar>
          <v-layout row wrap class="mt-4 pa-0 justify-center align-center">
            <g-signin-button id="customBtn" class="customGPlusSignIn"
                             :params="googleSignInParams"
                             @success="onSignInSuccess"
                             @error="onSignInError">
              <span class="icon"></span>
              <span class="buttonText pl-2">Login With Google</span>
            </g-signin-button>

          </v-layout>
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
                                  v-model="formData.password" maxlength="25" hint="Từ 8 đến 25 kí tự" persistent-hint
                                  :rules="[rules.required, rules.counter1, rules.min]"></v-text-field>
                  </v-flex>
                  <v-flex md6 xs12>
                    <v-text-field class="ma-2" prepend-icon="lock" name="Password" label="Nhập Lại Mật Khẩu"
                                  v-model="repassword" type="password" persistent-hint
                                  ></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>


            <v-card-actions class="justify-center mb-4">
              <div class="text-xs-center">
                <v-spacer></v-spacer>
                <v-btn color="orange" style="color: white !important;" type="submit">Đăng Ký</v-btn>
              </div>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
  import Axios from 'axios'
  import Constants from '@/stores/constant.js'

  export default {
    name: 'SignUp',
    data: function () {
      return {
        formData: {
          email : "",
          password  : "",
          fullname  : "",
          roleId  : 1,
          jobLevelID :1,
          cityid : 1,
        },

        repassword: '',
        rules: {
          required: value => !!value || 'Không được để trống ô này.',
          counter: value => value.length <= 40 || 'Tối Đa 40 Kí Tự',
          counter1: value => value.length <= 25 || 'Tối Đa 25 Kí Tự',
          min: v => v.length >= 8 || 'Ít Nhất 8 Kí Tự',
          cemail: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Địa chỉ email không phù hợp.'
          }
        },

        googleSignInParams: {
          client_id: '207353401176-sh8upbbscp26amm6umchu0lhac30unug.apps.googleusercontent.com'
        },

      }
    },
    methods: {
      login: function (email , password) {
          this.$store.dispatch('AUTHENTICATION_STORE/LOGIN1', {email, password})
            .then(() => {
              this.$store.dispatch('AUTHENTICATION_STORE/INIT1')
                .then(() => {
                  this.$router.push('/')
                })
                .catch((error) => {
                  this.$router.push('/dang-nhap');
                });
            })
            .catch(() => {
              this.$notify({
                group: 'foo',
                type: 'error',
                title: 'Thất bại',
                text: 'Tên đăng nhập hoặc mật khẩu không đúng!'
                // text: 'Đã Xảy Ra Lỗi'
              });
            });
      },
      async register () {
        if (this.$refs.form.validate()) {
          if (this.formData.password === this.repassword) {
            const url = Constants.URL+'/user/registration'
            const method = 'POST'
            const data = this.formData
            await Axios({url, method, data})
              .then(response => {
                if (response.data.success == true) {
                  this.$notify({
                    group: 'foo',
                    type: 'success',
                    title: 'Thành Công',
                    text: 'Tạo Tài Khoản Thành Công!'
                  })
                  this.login(this.formData.email , this.formData.password);
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
      async onSignInSuccess (googleUser) {
        // `googleUser` is the GoogleUser object that represents the just-signed-in user.
        // See https://developers.google.com/identity/sign-in/web/reference#users
        const profile = googleUser.getBasicProfile() // etc etc

        const password = "";
        const email = profile.U3;
        const fullname = profile.ig;
        const url = Constants.URL+'/user/registrationGoogle'
        const method = 'POST'
        const data = {
          email : email,
          password  : "",
          fullname  : fullname,
          roleId  : 1,
          jobLevelID :1,
          cityid : 1,
          status: "new",
        }
        await Axios({url, method, data})
          .then(response => {
            this.$store.dispatch('AUTHENTICATION_STORE/LOGINGOOGLE', {email, password})
              .then(() => {
                this.$store.dispatch('AUTHENTICATION_STORE/INIT')
                  .then(() => {
                    googleUser.disconnect()
                    this.$router.push('/')
                  })
                  .catch((error) => {
                    this.$router.push('/dang-nhap')
                  })
              })
              .catch(error => {
                console.log(error);
              })
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



      },
      onSignInError (error) {
        // `error` contains any error occurred.
        console.log('OH NOES', error)
      },
    },
    computed: {}
  }
</script>

<style scoped>
  #customBtn {
    display: inline-block;
    background: white;
    color: #444;
    width: 190px;
    border-radius: 5px;
    border: thin solid #888;
    box-shadow: 1px 1px 1px grey;
    white-space: nowrap;
  }
  #customBtn:hover {
    cursor: pointer;
  }
  span.label {
    font-family: serif;
    font-weight: normal;
  }
  span.icon {
    background: url('../../../assets/g-normal.png') transparent 5px 50% no-repeat;
    display: inline-block;
    vertical-align: middle;
    width: 42px;
    height: 42px;
    border-right: 1px solid #868686;
  }
  span.buttonText {
    display: inline-block;
    vertical-align: middle;
    padding-left: 42px;
    padding-right: 42px;
    font-size: 14px;
    font-weight: bold;
    /* Use the Roboto font that is loaded in the <head> */
    font-family: 'Roboto', sans-serif;
  }
</style>
