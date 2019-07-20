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
            <CreateJob></CreateJob>
          </v-card>
          <v-card flat v-if="i.id === '2'">
            <ListJobPost></ListJobPost>
          </v-card>
          <v-card flat v-if="i.id === '3'">
            <ListJobExpired></ListJobExpired>
          </v-card>
        </v-tab-item>
      </v-tabs>

    </v-flex>
  </v-flex>
</template>

<script>
    import SearchCV from "../searchCV/SearchCV";
    import ListJobPost from "./ListJobPost";
    import ListJobExpired from "./ListJobExpired";
    import CreateJob from "../Job/CreateJob";
    export default {
        name: "ManageJob",
      components: {CreateJob, ListJobExpired, ListJobPost, SearchCV},
      data: function () {
        return{
          active: '',
          tab: '',
          menu: [
            {name:'Đăng tin tuyển dụng', id:'1'},
            {name:'Tin tuyển dụng đang đăng tuyển', id:'2'},{name:'Tin tuyển dụng hết hạn', id:'3'}
          ],
          formDataCompany: {
            userId: '',
          }


        }
      },
      methods:{

      },

    }
</script>

<style scoped>

</style>
