<template>
    <AdminDashBoardLayout>
      <AdminViewAllNewCompany></AdminViewAllNewCompany>
    </AdminDashBoardLayout>
</template>

<script>
  import AdminDashBoardLayout from '../../layouts/AdminDashBoardLayout'
  import AdminViewAllNewCompany from '../../components/Admin/Company/AdminViewAllNewCompany'

  export default {
    name: 'AdminViewAllNewCompanyPage',
    components: {AdminViewAllNewCompany, AdminDashBoardLayout}
  }
</script>

<style scoped>

</style>
