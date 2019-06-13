<template>
  <v-app>
  <!--    ToolBar-->
  <template>
    <v-toolbar fixed dark>

      <v-toolbar-title class="white--text">Job Board</v-toolbar-title>

      <v-spacer></v-spacer>
      <!--        <v-flex xs 4>-->
      <!--            <span @click="test">fasfa</span>-->
      <!--        </v-flex>-->
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>refresh</v-icon>
      </v-btn>

      <v-btn style="height: 100%" @click="$router.push('/dang-nhap')">
        Đăng Nhập
      </v-btn>
      <Span>|</Span>
      <v-btn style="height: 100%" @click="$router.push('/dang-ki')">
        Đăng Kí
      </v-btn>

      <v-menu bottom left>
        <template v-slot:activator="{ on }">
          <v-btn
            dark
            icon
            v-on="on"
          >
            <v-icon>more_vert</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-tile
            v-for="(item, i) in items"
            :key="i"
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
  export default {
    name: 'DashBoardLayout',

    data: function(){

      return {
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
    name: 'DashBoardLayout',

      data: () => ({


        items: [
          { title: 'Click Me' },
          { title: 'Click Me' },
          { title: 'Click Me' },
          { title: 'Click Me 2' }
          ]
      }),
    methods: {

    },
    computed : {

    }

  }
</script>

<style scoped>

</style>
