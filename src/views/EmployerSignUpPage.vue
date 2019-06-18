<template>
  <DashBoardLayout>
    <Signup></Signup>
  </DashBoardLayout>
</template>

<script>
  import DashBoardLayout from '../layouts/DashBoardLayout'
  import Signup from '../components/Employer/signup/SignUp'
  export default {
    name: 'EmployerSignUpPage',
    components: {Signup, DashBoardLayout}
  }
</script>

<style scoped>

</style>
