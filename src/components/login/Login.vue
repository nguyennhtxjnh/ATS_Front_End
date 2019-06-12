<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center >

      <v-flex xs12 sm8 md4 >
        <v-card style="border-style: solid; border-color: #ccc; border-width: 1px;" class="elevation-0 border_all">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Đăng Nhập</v-toolbar-title>
            <v-spacer></v-spacer>

          </v-toolbar>
          <v-card-text >
            <v-form>
              <v-text-field class="ma-2" prepend-icon="person" name="Email" label="Email" type="text"></v-text-field>
              <v-text-field class="ma-2" prepend-icon="lock" name="Password" label="Mật Khẩu" id="password" type="password"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn color="error" style="width: 100%">Gmail</v-btn>
          </v-card-actions>
          <v-card-text >
            <p class="text-sm-left">Chưa có tài khoản đăng nhập? tạo ngay</p>
          </v-card-text>



          <v-card-actions class="justify-center mb-4">
            <div class="text-xs-center">
            <v-spacer></v-spacer>
            <v-btn color="primary">Đăng Nhập</v-btn>
            </div>
          </v-card-actions>

        </v-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'Login',
    data: function () {
      return {
        loginEmail: null,
        loginPassword: null,
      }
    },
  }

</script>

<style scoped>

</style>
