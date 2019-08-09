<template>
    <DashBoardLayout>
      <CheckEmail></CheckEmail>
    </DashBoardLayout>
</template>

<script>
    import EmployerMainLayout from "../../layouts/EmployerMainLayout";
    import CheckEmail from "../../components/Employer/signup/CheckEmail";
    import DashBoardLayout from "../../layouts/DashBoardLayout";
    export default {
        name: "CheckEmailEmloyeerPage",
      components: {DashBoardLayout, CheckEmail, EmployerMainLayout}
    }
</script>

<style scoped>

</style>
