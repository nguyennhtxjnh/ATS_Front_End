<template>
  <DashBoardLayout>
    <DashBoard></DashBoard>
  </DashBoardLayout>
</template>

<script>
  import DashBoardLayout from '../layouts/DashBoardLayout'
  import DashBoard from '../components/JobSeekeer/DashBoard/DashBoard'
  export default {
    name: 'JobSeekerDashBoard',
    components: {DashBoard, DashBoardLayout}
  }
</script>

<style scoped>

</style>
