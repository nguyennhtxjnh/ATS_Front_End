<template>
    <DashBoardLayout>
      <EmployeeMainScreen></EmployeeMainScreen>
    </DashBoardLayout>
</template>

<script>
    import DashBoardLayout from "../layouts/DashBoardLayout";
    import EmployeeMainScreen from "../components/employer_mainscreen/EmployeeMainScreen";
    export default {
        name: "EmployerMainScreenPage",
      components: {EmployeeMainScreen, DashBoardLayout}
    }
</script>

<style scoped>

</style>
