<template>
    <EmployerMainLayout>
      <EmployerGetService></EmployerGetService>
    </EmployerMainLayout>
</template>

<script>
  import EmployerMainLayout from '../../layouts/EmployerMainLayout'
  import EmployerGetService from '../../components/Employer/Service/EmployerGetService'

  export default {
    name: 'EmployerGetServicePage',
    components: {EmployerGetService, EmployerMainLayout}
  }
</script>

<style scoped>

</style>
