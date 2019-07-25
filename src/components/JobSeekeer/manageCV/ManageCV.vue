<template>

    <v-container>
      <v-layout row wrap>
        <v-flex md12 xs12 class="pr-3 pt-3">
          <v-flex md12 xs12>
            <v-layout row wrap>
              <v-flex md5 xs5>
                <h2>Danh sách CV</h2>
              </v-flex>
              <v-spacer/>
              <v-flex md2 xs3>
                <router-link to="/tao-CV" tag="button">
                  <v-btn color="warning" >Tạo mới</v-btn>
                </router-link>
              </v-flex>

            </v-layout>
          </v-flex>
          <!-- danh sách CV-->
          <ListCVComponent></ListCVComponent>

        </v-flex>
        <v-spacer/>

      </v-layout>
    </v-container>

</template>

<script>
  import {mapGetters} from 'vuex';
    import ListCVComponent from "./ListCVComponent";
    import ProfileBasicComponent from "./ProfileBasicComponent";

    export default {
        name: "ManageCV",

      components: {ProfileBasicComponent, ListCVComponent},
      data: () => ( {
       userId:'',
      }),
      mounted(){
        this.userId = this.userId1
      },
      watch:{
        userId1(){
          this.userId = this.userId1
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
