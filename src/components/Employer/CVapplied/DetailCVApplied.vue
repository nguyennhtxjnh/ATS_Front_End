<template>
  <v-container>
    <v-layout row wrap v-if="cvs.length === 0">
      <v-spacer/>
      <img :src="require('@/assets/empty-product.png')" >
      <v-spacer/>
    </v-layout>
    <v-layout row wrap v-if="cvs.length > 0">
      <v-flex md4 xs4>
        <v-card>
          <v-card-text>
            <template v-for="cv in cvs">

              <v-layout row wrap @click="getCVid(cv.id)">
                <v-flex md2 xs3>
                  <v-avatar size="50px" align="center">
                    <v-img v-bind:src="cv.img"></v-img>
                  </v-avatar>
                </v-flex>
                <v-flex md10 xs8>
                  <v-layout row wrap>
                    <v-flex md9 xs8>
                      <h4>{{cv.lastName}} {{cv.firstName}}</h4>

                      <v-layout row wrap>
                        <span> <v-icon class="">mdi-map-marker</v-icon>Địa điểm: {{cv.cityByCityId.fullName}}</span>
                      </v-layout>
                      <v-layout row wrap>
                        <span> <v-icon class="">mdi-calendar-blank</v-icon>Thời gian làm việc thực tế {{cv.yearExperience}} năm</span>
                      </v-layout>
                    </v-flex>
                    <v-spacer/>
                    <v-flex md3 xs4>
                      <span> <i> {{cv.createdDate}}</i></span>
                    </v-flex>
                  </v-layout>
                  <v-layout row wrap class="mt-3">
                    <v-flex md10 xs4 class="pa-1">
                      <v-icon class="">mdi-star</v-icon>
                      <span>Mục tiêu: {{cv.description}}
                </span>
                    </v-flex>
                  </v-layout>

                </v-flex>
              </v-layout>
              <v-divider class="mt-2 mb-2" v-if=""></v-divider>

            </template>
            <v-layout row wrap>
              <v-spacer/>
              <v-flex md10>
                <v-pagination
                  v-model="page"
                  :page="page"
                  @input="reloadPage"
                  :length="lengthPage"
                  prev-icon="mdi-menu-left"
                  next-icon="mdi-menu-right"
                ></v-pagination>
              </v-flex>
              <v-spacer/>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex md8 xs8 class="pl-3">
        <v-card>
          <v-card-title>
            <h2 style="color: #ff5e2d">Hồ sơ ứng viên</h2>
            <v-btn color="error" outline v-if="checkSave === true" @click="saveCV"
            >
              <v-icon class="mr-1">favorite</v-icon>
              Lưu Ứng viên
            </v-btn>
            <v-btn color="grey" @click="unsaveCV" outline dark v-if="checkSave === false">
              <v-icon class="mr-1">favorite</v-icon>
              Đã Lưu Ứng viên
            </v-btn>
            <v-btn color="primary" outline v-if="checkConfirm === 1" @click="confirmCV">
              <v-icon class="mr-1">thumb_up</v-icon>
              Xác nhận
            </v-btn>
            <v-btn color="grey" outline dark v-if="checkConfirm === 2">
              <v-icon class="mr-1">thumb_up</v-icon>
              Đã xác nhận
            </v-btn>
            <v-btn color="grey" outline v-if="checkConfirm === 1" dark @click="denyCV"
            >
              <v-icon class="mr-1">thumb_down</v-icon>
              Bỏ qua
            </v-btn>
            <v-btn color="grey" outline v-if="checkConfirm === 3" dark>
              <v-icon class="mr-1">thumb_down</v-icon>
              Đã bỏ qua
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-layout row wrap>
              <v-spacer/>
              <v-flex md9 xs12>
                <v-layout row wrap>
                  <!--                    <v-flex md4 xs4>-->
                  <!--                      <img :src="imageUrl" id="imageAvatar" height="150" width="150" />-->
                  <!--                    </v-flex>-->
                  <v-flex md8 xs8 class="mb-4">
                    <h3>{{info.lastName}} {{info.firstName}}</h3>
                    <table>
                      <tr>
                        <td class="pr-5"><b>Ngày sinh: </b></td>
                        <td><span>{{info.dob}}
          </span></td>
                      </tr>
                      <tr>
                        <td><b>Giới tính:</b></td>
                        <td>
                          <v-flex v-for="gd in genders" :key="gd.id">
                            <template v-if="info.gender === gd.id">
                              <span>{{gd.name}}</span>
                            </template>
                          </v-flex>
                        </td>
                      </tr>
                      <tr>
                        <td><b>Địa chỉ:</b></td>
                        <td><span>{{info.address}}
          </span></td>
                      </tr>
                      <tr>
                        <td><b>Điện thọai:</b></td>
                        <td><span>{{info.telephoneNumber}}
          </span></td>
                      </tr>
                      <tr>
                        <td><b>Email:</b></td>
                        <td><span>{{info.email}}
          </span></td>
                      </tr>
                    </table>

                  </v-flex>
                </v-layout>

                <v-flex md12 xs12 class="mb-4" v-if="info.description !== ''">
                  <v-layout row wrap>
                    <v-flex md12 xs12>
                      <h3 style="float: left">Mục tiêu nghề nghiệp</h3>
                    </v-flex>
                    <v-flex md12 xs12>
                      <v-divider></v-divider>
                      <span>{{info.description}}</span>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex md12 xs12 class="mb-4">
                  <v-layout row wrap>
                    <v-flex md12 xs12>
                      <h3 style="float: left">Học Vấn</h3>
                    </v-flex>

                    <v-flex md12 xs12>
                      <v-divider></v-divider>
                      <v-flex v-for="education in info.educationsById" :key="education.schoolName">
                        <v-layout row wrap class="pa-2">
                          <v-flex md5 xs7>

                            <v-flex v-for="st in sts" :key="st.i">
                              <template v-if="st.i === education.schoolType">
                                <span>Trường:{{st.name}} {{education.schoolName}}</span><br/>
                              </template>
                            </v-flex>
                            <v-flex v-if="education.major">
                              <span>Chuyên ngành: {{education.major}}</span> <br/>
                            </v-flex>

                            <span>{{education.description}}</span>
                          </v-flex>
                          <v-spacer/>
                          <v-flex md3 xs4>
                    <span>
                      {{education.startTime}} - {{education.endtime}}
                    </span>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex md12 xs12 class="mb-4">
                  <v-layout row wrap>
                    <v-flex md12 xs12>
                      <h3 style="float: left">Kinh nghiệm làm việc</h3>
                    </v-flex>

                    <v-flex md12 xs12>
                      <v-divider></v-divider>
                      <v-flex v-for="workexperience in info.workexperiencesById" :key="workexperience.companyName">
                        <v-layout row wrap class="pa-2">
                          <v-flex md4 xs7>
                            <span>Công ty:{{workexperience.companyName}} </span><br/>
                            <span> {{workexperience.vacancyName}}</span> <br/>
                            <span>{{workexperience.description}}</span>
                          </v-flex>
                          <v-spacer/>
                          <v-flex md3 xs4>
                    <span>
                      {{workexperience.startTime}} - {{workexperience.endTime}}
                    </span>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex md12 xs12 class="mb-4">
                  <v-layout row wrap>
                    <v-flex md12 xs12>
                      <h3 style="float: left">Hoạt động</h3>
                    </v-flex>

                    <v-flex md12 xs12>
                      <v-divider></v-divider>
                      <v-flex v-for="social in info.socialactivitiesById" :key="social.name">
                        <v-layout row wrap class="pa-2">
                          <v-flex md4 xs7>
                            <span>{{social.name}} </span><br/>
                            <span>{{social.description}}</span>
                          </v-flex>
                          <v-flex md3 xs4>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex md12 xs12 class="mb-4">
                  <v-layout row wrap>
                    <v-flex md12 xs12>
                      <h3 style="float: left">Chứng chỉ</h3>
                    </v-flex>

                    <v-flex md12 xs12>
                      <v-divider></v-divider>
                      <v-flex v-for="certi in info.certificationsById" :key="certi.certificationNamee">
                        <v-layout row wrap class="pa-2">
                          <v-flex md4 xs7>
                            <span>{{certi.certificationName}} </span><br/>
                          </v-flex>
                          <v-spacer/>
                          <v-flex md3 xs4>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex md12 xs12 class="mb-4">
                  <v-layout row wrap>
                    <v-flex md12 xs12>
                      <h3 style="float: left">Dự án</h3>
                    </v-flex>

                    <v-flex md12 xs12>
                      <v-divider></v-divider>
                      <v-flex v-for="product in info.projectorproductworkedsById" :key="product.productName">
                        <v-layout row wrap class="pa-2">
                          <v-flex md4 xs7>
                            <h3>{{product.productName}} </h3><br/>
                            <table>
                              <tr>
                                <td>Kỹ năng:</td>
                                <td>
                                  <span>{{product.skillUsed}}</span>
                                </td>
                              </tr>
                              <tr>
                                <td>Vị trí:</td>
                                <td>
                                  <span>{{product.vacancyName}}</span>
                                </td>
                              </tr>
                              <tr v-if="product.description !== ''">
                                <td>Mô tả:</td>
                                <td>{{product.description}}</td>
                              </tr>
                            </table>
                          </v-flex>
                          <v-spacer/>
                          <v-flex md3 xs4>
                            <span>{{product.startTime}} - {{product.endTime}}</span>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                    </v-flex>
                  </v-layout>
                </v-flex>


              </v-flex>
              <v-spacer/>

            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
    import {mapGetters} from 'vuex';
    import Constants from '@/stores/constant.js'
    import Axios from 'axios';
    import DetailComponent from "./DetailComponent";
    import Swal from 'sweetalert2'
    export default {
      name: "DetailCVApplied",
      components: {DetailComponent},
      data : function () {
        return{
          imageUrl: require('@/assets/avatar-default-icon.png'),
          cvid: '',
          name:'',
          genders: [{id: "1", name: "Nữ"}, {id: "2", name: "Nam"}, {id: "3", name: "Khác"}],
          sts: [{i: "1", name: "Đại học"}, {i: "2", name: "Cao Đẳng"}, {i: "3", name: "Trung cấp"}, {i: "4", name: "Trung học phổ thông"}]
          ,
          lengthPage:1,
          page:1,
          offsetTop: 0,
          info: '',
          userId: '',
          checkSave: '',
          checkConfirm: '',
          jobid: this.$route.params.jobid,
          cvs:'',
        }
      }, methods: {
        reloadPage(){
          console.log(this.page);

          Axios
            .get(Constants.URL+'/apply/cv-applied/'+this.jobid)
            .then(response => {
              this.cvs = response.data.content;
              this.lengthPage = response.data.totalPages;
              for(var cv in this.cvs){
                var date = new Date(this.cvs[cv].createdDate);
                this.cvs[cv].createdDate = date.toISOString().substr(0, 10);
              }
              this.cvs.sort(function(a, b){return b.id - a.id});
            })

        }
        ,
        getCVid(id){
          this.cvid = id,
            this.jobid =  this.$route.params.jobid,
            this.userId = this.userId2;

          Axios
            .get(Constants.URL + '/userlifecv/check/' + this.userId + '/' + this.cvid)
            .then(response => (
              this.checkSave = response.data,
                console.log(response)
            ))
          Axios
            .post(Constants.URL + '/apply/checkstatus/' + this.cvid + '/' + this.jobid)
            .then(response => (
              this.checkConfirm = parseInt(response.data.data)
            ))
          Axios
            .get(Constants.URL+'/cv/getOne/'+this.cvid+'/0')
            .then(response => {
                this.info = response.data.data;
                if(this.info.img === null || this.info.img === ""){
                  this.imageUrl = require('@/assets/avatar-default-icon.png')
                }
                else {
                  this.imageUrl = this.info.img;
                }
                var dob = new Date(this.info.dob);
                this.info.dob = dob.toISOString().substr(0, 10);
                for(var edu in this.info.educationsById){
                  var stime = new Date(this.info.educationsById[edu].startTime);
                  this.info.educationsById[edu].startTime = stime.toISOString().substr(0, 10);
                  var etime = new Date(this.info.educationsById[edu].endtime);
                  this.info.educationsById[edu].endtime = etime.toISOString().substr(0, 10);
                }
                for( var edu in this.info.workexperiencesById){
                  var stime = new Date(this.info.workexperiencesById[edu].startTime);
                  this.info.workexperiencesById[edu].startTime = stime.toISOString().substr(0, 10);
                  var etime = new Date(this.info.workexperiencesById[edu].endTime);
                  this.info.workexperiencesById[edu].endTime = etime.toISOString().substr(0, 10);
                }
                for( var edu in this.info.projectorproductworkedsById){
                  var stime = new Date(this.info.projectorproductworkedsById[edu].startTime);
                  this.info.projectorproductworkedsById[edu].startTime = stime.toISOString().substr(0, 10);
                  var etime = new Date(this.info.projectorproductworkedsById[edu].endTime);
                  this.info.projectorproductworkedsById[edu].endTime = etime.toISOString().substr(0, 10);
                }

              }

            )
        },

        saveCV() {
          console.log("save")
          this.userId = this.userId2;
          Axios
            .post(Constants.URL + '/userlifecv/create/' + this.userId + '/' + this.cvid)
            .then(response => {
              if (response.data.success === true) {
                this.checkSave = false;
                this.$notify({
                  group: 'foo',
                  type: 'success',
                  title: 'Thành công',
                  text: 'Lưu thành công'
                })
              }
            })

        },
        unsaveCV() {
          this.userId = this.userId2;
          Axios
            .post(Constants.URL + '/userlifecv/unlike/' + this.userId + '/' + this.cvid)
            .then(response => {
              if (response.data.success === true) {
                this.checkSave = true;
                this.$notify({
                  group: 'foo',
                  type: 'success',
                  title: 'Thành công',
                  text: 'Bỏ Lưu thành công'
                })
              }
            })
        },
        confirmCV() {
          Swal.fire({
            title: 'Bạn muốn xác nhận ứng viên này?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Đồng ý'
          }).then((result) => {
            if (result.value) {
              Axios
                .get(Constants.URL + '/apply/confirm/' + this.jobid + '/' + this.cvid)
                .then(response => {
                  if (response.data.success === true) {
                    this.checkConfirm = "2";
                    this.$notify({
                      group: 'foo',
                      type: 'success',
                      title: 'Thành công',
                      text: 'Xác nhận thành công'
                    })
                  }
                })
            }
          })
        },
        denyCV() {
          console.log("deny")
          Swal.fire({
            title: 'Bạn thật sự muốn bỏ ứng viên này?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Đồng ý'
          }).then((result) => {
              if (result.value) {
                Axios
                  .get(Constants.URL + '/apply/deny/' + this.jobid + '/' + this.cvid)
                  .then(response => {
                    if (response.data.success === true) {
                      this.checkConfirm = 3;
                      this.$notify({
                        group: 'foo',
                        type: 'success',
                        title: 'Thành công',
                        text: 'Bỏ qua thành công'
                      })
                    }
                  })

              }})

        },


        getComponent() {

          Axios
            .get(Constants.URL+'/apply/cv-applied/'+this.jobid)
            .then(response => {
              this.cvs = response.data.content;
              for(var cv in this.cvs){
                var date = new Date(this.cvs[cv].createdDate);
                // var tmp = date.getDay()
                this.cvs[cv].createdDate = date.toISOString().substr(0, 10);
              }
              this.cvs.sort(function(a, b){return b.id - a.id});
            })
        }
      }
      ,  mounted() {
        this.getComponent();
      }
      ,
      watch: {
        userId2() {
          this.getComponent();
        }
      },
      computed: {
        ...mapGetters('AUTHENTICATION_STORE', {
          email: 'email2',
          roleId: 'roleId2',
          fullName: 'fullName2',
          userId2: 'userId2'
        }),
      },

    }
</script>

<style scoped>

</style>
