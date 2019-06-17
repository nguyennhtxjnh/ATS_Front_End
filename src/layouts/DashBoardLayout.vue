<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-app>
  <!--    ToolBar-->
  <template>
    <v-toolbar fixed dark v-if="$vuetify.breakpoint.mdAndUp">

      <v-toolbar-title class="white--text">Job Board</v-toolbar-title>

      <v-spacer></v-spacer>
      <!--        <v-flex xs 4>-->
      <!--            <span @click="test">fasfa</span>-->
      <!--        </v-flex>-->
<!--      <v-btn icon>-->
<!--        <v-icon>search</v-icon>-->
<!--      </v-btn>-->

<!--      <v-btn icon>-->
<!--        <v-icon>apps</v-icon>-->
<!--      </v-btn>-->

<!--      <v-btn icon>-->
<!--        <v-icon>refresh</v-icon>-->
<!--      </v-btn>-->

      <v-btn style="height: 100%" @click="$router.push('/dang-nhap')" v-if="roleId !== 1">
        Đăng Nhập
      </v-btn>
      <Span  v-if="roleId !== 1">|</Span>
      <v-btn style="height: 100%" @click="$router.push('/dang-ki')" v-if="roleId !== 1">
        Đăng Kí
      </v-btn>

      <v-menu
        offset-y
        style="height: 100%"
        content-class="dropdown-menu"
        transition="slide-y-transition">
        <v-btn
          style="height: 100%"
          slot="activator"

        >
          <v-icon left>mdi-account</v-icon>
          {{ email }}
        </v-btn>
        <v-card>
          <v-list dense>
            <v-list-tile
              v-for="notification in notifications"
              :key="notification"
            >
              <v-list-tile-title
                v-text="notification"
              />
            </v-list-tile>
          </v-list>
        </v-card>
      </v-menu>


      <v-btn style="height: 100%" color="primary" >
        Nhà Tuyển Dụng
      </v-btn>

    </v-toolbar>
    <v-toolbar fixed dark v-if="$vuetify.breakpoint.mdAndDown">

      <v-toolbar-title class="white--text">ABC</v-toolbar-title>

      <v-spacer></v-spacer>




      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn
            dark
            v-on="on"
            fab
          >
            <v-icon dark>list</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-tile
            v-for="(item, index) in items"
            :key="index"
            @click=""
          >
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

      <v-btn style="height: 100%" color="primary" >
        Nhà Tuyển Dụng
      </v-btn>

    </v-toolbar>
  </template>
  <!--    End ToolBar-->
  <v-content>
    <v-container fluid>
      <slot></slot>
    </v-container>
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
          <v-list v-for="item in menu2" :key="item.link">
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
  import {mapGetters} from 'vuex';
  export default {
    name: 'DashBoardLayout',
    data: function(){
      return {
        notifications: [
          'Thông tin',
          'Đăng Xuất',

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
      clickMe(index){
        alert(index)
      },
    },
    computed: {
      ...mapGetters('AUTHENTICATION_STORE',{
          email : 'email',
          roleId: 'roleId',
      })
    }
  }
</script>

<style scoped>

</style>
