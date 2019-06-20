<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
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
            <h4>Chào mừng bạn,</h4>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex md12 sm12 xs12>
        <v-container>
          <v-layout row wrap>
            <v-flex md12 sm12 xs12>
              <v-switch v-model="isActive" class="pl-3">
                <template v-slot:label>
                  <div v-if="isActive"> Trạng thái tìm việc<strong class="primary--text"> BẬT</strong></div>
                  <div v-if="!isActive"> Trạng thái tìm việc <strong class="primary--text"> TẮT</strong></div>
                </template>
              </v-switch>
            </v-flex>
            <v-flex md12 sm12 xs12>
              <span>Bật tìm việc để nhận được nhiều cơ hội việc làm tốt nhất</span>
            </v-flex>

          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
  export default {
    name: "ProfileBasicComponent",
    data: () => ({
      isActive: true,
    })

  }
</script>

<style scoped>

</style>
