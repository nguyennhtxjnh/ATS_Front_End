<template>
  <DashBoardLayout>
    <Login></Login>
  </DashBoardLayout>
</template>

<script>
  import DashBoardLayout from '../layouts/DashBoardLayout'
  import Login from '../components/Employer/login/Login'
  export default {
    name: 'EmployerLoginPage',
    components: {Login, DashBoardLayout}
  }
</script>

<style scoped>

</style>
