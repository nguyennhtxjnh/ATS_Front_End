<template>
  <v-flex >
    <v-container >
      <v-layout row wrap >
        <!-- Nhà Tuyển Dụng Xem Hồ Sơ-->
<v-spacer/>
        <v-flex md4 sm12 class="ma-2">
          <v-card sm12 style="height: 100%;">
            <v-card-title primary-title class="justify-center text-md-center">
              <div>
                <p  class="orange--text display-3 font-weight-light">{{countjob}}</p>
                <h3 class="headline mb-0">Tổng số ứng viên đã ứng tuyển</h3>
              </div>
            </v-card-title>

          </v-card>
        </v-flex>
<v-spacer/>
        <!-- End Nhà Tuyển Dụng Xem Hồ Sơ-->
        <!--      THÔNG BÁO VIỆC LÀM-->

        <v-flex md4  sm12 class="ma-2 ">
          <v-card sm12 style="height: 100%;">
            <v-card-title primary-title class="justify-center text-md-center">
              <div>
                <p  class="cyan--text display-3 font-weight-light">{{all}}</p>
                <h3 class="headline mb-0">TỔNG SỐ VIỆC LÀM</h3>
              </div>
            </v-card-title>
            <v-card-actions class="justify-center align-center" >
              <v-flex md4 class="text-md-center"><v-btn color="success" small fab >{{current}}</v-btn><br/><br/>
                <span class="black--text hoverCSSa">Đang đăng</span></v-flex>
              <v-flex md4 class="text-md-center">
                <v-btn color="warning" small fab >{{wait}}</v-btn><br/><br/>
                <span class="black--text hoverCSSa">Chờ xác thực</span></v-flex>
              <v-flex md4 class="text-md-center"><v-btn color="error" small fab >{{deny}}</v-btn><br/><br/> <span class="black--text hoverCSSa">Đã từ chối</span></v-flex>
            </v-card-actions>
          </v-card>
        </v-flex>

<v-spacer/>
        <!--      End   THÔNG BÁO VIỆC LÀM-->

      </v-layout>
    </v-container>



  </v-flex>
</template>

<script>
    import Axios from 'axios'
    import Constants from '@/stores/constant.js'
    import {mapGetters} from 'vuex';
    export default {
        name: "Overview", data: function () {
            return{
                countjob: '',
                userId:'',
                countMonth:'',
                current:'',
                all:'',
                wait:'',
                deny:'',


            }}
        ,
        methods:{
            getComponent(){
                if(this.userId1 != null && this.userId1){
                    this.userId = this.userId1;

                    Axios
                        .get(Constants.URL + '/job/getProfileByEmployerId/?employerId=' + this.userId)
                        .then(response => {
                                this.current = response.data.data.current;
                            this.all = response.data.data.all;
                            this.wait = response.data.data.wait;
                            this.deny = response.data.data.deny;
                            this.countjob = response.data.data.allJS;
                            }


                        )
                }
            }

        },
        mounted(){
            this.getComponent();
        },
        watch:{
            userId1(){
                this.getComponent();
            }
        },
        computed: {
            ...mapGetters('AUTHENTICATION_STORE',{
                email : 'email2',
                roleId: 'roleId2',
                fullName: 'fullName2',
                userId1: 'userId2'
            }),
        },
    }
</script>

<style scoped>
  span{
    font-size: 15px;
  }

</style>
