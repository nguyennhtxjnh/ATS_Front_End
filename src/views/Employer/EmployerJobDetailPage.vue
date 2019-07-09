<template>
  <EmployerMainLayout>
    <JobDetail></JobDetail>
  </EmployerMainLayout>
</template>

<script>
  import DashBoardLayout from '../../layouts/DashBoardLayout'
  import JobDetail from '../../components/Employer/Job/JobDetail'
  import EmployerMainLayout from '../../layouts/EmployerMainLayout'
  export default {
    name: 'EmployerJobDetailPage',
    components: {JobDetail, EmployerMainLayout}
  }
</script>

<style scoped>

</style>
