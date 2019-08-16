<template>
    <DashBoardLayout>
      <FeedbackCompany></FeedbackCompany>
    </DashBoardLayout>
</template>

<script>
    import DashBoardLayout from "../../layouts/DashBoardLayout";
    import FeedbackCompany from "../../components/JobSeekeer/Feedback/FeedbackCompany";
    export default {
        name: "FeedbackCompanyPage",
      components: {FeedbackCompany, DashBoardLayout}
    }
</script>

<style scoped>

</style>
