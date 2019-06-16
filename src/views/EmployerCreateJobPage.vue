<template>
  <DashBoardLayout>
    <CreateJob></CreateJob>
  </DashBoardLayout>
</template>

<script>
  import DashBoardLayout from '../layouts/DashBoardLayout'
  import CreateJob from '../components/Employer/CreateJob/CreateJob'
  export default {
    name: 'JobSeekerLoginPage',
    components: {CreateJob, DashBoardLayout}
  }
</script>

<style scoped>

</style>
