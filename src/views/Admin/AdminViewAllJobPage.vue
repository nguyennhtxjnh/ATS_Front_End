<template>
  <AdminDashBoardLayout>
    <AdminViewAllJob></AdminViewAllJob>
  </AdminDashBoardLayout>
</template>

<script>
  import AdminViewAllJob from '../../components/Admin/Job/AdminViewAllNewJob'
  import AdminDashBoardLayout from '../../layouts/AdminDashBoardLayout'

  export default {
    name: 'AdminViewAllJobPage',
    components: {AdminViewAllJob, AdminDashBoardLayout}
  }
</script>

<style scoped>

</style>
