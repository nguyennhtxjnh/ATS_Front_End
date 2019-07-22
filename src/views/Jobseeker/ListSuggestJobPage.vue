<template>
    <DashBoardLayout>
      <ListSuggestJob></ListSuggestJob>
    </DashBoardLayout>
</template>

<script>
    import DashBoardLayout from "../../layouts/DashBoardLayout";
    import ListSuggestJob from "../../components/JobSeekeer/suggestJob/ListSuggestJob";
    export default {
        name: "ListSuggestJobPage",
      components: {ListSuggestJob, DashBoardLayout}
    }
</script>

<style scoped>

</style>
