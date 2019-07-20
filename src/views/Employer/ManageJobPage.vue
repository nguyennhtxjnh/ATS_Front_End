<template>
    <EmployerMainLayout>
      <ManageJob></ManageJob>
    </EmployerMainLayout>
</template>

<script>
    import EmployerMainLayout from "../../layouts/EmployerMainLayout";
    import ManageJob from "../../components/Employer/manageJob/ManageJob";
    export default {
        name: "ManageJobPage",
      components: {ManageJob, EmployerMainLayout}
    }
</script>

<style scoped>

</style>
