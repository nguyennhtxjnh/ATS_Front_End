<template>
    <EmployerMainLayout>
      <CreateCompany>

      </CreateCompany>
    </EmployerMainLayout>
</template>

<script>
  import CreateCompany from '../../components/Employer/Company/CreateCompany'
  import EmployerMainLayout from '../../layouts/EmployerMainLayout'

  export default {
    name: 'EmployerCreateCompanyPage',
    components: {CreateCompany, EmployerMainLayout},
  }
</script>

<style scoped>

</style>
