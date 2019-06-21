<template>
  <DashBoardLayout>
    <Login></Login>
  </DashBoardLayout>
</template>

<script>
  import DashBoardLayout from '../../layouts/DashBoardLayout'
  import Login from '../../components/JobSeekeer/login/Login'
  export default {
    name: 'JobSeekerLoginPage',
    components: {Login, DashBoardLayout}
  }
</script>

<style scoped>

</style>
