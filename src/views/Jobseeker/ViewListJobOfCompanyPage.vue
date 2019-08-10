<template>
    <DashBoardLayout>
      <ListJobOfCompany></ListJobOfCompany>
    </DashBoardLayout>
</template>

<script>
    import DashBoardLayout from "../../layouts/DashBoardLayout";
    import ListJobOfCompany from "../../components/JobSeekeer/jobseeker_mainscreen/ListJobOfCompany";
    export default {
        name: "ViewListJobOfCompanyPage",
      components: {ListJobOfCompany, DashBoardLayout}
    }
</script>

<style scoped>

</style>
