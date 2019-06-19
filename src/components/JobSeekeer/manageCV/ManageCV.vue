<template>
  <v-container>
    <v-layout row wrap>
      <v-flex md7 xs7>
        <v-flex md12 xs12>
          <v-layout row wrap>
            <v-flex md5 xs5>
              <h2>Danh sách CV</h2>
            </v-flex>
            <v-spacer/>
            <v-flex md3 xs3>
              <router-link to="/tao-CV" tag="button">
                <v-btn color="warning" >Tạo mới</v-btn>
              </router-link>
            </v-flex>
          </v-layout>
        </v-flex>
<!-- danh sách CV-->
        <ListCVComponent></ListCVComponent>

        </v-flex>
      <v-flex md5 xs5 class="pl-4 ">
        <ProfileBasicComponent></ProfileBasicComponent>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
    import ListCVComponent from "./ListCVComponent";
    import ProfileBasicComponent from "./ProfileBasicComponent";
    export default {
        name: "ManageCV",
      components: {ProfileBasicComponent, ListCVComponent},
    }
</script>

<style scoped>

</style>
