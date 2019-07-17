<template>
    <AdminDashBoardLayout>
      <AdminViewAllCompany></AdminViewAllCompany>
    </AdminDashBoardLayout>
</template>

<script>
  import AdminDashBoardLayout from '../../layouts/AdminDashBoardLayout'
  import AdminViewAllCompany from '../../components/Admin/Company/AdminViewAllCompany'

  export default {
    name: 'AdminViewAllCompanyPage',
    components: {AdminViewAllCompany, AdminDashBoardLayout}
  }
</script>

<style scoped>

</style>
