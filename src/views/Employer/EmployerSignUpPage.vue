<template>
  <EmployerMainLayout>
    <Signup></Signup>
  </EmployerMainLayout>
</template>

<script>
  import DashBoardLayout from '../../layouts/DashBoardLayout'
  import Signup from '../../components/Employer/signup/SignUp'
  import EmployerMainLayout from '../../layouts/EmployerMainLayout'
  export default {
    name: 'EmployerSignUpPage',
    components: {Signup, EmployerMainLayout}
  }
</script>

<style scoped>

</style>
