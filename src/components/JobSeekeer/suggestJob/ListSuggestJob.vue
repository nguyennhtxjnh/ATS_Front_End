<template>
  <v-flex style="background-color: whitesmoke">
    <v-container>
      <v-layout wrap md12 xs12>
        <template v-for="job in info">
          <v-container md7 xs12 style="background-color: white" class="ma-3 pa-2" @click="$router.push('/thong-tin-cong-viec/'+ job.id)">
            <v-layout row wrap>
              <v-flex md2 xs3 class="pa-2">
                <v-img  :src="job.companyLogoImg"
                        height="100%"></v-img>

              </v-flex>
              <v-spacer/>
              <v-flex md5>
                <h2 align-left>
                  {{job.title}}
                </h2>
                <h3 align-lef>

                      {{job.companyName}} - {{job.cityName}}

                </h3>
                <v-flex align-left>
                  <h4>  <v-btn icon>
                    <v-icon color="orange darken-2" >mdi-coin</v-icon>
                  </v-btn>{{job.salaryTo}} - {{job.salaryFrom}} triệu</h4>
                </v-flex>
              </v-flex>
              <v-flex md3 class="pt-5">
<!--                <v-btn style="height: auto"-->
<!--                       dark-->
<!--                       icon @click="remove(index)">-->
<!--                  <v-icon color="orange darken-2">mdi-delete</v-icon></v-btn>-->
              </v-flex>
            </v-layout>
          </v-container>
        </template>

      </v-layout>
    </v-container>
  </v-flex>
</template>

<script>
  import Axios from 'axios'
  import Constants from '@/stores/constant.js'
  import {mapGetters} from 'vuex';
    export default {
        name: "ListSuggestJob",
      data  : function () {
        return {
          info: '',
          cities: [],
          cvid: this.$route.params.cvid,

        }
      },
       mounted () {
        this.getComponent();
      },
      watch:{
        userId1(){
          this.getComponent();
        }
      },
      methods: {
        getComponent(){
          this.userId = this.userId1;
          Axios
            .get(Constants.URL+'/city/getAllCity')
            .then(response => (
              this.cities = response.data.data))
          Axios
            .get(Constants.URL+'/job/suggest?cvId='+this.cvid)
            .then(response => (this.info = response.data.data.content))

        }
      },
      computed: {
        ...mapGetters('AUTHENTICATION_STORE',{
          email : 'email1',
          roleId: 'roleId1',
          fullName: 'fullName1',
          userId1: 'userId1'
        }),
      },
    }
</script>

<style scoped>

</style>
