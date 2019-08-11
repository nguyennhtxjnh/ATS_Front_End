<template>
  <v-flex >
    <div fluid >
      <v-layout >
        <!-- Nhà Tuyển Dụng Xem Hồ Sơ-->
        <v-spacer/>

        <v-flex md4 sm12 class="ma-2">
          <v-card sm12 style="height: 100%;">
            <v-card-title primary-title class="justify-center text-md-center">
              <div>
                <p  class="orange--text display-3 font-weight-light">{{countCV}}</p>
                <h3 class="headline mb-0">NHÀ TUYỂN DỤNG XEM HỒ SƠ</h3>
              </div>
            </v-card-title>

            <v-card-actions class="justify-center">
<!--              <a class="black&#45;&#45;text hoverCSSa" >Kiểm tra nhà tuyển dụng xem hồ sơ</a>-->
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-spacer/>

        <!-- End Nhà Tuyển Dụng Xem Hồ Sơ-->
        <!--      THÔNG BÁO VIỆC LÀM-->

<!--        <v-flex md4 sm12 class="ma-2">-->
<!--          <v-card sm12 style="height: 100%;">-->
<!--            <v-card-title primary-title class="justify-center text-md-center">-->
<!--              <div>-->
<!--                <p  class="green&#45;&#45;text display-3 font-weight-light">0</p>-->
<!--                <h3 class="headline mb-0">THÔNG BÁO VIỆC LÀM</h3>-->
<!--              </div>-->
<!--            </v-card-title>-->

<!--            <v-card-actions class="justify-center">-->
<!--              <a class="black&#45;&#45;text hoverCSSa">Quản lý thông báo việc làm</a>-->
<!--            </v-card-actions>-->
<!--          </v-card>-->
<!--        </v-flex>-->

        <!--      End   THÔNG BÁO VIỆC LÀM-->
        <!--            VIỆC LÀM CỦA TÔI-->

        <v-flex md4  sm12 class="ma-2 ">
          <v-card sm12 style="height: 100%;">
            <v-card-title primary-title class="justify-center text-md-center">
              <div>
                <p  class="cyan--text display-3 font-weight-light">{{all}}</p>
                <h3 class="headline mb-0">VIỆC LÀM CỦA TÔI</h3>
              </div>
            </v-card-title>
            <v-card-actions class="justify-center align-center" >
              <v-flex md4 class="text-md-center"><v-btn color="success" small fab >{{not}}</v-btn><br/><br/>
                <span class="black--text hoverCSSa">Đang xử lý</span></v-flex>
              <v-flex md4 class="text-md-center">
                <v-btn color="warning" small fab >{{accept}}</v-btn><br/><br/>
              <span class="black--text hoverCSSa">Đã xem</span></v-flex>
              <v-flex md4 class="text-md-center"><v-btn color="error" small fab >{{deny}}</v-btn><br/><br/> <span class="black--text hoverCSSa">Đã đóng</span></v-flex>
            </v-card-actions>
          </v-card>
        </v-flex>
<v-spacer/>
        <!--            END VIỆC LÀM CỦA TÔI-->
      </v-layout>
    </div>

<!--    <template>-->
<!--      <v-card class="ma-2">-->
<!--        <v-list three-line>-->
<!--          <template v-for="(item, index) in items">-->
<!--            <v-subheader-->
<!--              v-if="item.header"-->
<!--              :key="item.header"-->
<!--            >-->
<!--              {{ item.header }}-->
<!--            </v-subheader>-->

<!--            <v-divider-->
<!--              v-else-if="item.divider"-->
<!--              :key="index"-->
<!--              :inset="item.inset"-->
<!--            ></v-divider>-->

<!--            <v-list-tile-->
<!--              v-else-->
<!--              :key="item.title"-->
<!--              avatar-->
<!--              @click=""-->
<!--            >-->
<!--              <v-list-tile-avatar>-->
<!--                <img :src="item.avatar">-->
<!--              </v-list-tile-avatar>-->

<!--              <v-list-tile-content>-->
<!--                <v-list-tile-title v-html="item.title"></v-list-tile-title>-->
<!--                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>-->
<!--              </v-list-tile-content>-->
<!--            </v-list-tile>-->
<!--          </template>-->
<!--        </v-list>-->
<!--      </v-card>-->
<!--    </template>-->

  </v-flex>
</template>

<script>
  import Axios from 'axios'
  import Constants from '@/stores/constant.js'
  import {mapGetters} from 'vuex';
    export default {
        name: "JobAnnouncement",
      data: function () {
        return{
          countCV: '',
          userId:'',
          all:'',
          not:'',
          deny:'',
          accept:''
        }}
      ,
      methods:{
          getComponent(){
            if(this.userId1 != null && this.userId1){
              this.userId = this.userId1;
              Axios
                .get(Constants.URL + '/countcv/' + this.userId)
                .then(response => (
                  this.countCV = response.data

                ))
              Axios
                .get(Constants.URL + '/apply/getAllAplly/' + this.userId)
                .then(response => {
                    this.all = response.data.data.all;
                    this.not = response.data.data.not;
                    this.deny = response.data.data.deny;
                    this.accept = response.data.data.accept;
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
          email : 'email1',
          roleId: 'roleId1',
          fullName: 'fullName1',
          userId1: 'userId1'
        }),
      },
    }
</script>

<style scoped>
  span{
    font-size: 15px;
  }

</style>
