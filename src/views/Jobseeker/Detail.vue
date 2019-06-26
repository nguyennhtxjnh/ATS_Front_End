<template>
    <DashBoardLayout>
    </DashBoardLayout>
</template>

<script>
  import DashBoardLayout from '../../layouts/DashBoardLayout'
  export default {
    name: 'Detail',
    components: {DashBoardLayout},
    data(){
      return {
        id: this.$router.params.name
      }
    }
  }
</script>

<style scoped>

</style>
