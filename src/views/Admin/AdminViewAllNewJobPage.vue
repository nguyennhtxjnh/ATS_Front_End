<template>
  <AdminDashBoardLayout>
    <AdminViewAllNewJob></AdminViewAllNewJob>
  </AdminDashBoardLayout>
</template>

<script>
  import AdminViewAllNewJob from '../../components/Admin/Job/AdminViewAllNewJob'
  import AdminDashBoardLayout from '../../layouts/AdminDashBoardLayout'

  export default {
    name: 'AdminViewAllJobPage',
    components: {AdminViewAllNewJob, AdminDashBoardLayout}
  }
</script>

<style scoped>

</style>
