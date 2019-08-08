<template>
    <v-container class="mt-5">
      <v-layout row wrap>
      <v-spacer/>
      <v-flex md6 xs6>
<v-flex v-if="msg === 'Bạn đã kích hoạt thành công tài khoản'">
  <h1> {{msg}}</h1>
 <router-link to="/tuyen-dung-dang-nhap"> Đăng nhập</router-link>
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
        name: "CheckEmailSuccess",
      data: () => ( {
        token: '',
        msg:'',
      }),
      methods:{
          getComponent(){
           this.token =this.$route.params.token;
            if(this.token != null && this.token != ""){
              Axios
                .get(Constants.URL+'/user/confirmUser?token='+ this.token)
                .then(response => {
                      this.msg = response.data

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
