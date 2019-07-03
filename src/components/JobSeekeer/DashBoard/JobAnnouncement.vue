<template>
  <v-flex >
    <div fluid >
      <v-layout >
        <!-- Nhà Tuyển Dụng Xem Hồ Sơ-->

        <v-flex md4 sm12 class="ma-2">
          <v-card sm12 style="height: 100%;">
            <v-card-title primary-title class="justify-center text-md-center">
              <div>
                <p  class="orange--text display-3 font-weight-light">0</p>
                <h3 class="headline mb-0">NHÀ TUYỂN DỤNG XEM HỒ SƠ</h3>
              </div>
            </v-card-title>

            <v-card-actions class="justify-center">
              <a class="black--text hoverCSSa" >Kiểm tra nhà tuyển dụng xem hồ sơ</a>
            </v-card-actions>
          </v-card>
        </v-flex>

        <!-- End Nhà Tuyển Dụng Xem Hồ Sơ-->
        <!--      THÔNG BÁO VIỆC LÀM-->

        <v-flex md4 sm12 class="ma-2">
          <v-card sm12 style="height: 100%;">
            <v-card-title primary-title class="justify-center text-md-center">
              <div>
                <p  class="green--text display-3 font-weight-light">0</p>
                <h3 class="headline mb-0">THÔNG BÁO VIỆC LÀM</h3>
              </div>
            </v-card-title>

            <v-card-actions class="justify-center">
              <a class="black--text hoverCSSa">Quản lý thông báo việc làm</a>
            </v-card-actions>
          </v-card>
        </v-flex>

        <!--      End   THÔNG BÁO VIỆC LÀM-->
        <!--            VIỆC LÀM CỦA TÔI-->

        <v-flex md4  sm12 class="ma-2 ">
          <v-card sm12 style="height: 100%;">
            <v-card-title primary-title class="justify-center text-md-center">
              <div>
                <p  class="cyan--text display-3 font-weight-light">0</p>
                <h3 class="headline mb-0">VIỆC LÀM CỦA TÔI</h3>
              </div>
            </v-card-title>
            <v-card-actions class="justify-center align-center" >
              <v-flex md4 class="text-md-center"><v-btn color="success" small fab >0</v-btn><v-divider></v-divider><a class="black--text hoverCSSa">Đang xử lý</a></v-flex>
              <v-flex md4 class="text-md-center"><v-btn color="warning" small fab >0</v-btn><v-divider></v-divider><a class="black--text hoverCSSa">Đã xem</a></v-flex>
              <v-flex md4 class="text-md-center"><v-btn color="error" small fab >0</v-btn><v-divider></v-divider><a class="black--text hoverCSSa">Đã đóng</a></v-flex>
            </v-card-actions>
          </v-card>
        </v-flex>

        <!--            END VIỆC LÀM CỦA TÔI-->
      </v-layout>
    </div>

    <template>
      <v-card class="ma-2">
        <v-list three-line>
          <template v-for="(item, index) in items">
            <v-subheader
              v-if="item.header"
              :key="item.header"
            >
              {{ item.header }}
            </v-subheader>

            <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
            ></v-divider>

            <v-list-tile
              v-else
              :key="item.title"
              avatar
              @click=""
            >
              <v-list-tile-avatar>
                <img :src="item.avatar">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </template>

  </v-flex>
</template>

<script>
    export default {
        name: "JobAnnouncement",
      data: function () {
        return{
          items: [
            { header: 'Việc làm bạn sẽ yêu thích' },
            {
              avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
              title: 'Brunch this weekend?',
              subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
            },
            { divider: true, inset: true },
            {
              avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
              title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
              subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
            },
            { divider: true, inset: true },
            {
              avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
              title: 'Oui oui',
              subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
            },
            { divider: true, inset: true },
            {
              avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
              title: 'Birthday gift',
              subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?"
            },
            { divider: true, inset: true },
            {
              avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
              title: 'Recipe to try',
              subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
            }
          ],
        }}
    }
</script>

<style scoped>

</style>
