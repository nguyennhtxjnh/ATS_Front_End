<template>
    <EmployerMainLayout>
      <SearchCV></SearchCV>
    </EmployerMainLayout>
</template>

<script>
    import EmployerMainLayout from "../../layouts/EmployerMainLayout";
    import SearchCV from "../../components/Employer/searchCV/SearchCV";
    export default {
        name: "EmployerSearchCVPage",
      components: {SearchCV, EmployerMainLayout}
    }
</script>

<style scoped>

</style>
