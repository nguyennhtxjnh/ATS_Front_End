<template>
    <EmployerMainLayout>
      <ManageJobSeeker></ManageJobSeeker>
    </EmployerMainLayout>
</template>

<script>
    import EmployerMainLayout from "../../layouts/EmployerMainLayout";
    import ManageJobSeeker from "../../components/Employer/manageJobSeeker/ManageJobSeeker";
    export default {
        name: "ManageJobSeekerPage",
      components: {ManageJobSeeker, EmployerMainLayout}
    }
</script>

<style scoped>

</style>
