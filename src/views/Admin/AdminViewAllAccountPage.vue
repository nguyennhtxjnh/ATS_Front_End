<template>
    <AdminDashBoardLayout>
      <AdminViewAllAccount></AdminViewAllAccount>
    </AdminDashBoardLayout>
</template>

<script>
  import AdminDashBoardLayout from '../../layouts/AdminDashBoardLayout'
  import AdminViewAllAccount from '../../components/Admin/Account/AdminViewAllAccount'

  export default {
    name: 'AdminViewAllAccountPage',
    components: {AdminViewAllAccount, AdminDashBoardLayout}
  }
</script>

<style scoped>

</style>
