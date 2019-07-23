<template>
  <EmployerMainLayout>
    <v-layout row wrap>
      <DetailCV></DetailCV>

      <v-btn color="error" v-if="checkSave === false" fixed floating="right" @click="saveCV"
             style="margin-top: 150px; margin-left: 20px; width: 220px; ">
        <v-icon class="mr-1">favorite</v-icon>
        Lưu Ứng viên
      </v-btn>
      <v-btn color="grey" @click="unsaveCV" dark v-if="checkSave === true" fixed floating="right"
             style="margin-top: 150px; margin-left: 20px; width: 220px; ">
        <v-icon class="mr-1">favorite</v-icon>
        Đã Lưu Ứng viên
      </v-btn>
      <v-btn color="primary" v-if="checkConfirm === 1" @click="confirmCV" fixed floating="right"
             style="margin-top: 250px; margin-left: 20px; width: 220px">
        <v-icon class="mr-1">thumb_up</v-icon>
        Xác nhận
      </v-btn>
      <v-btn color="grey" dark v-if="checkConfirm === 2" fixed floating="right"
             style="margin-top: 250px; margin-left: 20px; width: 220px">
        <v-icon class="mr-1">thumb_up</v-icon>
        Đã xác nhận
      </v-btn>
      <v-btn color="grey" v-if="checkConfirm === 1" dark fixed floating="right" @click="denyCV"
             style="margin-top: 350px; margin-left: 20px; width: 220px">
        <v-icon class="mr-1">thumb_down</v-icon>
        Bỏ qua
      </v-btn>
      <v-btn color="grey" v-if="checkConfirm === 3" dark fixed floating="right"
             style="margin-top: 350px; margin-left: 20px; width: 220px">
        <v-icon class="mr-1">thumb_down</v-icon>
        Đã bỏ qua
      </v-btn>


    </v-layout>

  </EmployerMainLayout>
</template>

<script>
  import EmployerMainLayout from "../../layouts/EmployerMainLayout";
  import DetailCV from "../../components/JobSeekeer/detailCV/DetailCV";
  import Axios from 'axios'
  import Constants from '@/stores/constant.js'
  import {mapGetters} from 'vuex';

  export default {
    name: "ViewCVAppliedPage",
    components: {DetailCV, EmployerMainLayout},
    data: function () {
      return {
        userId: '',
        cvid: this.$route.params.cvid,
        checkSave: '',
        checkConfirm: '',
        jobid: this.$route.params.jobid,
      }
    },
    methods: {

      saveCV() {
        console.log("save")
        this.userId = this.userId2;
        Axios
          .post(Constants.URL + '/userlifecv/create/' + this.userId + '/' + this.cvid)
          .then(response => {
            if (response.data.success === true) {
              this.checkSave = true;
              this.$notify({
                group: 'foo',
                type: 'success',
                title: 'Thành công',
                text: 'Lưu thành công'
              })
            }
          })

      },
      unsaveCV() {
        this.userId = this.userId2;
        Axios
          .post(Constants.URL + '/userlifecv/unlike/' + this.userId + '/' + this.cvid)
          .then(response => {
            if (response.data.success === true) {
              this.checkSave = false;
              this.$notify({
                group: 'foo',
                type: 'success',
                title: 'Thành công',
                text: 'Bỏ Lưu thành công'
              })
            }
          })
      },
      confirmCV() {
        console.log("confirm")
        Axios
          .get(Constants.URL + '/apply/confirm/' + this.jobid + '/' + this.cvid)
          .then(response => {
            if (response.data.success === true) {
              this.checkConfirm = "2";
              this.$notify({
                group: 'foo',
                type: 'success',
                title: 'Thành công',
                text: 'Xác nhận thành công'
              })
            }
          })
      },
      denyCV() {
        console.log("deny")
        Axios
          .get(Constants.URL + '/apply/deny/' + this.jobid + '/' + this.cvid)
          .then(response => {
            if (response.data.success === true) {
              this.checkConfirm = "3";
              this.$notify({
                group: 'foo',
                type: 'success',
                title: 'Thành công',
                text: 'Bỏ qua thành công'
              })
            }
          })
      },


      getComponent() {
        this.cvid = this.$route.params.cvid,
          this.jobid =  this.$route.params.jobid,
          this.userId = this.userId2;
        Axios
          .get(Constants.URL + '/userlifecv/check/' + this.userId + '/' + this.cvid)
          .then(response => (
            this.checkSave = response.data,
              console.log(response)
          ))
        Axios
          .post(Constants.URL + '/apply/checkstatus/' + this.cvid + '/' + this.jobid)
          .then(response => (
            this.checkConfirm = parseInt(response.data.data)
          ))
      }
    },
  mounted() {
      this.getComponent();
  }
    ,
    watch: {
      userId2() {
        this.getComponent();
      }
    },
    computed: {
      ...mapGetters('AUTHENTICATION_STORE', {
        email: 'email2',
        roleId: 'roleId2',
        fullName: 'fullName2',
        userId2: 'userId2'
      }),
    },
  }
</script>

<style scoped>

</style>
