<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-flex style="background-color: whitesmoke">
  <v-container>
    <v-card class="pa-5">
      <v-layout row wrap >
        <v-flex md4 xs12 class="mr-3 pr-2" >
          <v-layout row>
            <v-icon color="orange darken-2"  class="mr-2">mdi-widgets</v-icon>
            <v-autocomplete
              v-model="tmpSkill"
              :items="listSkill"
              chips
              color="blue-grey lighten-2"
              label="Kỹ năng"
              item-text="skillName"
              item-value="id"
              multiple
            >
              <template v-slot:selection="data">
                <v-chip
                  :selected="data.selected"
                  close
                  class="chip--select-multi"
                  @input="remove(data.item)"
                >

                  {{ data.item.skillName }}
                </v-chip>
              </template>
              <template v-slot:item="data">
                <template v-if="typeof data.item !== 'object'">
                  <v-list-tile-content v-text="data.item"></v-list-tile-content>
                </template>
                <template v-else>
                  <v-list-tile-content>
                    <v-list-tile-title v-html="data.item.skillName"></v-list-tile-title>
                  </v-list-tile-content>
                </template>
              </template>
            </v-autocomplete>
          </v-layout>
        </v-flex>

        <v-flex md3 xs12 class="mr-3" >
          <v-layout row>
            <v-icon color="orange darken-2" class="mr-2">mdi-robot-industrial</v-icon>
            <v-autocomplete
              v-model="industryId"
              :items="industries"
              item-text="name"
              item-value="name"
              label="Ngành nghề*"
              persistent-hint
            ></v-autocomplete>
          </v-layout>

        </v-flex>

        <v-flex md3 xs12 class="mr-3">
          <v-layout row>
            <v-icon color="orange darken-2" class="mr-2">mdi-map-marker</v-icon>
            <v-autocomplete
              v-model="cityId"
              :items="cities"
              item-text="fullName"
              item-value="fullName"
              label="Tỉnh/ Thành phố"
              persistent-hint
            ></v-autocomplete>
          </v-layout>
        </v-flex>
        <v-flex md1 xs12 >
          <v-btn color="warning" @click="search" ><h4>Tìm kiếm</h4></v-btn>
        </v-flex>


      </v-layout>
      <v-layout row wrap>
        <v-spacer/>
        <i @click="showMore" v-if="check === false" style="color: #ff5e2d"><v-icon style="color: #ff5e2d">mdi-arrow-down</v-icon>Chọn tìm kiếm nâng cao</i>
        <i @click="unShowMore" v-if="check === true" style="color: #ff5e2d"><v-icon style="color: #ff5e2d">mdi-arrow-up</v-icon>Ẩn tìm kiếm nâng cao</i>
      </v-layout>

      <v-divider class="pb-3" v-if="check"></v-divider>
      <v-layout row wrap v-if="check">
        <v-flex md4 xs12 class="mr-2" >
          <v-layout row wrap>
            <v-icon style="color: #ff5e2d" class="mr-2">mdi-gender-male-female</v-icon>
            <v-select
              v-bind:items="genders"
              v-model="gender"
              :rules="[() => gender.length > 0 ||'Không được để trống']"
              item-text="name"
              item-value="id"
              label="Giới tính"
            ></v-select>
          </v-layout>
        </v-flex>
        <v-flex md5 xs12 class="ml-2">
          <v-layout row wrap>
            <v-icon style="color: #ff5e2d"  class="mr-2">mdi-calendar-blank</v-icon>
            <v-flex md3 class="pr-2">
              <v-select
                :items="items"
                label="Từ tuổi"
              ></v-select>
            </v-flex>
            <v-flex md3 class="pr-2">
              <v-select
                :items="items"
                label="Đến tuổi"
              ></v-select>
            </v-flex>
          </v-layout>
          <v-layout row wrap>

          </v-layout>

        </v-flex>


      </v-layout>
    </v-card>
    <v-layout row wrap class="pt-3">
      <v-flex md12 xs12>
        <v-card class="pa-2">
          <v-card-title>

            <h2 style="color: red"> Danh sách ứng viên</h2>
          </v-card-title>
          <v-divider></v-divider>

          <v-card-text>
            <v-layout row wrap v-if="cvs.length === 0">
              <v-spacer/>
              <img :src="require('@/assets/empty-product.png')" height="240px" >
              <v-spacer/>
            </v-layout>
            <v-layout row wrap v-if="cvs.length > 0">
              <v-flex md4 xs12>
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
              <v-flex md8 xs12 class="pl-3">
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
                  </v-card-title>
                  <v-card-text>
                    <v-layout row wrap>
                      <v-spacer/>
                      <v-flex md9 xs12>
                        <v-layout row wrap>
                                              <v-flex md4 xs4>
                                                <img :src="info.img" id="imageAvatar" height="150" width="150" />
                                              </v-flex>
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
          </v-card-text>
        </v-card>
      </v-flex>
<!-- option-->
    </v-layout>

  </v-container>
  </v-flex>

</template>

<script>
  import {mapGetters} from 'vuex';
  import axios from 'axios';
  import Constants from '@/stores/constant.js'
    export default {
        name: "SearchCV",
      data: () => ( {
        check: false,
        checkSave: true,
        lskill:'',
        cityId:'',
        industryId:'',
        cities:[],
        industries:[],
        tmpSkill:'',
        sts: [{i: "1", name: "Đại học"}, {i: "2", name: "Cao Đẳng"}, {i: "3", name: "Trung cấp"}, {i: "4", name: "Trung học phổ thông"}],
        listSkill: [],
        page:1,
        lengthPage:'',
        cvs:[],
        info:[],
        radios:'1',
        items:[],
        isActive:'',
        gender:'',
        genders: [{id: "1", name: "Nữ"}, {id: "2", name: "Nam"}, {id: "3", name: "Khác"}],
      }),
      methods:{


        saveCV() {

          this.userId = this.userId2;
          axios
            .post(Constants.URL + '/userlifecv/create/' + this.userId + '/' + this.cvid)
            .then(response => {

              if (response.data.success === true) {
                console.log("save")
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
          axios
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
            })},
        getCVDetail(id){
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
              .get(Constants.URL + '/cv/getOne/' + this.cvid + '/0')
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
          }}

        ,
        getCVid(id){
          let curTar = undefined;
          if(typeof id === "object"){
            curTar = id.currentTarget;
            let child = curTar.parentElement.children;
            for(let i=0;i<child.length;i++){
              child[i].style.backgroundColor = '';
            }
            debugger;
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


          }

        ,
        reloadPage(){
          console.log(this.page);

          console.log(this.lskill +"/"+this.cityId+"/"+this.industryId);
          console.log("indus: "+this.industryId);
          console.log("city: "+this.cityId);
          axios
            .get(Constants.URL+'/cv/search?listskill='+this.lskill+'&city='+ this.cityId +'&industry='+this.industryId)
            .then(response => {
                console.log(response)
                this.cvs = response.data.content;
                this.lengthPage = response.data.totalPages;

                for(var cv in this.cvs){
                  var date = new Date(this.cvs[cv].createdDate);
                  // var tmp = date.getDay()
                  this.cvs[cv].createdDate = date.toISOString().substr(0, 10);
                }
                this.cvs.sort(function(a, b){return b.id - a.id});
              this.cvid = this.cvs[0].id;
                this.lskill = [];
              if(this.cvid != null && this.cvid != ""){
              this.getCVid(this.cvid)
              }
              }
            )
        },
        showMore(){
          this.check = true;
        },
        unShowMore(){
          this.check = false;
        },
        remove (item) {
          const index = this.tmpSkill.indexOf(item.id)
          if (index >= 0) this.tmpSkill.splice(index, 1)

        },
        search(){
          for( var skill in this.tmpSkill){
            for(var tmp in this.listSkill){
              if(this.listSkill[tmp].id === this.tmpSkill[skill]){
                if(this.tmpSkill[skill] === this.tmpSkill[this.tmpSkill.length-1]){

                    this.lskill += this.listSkill[tmp].id ;
                }else {

                   this.lskill += this.listSkill[tmp].id +",";
                }
              }
            }



          }
          console.log(this.lskill +"/"+this.cityId+"/"+this.industryId);
          console.log("indus: "+this.industryId);
          console.log("city: "+this.cityId);
          axios
            .get(Constants.URL+'/cv/search?listskill='+this.lskill+'&city='+ this.cityId +'&industry='+this.industryId)
            .then(response => {
              console.log(response)
              this.cvs = response.data.content;
              this.lengthPage = response.data.totalPages;

              console.log(this.cvs[0].id)
                for(var cv in this.cvs){
                  var date = new Date(this.cvs[cv].createdDate);
                  // var tmp = date.getDay()
                  this.cvs[cv].createdDate = date.toISOString().substr(0, 10);
                }
                this.cvs.sort(function(a, b){return b.id - a.id});
                this.cvid = this.cvs[0].id;
              this.lskill = [];
                if(this.cvid != null && this.cvid != ""){
                  this.getCVDetail(this.cvid)
                }
            }
            )


        },
        getComponent(){
          for(var i = 18; i < 56 ; i++){
            this.items.push(i);
          }
          axios
            .get(Constants.URL+'/skillmaster/')
            .then(response => {
              console.log(response)
              this.listSkill = response.data}
            )

          axios
            .get(Constants.URL+'/city/getAllCity')
            .then(response => (
              this.cities = response.data.data))
          axios
            .get(Constants.URL+'/industry')
            .then(response => (
              this.industries = response.data))
        }

      },
      mounted() {
        this.getComponent();
      },
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
