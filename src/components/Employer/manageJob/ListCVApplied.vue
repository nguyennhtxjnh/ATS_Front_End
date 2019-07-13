<template>
  <v-container>
    <v-card class="pa-3">
      <v-card-title>
        <h3>1 - 12 trong 12727 ứng viên phù hợp</h3>
      </v-card-title>
      <v-divider class="pb-3"></v-divider>
      <v-layout row wrap>
        <v-flex md2 xs3>
          <v-avatar size="150px" align="center">
            <v-img :src="require('@/assets/avatar-default-icon.png')"></v-img>
          </v-avatar>
        </v-flex>
        <v-flex md8 xs8>
          <v-layout row wrap>
            <v-flex md8 xs8>
              <h2>Nguyễn Thị Diệu Linh</h2>
              <span><i>Vị trí ứng tuyển:</i> Nhân viên Tư Vấn Tuyển Dụng</span>
              <v-layout row wrap>
                <v-icon class="">mdi-bag-personal</v-icon>
                <span>Quản lý cửa hàng - Cửu hàng điện thoại di động</span>
              </v-layout>
              <v-layout row wrap>
                <v-icon class="">mdi-bag-personal</v-icon>
                <span>Nhân viên thu hồi nợ qua điện thoại - Công ty tài chính FECredit</span>
              </v-layout>
              <v-layout row wrap>
                <v-icon class="">mdi-school</v-icon>
                <span>Quản lý cửa hàng - Cửu hàng điện thoại di động</span>
              </v-layout>
              <v-layout row wrap  >
                <v-flex md5 xs4 style="border: 2px #2c3e50; border-style: dotted"  class="pa-1 mr-2">
                  <v-icon class="">mdi-map-marker</v-icon>
                  <span>Địa điểm: Hồ Chí Minh</span>
                </v-flex>

                <v-flex md6 xs4 style="border: 2px #2c3e50; border-style: dotted"  class="pa-1">
                  <v-icon class="">mdi-calendar-blank</v-icon>
                  <span>Thời gian làm việc thực tế 2 năm</span>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-spacer/>
            <v-flex md3 xs4>
              <i style="float: right"><v-icon>mdi-update</v-icon> cập nhật 8 phút trước</i>
            </v-flex>
          </v-layout>
          <v-layout row wrap class="mt-3">
            <v-flex md10 xs4 style="border: 2px #2c3e50; border-style: dotted"  class="pa-1">
              <v-icon class="">mdi-star</v-icon>
              <span>Mục tiêu: - Công việc ổn định và gắn bó lâu dài - có khả năng thăng tiến trong công việc
                - Công việc phù hợp với mức lương ổn định.
                </span>
            </v-flex>
          </v-layout>

        </v-flex>
      </v-layout>
      <v-divider class="mt-2 mb-2"></v-divider>
      <v-layout row wrap>
        <v-flex md2 xs3>
          <v-avatar size="150px" align="center">
            <v-img :src="require('@/assets/avatar-default-icon.png')"></v-img>
          </v-avatar>
        </v-flex>
        <v-flex md8 xs8>
          <v-layout row wrap>
            <v-flex md8 xs8>
              <h2>Nguyễn Thị Diệu Linh</h2>
              <span><i>Vị trí ứng tuyển:</i> Nhân viên Tư Vấn Tuyển Dụng</span>
              <v-layout row wrap>
                <v-icon class="">mdi-bag-personal</v-icon>
                <span>Quản lý cửa hàng - Cửu hàng điện thoại di động</span>
              </v-layout>
              <v-layout row wrap>
                <v-icon class="">mdi-bag-personal</v-icon>
                <span>Nhân viên thu hồi nợ qua điện thoại - Công ty tài chính FECredit</span>
              </v-layout>
              <v-layout row wrap>
                <v-icon class="">mdi-school</v-icon>
                <span>Quản lý cửa hàng - Cửu hàng điện thoại di động</span>
              </v-layout>
              <v-layout row wrap  >
                <v-flex md5 xs4 style="border: 2px #2c3e50; border-style: dotted"  class="pa-1 mr-2">
                  <v-icon class="">mdi-map-marker</v-icon>
                  <span>Địa điểm: Hồ Chí Minh</span>
                </v-flex>

                <v-flex md6 xs4 style="border: 2px #2c3e50; border-style: dotted"  class="pa-1">
                  <v-icon class="">mdi-calendar-blank</v-icon>
                  <span>Thời gian làm việc thực tế 2 năm</span>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-spacer/>
            <v-flex md3 xs4>
              <i style="float: right"><v-icon>mdi-update</v-icon> cập nhật 8 phút trước</i>
            </v-flex>
          </v-layout>
          <v-layout row wrap class="mt-3">
            <v-flex md10 xs4 style="border: 2px #2c3e50; border-style: dotted"  class="pa-1">
              <v-icon class="">mdi-star</v-icon>
              <span>Mục tiêu: - Công việc ổn định và gắn bó lâu dài - có khả năng thăng tiến trong công việc
                - Công việc phù hợp với mức lương ổn định.
                </span>
            </v-flex>
          </v-layout>

        </v-flex>
      </v-layout>
      <v-divider  class="mt-2 mb-2"></v-divider>
      <v-layout row wrap>
        <v-spacer/>
        <v-flex md8 xs12 >
          <v-pagination
            v-model="page"
            :length="15"
          ></v-pagination>
        </v-flex>
        <v-spacer/>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
  import axios from 'axios';
  import Constants from '@/stores/constant.js'
  export default {
    name: "ListCVApplied",
    data: () => ( {
      cvs:[],
      img:require('@/assets/avatar-default-icon.png'),

    })
  }
</script>

<style scoped>

</style>
