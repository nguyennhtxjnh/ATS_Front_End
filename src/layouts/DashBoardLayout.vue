<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
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
    <v-footer dark fixed app color="primary">
      <v-layout row wrap>
        <v-flex xs4>

        </v-flex>
        <v-flex xs4>

        </v-flex>
        <v-flex xs4>

        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <span style="margin-right: 5px">&copy; 2019 by FPTU</span>
      </v-layout>
    </v-footer>


  </v-app>
</template>

<script>
  export default {
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
