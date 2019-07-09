<template>
  <v-flex style="background-color: lightgray">
  <v-container>
    <v-layout row wrap>
      <v-spacer/>
      <v-flex md10 xs12>
        <v-card class="pa-5">
          <v-layout row wrap>
            <v-spacer/>
            <v-flex md9 xs12>
              <v-layout row wrap>
                <v-flex md4 xs4>
                  <img :src="imageUrl" id="imageAvatar" height="150" width="150" />
                </v-flex>
                <v-flex md6 xs6 class="mb-4">
                  <h1 >{{info.lastName}} {{info.firstName}}</h1>
                  <table>
                    <tr>
                      <td class="pr-5"> <b>Ngày sinh: </b></td>
                      <td><span>{{info.dob}}
          </span></td>
                    </tr>
                    <tr>
                      <td> <b>Giới tính:</b></td>
                      <td>
                        <v-flex v-for="gd in genders" :key="gd.id">
                          <template v-if="info.gender === gd.id">
                            <span>{{gd.name}}</span>
                          </template>
                        </v-flex>
                      </td>
                    </tr>
                    <tr>
                      <td> <b>Địa chỉ:</b></td>
                      <td><span>{{info.address}}
          </span></td>
                    </tr>
                    <tr>
                      <td> <b>Điện thọai:</b></td>
                      <td><span>{{info.telephoneNumber}}
          </span></td>
                    </tr>
                    <tr>
                      <td> <b>Email:</b></td>
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
                  <v-flex md12 xs12 >
                    <h1 style="float: left">Kinh nghiệm làm việc</h1>
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
                  <v-flex md12 xs12 >
                    <h1 style="float: left">Hoạt động</h1>
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
                  <v-flex md12 xs12 >
                    <h1 style="float: left">Chứng chỉ</h1>
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
                  <v-flex md12 xs12 >
                    <h1 style="float: left">Dự án</h1>
                  </v-flex>

                  <v-flex md12 xs12>
                    <v-divider></v-divider>
                    <v-flex v-for="product in info.projectorproductworkedsById" :key="product.productName">
                      <v-layout row wrap class="pa-2">
                        <v-flex md4 xs7>
                          <h3>{{product.productName}} </h3><br/>
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
        </v-card>
      </v-flex>
    <v-spacer/>
    </v-layout>

  </v-container>
  </v-flex>
</template>

<script>
  import axios from 'axios';
    export default {
        name: "DetailCV",
      data : function () {
        return{
          imageUrl: require('@/assets/avatar-default-icon.png'),
          cvid: this.$route.params.cvid,
          name:'',
          genders: [{id: "1", name: "Nữ"}, {id: "2", name: "Nam"}, {id: "3", name: "Khác"}],
          sts: [{i: "1", name: "Đại học"}, {i: "2", name: "Cao Đẳng"}, {i: "3", name: "Trung cấp"}, {i: "4", name: "Trung học phổ thông"}]
          ,
            info: '',

        }
      }
    , mounted() {
        axios
        //   .get('http://localhost:1122/cv/getOne/'+this.cvid+'/0')
        //   .then(response => (
        //     this.info = response.data.data
        //   ))
        // console.log(this.info)
        axios
          .get('http://localhost:1122/cv/getOne/'+this.cvid+'/0')
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



      }

  }
</script>

<style scoped>

</style>
