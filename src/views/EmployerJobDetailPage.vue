<template>
  <DashBoardLayout>
    <JobDetail></JobDetail>
  </DashBoardLayout>
</template>

<script>
  import DashBoardLayout from '../layouts/DashBoardLayout'
  import JobDetail from '../components/Employer/JobDetail/JobDetail'
  export default {
    name: 'EmployerJobDetailPage',
    components: {JobDetail, DashBoardLayout}
  }
</script>

<style scoped>

</style>
