<template>
    <v-container>
      <v-layout row wrap>

        <v-flex md3 xs3>
          <img :src="company.logoImg" height="80%">
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex md 6>
       <h2>{{company.nameCompany}}</h2>
          <i>   <span> Điện thoại: {{company.telephoneNumber}}</span><br/>
          <span> Địa chỉ:    {{company.address}}</span><br/>
          <span> Email:      {{company.email}}</span></i>

        </v-flex>
        <v-spacer/>
      </v-layout>
      <v-layout row wrap>
        <v-flex v-html="company.description"></v-flex>
      </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "CompanyDetail",
      props :{
          company : Object
      }
    }
</script>

<style scoped>

</style>
