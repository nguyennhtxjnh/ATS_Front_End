<template>
  <DashBoardLayout>
    <SignUp></SignUp>
  </DashBoardLayout>
</template>

<script>
  import DashBoardLayout from '../layouts/DashBoardLayout'
  import SignUp from '../components/signup/SignUp'
  export default {
    name: 'SignUpPage',
    components: {SignUp, DashBoardLayout}
  }
</script>

<style scoped>

</style>
