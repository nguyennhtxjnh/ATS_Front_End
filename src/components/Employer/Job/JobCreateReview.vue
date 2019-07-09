<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>

      <v-flex xs12 sm12 md10>
        <v-card style="border-style: solid; border-color: #ccc; border-width: 1px;" class="elevation-0 border_all">
          <v-toolbar dark color="orange">
            <v-toolbar-title>Thông Tin Tuyển Dụng</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-container fluid fill-height>
              <v-layout fill-height wrap>
                {{formData.title}}
              </v-layout>
            </v-container>

          </v-card-text>
          <v-card-actions class="justify-center mb-4">
            <div class="text-xs-center">
              <v-spacer></v-spacer>
              <v-btn color="orange" style="color: white !important;" @click="router.push('/trang-chu-tuyen-dung')">Đến Trang Chủ</v-btn>
            </div>
          </v-card-actions>
        </v-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
  import Axios from 'axios'
  import {mapGetters} from 'vuex'

  export default {
    name: 'JobCreateReview',
    data : ()=> {
      return {
        formData: [],
        formDataSkill: [],

      }
    },
    methods: {



    },
    mounted() {
      this.$nextTick(() => {
        this.formData = JSON.parse(sessionStorage.getItem("jobInfo"));
        this.formDataSkill = JSON.parse(sessionStorage.getItem("jobSkill"));
        console.log(this.formData)
        console.log(this.formDataSkill)
      })
    },
    computed: {
      ...mapGetters('AUTHENTICATION_STORE',{
        email : 'email2',
        roleId: 'roleId2',
        fullName: 'fullName2',
        userId2: 'userId2'
      }),
    }
  }
</script>

<style scoped>

</style>
