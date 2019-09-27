<template>
    <EmployerMainLayout>
      <v-flex class="pt-2">
        <v-flex xs12 sm12 md12 >

            <h2 align="center" class="pa-2"> Tin chờ xác thực</h2>


          <ListJobWaitConfirm></ListJobWaitConfirm>
        </v-flex>
      </v-flex>

    </EmployerMainLayout>
</template>

<script>
    import EmployerMainLayout from "../../layouts/EmployerMainLayout";
    import ListJobWaitConfirm from "../../components/Employer/manageJob/ListJobWaitConfirm";
    export default {
        name: "JobWaiteToConfirm",
      components: {ListJobWaitConfirm, EmployerMainLayout}
    }
</script>

<style scoped>

</style>
