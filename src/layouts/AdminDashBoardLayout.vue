<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-app>
    <!--    ToolBar-->

    <template>

      <v-navigation-drawer
        fixed
        v-model="drawer"
        app>
        <v-flex d-flex align-center style="height: 64px;" class="orange">
          <v-flex class="pa-3"><v-icon left style="color: white">mdi-account</v-icon><span class="nameText">{{fullName}}</span></v-flex>
        </v-flex>
        <v-list dense>
          <!--Job-->
          <v-list-group
            no-action
            sub-group
            :value="valueJob"
          >
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>Công Việc</v-list-tile-title>
              </v-list-tile>
            </template>

            <v-list-tile
              v-for="(item, i) in menuJob"
              :key="i"
              :to="item.path"
              active-class="activeCSS"
              :class="item.path === $route.path ? 'activeCSS' : ''"
            >
              <v-list-tile-action>
                <v-icon>{{item.icon}}</v-icon>
              </v-list-tile-action>
              {{item.name}}

            </v-list-tile>
          </v-list-group>
          <!--Company-->
          <v-list-group
            no-action
            sub-group
            :value="valueCompany"
          >
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>Công Ty</v-list-tile-title>
              </v-list-tile>
            </template>

            <v-list-tile
              v-for="(item, i) in menuCompany"
              :key="i"
              :to="item.path"
              active-class="activeCSS"
              :class="item.path === $route.path ? 'activeCSS' : ''"
            >
              <v-list-tile-action>
                <v-icon>{{item.icon}}</v-icon>
              </v-list-tile-action>
              {{item.name}}

            </v-list-tile>
          </v-list-group>
          <!--Account-->
          <v-list-group
            no-action
            sub-group
            :value="valueAccount"
          >
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>Quản Lý Người Dùng</v-list-tile-title>
              </v-list-tile>
            </template>

            <v-list-tile
              v-for="(item, i) in menuUser"
              :key="i"
              :to="item.path"
              active-class="activeCSS"
              :class="item.path === $route.path ? 'activeCSS' : ''"
            >
              <v-list-tile-action>
                <v-icon>{{item.icon}}</v-icon>
              </v-list-tile-action>
              {{item.name}}

            </v-list-tile>
          </v-list-group>
          <!--Service-->
          <v-list-group
            no-action
            sub-group
            :value="valueService"
          >
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>Dịch vụ</v-list-tile-title>
              </v-list-tile>
            </template>

            <v-list-tile
              v-for="(item, i) in menuService"
              :key="i"
              :to="item.path"
              active-class="activeCSS"
              :class="item.path === $route.path ? 'activeCSS' : ''"
            >
              <v-list-tile-action>
                <v-icon>{{item.icon}}</v-icon>
              </v-list-tile-action>
              {{item.name}}

            </v-list-tile>
          </v-list-group>
          <!-- Logout-->
          <v-list-group
            no-action
            sub-group
          >
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>Tài khoản</v-list-tile-title>
              </v-list-tile>
            </template>

            <v-list-tile @click="logout">
              <v-list-tile-action>
                <v-icon>mdi-logout-variant</v-icon>
              </v-list-tile-action>
             Đăng Xuất
            </v-list-tile>
          </v-list-group>

          <v-list-tile >
            <v-list-tile-action>

            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

        </v-list>
      </v-navigation-drawer>
      <v-toolbar color="indigo" dark fixed app>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Admin Site</v-toolbar-title>
      </v-toolbar>

    </template>
    <v-content>
      <v-flex>
        <slot></slot>
      </v-flex>
    </v-content>


  </v-app>
</template>

<script>
  import {mapGetters} from 'vuex';
  import Axios from 'axios'

  export default {
    name: 'AdminDashBoardLayout',
    data: function(){
      return {
        drawer: null,
        valueJob: true,
        valueCompany: true,
        valueAccount: true,
        valueService: true,
        menuJob: [
          {
            name: "Tất cả công việc",
            icon: "mdi-domain",
            path: "/admin"
          },
          {
            name: "Công việc mới tạo",
            icon: "mdi-domain",
            path: "/admin-view-all-new-job"
          },
          ],
        menuCompany: [
          {
            name: "Tất cả công ty",
            icon: "mdi-domain",
            path: "/admin-view-all-company"
          },
          {
            name: "Công ty mới tạo",
            icon: "mdi-domain",
            path: "/admin-view-all-new-company"
          },

        ],
        menuUser: [
          {
            name: "Tất cả người dùng",
            icon: "mdi-domain",
            path: "/admin-view-all-account"
          },
        ],
        menuService: [
          {
            name: "Tất cả dịch vụ",
            icon: "mdi-domain",
            path: "/admin-all-service"
          },
        ]
      }
    },
    methods: {
      checkCurrentPath(){
        if(this.$router.currentRoute.path === '/admin' || this.$router.currentRoute.path === '/admin-view-all-new-job'){
          this.valueJob = true;
        }
        if(this.$router.currentRoute.path === '/admin-view-all-company' || this.$router.currentRoute.path === '/admin-view-all-new-company'){
          this.valueCompany = true;
        }
        if(this.$router.currentRoute.path === '/admin-view-all-account'){
          this.valueAccount = true;
        }
        if(this.$router.currentRoute.path === '/admin-all-service'){
          this.valueService = true;
        }
      },
      logout(){
        this.$store.dispatch('AUTHENTICATION_STORE/LOGOUT3')
          .then(() => {
            this.$router.push('/admin-login');
          });
      }
    },
    mounted(){
      // this.checkCurrentPath();
    },
    computed: {
      ...mapGetters('AUTHENTICATION_STORE',{
        email : 'email3',
        roleId: 'roleId3',
        fullName: 'fullName3',
        userId3: 'userId3',
      })
    }
  }
</script>

<style scoped>
  .hoverCSS:hover{
    background-color: orange !important;
    color: white !important;
    cursor: pointer;
  }

  .activeCSS{
    background-color: orange !important;
    color: white;
  }

  .nameText {
    padding-left: 15px;
    font-size: 20px;
    color: white;
  }

</style>
