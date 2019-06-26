<template>
    <DashBoardLayout>
      <ManageCV></ManageCV>
    </DashBoardLayout>
</template>

<script>
    import DashBoardLayout from "../../layouts/DashBoardLayout";
    import ManageCV from "../../components/JobSeekeer/manageCV/ManageCV";
    export default {
        name: "JobSeekerManageCVPage",
      components: {ManageCV, DashBoardLayout}
    }
</script>

<style scoped>

</style>
