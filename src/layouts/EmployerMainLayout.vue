<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-app>
    <!--    ToolBar-->
    <template>
      <v-toolbar fixed  style="border-bottom: 4px solid #ff5e2d;background-color: white" class="pb-1" v-if="$vuetify.breakpoint.mdAndUp" >
        <v-toolbar-title @click="$router.push('/trang-chu-tuyen-dung')"  v-if="roleId !== 2" class="black--text hoverCSSTitle pr-5 mr-5" >
          <v-layout row wrap class="pl-5">
            <v-img :src="require('@/assets/logoP.png')" style="width: 50px; height: 50px"></v-img>
            <span class="pt-2 pl-3">Job Board</span>
          </v-layout>
        </v-toolbar-title>
        <v-toolbar-title @click="$router.push('/quan-li-cong-viec')"  v-if="roleId === 2" class="black--text hoverCSSTitle pr-5 mr-5" >
          <v-layout row wrap class="pl-5">
            <v-img :src="require('@/assets/logoP.png')" style="width: 50px; height: 50px"></v-img>
            <span class="pt-2 pl-3">Job Board</span>
          </v-layout>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn style="height: 100%" flat  class="white black--text" @click="">
          Dịch vụ
        </v-btn>
        <v-btn style="height: 100%" flat  class="white black--text" @click="$router.push('/quan-li-ung-vien')" v-if="roleId === 2">
          Ứng viên
        </v-btn>
        <v-btn style="height: 100%" flat  class="white black--text" @click="$router.push('/quan-li-cong-viec')" v-if="roleId === 2">
          Quản lý Tin tuyển dụng
        </v-btn>
<!--        <v-btn style="height: 100%" flat  class="white black&#45;&#45;text"  @click="checkUser"  v-if="roleId === 2">-->
<!--          Đăng Tin Tuyển Dụng-->
<!--        </v-btn>-->

        <v-btn style="height: 100%" flat  class="white black--text " @click="$router.push('/tuyen-dung-dang-nhap')" v-if="roleId !== 2">
          Đăng Nhập
        </v-btn>
<!--        <Span  v-if="roleId !== 2" class="white black&#45;&#45;text ">|</Span>-->
        <v-btn style="height: 100%" flat  class="white black--text" @click="$router.push('/tuyen-dung-dang-ky')" v-if="roleId !== 2">
          Đăng Ký
        </v-btn>


        <v-menu  v-if="roleId === 2"
                 class="pt-3"
                 offset-y
                 style="height: 100%"
                 content-class="dropdown-menu"
                 transition="slide-y-transition" >
          <v-btn
            style="height: 100%"
            slot="activator"
            flat
            color="black"
          >
            <v-icon left>mdi-account</v-icon>
            {{ fullName }}
          </v-btn>
          <v-card class="pa-0">
            <v-list dense class="pt-2 pr-0 pl-0 pb-2">
              <v-list-tile
                v-for="notification in notifications"
                :key="notification.title"
                class="hoverCSS pa-2 "
                @click="notificationClick(notification)"
              >
                <v-icon color="black" class="pr-2">{{notification.icon}}</v-icon>
                <v-list-tile-action
                  v-text="notification.title"
                />
              </v-list-tile>
            </v-list>
          </v-card>
        </v-menu>

        <v-btn style="height: 100%" color="warning" @click="$router.push('/')" >
          Người Tìm Việc
        </v-btn>

      </v-toolbar>
      <v-toolbar fixedF  style="border-bottom: 4px solid #ff5e2d;background-color: white"  class="pb-1" v-if="$vuetify.breakpoint.mdAndDown">
        <v-toolbar-title @click="$router.push('/trang-chu-tuyen-dung')" class="black--text hoverCSSTitle" >
          <v-layout row wrap class="pl-5">
            <v-img :src="require('@/assets/logoP.png')" style="width: 50px; height: 50px"></v-img>
            <span class="pt-2 pl-3">Job Board</span>
          </v-layout>
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn style="height: 100%" class="pa-0" color="black" flat @click="$router.push('/tuyen-dung-dang-nhap')" v-if="roleId !== 2">
          <v-icon left color="black" class="pl-3">mdi-login</v-icon>
        </v-btn>
        <Span  v-if="roleId !== 2" style="color: black !important;">|</Span>
        <v-btn style="height: 100%" color="black" flat @click="$router.push('/tuyen-dung-dang-ky')" v-if="roleId !== 2">
          <v-icon left color="black" class="pl-3">mdi-pencil-plus</v-icon>
        </v-btn>
        <v-btn style="height: 100%" flat  class="white black--text" @click="$router.push('/quan-li-ung-vien')" v-if="roleId === 2">
          Ứng viên
        </v-btn>
        <v-btn style="height: 100%" flat  class="white black--text" @click="$router.push('/quan-li-cong-viec')" v-if="roleId === 2">
          Quản lý Tin tuyển dụng
        </v-btn>

        <v-menu
          class="pt-1" v-if="roleId === 2"
                 offset-y
                 style="height: 100%"
                 content-class="dropdown-menu"
                 transition="slide-y-transition">
          <v-btn
            style="height: 100%"
            slot="activator"
            flat
            color="black"
          >
            <v-icon left color="black" class="pl-3">mdi-account</v-icon>
          </v-btn>
          <v-card class="pa-0">
            <p class="pt-3 pl-3 pr-3" ><b> {{ fullName }} </b></p>
            <v-list dense class="pt-0 pr-0 pl-0 pb-2">
              <v-list-tile
                v-for="notification in notifications"
                :key="notification.title"
                class="hoverCSS pa-2 "
                @click="notificationClick(notification)"
              >
                <v-icon color="black" class="pr-2">{{notification.icon}}</v-icon>
                <v-list-tile-action
                  v-text="notification.title"
                />
              </v-list-tile>
            </v-list>
          </v-card>
        </v-menu>

        <v-btn style="height: 100%" color="warning" @click="$router.push('/')">
          Người Tìm Việc
        </v-btn>

      </v-toolbar>
    </template>
    <!--    End ToolBar-->
    <v-content>
      <v-flex class="mt-2">
        <slot></slot>
      </v-flex>
    </v-content>
    <v-footer dark color="primary"
              height="auto" red>
      <v-card class="flex" flat tile>
        <v-card-title class="pa-0">
          <v-flex md4 xs12 class="text-lg-left pl-5 my-5">
            <div class=" orange--text headline" >
              Về JOB BOARD</div>
            <v-list v-for="item in menu1" :key="item.id">
              <v-list-tile  v-html="item.display" :to="item.link">
              </v-list-tile>
            </v-list>
          </v-flex>
          <v-flex md3 xs12 class="text-lg-left pl-5 my-5">
            <div class=" orange--text headline">
              Công Cụ
            </div>
            <v-list v-for="item in menu2" :key="item.id">
              <v-list-tile  v-html="item.display" :to="item.link">
              </v-list-tile>
            </v-list>
          </v-flex>
          <v-flex md4 xs12 class="text-lg-left pl-5 my-5">
            <div>
              <div class="orange--text headline pb-2 ">Kết nối với chúng tôi</div>

              <v-spacer></v-spacer>
              <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-3 pb-2"
                dark
                icon
              >
                <v-icon size="24px">{{ icon }}</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <!--              <v-img src="https://images.vietnamworks.com/gen/google-play-badge-vi.png"  height="70" width="250"  ></v-img>-->

            </div>

          </v-flex>
        </v-card-title>
        <v-card-actions class="justify-center">
          &copy; 2019 by JOB BOARD
        </v-card-actions>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
  import Constants from '@/stores/constant.js'
  import {mapGetters} from 'vuex';
  import Axios from 'axios'

  export default {
    name: 'EmployerMainLayout',
    data: function(){
      return {
        notifications: [
          {
            icon: 'mdi-account',
            title: 'Thông Tin',
          },
          {
            icon: 'mdi-logout-variant',
            title: 'Đăng Xuất',
          }
        ],
        icons: [
          'mdi-facebook',
          'mdi-twitter',
          'mdi-google-plus',
          'mdi-instagram'
        ],
        menu1: [
          { id:'1',
            display: 'Giới thiệu',
            link: '/',
          },{
            id:'2',
            display: 'Liên hệ',
            link: '/',
          },{
            id:'3',
            display: 'Góc Báo',
            link: '/',
          },{
            id:'4',
            display: 'Hỏi Đáp',
            link: '/',
          },{
            id:'5',
            display: 'Thỏa Thuận Sử Dụng',
            link: '/',
          },{
            id:'6',
            display: 'Quy Định Bảo Mật',
            link: '/',
          },{
            id:'7',
            display: 'Quy Chế Hoạt Động Giao Dịch Thương Mại Điện Tử',
            link: '/',
          },{
            id:'8',
            display: 'Ứng dụng điện thoại',
            link: '/',
          }
        ],
        menu2: [
          {  id:'1',
            display: 'Tài Khoản ',
            link: '/',
          },{
            id:'2',
            display: 'Hồ Sơ Của Tôi',
            link: '/',
          },{
            id:'3',
            display: 'Việc Làm Của Tôi',
            link: '/',
          },{
            id:'4',
            display: 'Thông Báo Việc Làm',
            link: '/',
          },{
            id:'5',
            display: 'Phản Hồi',
            link: '/',
          },{
            id:'6',
            display: 'Tư Vấn Nghề Nghiệp',
            link: '/',
          },{
            id:'7',
            display: 'Sơ Đồ Trang Web',
            link: '/',
          }
        ],

        formDataCompany: {
          userId: '',
        }
      }
    },
    methods: {
      async getCompany(){
        const url = Constants.URL+'/employercompany/getCompanyId'
        const method = 'POST'
        const data = this.formDataCompany
        console.log(data)
        await Axios({url, method, data})
          .then(async response => {
            if (response.data.success == true) {
              this.$router.push('/dang-tin-tuyen-dung');
            } else {
              this.$notify({
                group: 'foo',
                type: 'warn',
                title: 'Không tìm thấy công ty',
                text: 'Bạn không nằm trong công ty nào để đăng tin tuyển dụng'
              })
              this.$router.push('/tao-cong-ty');
            }
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
          .finally(() => {

          })
      },
      checkUser(){
        if(this.roleId === 2){
          this.formDataCompany.userId = this.userId2;
          this.getCompany();
        }
        if (this.roleId !== 2){
          this.$router.push('/tuyen-dung-dang-nhap');
        }
      },
      notificationClick(notification){
        if (notification.title === 'Thông Tin'){
          this.$router.push('/tuyen-dung-thong-tin');
        }
        if (notification.title === 'Đăng Xuất') {
          this.$store.dispatch('AUTHENTICATION_STORE/LOGOUT2')
            .then(() => {
              this.$router.push('/tuyen-dung-dang-nhap');
            });
        }
      },
    },
    computed: {
      ...mapGetters('AUTHENTICATION_STORE',{
        email : 'email2',
        roleId: 'roleId2',
        fullName: 'fullName2',
        userId2: 'userId2',
      })
    }
  }
</script>

<style scoped>
  .hoverCSS:hover{
    background-color: cornflowerblue;
    cursor: pointer;
  }
  .hoverCSSTitle:hover{
    cursor: pointer;
  }
</style>
