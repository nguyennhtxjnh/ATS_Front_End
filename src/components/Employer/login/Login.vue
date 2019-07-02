<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center >

      <v-flex xs12 sm8 md4 >
        <v-card style="border-style: solid; border-color: #ccc; border-width: 1px;" class="elevation-0 border_all">
          <v-toolbar dark color="warning">
            <v-toolbar-title>Đăng Nhập Tuyển Dụng</v-toolbar-title>
            <v-spacer></v-spacer>

          </v-toolbar>
          <v-form @submit.prevent="login" ref="form">
            <v-card-text >
              <v-text-field class="ma-2" prepend-icon="person" name="Email" label="Email" maxlength="40" v-model="loginEmail" type="text" :rules="[rules.required, rules.counter, rules.email]"></v-text-field>
              <v-text-field class="ma-2" prepend-icon="lock" name="Password" label="Mật Khẩu" maxlength="40" v-model="loginPassword" type="password" :rules="[rules.required, rules.counter]"></v-text-field>
            </v-card-text>
            <v-card-text >
              <p class="text-sm-left">Chưa có tài khoản đăng nhập? <a @click="$router.push('/tuyen-dung-dang-ky')"> Tạo ngay.</a></p>
            </v-card-text>



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
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: 'Login',
    data: function () {
      return {
        loginEmail: "",
        loginPassword: "",
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
        if(this.$refs.form.validate()){
          const email = this.loginEmail;
          const password = this.loginPassword;
          this.$store.dispatch('AUTHENTICATION_STORE/LOGIN2', {email, password})
            .then(() => {

              this.$store.dispatch('AUTHENTICATION_STORE/INIT2')
                .then(() => {
                  this.$router.push('/trang-chu-tuyen-dung');
                })
                .catch((error) => {
                  this.$router.push('/tuyen-dung-dang-nhap');
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
        }

      }
    },
  }

</script>

<style scoped>

</style>
