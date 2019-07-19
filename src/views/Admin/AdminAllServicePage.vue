<template>
    <AdminDashBoardLayout>
      <AdminAllService></AdminAllService>
    </AdminDashBoardLayout>
</template>

<script>
  import AdminDashBoardLayout from '../../layouts/AdminDashBoardLayout'
  import AdminAllService from '../../components/Admin/Service/AdminAllService'

  export default {
    name: 'AdminAllServicePage',
    components: {AdminAllService, AdminDashBoardLayout}
  }
</script>

<style scoped>

</style>
