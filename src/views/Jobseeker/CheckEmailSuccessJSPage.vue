<template>
    <DashBoardLayout>
      <CheckEmailSuccess></CheckEmailSuccess>
    </DashBoardLayout>
</template>

<script>
    import EmployerMainLayout from "../../layouts/EmployerMainLayout";
    import CheckEmailSuccess from "../../components/Employer/signup/CheckEmailSuccess";
    import DashBoardLayout from "../../layouts/DashBoardLayout";
    export default {
        name: "CheckEmailSuccessJSPage",
      components: {DashBoardLayout, CheckEmailSuccess, EmployerMainLayout}
    }
</script>

<style scoped>

</style>
