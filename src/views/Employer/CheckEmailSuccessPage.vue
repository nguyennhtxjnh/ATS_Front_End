<template>
    <EmployerMainLayout>
      <CheckEmailSuccess></CheckEmailSuccess>
    </EmployerMainLayout>
</template>

<script>
    import EmployerMainLayout from "../../layouts/EmployerMainLayout";
    import CheckEmailSuccess from "../../components/Employer/signup/CheckEmailSuccess";
    export default {
        name: "CheckEmailSuccessPage",
      components: {CheckEmailSuccess, EmployerMainLayout}
    }
</script>

<style scoped>

</style>
