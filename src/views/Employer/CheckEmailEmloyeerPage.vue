<template>
    <EmployerMainLayout>
      <CheckEmail></CheckEmail>
    </EmployerMainLayout>
</template>

<script>
    import EmployerMainLayout from "../../layouts/EmployerMainLayout";
    import CheckEmail from "../../components/Employer/signup/CheckEmail";
    export default {
        name: "CheckEmailEmloyeerPage",
      components: {CheckEmail, EmployerMainLayout}
    }
</script>

<style scoped>

</style>
