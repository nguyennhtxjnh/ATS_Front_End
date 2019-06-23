<template>
    <DashBoardLayout>
      <SearchJobResult></SearchJobResult>
    </DashBoardLayout>
</template>

<script>
  import SearchJobResult from '../../components/JobSeekeer/SearchJobResult/SearchJobResult'
  import DashBoardLayout from '../../layouts/DashBoardLayout'

  export default {
    name: 'SearchJobResultPage',
    components: {SearchJobResult, DashBoardLayout},
  }
</script>

<style scoped>

</style>
