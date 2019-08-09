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
            <ListCVSaved></ListCVSaved>
          </v-card>
          <v-card flat v-if="i.id === '3'">
            <ListCVConfirmed></ListCVConfirmed>
          </v-card>
          <v-card flat v-if="i.id === '4'">
            <ListCVDeny></ListCVDeny>
          </v-card>

        </v-tab-item>
      </v-tabs>

    </v-flex>
  </v-flex>
</template>

<script>
    import SearchCV from "../searchCV/SearchCV";
    import ListCVSaved from "../CVSaved/ListCVSaved";
    import ListCVConfirmed from "./ListCVConfirmed";
    import ListCVDeny from "./ListCVDeny";
    export default {
        name: "ManageJobSeeker",
      components: {ListCVDeny, ListCVConfirmed, ListCVSaved, SearchCV},
      data: function () {
        return{
          active: null,
          tab: null,
          menu: [
            {name:'Tìm kiếm Ứng Viên', id:'1'},   {name:'Ứng viên đã lưu', id:'2'},
            {name:'Ứng viên đã xác nhận', id:'3'},{name:'Ứng viên đã từ chối', id:'4'},

          ],


        }
      }
    }
</script>

<style scoped>

</style>
