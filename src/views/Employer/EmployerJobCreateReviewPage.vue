<template>
    <EmployerMainLayout>
      <JobCreateReview></JobCreateReview>
    </EmployerMainLayout>
</template>

<script>
  import JobCreateReview from '../../components/Employer/Job/JobCreateReview'
  import EmployerMainLayout from '../../layouts/EmployerMainLayout'

  export default {
    name: 'EmployerJobCreateReviewPage',
    components: {EmployerMainLayout, JobCreateReview}
  }
</script>

<style scoped>

</style>
