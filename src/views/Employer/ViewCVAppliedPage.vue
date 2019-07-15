<template>
    <EmployerMainLayout>
      <v-layout row wrap>
        <DetailCV></DetailCV>

  <v-btn  color="error"  fixed floating="right" style="margin-top: 150px; margin-left: 20px; width: 220px; ">
    <v-icon class="mr-1">favorite</v-icon> Theo dõi Cv
  </v-btn>
  <v-btn   color="primary" fixed floating="right"  style="margin-top: 250px; margin-left: 20px; width: 220px">
    <v-icon class="mr-1">thumb_up</v-icon> Đặt lịch phỏng vấn
  </v-btn>
  <v-btn color="primary" fixed floating="right"  style="margin-top: 350px; margin-left: 20px; width: 220px">
    <v-icon class="mr-1" >thumb_down</v-icon> Bỏ qua
  </v-btn>



      </v-layout>

    </EmployerMainLayout>
</template>

<script>
    import EmployerMainLayout from "../../layouts/EmployerMainLayout";
    import DetailCV from "../../components/JobSeekeer/detailCV/DetailCV";
    export default {
        name: "ViewCVAppliedPage",
      components: {DetailCV, EmployerMainLayout}
    }
</script>

<style scoped>

</style>
