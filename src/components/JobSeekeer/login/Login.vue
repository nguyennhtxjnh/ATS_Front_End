<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>

      <v-flex xs12 sm8 md4>
        <v-card style="border-style: solid; border-color: #ccc; border-width: 1px;" class="elevation-0 border_all">
          <v-toolbar dark color="orange">
            <v-toolbar-title>Đăng Nhập</v-toolbar-title>
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

          <v-form @submit.prevent="login" ref="form">

            <v-card-text>
              <v-text-field class="ma-2" prepend-icon="person" name="Email" label="Email" maxlength="40"
                            v-model="loginEmail" type="text"
                            :rules="[rules.required, rules.counter, rules.email]"></v-text-field>
              <v-text-field class="ma-2" prepend-icon="lock" name="Password" label="Mật Khẩu" maxlength="40"
                            v-model="loginPassword" type="password"
                            :rules="[rules.required, rules.counter]"></v-text-field>
            </v-card-text>
            <!--          <v-card-actions>-->
            <!--            <v-btn color="error" style="width: 100%">Gmail</v-btn>-->
            <!--          </v-card-actions>-->
            <v-card-text>
              <p class="text-sm-left">Chưa có tài khoản đăng nhập?<a @click="$router.push('/dang-ky')"> Tạo ngay.</a>
              </p>
            </v-card-text>


            <v-card-actions class="justify-center mb-4">
              <div class="text-xs-center">
                <v-spacer></v-spacer>
                <v-btn type="submit" color="orange" style="color: white !important;" :loading="loading">Đăng nhập</v-btn>
              </div>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
  import {mapState} from 'vuex'
  import Axios from 'axios'

  export default {
    name: 'Login',
    data: function () {
      return {
        loginEmail: '',
        loginPassword: '',
        rules: {
          required: value => !!value || 'Không được để trống ô này.',
          counter: value => value.length <= 40 || 'Tối Đa 40 Kí Tự',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Địa chỉ email không phù hợp.'
          }
        },

        googleSignInParams: {
          client_id: '207353401176-sh8upbbscp26amm6umchu0lhac30unug.apps.googleusercontent.com'
        }

      }
    },
    computed: {
      ...mapState('AUTHENTICATION_STORE', {
        loading: state => state.status === 'loading',
      })
    },
    methods: {
      login: function () {
        if (this.$refs.form.validate()) {
          const email = this.loginEmail
          const password = this.loginPassword
          this.$store.dispatch('AUTHENTICATION_STORE/LOGIN', {email, password})
            .then(() => {

              this.$store.dispatch('AUTHENTICATION_STORE/INIT')
                .then(() => {
                  this.$router.push('/')
                })
                .catch((error) => {
                  this.$router.push('/dang-nhap')
                })

            })
            .catch(() => {
              this.$notify({
                group: 'foo',
                type: 'error',
                title: 'Thất bại',
                text: 'Tên đăng nhập hoặc mật khẩu không đúng!'
                // text: 'Đã Xảy Ra Lỗi'
              })
            })
        }
      },
      async onSignInSuccess (googleUser) {
        // `googleUser` is the GoogleUser object that represents the just-signed-in user.
        // See https://developers.google.com/identity/sign-in/web/reference#users
        const profile = googleUser.getBasicProfile() // etc etc
        console.log(profile.U3 + ", " + profile.ig)

        const password = "";
        const email = profile.U3;
        const fullname = profile.ig;
        const url = 'http://localhost:8080/user/registrationGoogle'
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
      }
    },
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
