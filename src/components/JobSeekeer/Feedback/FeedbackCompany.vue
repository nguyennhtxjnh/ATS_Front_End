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
              <v-form ref="form">
              <v-flex md12 class="mt-2">
                <h4 style="color: #2c3e50">Bạn thắc mắc về vấn đề nào?<span style="color: red; font-size: 15px" >*</span></h4>
                <v-select
                  :rules="[rules.required]"
                  v-model="feedback.feedBackTypeId"
                  :items="problems"
                  item-text="description"
                  item-value="id"
                ></v-select>
              </v-flex>
              <v-flex md12 class="mt-2">
                <h4 style="color: #2c3e50">Nội dung phản hồi<span style="color: red; font-size: 15px" >*</span></h4>
                <v-textarea  :rules="[rules.required]" v-model="feedback.description" outlined></v-textarea>
              </v-flex>
              <v-flex md12 class="mt-2">
                <v-layout row wrap>
                  <v-spacer/>
                  <v-flex md5>
                    <v-btn outline block color="blue" @click="sendFB" > Gửi phản hồi</v-btn>
                  </v-flex>
                  <v-spacer/>
                </v-layout>

              </v-flex>
              </v-form>
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
  import Constants from '@/stores/constant.js'
  import axios from 'axios';
    export default {
        name: "FeedbackCompany",
      data(){
          return{
            feedback:{
              feedBackTypeId:'',
              jobId:this.$route.params.jobid,
              userId:this.$route.params.userid,
              description:'',
              createdDate:new Date().toISOString().substr(0, 10)
            },  rules: {
              required: value => !!value || 'Không được để trống ô này.',},
            problems: []
          }
      },
      methods:{
        sendFB(){
          if (this.$refs.form.validate()) {
          axios
            .post(Constants.URL + '/feedback/create', this.feedback)
            .then(response => {
              if(response.data.success === true){
                this.$notify({
                  group: 'foo',
                  type: 'success',
                  title: 'Thành công',
                  text: 'Nhận xét thành công '
                })
                this.$router.push('/thong-tin')
              }
            })}
        }

      },
      mounted() {
        axios
          .get(Constants.URL + '/feedbacktype/getAllFeedBackType')
          .then(response => (
            this.problems = response.data.data))
      }
    }
</script>

<style scoped>

</style>
