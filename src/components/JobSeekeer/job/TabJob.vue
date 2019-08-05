<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-flex>
      <v-flex xs12 sm12 md12 >

          <v-tabs
            v-model="active"
            slider-color="yellow"
            grow
          >

          <v-tab
            fixed
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
            <v-card flat v-if="i.id === '1'">
              <ListSuggestJob></ListSuggestJob>
            </v-card>
            <v-card flat v-if="i.id === '2'">
              <JobSaved></JobSaved>
            </v-card>
            <v-card flat v-if="i.id === '3'">
              <ApplyManager></ApplyManager>
            </v-card>
          </v-tab-item>
        </v-tabs>

      </v-flex>
    </v-flex>
</template>

<script>
    import SearchJobResult from "../SearchJobResult/SearchJobResult";
    import ManageCV from "../manageCV/ManageCV";
    import JobSaved from "../DashBoard/JobSaved";
    import ApplyManager from "../DashBoard/ApplyManager";
    import SuggestJob from "../suggestJob/SuggestJob";
    import ListSuggestJob from "../suggestJob/ListSuggestJob";
    export default {
        name: "TabJob",
      components: {ListSuggestJob, SuggestJob, ApplyManager, JobSaved, ManageCV, SearchJobResult},
      data: function () {
        return{
          active: null,
          tab: null,
          menu: [
            {name:'Việc làm phù hợp', id:'1'},
            {name:'Việc làm đã lưu', id:'2'},{name:'Việc làm đã ứng tuyển', id:'3'}
          ],


        }
      }
    }
</script>

<style scoped>

</style>
