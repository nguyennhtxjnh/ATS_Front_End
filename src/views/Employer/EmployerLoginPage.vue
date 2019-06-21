<template>
  <EmployerMainLayout>
    <Login></Login>
  </EmployerMainLayout>
</template>

<script>
  import DashBoardLayout from '../../layouts/DashBoardLayout'
  import Login from '../../components/Employer/login/Login'
  import EmployerMainLayout from '../../layouts/EmployerMainLayout'
  export default {
    name: 'EmployerLoginPage',
    components: {Login, EmployerMainLayout}
  }
</script>

<style scoped>

</style>
