<template>
  <EmployerMainLayout>
    <v-layout row wrap>
      <DetailCVApplied></DetailCVApplied>

<!--      <v-btn color="error" v-if="checkSave === false" fixed floating="right" @click="saveCV"-->
<!--             style="margin-top: 150px; margin-left: 20px; width: 220px; ">-->
<!--        <v-icon class="mr-1">favorite</v-icon>-->
<!--        Lưu Ứng viên-->
<!--      </v-btn>-->
<!--      <v-btn color="grey" @click="unsaveCV" dark v-if="checkSave === true" fixed floating="right"-->
<!--             style="margin-top: 150px; margin-left: 20px; width: 220px; ">-->
<!--        <v-icon class="mr-1">favorite</v-icon>-->
<!--        Đã Lưu Ứng viên-->
<!--      </v-btn>-->
<!--      <v-btn color="primary" v-if="checkConfirm === 1" @click="confirmCV" fixed floating="right"-->
<!--             style="margin-top: 250px; margin-left: 20px; width: 220px">-->
<!--        <v-icon class="mr-1">thumb_up</v-icon>-->
<!--        Xác nhận-->
<!--      </v-btn>-->
<!--      <v-btn color="grey" dark v-if="checkConfirm === 2" fixed floating="right"-->
<!--             style="margin-top: 250px; margin-left: 20px; width: 220px">-->
<!--        <v-icon class="mr-1">thumb_up</v-icon>-->
<!--        Đã xác nhận-->
<!--      </v-btn>-->
<!--      <v-btn color="grey" v-if="checkConfirm === 1" dark fixed floating="right" @click="denyCV"-->
<!--             style="margin-top: 350px; margin-left: 20px; width: 220px">-->
<!--        <v-icon class="mr-1">thumb_down</v-icon>-->
<!--        Bỏ qua-->
<!--      </v-btn>-->
<!--      <v-btn color="grey" v-if="checkConfirm === 3" dark fixed floating="right"-->
<!--             style="margin-top: 350px; margin-left: 20px; width: 220px">-->
<!--        <v-icon class="mr-1">thumb_down</v-icon>-->
<!--        Đã bỏ qua-->
<!--      </v-btn>-->


    </v-layout>

  </EmployerMainLayout>
</template>

<script>
  import EmployerMainLayout from "../../layouts/EmployerMainLayout";
  import DetailCV from "../../components/JobSeekeer/detailCV/DetailCV";
  import DetailCVApplied from "../../components/Employer/CVapplied/DetailCVApplied";

  export default {
    name: "ViewCVAppliedPage",
    components: {DetailCVApplied, DetailCV, EmployerMainLayout},
    data: function () {
      return {
        userId: '',
        checkSave: '',
        checkConfirm: '',
        jobid: this.$route.params.jobid,
      }
    },


  }
</script>

<style scoped>

</style>
