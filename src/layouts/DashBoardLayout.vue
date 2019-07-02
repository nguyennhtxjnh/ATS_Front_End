<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-app>
  <!--    ToolBar-->
  <template>
    <v-toolbar fixed color="orange" v-if="$vuetify.breakpoint.mdAndUp">
      <v-toolbar-title @click="$router.push('/')" class="white--text hoverCSSTitle" >ATS</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn style="height: 100%" color="white" flat @click="$router.push('/dang-nhap')" v-if="roleId !== 1">
        Đăng Nhập
      </v-btn>
      <Span  v-if="roleId !== 1" style="color: white !important;">|</Span>
      <v-btn style="height: 100%" color="white" flat @click="$router.push('/dang-ky')" v-if="roleId !== 1">
        Đăng Kí
      </v-btn>

      <v-menu  v-if="roleId === 1"
        offset-y
        style="height: 100%"
        content-class="dropdown-menu"
        transition="slide-y-transition">
        <v-btn
          style="height: 100%"
          slot="activator"
          flat
          color="white"
        >
          <v-icon left color="white">mdi-account</v-icon>
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

      <v-btn style="height: 100%" color="primary" @click="$router.push('/employer-main-screen')">
        Nhà Tuyển Dụng
      </v-btn>
    </v-toolbar>
    <v-toolbar fixed  color="orange" v-if="$vuetify.breakpoint.mdAndDown">
      <v-toolbar-title @click="$router.push('/')" class="white--text hoverCSSTitle">ATS</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn style="height: 100%" class="pa-0" color="white" flat @click="$router.push('/dang-nhap')" v-if="roleId !== 1">
        <v-icon left color="white" class="pl-3">mdi-login</v-icon>
      </v-btn>
      <Span  v-if="roleId !== 1" style="color: white !important;">|</Span>
      <v-btn style="height: 100%" color="white" flat @click="$router.push('/dang-ky')" v-if="roleId !== 1">
        <v-icon left color="white" class="pl-3">mdi-pencil-plus</v-icon>
      </v-btn>

      <v-menu  v-if="roleId === 1"
               offset-y
               style="height: 100%"
               content-class="dropdown-menu"
               transition="slide-y-transition">
        <v-btn
          style="height: 100%"
          slot="activator"
          flat
          color="white"
        >
          <v-icon left color="white" class="pl-3">mdi-account</v-icon>
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

      <v-btn style="height: 100%" color="primary" @click="$router.push('/employer-main-screen')">
        Nhà Tuyển Dụng
      </v-btn>

    </v-toolbar>
  </template>
  <!--    End ToolBar-->
  <v-content>
    <v-flex >
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
          <v-list v-for="item in menu1" :key="item.link">
            <v-list-tile  v-html="item.display" :to="item.link">
            </v-list-tile>
          </v-list>
        </v-flex>
        <v-flex md3 xs12 class="text-lg-left pl-5 my-5">
          <div class=" orange--text headline">
            Công Cụ
          </div>
          <v-list v-for="item1 in menu2" :key="item1.link">
            <v-list-tile  v-html="item1.display" :to="item1.link">
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
  import {mapGetters} from 'vuex';
  export default {
    name: 'DashBoardLayout',
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
        notificationsSmall: [
          {
            icon: 'mdi-account',
            title: 'Thông Tin',
          },
          {
            icon: 'mdi-logout-variant',
            title: 'Đăng Xuất',
          }
        ],
        menuListSmall: [
          {
            icon: 'mdi-login-variant',
            title: 'Đăng Nhập',
          },
          {
            icon: 'mdi-pencil-plus',
            title: 'Đăng Ký',
          }
        ],
        icons: [
          'mdi-facebook',
          'mdi-twitter',
          'mdi-google-plus',
          'mdi-instagram'
        ],
        menu1: [
          {
            display: 'Giới thiệu',
            link: '/',
          },{
            display: 'Liên hệ',
            link: '/',
          },{
            display: 'Góc Báo',
            link: '/',
          },{
            display: 'Hỏi Đáp',
            link: '/',
          },{
            display: 'Thỏa Thuận Sử Dụng',
            link: '/',
          },{
            display: 'Quy Định Bảo Mật',
            link: '/',
          },{
            display: 'Quy Chế Hoạt Động Giao Dịch Thương Mại Điện Tử',
            link: '/',
          },{
            display: 'Ứng dụng điện thoại',
            link: '/',
          }
        ],
        menu2: [
        {
            display: 'Tài Khoản ',
            link: '/',
          },{
            display: 'Hồ Sơ Của Tôi',
            link: '/',
          },{
            display: 'Việc Làm Của Tôi',
            link: '/',
          },{
            display: 'Thông Báo Việc Làm',
            link: '/',
          },{
            display: 'Phản Hồi',
            link: '/',
          },{
            display: 'Tư Vấn Nghề Nghiệp',
            link: '/',
          },{
            display: 'Sơ Đồ Trang Web',
            link: '/',
          }
        ],

      }
    },
    methods: {
      notificationClick(notification){
        if (notification.title === 'Thông Tin'){
          this.$router.push('/thong-tin');
        }
        if (notification.title === 'Đăng Xuất') {
          this.$store.dispatch('AUTHENTICATION_STORE/LOGOUT')
            .then(() => {
              this.$router.push('/dang-nhap');
            });
        }
      },
    },
    computed: {
      ...mapGetters('AUTHENTICATION_STORE',{
          email : 'email',
          roleId: 'roleId',
          fullName: 'fullName',
      })
    }
  }
</script>

<style scoped>
  .hoverCSS:hover{
    background-color: orange;
    color: white !important;
    cursor: pointer;
  }

  .hoverCSSTitle:hover{
    cursor: pointer;
  }
</style>
