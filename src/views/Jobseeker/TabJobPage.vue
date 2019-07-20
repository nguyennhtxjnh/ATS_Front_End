<template>
    <DashBoardLayout>
      <TabJob></TabJob>
    </DashBoardLayout>
</template>

<script>
    import DashBoardLayout from "../../layouts/DashBoardLayout";
    import TabJob from "../../components/JobSeekeer/job/TabJob";
    export default {
        name: "TabJobPage",
      components: {TabJob, DashBoardLayout}
    }
</script>

<style scoped>

</style>
