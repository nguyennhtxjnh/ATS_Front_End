<template>
    <DashBoardLayout>
      <JobSeekerMainScreen></JobSeekerMainScreen>
    </DashBoardLayout>
</template>

<script>
    import DashBoardLayout from "../layouts/DashBoardLayout";
    import JobSeekerMainScreen from "../components/JobSeekeer/jobseeker_mainscreen/JobSeekerMainScreen";
    export default {
        name: "JobSeekerMainScreenPage",
      components: {JobSeekerMainScreen, DashBoardLayout}
    }
</script>

<style scoped>

</style>
