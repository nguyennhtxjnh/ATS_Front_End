<template>
<AdminDashBoardLayout>
  <AdminAllReceipt></AdminAllReceipt>
</AdminDashBoardLayout>
</template>

<script>
  import AdminDashBoardLayout from '../../layouts/AdminDashBoardLayout'
  import AdminAllReceipt from '../../components/Admin/Service/AdminAllReceipt'

  export default {
    name: 'AdminAllReceiptPage',
    components:{AdminAllReceipt, AdminDashBoardLayout}
  }
</script>

<style scoped>

</style>
