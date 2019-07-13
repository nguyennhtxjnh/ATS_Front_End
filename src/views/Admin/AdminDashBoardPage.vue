<template>
    <AdminDashBoardLayout>
      <AdminDashBoard></AdminDashBoard>
    </AdminDashBoardLayout>
</template>

<script>
  import AdminDashBoard from '../../components/Admin/AdminDashBoard'
  import AdminDashBoardLayout from '../../layouts/AdminDashBoardLayout'

  export default {
    name: 'AdminDashBoardPage',
    components: {AdminDashBoard, AdminDashBoardLayout}
  }
</script>

<style scoped>

</style>
