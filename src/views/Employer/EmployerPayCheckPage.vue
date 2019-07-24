<template>
    <EmployerMainLayout>
      <EmployerPayCheck :serviceid="serviceid"></EmployerPayCheck>
    </EmployerMainLayout>
</template>

<script>
  import EmployerMainLayout from '../../layouts/EmployerMainLayout'
  import EmployerPayCheck from '../../components/Employer/Service/EmployerPayCheck'

  export default {
    name: 'EmployerPayCheckPage',
    components: {EmployerPayCheck, EmployerMainLayout},
    data(){
      return {
        serviceid: Number.parseInt(this.$route.params.serviceid),
      }
    },
  }
</script>

<style scoped>

</style>
