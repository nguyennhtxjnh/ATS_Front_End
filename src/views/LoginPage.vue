<template>
  <DashBoardLayout>
    <Login></Login>
  </DashBoardLayout>
</template>

<script>
  import DashBoardLayout from '../layouts/DashBoardLayout'
  import Login from '../components/login/Login'
  export default {
    name: 'LoginPage',
    components: {Login, DashBoardLayout}
  }
</script>

<style scoped>

</style>
