<template>
    <EmployerMainLayout>
      <EmployeeMainScreen></EmployeeMainScreen>
    </EmployerMainLayout>
</template>

<script>
    import EmployerMainLayout from '../../layouts/EmployerMainLayout'
    import EmployeeMainScreen from "../../components/Employer/employer_mainscreen/EmployeeMainScreen";
    export default {
        name: "EmployerMainScreenPage",
      components: {EmployeeMainScreen, EmployerMainLayout}
    }
</script>

<style scoped>

</style>
