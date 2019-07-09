<template>
  <EmployerMainLayout>
    <DashBoard></DashBoard>
  </EmployerMainLayout>
</template>

<script>
  import EmployerMainLayout from '../../layouts/EmployerMainLayout'
  import DashBoard from '../../components/Employer/DashBoard/DashBoard'

  export default {
    name: 'DashBoardPage',
    components: {DashBoard, EmployerMainLayout}
  }
</script>

<style scoped>

</style>
