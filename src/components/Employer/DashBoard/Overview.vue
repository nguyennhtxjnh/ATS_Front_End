<template>
  <v-flex >
    <v-container >
      <v-layout row wrap >
        <!-- Nhà Tuyển Dụng Xem Hồ Sơ-->
<v-spacer/>
        <v-flex md4 sm12 class="ma-2">
          <v-card sm12 style="height: 100%;">
            <v-card-title primary-title class="justify-center text-md-center">
              <div>
                <p  class="orange--text display-3 font-weight-light">0</p>
                <h3 class="headline mb-0">Tổng số ứng viên</h3>
              </div>
            </v-card-title>

          </v-card>
        </v-flex>
<v-spacer/>
        <!-- End Nhà Tuyển Dụng Xem Hồ Sơ-->
        <!--      THÔNG BÁO VIỆC LÀM-->

        <v-flex md4 sm12 class="ma-2">
          <v-card sm12 style="height: 100%;">
            <v-card-title primary-title class="justify-center text-md-center">
              <div>
                <p  class="green--text display-3 font-weight-light">0</p>
                <h3 class="headline mb-0">Cập nhật 1 tháng gần nhất</h3>
              </div>
            </v-card-title>

          </v-card>
        </v-flex>
<v-spacer/>
        <!--      End   THÔNG BÁO VIỆC LÀM-->

      </v-layout>
    </v-container>



  </v-flex>
</template>

<script>
    export default {
        name: "Overview"
    }
</script>

<style scoped>

</style>
