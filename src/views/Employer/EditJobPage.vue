<template>
    <EmployerMainLayout>
      <EditJob></EditJob>
    </EmployerMainLayout>
</template>

<script>
    import EmployerMainLayout from "../../layouts/EmployerMainLayout";
    import EditJob from "../../components/Employer/Job/EditJob";
    export default {
        name: "EditJobPage",
      components: {EditJob, EmployerMainLayout}
    }
</script>

<style scoped>

</style>
