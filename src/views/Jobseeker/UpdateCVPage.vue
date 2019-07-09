<template>
    <DashBoardLayout>
      <UpdateCV></UpdateCV>
    </DashBoardLayout>
</template>

<script>
    import DashBoardLayout from "../../layouts/DashBoardLayout";
    import UpdateCV from "../../components/JobSeekeer/updateCV/UpdateCV";
    export default {
        name: "UpdateCVPage",
      components: {UpdateCV, DashBoardLayout}
    }
</script>

<style scoped>

</style>
