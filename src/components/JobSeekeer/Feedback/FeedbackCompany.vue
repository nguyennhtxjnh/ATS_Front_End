<template>
  <v-container>
    <v-layout row wrap>
      <v-spacer/>
      <v-flex class="md10">
        <v-card>
          <v-toolbar dark color="orange">
            <v-toolbar-title>Phản hồi công ty</v-toolbar-title>
            <v-spacer></v-spacer>

          </v-toolbar>
          <v-layout row wrap class="pa-3">
            <v-spacer/>
            <v-flex md10 xs12>
              <v-flex md12 class="mt-2">
                <h4 style="color: #2c3e50">Bạn thắc mắc về vấn đề nào?<span style="color: red; font-size: 15px" >*</span></h4>
                <v-select
                  :items="problems"
                  item-text="decription"
                  item-value="id"
                ></v-select>
              </v-flex>
              <v-flex md12 class="mt-2">
                <h4 style="color: #2c3e50">Nội dung phản hồi<span style="color: red; font-size: 15px" >*</span></h4>
                <v-textarea outlined></v-textarea>
              </v-flex>
              <v-flex md12 class="mt-2">
                <v-layout row wrap>
                  <v-spacer/>
                  <v-flex md5>
                    <v-btn outline block color="blue" > Gửi phản hồi</v-btn>
                  </v-flex>
                  <v-spacer/>
                </v-layout>

              </v-flex>
            </v-flex>
            <v-spacer/>
          </v-layout>
        </v-card>
      </v-flex>

      <v-spacer/>
    </v-layout>
  </v-container>

</template>

<script>
    export default {
        name: "FeedbackCompany",
      data(){
          return{
            problems: [{
              id:"1",
              decription: "Công ty ghi sai địa chỉ.",
            },{
              id:"2",
              decription: "Hẹn không đúng thời gian",
            },{
              id:"3",
              decription: "Công ty ảo",
            },{
              id:"3",
              decription: "khác",
            }]
          }
      }
    }
</script>

<style scoped>

</style>
