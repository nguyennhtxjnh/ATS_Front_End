<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-app>
    <!--    ToolBar-->

    <template>
      <v-toolbar class="rg-blue white--text" fixed>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <p style="font-size: 25px; position: relative; top: 10px">Admin Site</p>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
      </v-toolbar>
        <v-navigation-drawer style="width: 280px !important;" id="e3" fixed class="pb-0" persistent clipped enable-resize-watcher v-model="drawer" light overflow >
          <v-card :flat="false" style="text-align:center;" class="blue lighten-5 black--text mb-2"> <img src="https://pingboard-production.s3.amazonaws.com/user/avatars/qRRe2gAQRP2XcPUhL7pU_d3e6e2e422913621f42df7a1125859687c63e6bda7aa4afe8a8c7883d6f79de6.jpg" alt="" class="img-rounded profile-img">
            <v-card-title primary-title>
              <div class="subheading">Kirsten</div>
            </v-card-title>
          </v-card>
          <v-list dense>
            <v-list-item>
              <v-list-tile >
                <v-list-tile-action>
                  <v-icon>dashboard</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Dashboard</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile >
                <v-list-tile-action>
                  <v-icon>find_in_page</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Advanced Search</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon>insert_chart</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Reports</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile >
                <v-list-tile-action>
                  <v-icon>assignment</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Manage Queues</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile >
                <v-list-tile-action>
                  <v-icon>cloud_download</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Journal Export</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon>description</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Create Application</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-group v-for="item in menuItems" :value="item.active" v-bind:key="item.title">
                <v-list-tile slot="item" @click="">
                  <v-list-tile-action>
                    <v-icon>{{ item.action }}</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-icon>keyboard_arrow_down</v-icon>
                  </v-list-tile-action>
                </v-list-tile>
                <v-list-tile v-for="subItem in item.item" v-bind:key="subItem.title" @click="">
                  <v-list-tile-content>
                    <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-icon>{{ subItem.action }}</v-icon>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list-group>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
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

        formDataCompany: {
          userId: '',
        },

        emailCustomer:false,
        callCustomer:false,
        drawer: true,
        rightDrawer: true,
        leftDrawer: true,/*Operates hamburger*/
        menuItems: [ /*Operates Leftnav Dropdown*/
          {
            action: 'settings',
            title: 'Configurations',
            active: false,
            item: [
              { title: 'Lender' },
              { title: 'Products' },
              { title: 'Forms' },
              { title: 'Lender Rates' }
            ]
          }],
        /*Table*/
        search: '',
        selected: [],
        dialog: false,
        itemSelected: {},
        headers: [
          { text: 'Status', align: 'left',value: 'name'},
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Sodium (mg)', value: 'sodium' },
          { text: 'Calcium (%)', value: 'calcium' },
          { text: '', value: '',sortable: false }
        ],
        items: [
          {
            value: false,
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            sodium: 87,
            calcium: '14%',
            iron: '1%'
          },
          {
            value: false,
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            sodium: 129,
            calcium: '8%',
            iron: '1%'
          },
          {
            value: false,
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            sodium: 337,
            calcium: '6%',
            iron: '7%'
          },
          {
            value: false,
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            sodium: 413,
            calcium: '3%',
            iron: '8%'
          },
          {
            value: false,
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            sodium: 327,
            calcium: '7%',
            iron: '16%'
          },
          {
            value: false,
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            sodium: 50,
            calcium: '0%',
            iron: '0%'
          },
          {
            value: false,
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            sodium: 38,
            calcium: '0%',
            iron: '2%'
          },
          {
            value: false,
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            sodium: 562,
            calcium: '0%',
            iron: '45%'
          },
          {
            value: false,
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            sodium: 326,
            calcium: '2%',
            iron: '22%'
          },
          {
            value: false,
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            sodium: 54,
            calcium: '12%',
            iron: '6%'
          }
        ],
        notesItems: [
          { action: '15 min', headline: 'Brunch this weekend?', title: 'Ali Connors', subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
          { action: '2 hr', headline: 'Summer BBQ', title: 'me, Scrott, Jennifer', subtitle: "Wish I could come, but I'm out of town this weekend." },
          { action: '6 hr', headline: 'Oui oui', title: 'Sandra Adams', subtitle: "Do you have Paris recommendations? Have you ever been?" },
          { action: '12 hr', headline: 'Birthday gift', title: 'Trevor Hansen', subtitle: "Have any ideas about what we should get Heidi for her birthday?" },
          { action: '18hr', headline: 'Recipe to try', title: 'Britta Holt', subtitle: "We should eat this: Grate, Squash, Corn, and tomatillo Tacos." },
        ],
        /*Operates fab buttons*/
        fab: false,
        direction: 'left',
        fling: true,
        hover: true,
        tabs: null,
        top: true,
        bottom: false,
        right: true,
        left: false,
        transition: 'scale-transition',


        /*Tabs*/
        tabItems: [
          'Main Applicant', 'Joint Applicant'
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

      }
    },
    methods: {
      async getCompany(){
        const url = 'http://localhost:8080/employercompany/getCompanyId'
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
        if(this.roleId === 2 || this.roleId === 3){
          this.formDataCompany.userId = this.userId2;
          this.getCompany();
        }
        if (this.roleId !== 2 ){
          if(this.roleId !== 3){
            this.$router.push('/tuyen-dung-dang-nhap');
          }
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

      open(item,e){
        this.itemSelected = item;
        this.dialog = true;
      }

    },
    computed: {
      binding () { /*Operates repsonsive grid*/
        const binding = {}
        if (this.$vuetify.breakpoint.smAndDown) binding.column = true
        return binding
      },

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

  .application .theme--light.navigation-drawer {
    background-color: #325d88;
  }
  .application .theme--light.navigation-drawer .list {
    background: #325d88 none repeat scroll 0 0;
  }
  .profile-img {
    margin-top: 14px;
    margin-left: 10px;
    float: left;
    background-size: auto 100%;
    width: 40px;
    height: 40px;
    border: 2px solid #81A633;
  }
  .brand > img {
    height: 50px;
  }
  .rg-blue--text {
    color: #325D88;
  }
  .rg-blue {
    background-color: #283C5A!important;
    border-color: #283C5A!important;
  }
  .rg-primary {
    background-color: #d2823b!important;
    border-color: #b56727!important;
  }
  #e3 .list--dense .list__tile .icon {
    color: #efefef;
  }
  #e3 .list__tile__action {
    min-width: 35px;
  }
  #e4 .list--dense .list__tile--active:first-child .icon {
    color: blue
  }
  #e3 .list__tile__sub-title, #e3 .list__tile__title {
    color: #efefef;
  }
  #e4 .list--group__header--active .list__tile {
    color: #efefef;
  }
  #table .table thead th {
    color: rgba(0,0,0,.75);
    background-color: #D7E3EF;
    font-weight: 600;
  }
  .tabs--grow .tabs__bar .tabs__li {
    border: 1px solid #e2e2e2;
  }
  .input-group--selection-controls {
    color: #81a633!important;
  }
  .dialog-danger .card__title {
    background: #BF1919;
    color: #fff;
  }
  .dialog-info  .card__title {
    background: #325D88;
    color: #fff;
  }
  .dialog {
    width: 50%!important;
  }

</style>
