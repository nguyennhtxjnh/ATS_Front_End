<template>
  <v-container fluid fill-height>
    <v-layout row wrap>
      <v-flex xs12 sm12 md12>
        <!--        tab-->
<!--        <template >-->
<!--          <v-tabs-->
<!--            color="cyan"-->
<!--            next-icon="mdi-arrow-right-bold-box-outline"-->
<!--            prev-icon="mdi-arrow-left-bold-box-outline"-->
<!--            show-arrows-->
<!--          >-->
<!--            <v-tabs-slider color="yellow"></v-tabs-slider>-->
<!--            <v-tab-->
<!--              v-for="item in items1"-->
<!--              :key="item"-->
<!--            >-->
<!--              {{ item }}-->
<!--            </v-tab>-->

<!--            <v-tabs-items class="justify-center align-center">-->
<!--              <v-tab-item-->
<!--                v-for="item in items1"-->
<!--                :key="item"-->
<!--              >-->
<!--                <v-card flat>-->
<!--                  &lt;!&ndash;                  card content&ndash;&gt;-->
<!--                  <v-card-text v-if="item === 'Quản Lý Hồ Sơ'">aaaaaaaaaaa</v-card-text>-->
<!--                  <v-card-text v-if="item === 'Việc Làm Của Tôi'">bbbbbbbbbbb</v-card-text>-->
<!--                  <v-card-text v-if="item === 'Thông Báo Việc Làm'">ccccccccccc</v-card-text>-->
<!--                  <v-card-text v-if="item === 'Nhà Tuyển Dụng Xem Hồ Sơ'">cdddddddddddd</v-card-text>-->
<!--                  &lt;!&ndash;                  end card content&ndash;&gt;-->
<!--                </v-card>-->
<!--              </v-tab-item>-->
<!--            </v-tabs-items>-->
<!--          </v-tabs>-->
<!--        </template>-->
        <!--     end tab-->
      </v-flex>
      <v-flex xs12 sm12 md3>

<!--        User Card-->
        <template>
          <v-layout align-center justify-center mt-2>
            <v-flex md10>
              <v-card class="pa-3 ">
<!--                <v-img-->
<!--                  src="data:image/png;base64,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"-->
<!--                  contain-->
<!--                  aspect-ratio="2"-->
<!--                ></v-img>-->

                <v-card-title primary-title class="justify-center text-md-center">
                  <div>
                    <h3 class="headline mb-0">User Name Here</h3>
                    <p>Sinh viên</p>
                    <p>Mới tốt nghiệp</p>
                    <p>Công ty gần đây</p>
                    <p>Bằng cấp mới nhất</p>
                  </div>
                </v-card-title>

                <v-card-actions class="justify-center">
                  <v-btn flat color="orange" class="v-btn--outline">Cập Nhật Hồ Sơ</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </template>
        <!--        End User Card-->
      </v-flex>

      <v-flex xs12 sm12 md9>
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

    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'DashBoard',
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
        tab: null,
        items1: [
          'Quản Lý Hồ Sơ', 'Việc Làm Của Tôi', 'Thông Báo Việc Làm', 'Nhà Tuyển Dụng Xem Hồ Sơ'
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
          'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
          ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi' +
          ' ut aliquip ex ea commodo consequat.',


      }
    }
  }
</script>

<style scoped>
  p {
     margin-bottom: 5px;
  }
  .hoverCSSa:hover{
    color: orange !important;
    cursor: pointer;
  }
  .v-divider{
    display: table-row-group !important;
  }
</style>
