<template>
    <v-container class="mt-5">
      <v-layout row wrap>
      <v-spacer/>
      <v-flex md6 xs6>
<v-flex v-if="check === 'true'">
  <h1> Bạn đã xác nhận thành công</h1>
  <span> Hãy <router-link to="/dang-nhap"> Đăng nhập</router-link> với tài khoản vừa được kích hoạt </span>

</v-flex>
        <v-flex v-if="check === 'false'">
          <h1> Token của bạn đã hết hạn hoặc bị hỏng</h1>
          <span> Hãy <router-link to="/dang-ky"> đăng kí</router-link> lại một tài khoản mới </span>
        </v-flex>





      </v-flex>

      <v-spacer/>

    </v-layout>
      <v-layout row wrap>
        <v-spacer/>
<!--        <v-flex md6 xs6>-->
<!--          <img :src="require('@/assets/mail.png')">-->
<!--        </v-flex>-->

        <v-spacer/>

      </v-layout>
    </v-container>
</template>

<script>
  import Axios from 'axios'
  import Constants from '@/stores/constant.js'
    export default {
        name: "CheckEmailSuccessJS",
      data: () => ( {
        token: '',
        check:'',
      }),
      methods:{
          getComponent(){
           this.token =this.$route.params.token;
            if(this.token != null && this.token != ""){
              Axios
                .get(Constants.URL+'/user/confirmUser?token='+ this.token)
                .then(response => {
                      this.check = response

                  }
                )
            }

          }

      },
      mounted() {
          this.getComponent();
      }
    }
</script>

<style scoped>

</style>
