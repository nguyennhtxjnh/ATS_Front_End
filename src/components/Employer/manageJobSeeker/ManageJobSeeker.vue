<template>
  <v-flex class="pt-2">
    <v-flex xs12 sm12 md12 >

      <v-tabs
        v-model="active"
        slider-color="yellow"
        grow
      >

        <v-tab
          v-for="tab in menu"
          :key="tab.id"
          ripple
        >
          {{ tab.name}}

        </v-tab>
        <v-tab-item
          v-for="i in menu"
          :key="i.id"
        >
          <v-card flat v-if="i.id === '1'" >
            <SearchCV></SearchCV>
          </v-card>
          <v-card flat v-if="i.id === '2'">

          </v-card>

        </v-tab-item>
      </v-tabs>

    </v-flex>
  </v-flex>
</template>

<script>
    import SearchCV from "../searchCV/SearchCV";
    export default {
        name: "ManageJobSeeker",
      components: {SearchCV},
      data: function () {
        return{
          active: null,
          tab: null,
          menu: [
            {name:'Tìm kiếm Ứng Viên', id:'1'},   {name:'Ứng viên đang theo dõi', id:'2'},

          ],


        }
      }
    }
</script>

<style scoped>

</style>
