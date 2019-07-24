<template>
<AdminDashBoardLayout>
  <AdminAcceptReceipt></AdminAcceptReceipt>
</AdminDashBoardLayout>
</template>

<script>
  import AdminDashBoardLayout from '../../layouts/AdminDashBoardLayout'
  import AdminAcceptReceipt from '../../components/Admin/Service/AdminAcceptReceipt'

  export default {
    name: 'AdminAcceptReceiptPage',
    components: {AdminAcceptReceipt, AdminDashBoardLayout}
  }
</script>

<style scoped>

</style>
