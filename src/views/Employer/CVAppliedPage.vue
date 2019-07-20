<template>
    <EmployerMainLayout>
      <CVappliedComponent :jobid="jobid"></CVappliedComponent>
    </EmployerMainLayout>
</template>

<script>
    import EmployerMainLayout from "../../layouts/EmployerMainLayout";
    import CVappliedComponent from "../../components/Employer/CVapplied/CVappliedComponent";
    export default {
        name: "CVAppliedPage",
      components: {CVappliedComponent, EmployerMainLayout},

      data: () => ( {
        imgURL:'',
        cvs:[],
        page:'',
        jobid: this.$route.params.jobid,
      }),
      mounted() {
          console.log(this.jobid)
      }
    }
</script>

<style scoped>

</style>
