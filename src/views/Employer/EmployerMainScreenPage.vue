<template>
    <EmployerMainLayout>
      <EmployeeMainScreen></EmployeeMainScreen>
    </EmployerMainLayout>
</template>

<script>
    import DashBoardLayout from "../../layouts/DashBoardLayout";
    import EmployeeMainScreen from "../../components/employer_mainscreen/EmployeeMainScreen";
    import EmployerMainLayout from '../../layouts/EmployerMainLayout'
    export default {
        name: "EmployerMainScreenPage",
      components: {EmployeeMainScreen, EmployerMainLayout}
    }
</script>

<style scoped>

</style>
