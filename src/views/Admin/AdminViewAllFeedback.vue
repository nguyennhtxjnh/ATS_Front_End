<template>
    <AdminDashBoardLayout>
      <AdminViewFeedBack></AdminViewFeedBack>
    </AdminDashBoardLayout>
</template>

<script>
    import AdminDashBoardLayout from "../../layouts/AdminDashBoardLayout";
    import AdminViewFeedBack from "../../components/Admin/Feedback/AdminViewFeedBack";
    export default {
        name: "AdminViewAllFeedback",
      components: {AdminViewFeedBack, AdminDashBoardLayout}
    }
</script>

<style scoped>

</style>
