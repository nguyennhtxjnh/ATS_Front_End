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
                <h3 class="headline mb-0">Tổng số ứng viên</h3>
              </div>
            </v-card-title>

          </v-card>
        </v-flex>
<v-spacer/>
        <!-- End Nhà Tuyển Dụng Xem Hồ Sơ-->
        <!--      THÔNG BÁO VIỆC LÀM-->

        <v-flex md4 sm12 class="ma-2">
          <v-card sm12 style="height: 100%;">
            <v-card-title primary-title class="justify-center text-md-center">
              <div>
                <p  class="green--text display-3 font-weight-light">{{countMonth}}</p>
                <h3 class="headline mb-0">Cập nhật 1 tháng gần nhất</h3>
              </div>
            </v-card-title>

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

            }}
        ,
        methods:{
            getComponent(){
                if(this.userId1 != null && this.userId1){
                    this.userId = this.userId1;
                    Axios
                        .get(Constants.URL + '/countjob/' + this.userId)
                        .then(response => (
                            this.countjob = response.data

                        ))
                    Axios
                        .get(Constants.URL + '/countjob/count-month/' + this.userId)
                        .then(response => {
                                this.countMonth = response.data;
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

</style>
