<template>
    <v-container>
      <v-layout row wrap>
      <v-spacer/>
      <v-flex md6 xs6>
        <h1 style="color: #ff5e2d"> Bạn đã xác nhận thành công </h1>
      </v-flex>

      <v-spacer/>

    </v-layout>
      <v-layout row wrap>
        <v-spacer/>
        <v-flex md6 xs6>
          <img :src="require('@/assets/mail.png')">
        </v-flex>

        <v-spacer/>

      </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "CheckEmailSuccess"
    }
</script>

<style scoped>

</style>
