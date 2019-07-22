<template>
    <EmployerMainLayout>
      <EmployerCompanyApply></EmployerCompanyApply>
    </EmployerMainLayout>
</template>

<script>
  import EmployerMainLayout from '../../layouts/EmployerMainLayout'
  import EmployerCompanyApply from '../../components/Employer/DashBoard/EmployerCompanyApply'

  export default {
    name: 'EmployerCompanyApplyPage',
    components: {EmployerCompanyApply, EmployerMainLayout}
  }
</script>

<style scoped>

</style>
