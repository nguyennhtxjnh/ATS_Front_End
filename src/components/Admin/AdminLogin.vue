<template >
  <v-app >
  <v-container fluid class="cusI pa-0 ma-0" >
    <div style="height: 100%; width: 100%; background-image: url('https://www.expatica.com/uk/wp-content/uploads/sites/10/2014/05/Find-a-job-1.jpg'); position: fixed; text-align: center;  z-index: 0;">
    </div>
    <div style="height: 100%; width: 100%; background-color: black; opacity: 0.5; position: fixed; text-align: center;  z-index: 0;">
    </div>
    <v-layout row wrap align-right class="justify-center pa-5">
      <v-flex xs12 sm8 md4 class="pt-5">
        <v-card style="border-style: solid; border-color: #ccc; border-width: 1px;" class="elevation-0 border_all">
          <v-toolbar dark color="warning">
            <v-toolbar-title>Đăng Nhập </v-toolbar-title>
            <v-spacer></v-spacer>

          </v-toolbar>
          <v-form @submit.prevent="login" ref="form">
            <v-card-text >
              <v-text-field class="ma-2" prepend-icon="person" name="Email" label="Email" maxlength="40" v-model="loginEmail" type="text" :rules="[rules.required, rules.counter, rules.email]"></v-text-field>
              <v-text-field class="ma-2" prepend-icon="lock" name="Password" label="Mật Khẩu" maxlength="40" v-model="loginPassword" type="password" :rules="[rules.required, rules.counter]"></v-text-field>
            </v-card-text>
<!--            <v-card-text>-->
<!--              <p class="text-sm-left">Chưa có tài khoản đăng nhập?<a @click="$router.push('/admin-signup')"> Tạo ngay.</a>-->
<!--              </p>-->
<!--            </v-card-text>-->

            <v-card-actions class="justify-center mb-4">
              <div class="text-xs-center">
                <v-spacer></v-spacer>
                <v-btn type="submit" color="warning" :loading="loading" >Đăng nhập</v-btn>
              </div>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>

  </v-container>
  </v-app>
</template>

<script>
  import {mapState} from 'vuex';
  export default {
    name: 'AdminLogin',
    data: function () {
      return{
        loginEmail: "",
        loginPassword: "",
        loading: false,
        rules: {
          required: value => !!value || 'Không được để trống ô này.',
          counter: value => value.length <= 40 || 'Tối Đa 40 Kí Tự',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Địa chỉ email không phù hợp.'
          }
        },
      }
    },
    computed: {
      ...mapState('AUTHENTICATION_STORE', {
        loading: state => state.status === 'loading',
      })
    },
    methods: {
      login: function () {
        this.loading = true;
        if(this.$refs.form.validate()){
          const email = this.loginEmail;
          const password = this.loginPassword;
          this.$store.dispatch('AUTHENTICATION_STORE/LOGIN3', {email, password})
            .then(() => {

              this.$store.dispatch('AUTHENTICATION_STORE/INIT3')
                .then(() => {
                  this.$router.push('/admin');
                })
                .catch((error) => {
                  this.$router.push('/admin-login');
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
              this.loading = false
            });
        }

      }
    },
  }
</script>

<style scoped>
  .cusI {
    position: relative;
    bottom: 60px;
  }
</style>
