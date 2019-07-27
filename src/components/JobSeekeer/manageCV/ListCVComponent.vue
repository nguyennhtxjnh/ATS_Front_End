<template v-on:load="getInit">
  <v-flex>

      <template v-for="(cv, index) in cvs">
        <v-card class="mt-4 pa-2">
          <v-layout row wrap>
            <v-spacer/>
            <v-flex md8 xs12>
              <v-layout row wrap>

                <v-flex md12 xs12>
                  <v-layout row wrap>
                    <!--              img-->
                    <v-flex md3 xs3 class="pa-2">
                      <v-img :src="require('@/assets/mau-cv-senior.png')"></v-img>
                    </v-flex>
                    <v-spacer/>
                    <!--              thông tin cơ bản cv-->
                    <v-flex md7 xs5>
                      <!--              tiêu đề-->
                      <v-flex md12 xs12>
                        <v-layout row wrap>
                          <v-flex md5 xs6>
                            <h2 style="color: #fe7013" >{{cv.title}}</h2>
                          </v-flex>
                          <v-flex md5 xs6 class="pr-2">
                            <span style="float: right; "> {{cv.lastModify}}</span>
                          </v-flex>
                        </v-layout></v-flex>
                      <!--              link cv-->
                      <v-flex md12 xs12 sm12 >
                        <v-flex  xs12 class="py-2 ma-2 text-truncate">
                          {{cv.lastName}} {{cv.firstName}}
                        </v-flex>
                      </v-flex>
                      <v-flex md12 xs12 sm12 >
                        <v-flex  xs12 class="py-2 ma-2 text-truncate">
                          {{cv.cityByCityId.fullName}}
                        </v-flex>
                      </v-flex>
                      <v-flex md12 xs12 sm12 >
                        <v-flex  xs12 class="py-2 ma-2 text-truncate">
                          {{cv.industryByIndustryId.name}}
                        </v-flex>
                      </v-flex>
                      <!--              button -->
                      <v-flex md12 xs12>
                        <v-layout row wrap>
                          <v-flex lg3 md3 sm6 xs12  style="float: left">
                            <router-link v-bind:to="'/xem-CV/'+ cv.id"  tag="button">
                              <v-btn small  >
                                <v-icon>remove_red_eye</v-icon>
                                xem CV</v-btn>
                            </router-link>
                          </v-flex>
                          <v-flex lg3 md3 sm6 xs12  style="float: left">
                            <router-link v-bind:to="'/cap-nhat-CV/'+ cv.id" tag="button">
                              <v-btn small >  <v-icon>edit</v-icon>sửa CV</v-btn>
                            </router-link>
                          </v-flex>
                          <v-flex lg3 md3 sm6 xs12  style="float: left">

                            <v-btn small @click="removeCV(cv, index)"><v-icon>delete</v-icon>xóa CV</v-btn>
                          </v-flex>
                          <v-flex lg3 md3 sm6 xs12 style="float: left">
                            <v-flex  v-if="cv.isActive === 1">
                              <v-btn small style="color: #ff5e2d" >
                                <v-icon>star</v-icon>
                                CV chính</v-btn>
                            </v-flex>
                            <v-flex  v-if="cv.isActive !== 1">
                              <v-btn small style="" @click="setMainCV(cv)">
                                <v-icon>star</v-icon>
                                Đặt CV chính</v-btn>
                            </v-flex>
                          </v-flex>
                        </v-layout>

                      </v-flex>
                    </v-flex>
                    <v-spacer/>
                    <v-flex md2 xs2>
                      <span>
<!--                        <v-icon class="">mdi-calendar-clock</v-icon>-->
                      <i>  {{cv.createdDate}}</i>
                      </span>
                    </v-flex>
                  </v-layout>
                </v-flex>

              </v-layout>
            </v-flex>
            <v-spacer/>
          </v-layout>

        </v-card>

      </template>


  </v-flex>
</template>

<script>
  import '@ckeditor/ckeditor5-build-decoupled-document/build/translations/vi'
  import axios from 'axios';
  import {mapGetters} from 'vuex';
  import Constants from '@/stores/constant.js';

    export default {
        name: "ListCVComponent",
      data: () => ( {
        userid:'',
        position:'',
        cvs: '',
        cv:'',
      }),methods :{

        removeCV(cv, position) {


          axios.post( Constants.URL+'/cv/deleteCV/'+cv.id,
          ).then(response => {
            if (response.data.success === true) {
              this.cvs.splice(position, 1);
              this.$notify({
                group: 'foo',
                type: 'success',
                title: 'Thành Công',
                text: 'Đặt làm CV chính Thành Công!'
              })
            }
          })
          .catch(error => {
            console.log(error)
            this.$notify({
              group: 'foo',
              type: 'error',
              title: 'Thất Bại',
              text: 'Đã Xảy Ra Lỗi!'
            })
          })
          .finally(() => {

          })
      },
        setMainCV(cv){
          console.log(cv.id);
          axios.get( Constants.URL+'/cv/set-main-cv/'+cv.id
          ).then(response => {
            if (response.data.success === true) {
              axios
                .get(Constants.URL+'/cv/get-list/'+this.userId1)
                .then(response => {
                  this.cvs = response.data.data;
                  for(var cv in this.cvs){
                    var date = new Date(this.cvs[cv].createdDate);
                    // var tmp = date.getDay()

                    this.cvs[cv].createdDate = date.toISOString().substr(0, 10);
                  }
                  this.cvs.sort(function(a, b){return b.id - a.id});
                }
               )
              this.$notify({
                group: 'foo',
                type: 'success',
                title: 'Thành Công',
                text: 'Đăng Tin Thành Công!'
              })
            }
          })
            .catch(error => {
              console.log(error)
              this.$notify({
                group: 'foo',
                type: 'error',
                title: 'Thất Bại',
                text: 'Đã Xảy Ra Lỗi!'
              })
            })
            .finally(() => {

            })

        },
        getInit(){
          if(this.userId1 != null && this.userId1 != ""){
          console.log(Constants.URL+'/cv/get-list/'+this.userId1)
          axios
            .get(Constants.URL+'/cv/get-list/'+this.userId1)
            .then(response => {
                this.cvs = response.data.data;
                for(var cv in this.cvs){
                  var date = new Date(this.cvs[cv].createdDate);
                  // var tmp = date.getDay()

                  this.cvs[cv].createdDate = date.toISOString().substr(0, 10);
                }
                this.cvs.sort(function(a, b){return b.id - a.id});
              }
            )}
        }

      },
      mounted(){
       this.getInit()
      },
      watch:{
        userId1(){
          this.getInit()
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
  h1,h2,h3,h4,h5,span {
    font-family: "Times New Roman";
  }
</style>
