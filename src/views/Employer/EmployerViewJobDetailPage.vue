<template>
    <EmployerMainLayout>
      <ViewJobDetail></ViewJobDetail>
    </EmployerMainLayout>
</template>

<script>
    import EmployerMainLayout from "../../layouts/EmployerMainLayout";
    import ViewJobDetail from "../../components/JobSeekeer/job/ViewJobDetail";
    export default {
        name: "EmployerViewJobDetailPage",
      components: {ViewJobDetail, EmployerMainLayout}
    }
</script>

<style scoped>

</style>
