<template>
    <DashBoardLayout>
      <CreateCV></CreateCV>
    </DashBoardLayout>
</template>

<script>
    import DashBoardLayout from "../layouts/DashBoardLayout";
    import CreateCV from "../components/JobSeekeer/createCV/CreateCV";
    export default {
        name: "JobSeekerCreateCV",
      components: {CreateCV, DashBoardLayout}
    }
</script>

<style scoped>

</style>
