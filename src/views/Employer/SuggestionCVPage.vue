<template>
    <EmployerMainLayout>
      <SuggestionCV></SuggestionCV>
    </EmployerMainLayout>
</template>

<script>
    import EmployerMainLayout from "../../layouts/EmployerMainLayout";
    import SuggestionCV from "../../components/Employer/suggestionCV/SuggestionCV";
    export default {
        name: "SuggestionCVPage",
      components: {SuggestionCV, EmployerMainLayout}
    }
</script>

<style scoped>

</style>
