<template>
    <DashBoardLayout>
      <ListSuggestJobSimilar></ListSuggestJobSimilar>
    </DashBoardLayout>
</template>

<script>
    import DashBoardLayout from "../../layouts/DashBoardLayout";
    import ListSuggestJob from "../../components/JobSeekeer/suggestJob/ListSuggestJob";
    import ListSuggestJobSimilar from "../../components/JobSeekeer/applyJob/ListSuggestJobSimilar";
    export default {
        name: "ViewJobSimilar",
      components: {ListSuggestJobSimilar, ListSuggestJob, DashBoardLayout}
    }
</script>

<style scoped>

</style>
