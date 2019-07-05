<template>
    <DashBoardLayout>
      <ViewJobDetail>
      </ViewJobDetail>
    </DashBoardLayout>
</template>

<script>
  import DashBoardLayout from '../../layouts/DashBoardLayout'
  import ViewJobDetail from '../../components/JobSeekeer/job/ViewJobDetail'

  export default {
    name: 'JobSeekerViewJopDetailPage',
    components: {DashBoardLayout, ViewJobDetail}
  }
</script>

<style scoped>

</style>
