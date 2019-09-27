<template>
  <v-flex class="pt-2">
    <v-flex xs12 sm12 md12 >

      <v-tabs
        v-model="active"
        slider-color="yellow"
        grow
        @change="forceRerender"
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
            <CreateJob :key="componentKey"></CreateJob>
          </v-card>
          <v-card flat v-if="i.id === '2'">
            <ListJobPost></ListJobPost>
          </v-card>
          <v-card flat v-if="i.id === '3'">
            <ListJobExpired></ListJobExpired>
          </v-card>
          <v-card flat v-if="i.id === '4'">
            <ListJobBan></ListJobBan>
          </v-card>
          <v-card flat v-if="i.id === '5'">
            <ListJobWaitConfirm></ListJobWaitConfirm>
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
    import ListJobBan from "./ListJobBan";
    import ListJobWaitConfirm from "./ListJobWaitConfirm";
    export default {
        name: "ManageJob",
      components: {ListJobWaitConfirm, ListJobBan, CreateJob, ListJobExpired, ListJobPost, SearchCV},

      data: function () {
        return{
          componentKey: 0,
          active: 1,
          tab: '',
          menu: [
            {name:'Đăng tin tuyển dụng', id:'1'},
            {name:'Tin đang đăng tuyển', id:'2'},
            {name:'Tin hết hạn', id:'3'}
            ,{name:'Tin bị từ chối', id:'4'}
            ,{name:'Tin chờ xác thực', id:'5'}
          ],
          formDataCompany: {
            userId: '',
          }


        }
      },
      methods:{
        forceRerender() {
          this.componentKey += 1;
        }
      },
      mounted() {

      }

    }
</script>

<style scoped>

</style>
