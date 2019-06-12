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
    <v-layout align-center justify-center >

      <v-flex xs12 sm8 md4 >
        <v-card style="border-style: solid; border-color: #ccc; border-width: 1px;" class="elevation-0 border_all">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Đăng Kí</v-toolbar-title>
            <v-spacer></v-spacer>

          </v-toolbar>
          <v-card-text >
            <v-form>
              <v-text-field class="ma-2" prepend-icon="mail" name="Email" label="Email" type="text"></v-text-field>
              <v-text-field class="ma-2" prepend-icon="person" name="Name" label="Họ Và Tên" type="text"></v-text-field>
              <v-text-field class="ma-2" prepend-icon="lock" name="Password" label="Mật Khẩu" id="password" type="password"></v-text-field>
              <v-text-field class="ma-2" prepend-icon="lock" name="Password" label="Nhập Lại Mật Khẩu" id="repassword" type="password"></v-text-field>
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
              <v-btn color="primary">Đăng Kí</v-btn>
            </div>
          </v-card-actions>

        </v-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
  import {mapGetters} from 'vuex';
  export default {
    name: 'SignUp',
    data: function(){
      return {
        abc : 'fadfasdfafa',
        jsonData: {
          username: null,
          password: null,
          array: [],
        },
        jobs: [
          {
            id: 1,
            name: 'Front End Dev',
            location: 'HCM',
          },
          {
            id: 2,
            name: 'Back End Dev',
            location: 'HN',
          }
        ],
      }
    },
    methods: {
      ala(){
        console.log(this.abc);
        console.log(this.jsonData.username);
        console.log(this.jsonData.password);
        var newAC =  Object.assign({},this.abc);
        var fasfa = this.abc;
      },
    },
    computed:{}
  }
</script>

<style scoped>

</style>
