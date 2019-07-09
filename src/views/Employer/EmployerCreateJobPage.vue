<template>
  <EmployerMainLayout>
    <CreateJob></CreateJob>
  </EmployerMainLayout>
</template>

<script>
  import DashBoardLayout from '../../layouts/DashBoardLayout'
  import CreateJob from '../../components/Employer/Job/CreateJob'
  import EmployerMainLayout from '../../layouts/EmployerMainLayout'
  export default {
    name: 'JobSeekerLoginPage',
    components: { CreateJob, EmployerMainLayout}
  }
</script>

<style scoped>

</style>
