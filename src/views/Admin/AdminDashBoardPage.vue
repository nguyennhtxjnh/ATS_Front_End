<template>
    <AdminDashBoardLayout>
      <AdminViewAllJob></AdminViewAllJob>
    </AdminDashBoardLayout>
</template>

<script>

  import AdminDashBoardLayout from '../../layouts/AdminDashBoardLayout'
  import AdminViewAllJob from '../../components/Admin/Job/AdminViewAllJob'

  export default {
    name: 'AdminDashBoardPage',
    components: {AdminViewAllJob, AdminDashBoardLayout}
  }
</script>

<style scoped>

</style>
