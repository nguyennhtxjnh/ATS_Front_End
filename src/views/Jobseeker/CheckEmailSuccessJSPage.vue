<template>
    <DashBoardLayout>
      <CheckEmailSuccessJS></CheckEmailSuccessJS>
    </DashBoardLayout>
</template>

<script>
    import EmployerMainLayout from "../../layouts/EmployerMainLayout";
    import CheckEmailSuccess from "../../components/Employer/signup/CheckEmailSuccess";
    import DashBoardLayout from "../../layouts/DashBoardLayout";
    import CheckEmailSuccessJS from "../../components/JobSeekeer/signup/CheckEmailSuccessJS";
    export default {
        name: "CheckEmailSuccessJSPage",
      components: {CheckEmailSuccessJS, DashBoardLayout, CheckEmailSuccess, EmployerMainLayout}
    }
</script>

<style scoped>

</style>
