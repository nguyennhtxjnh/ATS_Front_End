<template>
    <DashBoardLayout>
      <ViewJobDetail :id="id">
      </ViewJobDetail>
    </DashBoardLayout>
</template>

<script>
  import DashBoardLayout from '../../layouts/DashBoardLayout'
  import ViewJobDetail from '../../components/JobSeekeer/job/ViewJobDetail'

  export default {
    name: 'JobSeekerViewJopDetailPage',
    components: {DashBoardLayout, ViewJobDetail},
    data(){
      return {
        id: Number.parseInt(this.$route.params.id),
      }
    },
  }
</script>

<style scoped>

</style>
