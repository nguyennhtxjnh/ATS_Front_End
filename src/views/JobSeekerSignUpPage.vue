<template>
  <DashBoardLayout>
    <SignUp></SignUp>
  </DashBoardLayout>
</template>

<script>
  import DashBoardLayout from '../layouts/DashBoardLayout'
  import SignUp from '../components/JobSeekeer/signup/SignUp'
  export default {
    name: 'JobSeekerSignUpPage',
    components: {SignUp, DashBoardLayout}
  }
</script>

<style scoped>

</style>
