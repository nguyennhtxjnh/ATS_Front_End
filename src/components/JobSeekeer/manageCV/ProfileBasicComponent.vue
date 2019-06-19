<template>
    <v-card>
      <v-layout row wrap>
        <v-flex md12 sm12 xs12>
          <v-layout row wrap class="pa-2">
            <v-flex md4 xs12>
              <v-avatar>
              <v-img :src="require('@/assets/mau-cv-senior.png')"></v-img>
              </v-avatar>
            </v-flex>
            <v-flex md7 xs12>
              <h4>Chào mừng bạn đã trở lại</h4>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex md12 sm12 xs12>
          <v-layout row wrap>
            <v-flex md2 xs2>
              <v-switch v-model="isActive" >
              </v-switch>
            </v-flex>
            <v-flex md8 xs10>
              <v-flex v-if="isActive">
                Trạng thái tìm việc bật
              </v-flex>
              <v-flex v-if="!isActive">
                Trạng thái tìm việc tắt
              </v-flex>
            </v-flex>
            <v-spacer/>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-card>
</template>

<script>
    export default {
        name: "ProfileBasicComponent",
      data: () => ( {
        isActive: true,
      })

    }
</script>

<style scoped>

</style>
