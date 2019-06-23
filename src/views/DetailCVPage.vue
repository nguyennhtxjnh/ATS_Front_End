<template>
    <DashBoardLayout>
      <DetailCV></DetailCV>
    </DashBoardLayout>
</template>

<script>
    import DashBoardLayout from "../layouts/DashBoardLayout";
    import DetailCV from "../components/JobSeekeer/detailCV/DetailCV";
    export default {
        name: "DetailCVPage",
      components: {DetailCV, DashBoardLayout}
    }
</script>

<style scoped>

</style>
