<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-flex >
    <v-flex xs12 v-if="roleId === 1">
      <v-btn block color="warning" v-if="appled === true"> Đã nộp đơn</v-btn>
      <v-dialog v-model="dialog2" persistent max-width="800px" v-if="appled === false">


        <template v-slot:activator="{ on }">

          <v-btn color="warning" block @click="getList" dark v-on="on" >
            Nộp Đơn
          </v-btn>
        </template>




        <v-card>
          <v-card-text>
            <v-container>
              <span class="headline" >Ứng Tuyển</span>
              <v-divider></v-divider>
              <v-layout row wrap>
                <v-flex md12 xs12>
                  <b> Chọn CV online: </b>
                </v-flex>
                <v-flex md12 xs12 v-if="cvs.length > 0">
                  <v-radio-group v-model="getCV"  >
                    <template v-for="cv in cvs">
                      <v-radio  v-bind:value="cv.id">
                        <template v-slot:label>
                          <div><strong class="success--text">{{cv.title}}</strong>(<router-link v-bind:to="'/xem-CV/'+ cv.id"  tag="button">xem</router-link>)</div>
                        </template>
                      </v-radio>
                    </template>

                  </v-radio-group>
                </v-flex>
                <v-flex md12 xs12 v-if="cvs.length === 0">
                  <router-link to="/tao-CV" tag="button">
                    <v-btn color="warning"  dark >
                      Tạo CV mới
                    </v-btn>
                  </router-link>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions >
            <v-spacer/>
            <v-btn color="blue darken-1" flat @click="dialog2 = false">Thoát</v-btn>
            <v-btn color="blue darken-1" flat @click="applyCV">Nộp CV</v-btn>
            <v-spacer/>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-flex>

    <v-flex xs12 v-if="roleId === 1">
      <v-btn  block color="gray" @click="saveJob" v-if="saved === false"><v-icon dark>favorite</v-icon>Đã Lưu Việc Làm</v-btn>
      <v-btn  block color="error" outline @click="rejectSave" v-if="saved === true"><v-icon dark>favorite</v-icon> Lưu Việc Làm</v-btn>
    </v-flex>


  </v-flex>
</template>

<script>
  import axios from 'axios';
  import {mapGetters} from 'vuex';
  import Constants from '@/stores/constant.js'
    export default {
        name: "ApplyJobComponent",
      props: {
        JobID: Number,
      },
      data: () => ( {
        saved: false,
        appled:false,
        btnSubmit: false,
        dialog2: false,
        getCV:'',
        cvs:[]

      }),
      methods: {
        saveJob(){
          this.userId = this.userId1;
          console.log(this.userId +"-"+ this.JobID)
          axios
            .post(Constants.URL+'/jobseekerlikejob/create/'+this.userId+'/'+this.JobID)
            .then(response => {
              if(response.data.success === true){
                this.saved = true;
              }

              }
            )
        },
        rejectSave(){
          this.userId = this.userId1;
          console.log(this.userId +"-"+ this.JobID)
          axios
            .post(Constants.URL+'/jobseekerlikejob/uncheck/'+this.userId+'/'+this.JobID)
            .then(response => {
                if(response.data.success === true){
                  this.saved = false;
                }

              }
            )
        },
        applyCV() {
          this.userId = this.userId1;
          console.log(this.getCV +"-"+ this.JobID)
          axios
            .post(Constants.URL+'/apply/create/'+this.getCV+'/'+this.JobID)
            .then(response => {if(response.data.success === true){
              this.appled = true;
              this.dialog2 = false;
              this.btnSubmit = false;}
              }

            )

        },
        getList(){
          this.userId = this.userId1;
          console.log(this.userId)
          axios
            .get(Constants.URL+'/cv/get-list/'+this.userId)
            .then(response => {
                this.cvs = response.data.data;
                for(var cv in this.cvs){
                  var date = new Date(this.cvs[cv].createdDate);
                  // var tmp = date.getDay()

                  this.cvs[cv].createdDate = date.toISOString().substr(0, 10);
                }
                this.cvs.sort(function(a, b){return b.id - a.id});
                console.log(this.cvs);
              }

            )
          axios
            .get(Constants.URL+'/apply/check/'+this.userId+'/'+this.JobID)
            .then(response => {
                this.appled = response.data;
                console.log("applied"+this.appled)
              }

            )
        },
      },

  mounted()
  {

    this.userId = this.userId1;
    console.log("useId"+this.userId+"-" + this.JobID)
    axios
      .get(Constants.URL+'/apply/check/'+this.userId+'/'+this.JobID)
      .then(response => {
        this.appled = response.data;
        console.log("applied"+this.appled)
        }

      )

    axios
      .get(Constants.URL+'/jobseekerlikejob/check/'+this.userId+'/'+this.JobID)
      .then(response => {

        this.saved = response.data;
        console.log("saved"+this.saved)
        }
      )

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
