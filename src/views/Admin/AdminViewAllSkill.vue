<template>
    <AdminDashBoardLayout>
      <AdminAllSkill></AdminAllSkill>
    </AdminDashBoardLayout>
</template>

<script>
    import AdminDashBoardLayout from "../../layouts/AdminDashBoardLayout";
    import AdminAllSkill from "../../components/Admin/Skill/AdminAllSkill";
    export default {
        name: "AdminViewAllSkill",
      components: {AdminAllSkill, AdminDashBoardLayout}
    }
</script>

<style scoped>

</style>
