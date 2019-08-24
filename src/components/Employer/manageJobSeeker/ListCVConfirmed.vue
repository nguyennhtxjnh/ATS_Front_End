<template>
  <v-container>

    <h2>Các ứng viên đã xác nhận</h2>

    <v-layout row wrap v-if="cvs.length === 0">
      <v-spacer/>
      <img :src="require('@/assets/empty-product.png')" height="240px" >
      <v-spacer/>
    </v-layout>
    <v-layout row wrap v-if="cvs.length > 0">
      <v-flex md4 xs4>
        <v-card>
          <v-card-text>
            <template v-for="cv in cvs">
              <v-layout row wrap  @click="getCVid" v-bind:id="`comEl`+cv.id" class="pa-2">
                <v-flex @click="getCVDetail(cv.id)">
                  <v-layout row wrap >
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
                        <span> Ngày cập nhật gần nhất: <i> {{cv.lastModify}}</i></span>
                      </v-layout>
                    </v-flex>
                    <v-spacer/>
                    <v-flex md3 xs4>
<!--                      <span> <i> {{cv.createdDate}}</i></span>-->
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
                </v-flex></v-layout>
              <v-divider class="mt-2 mb-2" v-if=""></v-divider>

            </template>
            <v-layout row wrap>
              <v-spacer/>
              <v-flex md10>
                <v-pagination
                  v-if="lengthPage !== '' || lengthPage !== null"
                  v-model="page"
                  :page="page"
                  @input="reloadPage"
                  :total-visible="lengthPage"
                  :length="lengthPage"
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
              Yêu thích Ứng viên
            </v-btn>
            <v-btn color="grey" @click="unsaveCV" outline dark v-if="checkSave === false">
              <v-icon class="mr-1">favorite</v-icon>
              Đã Yêu thích Ứng viên
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
              <v-flex md11 xs12>
                <v-layout row wrap>
                  <v-flex md3 xs4>
                    <img :src="imageUrl" id="imageAvatar" height="150" width="150" />
                  </v-flex>
                  <v-flex md9 xs6 class="mb-4">
                    <h1 >{{info.lastName}} {{info.firstName}}</h1>
                    <table>
                      <tr>
                        <td class="pr-3 pb-2"> <b>Ngày sinh:</b></td>
                        <td><span>{{info.dob}}
          </span></td>
                      </tr>
                      <tr>
                        <td class="pb-2"> <b>Giới tính:</b></td>
                        <td>
                          <v-flex v-for="gd in genders" :key="gd.id">
                            <template v-if="info.gender === gd.id">
                              <span>{{gd.name}}</span>
                            </template>
                          </v-flex>
                        </td>
                      </tr>
                      <tr>
                        <td class="pb-2"> <b>Địa chỉ:</b></td>
                        <td><span>{{info.address}}
          </span></td>
                      </tr>
                      <tr>
                        <td class="pb-2"> <b>Điện thọai:</b></td>
                        <td><span>{{info.telephoneNumber}}
          </span></td>
                      </tr>
                      <tr>
                        <td class="pb-2"> <b>Email:</b></td>
                        <td><span>{{info.email}}
          </span></td>
                      </tr>
                    </table>

                  </v-flex>
                </v-layout>

                <v-flex md12 xs12 class="mb-4" v-if="info.description !== ''">
                  <v-layout row wrap>
                    <v-flex md12 xs12 >
                      <h1 style="float: left">Mục tiêu nghề nghiệp</h1>
                    </v-flex>
                    <v-flex md12 xs12>
                      <v-divider></v-divider>
                      <span>{{info.description}}</span>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex md12 xs12 class="mb-4">
                  <v-layout row wrap>
                    <v-flex md12 xs12 >
                      <h1 style="float: left">Học Vấn</h1>
                    </v-flex>

                    <v-flex md12 xs12>
                      <v-divider></v-divider>
                      <v-flex v-for="education in info.educationsById" :key="education.schoolName">
                        <v-layout row wrap class="pa-2">

                          <v-flex md4 xs4>
                    <span>
                      {{education.startTime}} - {{education.endtime}}
                    </span>
                          </v-flex>
                          <v-spacer/>
                          <v-flex md5 xs7>

                            <v-flex v-for="st in sts" :key="st.i">
                              <template v-if="st.i === education.schoolType">
                                <b>Trường: {{st.name}} {{education.schoolName}}</b><br/>
                              </template>
                            </v-flex>
                            <v-flex v-if="education.major">
                              <span>Chuyên ngành: {{education.major}}</span> <br/>
                            </v-flex>

                            <span>{{education.description}}</span>
                          </v-flex>

                        </v-layout>
                      </v-flex>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex md12 xs12 class="mb-4">
                  <v-layout row wrap>
                    <v-flex md12 xs12 >
                      <h1 style="float: left">Kinh nghiệm làm việc</h1>
                    </v-flex>

                    <v-flex md12 xs12>
                      <v-divider></v-divider>
                      <v-flex v-for="workexperience in info.workexperiencesById" :key="workexperience.companyName">
                        <v-layout row wrap class="pa-2">

                          <v-flex md4 xs4>
                    <span>
                      {{workexperience.startTime}} - {{workexperience.endTime}}
                    </span>
                          </v-flex>
                          <v-spacer/>
                          <v-flex md5 xs7>
                            <b>Công ty: {{workexperience.companyName}} </b><br/>
                            <!--                          <span> {{workexperience.vacancyName}}</span> <br/>-->
                            <span>{{workexperience.description}}</span>
                          </v-flex>

                        </v-layout>
                      </v-flex>
                    </v-flex>
                  </v-layout>
                </v-flex>

                <v-flex md12 xs12 class="mb-4">
                  <v-layout row wrap>
                    <v-flex md12 xs12 >
                      <h1 style="float: left">Kĩ năng</h1>
                    </v-flex>

                    <v-flex md12 xs12>
                      <v-divider></v-divider>
                      <v-flex v-for="skill in info.skillincvsById" :key="skill.id">
                        <v-layout row wrap class="pa-2">
                          <v-flex md4 xs7>

                            <template v-for="i in skills">
                              <b v-if="i.id === skill.skillMasterId"> Kĩ năng: {{i.skillName}} </b>
                            </template><br/>


                          </v-flex>
                          <v-spacer/>
                          <v-flex md5 xs4>
                            <template v-for="i in skillRating">
                              <span v-if="i.id === skill.skillLevel"> Cấp độ: {{i.name}} </span>
                            </template>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex md12 xs12 class="mb-4">
                  <v-layout row wrap>
                    <v-flex md12 xs12 >
                      <h1 style="float: left">Dự án</h1>
                    </v-flex>

                    <v-flex md12 xs12>
                      <v-divider></v-divider>
                      <v-flex v-for="product in info.projectorproductworkedsById" :key="product.productName">
                        <v-layout row wrap class="pa-2">

                          <v-flex md4 xs4>
                            <span>{{product.startTime}} - {{product.endTime}}</span>
                          </v-flex>
                          <v-spacer/>
                          <v-flex md5 xs7>

                            <b>Dự án: {{product.projetName}} </b><br/>
                            <table>
                              <tr>
                                <td>Kỹ năng: </td>
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
                                <td>Mô tả: </td>
                                <td>{{product.description}}</td>
                              </tr>
                            </table>
                          </v-flex>

                        </v-layout>
                      </v-flex>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex md12 xs12 class="mb-4">
                  <v-layout row wrap>
                    <v-flex md12 xs12 >
                      <h1 style="float: left">Hoạt động</h1>
                    </v-flex>

                    <v-flex md12 xs12>
                      <v-divider></v-divider>
                      <v-flex v-for="social in info.socialactivitiesById" :key="social.name">
                        <v-layout row wrap class="pa-2">
                          <v-flex md4 xs7>
                            <b>Hoạt động xã hôi: {{social.name}} </b><br/>
                            <span v-if="social.description">Mô tả:  {{social.description}}</span>
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
                    <v-flex md12 xs12 >
                      <h1 style="float: left">Chứng chỉ</h1>
                    </v-flex>

                    <v-flex md12 xs12>
                      <v-divider></v-divider>
                      <v-flex v-for="certi in info.certificationsById" :key="certi.certificationNamee">
                        <v-layout row wrap class="pa-2">
                          <v-flex md4 xs7>
                            <b>Chứng chỉ: {{certi.certificationName}} </b><br/>
                          </v-flex>
                          <v-spacer/>
                          <v-flex md3 xs4>
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
  import axios from 'axios'
  import Constants from '@/stores/constant.js'
  import {mapGetters} from 'vuex';
    export default {
        name: "ListCVConfirmed",
      data : function () {
        return{
          imageUrl: require('@/assets/avatar-default-icon.png'),
          cvid: '',
          name:'',
          genders: [{id: "1", name: "Nữ"}, {id: "2", name: "Nam"}, {id: "3", name: "Khác"}],
          sts: [{i: "1", name: "Đại học"}, {i: "2", name: "Cao Đẳng"}, {i: "3", name: "Trung cấp"}, {i: "4", name: "Trung học phổ thông"}]
          ,
          skills:[],skillRating: [
            {
              id: 1,
              name: "Mới bắt đầu"
            },
            {
              id: 2,
              name: "Cơ bản"
            },
            {
              id: 3,
              name: "Trung cấp"
            },
            {
              id: 4,
              name: "Cao cấp"
            },
            {
              id: 5,
              name: "Chuyên nghiệp"
            },
          ],
          lengthPage:10,
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
          if(this.userId2 != null && this.userId2 != ""){
          axios
            .get(Constants.URL+'/cv/list-comfirmed/'+this.userId2 + '&page=' + (this.page-1))
            .then(response => {
              this.cvs = response.data.content;
              for(var cv in this.cvs){
                var date = new Date(this.cvs[cv].lastModify);
                this.cvs[cv].lastModify = date.toISOString().substr(0, 10);
              }
              if(this.cvs.length >0){
                this.cvs.sort(function(a, b){return b.id - a.id});
                this.cvid = this.cvs[0].id;
                if(this.cvid != null && this.cvid != ""){
                  this.getCVDetail(this.cvid)
                }
              }

            })}

        }
        , getCVDetail(id){
          this.cvid = id;
          this.jobid =  this.$route.params.jobid,
            this.userId = this.userId2;
          if(this.cvid != null && this.cvid != "") {
            axios
              .get(Constants.URL + '/userlifecv/check/' + this.userId + '/' + this.cvid)
              .then(response => (
                this.checkSave = response.data,
                  console.log(response)
              ))

            axios
              .get(Constants.URL + '/cv/getOne/' + this.cvid + '/'+ this.userId)
              .then(response => {
                  this.info = response.data.data;
                  if (this.info.img === null || this.info.img === "") {
                    this.imageUrl = require('@/assets/avatar-default-icon.png')
                  } else {
                    this.imageUrl = this.info.img;
                  }
                  var dob = new Date(this.info.dob);
                  this.info.dob = dob.toISOString().substr(0, 10);
                  for (var edu in this.info.educationsById) {
                    var stime = new Date(this.info.educationsById[edu].startTime);
                    this.info.educationsById[edu].startTime = stime.toISOString().substr(0, 10);
                    var etime = new Date(this.info.educationsById[edu].endtime);
                    this.info.educationsById[edu].endtime = etime.toISOString().substr(0, 10);
                  }
                  for (var edu in this.info.workexperiencesById) {
                    var stime = new Date(this.info.workexperiencesById[edu].startTime);
                    this.info.workexperiencesById[edu].startTime = stime.toISOString().substr(0, 10);
                    var etime = new Date(this.info.workexperiencesById[edu].endTime);
                    this.info.workexperiencesById[edu].endTime = etime.toISOString().substr(0, 10);
                  }
                  for (var edu in this.info.projectorproductworkedsById) {
                    var stime = new Date(this.info.projectorproductworkedsById[edu].startTime);
                    this.info.projectorproductworkedsById[edu].startTime = stime.toISOString().substr(0, 10);
                    var etime = new Date(this.info.projectorproductworkedsById[edu].endTime);
                    this.info.projectorproductworkedsById[edu].endTime = etime.toISOString().substr(0, 10);
                  }

                }
              )
          }},
        getCVid(id){
          let curTar = undefined;
          if(typeof id === "object"){
            curTar = id.currentTarget;
            let child = curTar.parentElement.children;
            for(let i=0;i<child.length;i++){
              child[i].style.backgroundColor = '';
            }
          }else{
            curTar = document.getElementById("comEl"+id);


          }
          if(!!curTar){
            curTar.style.backgroundColor = "#e1f5fe";
          }
          if(this.isActive){
            this.isActive = false;
          }else{
            this.isActive = true;
          }
          console.log(['pkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',this])
        },


        saveCV() {
          console.log("save")
          this.userId = this.userId2;
          axios
            .post(Constants.URL + '/userlifecv/create/' + this.userId + '/' + this.cvid)
            .then(response => {
              if (response.data.success === true) {
                this.checkSave = false;
                this.$notify({
                  group: 'foo',
                  type: 'success',
                  title: 'Thành công',
                  text: 'Yêu thích thành công'
                })
              }
            })

        },
        unsaveCV() {
          this.userId = this.userId2;
          axios
            .post(Constants.URL + '/userlifecv/unlike/' + this.userId + '/' + this.cvid)
            .then(response => {
              if (response.data.success === true) {
                this.checkSave = true;
                this.$notify({
                  group: 'foo',
                  type: 'success',
                  title: 'Thành công',
                  text: 'Bỏ Yêu thích thành công'
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
              axios
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
              axios
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

          if(this.userId2 != null && this.userId2 != ""){

          axios
            .get(Constants.URL+'/cv/list-comfirmed/'+this.userId2)
            .then(response => {
              console.log("aaaaaaaaa"+ this.lengthPage)
              this.cvs = response.data.content;

                this.lengthPage = response.data.totalPages ;

              console.log("bbbbbbbbbbb"+ this.lengthPage)
              for(var cv in this.cvs){
                var date = new Date(this.cvs[cv].lastModify);
                // var tmp = date.getDay()
                this.cvs[cv].lastModify = date.toISOString().substr(0, 10);
              }

              this.cvs.sort(function(a, b){return b.id - a.id});
              this.cvid = this.cvs[0].id;
              if(this.cvid != null && this.cvid != ""){
                this.getCVDetail(this.cvid)
              }
            })}
        }
      }
      ,  mounted() {
        axios
          .get(Constants.URL+'/skillmaster/')
          .then(response => {
            console.log(response)
            this.skills = response.data}
          )
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
      },}
</script>

<style scoped>

</style>
