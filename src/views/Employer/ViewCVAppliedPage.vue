<template>
  <EmployerMainLayout>
      <DetailCVApplied></DetailCVApplied>
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
