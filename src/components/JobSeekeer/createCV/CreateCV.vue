<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-card style="background-color: #f5f5f5">
    <v-container>
      <!--      thông tin người dùng-->
      <v-card style="background-color: white">
        <!--        profile-->
        <v-container>
          <v-layout row wrap>
            <v-flex md12 xs12>
              <h2>
                <v-text-field
                  v-model="info.title"
                  label="Tiêu đề CV"
                  placeholder="Tiêu đề CV"
                  solo
                ></v-text-field>
              </h2>
            </v-flex><!-- end thông tin-->
            <v-flex md4 xs12>
              <v-flex md12 xs12>
                <img :src="imageUrl" id="imageAvatar" height="200" width="200" v-if="imageUrl" @click='pickFile'/>
                <v-text-field  label="Chọn ảnh đại diện" @click='pickFile' v-model='imageName'
                              prepend-icon='attach_file'></v-text-field>
                <input
                  type="file"
                  style="display: none"
                  ref="image"
                  accept="image/*"
                  @change="onFilePicked"
                >
              </v-flex>
              <v-flex md12 xs12>
                <h3> </h3>
              </v-flex>
            </v-flex>
            <v-flex md4 xs12>
              <v-flex md12 xs12 sm6>
                <!--                họ-->
                <v-layout row>
                  <v-icon color="orange darken-2">mdi-account-circle-outline</v-icon>
                  <v-text-field
                    :rules="[rules.required(info.lastName)]"
                    v-model="info.lastName"
                    label="Họ* "
                  ></v-text-field>
                </v-layout>
                <!--                email-->
                <v-layout row>
                  <v-icon color="orange darken-2">mdi-email-search-outline</v-icon>
                  <v-text-field
                    :rule="[ rules.cemail]"
                    v-model="info.email"
                    label="Email* "
                  ></v-text-field>
                </v-layout>
                <!--                số điện thoại-->
                <v-layout row>
                  <v-icon color="orange darken-2">mdi-phone</v-icon>
                  <v-text-field
                    v-model="info.telephoneNumber"
                    :rules="[rules.telephone(info.telephoneNumber)]"
                    label="Số điện thoại* "
                  ></v-text-field>
                </v-layout>
              </v-flex>
            </v-flex>
            <v-flex md4 xs12>
              <!--              tên-->
              <v-layout row>
                <v-icon color="orange darken-2">mdi-account-circle-outline</v-icon>
                <v-text-field
                  v-model="info.firstName"
                  :rules="[rules.required(info.firstName)]"
                  label="Tên* "
                ></v-text-field>
              </v-layout>
              <!--              nghề nghiệp-->
              <v-layout row>
                <v-icon color="orange darken-2">mdi-account-circle-outline</v-icon>
                <v-autocomplete
                  v-model="info.industryId"
                  :items="industries"
                  item-text="name"
                  item-value="id"
                  label="Ngành nghề*"
                  persistent-hint
                  single-line
                ></v-autocomplete>

              </v-layout>
              <!--              số năm kinh nghiệm-->
              <v-layout row>
                <v-icon color="orange darken-2">mdi-briefcase-account-outline</v-icon>
                <v-text-field
                  :rules="[() => info.yearExperience.length > 0 ||'Không được để trống']"
                  v-model="info.yearExperience"
                  label="Số năm kinh nghiệm* "
                ></v-text-field>
              </v-layout>
            </v-flex>
            <v-flex md12 xs12>
              <v-layout row wrap>
                <v-flex md6 xs12>
                  <!--                  dịa chỉ-->
                  <v-layout row>
                    <v-icon color="orange darken-2">mdi-map-marker</v-icon>
                    <v-text-field
                      v-model="info.address"
                      :rules="[() => info.address.length > 0 ||'Không được để trống']"
                      label="Địa chỉ *"
                    ></v-text-field>
                  </v-layout>

                  <!--                  ngày sinh-->
                  <v-layout row>
                    <v-icon color="orange darken-2">mdi-calendar-month-outline</v-icon>
                    <v-menu
                      v-model="menu2"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      lazy
                      transition="scale-transition"
                      offset-y
                      full-width
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="info.dob"
                          label="Ngày sinh"
                          readonly
                          v-on="on"
                          required
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="info.dob" @input="menu2 = false"></v-date-picker>
                    </v-menu>
                  </v-layout>

                </v-flex>

                <v-flex md6 xs12>

                  <!--               thành phố   -->
                  <v-layout row>
                    <v-icon color="orange darken-2">mdi-account-circle-outline</v-icon>
                    <v-autocomplete
                      v-model="info.cityId"
                      :items="cities"
                      item-text="fullName"
                      item-value="id"
                      label="Tỉnh/ Thành phố"
                      persistent-hint
                      single-line
                    ></v-autocomplete>

                  </v-layout>
                  <!--                  giới tính-->
                  <v-layout row>
                    <v-icon color="orange darken-2" class="pr-2" style="float: left">mdi-gender-male-female</v-icon>
                    <v-select
                      v-bind:items="genders"
                      v-model="info.gender"
                      :rules="[() => info.gender.length > 0 ||'Không được để trống']"
                      item-text="name"
                      item-value="id"
                      label="Giới tính"
                    ></v-select>
                  </v-layout>
                </v-flex>

              </v-layout>
            </v-flex>
            <v-flex md12 xs12>

              <!--              <v-layout row>-->
              <!--                <v-flex md12 xs12>-->
              <!--                  <v-icon color="orange darken-2" class="pr-2" style="float: left">mdi-account-circle-outline</v-icon>-->
              <!--                  <h4 style="float: left">Giới tính</h4>-->
              <!--                  <v-container fluid align="left">-->
              <!--                    <v-radio-group v-model="info.gender" :mandatory="false" >-->
              <!--                      <v-radio label="Nữ" value="1"></v-radio>-->
              <!--                      <v-radio label="Nam" value="2"></v-radio>-->
              <!--                      <v-radio label="Khác" value="3"></v-radio>-->
              <!--                    </v-radio-group>-->
              <!--                  </v-container>-->
              <!--                </v-flex>-->
              <!--              </v-layout>-->
            </v-flex>
            <v-flex md12 xs12>
              <v-layout row wrap>
                <!--Lương-->
                <v-flex class="pa-1" md6 xs12>
                  <v-icon color="orange darken-2" class="pr-2" style="float: left">mdi-currency-usd</v-icon>
                  <v-select
                    :items="salaryChoose"
                    v-model="select"
                    item-text="name"
                    item-value="id"
                    label="Lương"
                  ></v-select>
                </v-flex>

                <v-flex md6 xs12 v-if="select === 'Thỏa Thuận'">
                </v-flex>

                <v-flex md3 xs12 v-if="select === 'Trong Khoảng' || select === 'Từ'">
                  <v-text-field class="ma-2" name="from" label="Từ" type="number" min="0"
                                v-model="info.salaryFrom"
                                :rules="[rules.noMinus]"
                  ></v-text-field>
                </v-flex>

                <v-flex md3 xs12 v-if="select === 'Trong Khoảng' || select === 'Đến'">
                  <v-text-field class="ma-2" name="to" label="Đến" type="number" min="0"
                                v-model="info.salaryTo"
                                :rules="[rules.noMinus]"
                  ></v-text-field>
                </v-flex>
                <!--Hết Lương-->
              </v-layout>
            </v-flex>

          </v-layout><!--end row bự-->
        </v-container>
      </v-card>
      <!--        end profile-->
      <v-divider class="ma-5" color="white"></v-divider>
      <v-layout row wrap>
        <v-flex md8 xs12 class="pr-2">
          <!--      Mục tiêu nghề nghiệp-->
          <v-card style="background-color: white">
            <v-container>
              <v-layout row wrap>
                <v-flex md12 xs12>
                  <h2>Mục tiêu nghề nghiệp</h2>
                </v-flex>
                <v-flex md12 xs12>
                  <v-textarea
                    v-model="info.description"
                    name="input-7-1"
                    label="Mô tả ngắn gọn thông tin hồ sơ và mục tiêu nghề nghiệp của bạn"
                    value=""
                    hint="Hint text"
                  ></v-textarea>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
          <!-- học vấn-->
          <EducationComponent :educationsById="info.educationsById"></EducationComponent>
          <!--Kinh nghiệm-->
          <WorkExperienceComponent :workexperiences="info.workexperiencesById"></WorkExperienceComponent>
          <!--Kỹ năng-->
          <SkillInCVComponent :skillincvsById="info.skillincvsById"></SkillInCVComponent>

          <!--dự án-->
          <ProjectorProductWorkedComponent
            :projectorproductworkeds="info.projectorproductworkedsById"></ProjectorProductWorkedComponent>

          <!-- Chứng chỉ-->
          <CertificationComponent :certifications="info.certificationsById"></CertificationComponent>
          <!--Hoạt động xã hội-->
          <SocialActivitiesComponent :socialactivities="info.socialactivitiesById"></SocialActivitiesComponent>
        </v-flex>
        <v-spacer/>
        <v-flex md4 xs12 class="pl-2">

        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-spacer/>
        <v-flex md2 xs12>
          {{info}}
<!--          <router-link to="/quan-li-CV" tag="button">-->
            <v-btn  color="orange" dark @click="create">Tạo CV</v-btn>
<!--          </router-link>-->

        </v-flex>
        <v-spacer/>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
  import axios from 'axios';
  import EducationComponent from "./EducationComponent";
  import WorkExperienceComponent from "./WorkExperienceComponent";
  import CertificationComponent from "./CertificationComponent";
  import SocialActivitiesComponent from "./SocialActivitiesComponent";
  import SkillInCVComponent from "./SkillInCVComponent";
  import ProjectorProductWorkedComponent from "./ProjectorProductWorkedComponent";
  import ProfileBasicComponent from "../manageCV/ProfileBasicComponent";
  import Swal from 'sweetalert2'


  import {mapGetters} from 'vuex';
  import Constants from '@/stores/constant.js'

  export default {
    name: "CreateCV",
    components: {

      ProfileBasicComponent,
      ProjectorProductWorkedComponent,
      EducationComponent,
      SkillInCVComponent,
      SocialActivitiesComponent, CertificationComponent, WorkExperienceComponent
    },
     data: () => ( {
       base64: '',
       imageA:'',
       file: '',
        btnDown: false,
        title: "Image Upload",
        dialog: false,
        imageName: '',
        imageFile: '',
        imageUrl: require('@/assets/avatar-default-icon.png'),
        cities: [],
        industries: [],
        menu2: false,
        salaryChoose: ['Thỏa Thuận', 'Từ', 'Đến', 'Trong Khoảng'],
        select: 'Trong Khoảng',
        genders: [{id: "1", name: "Nữ"}, {id: "2", name: "Nam"}, {id: "3", name: "Khác"}],
        info: {
          title: '',
          telephoneNumber: '',
          userId: '',
          img: '',
          email: '',
          firstName: '',
          lastName: '',
          gender: '',
          dob: new Date().toISOString().substr(0, 10),
          cityId: '1',
          address: '',
          industryId: '',
          description: '',
          yearExperience: '',
          salaryFrom: '',
          salaryTo: '',
          status: '',
          createdDate: new Date().toISOString().substr(0, 10),
          lastModify: '',
          isActive: '',
          certificationsById: [],
          educationsById: [],
          projectorproductworkedsById: [],
          socialactivitiesById: [],
          workexperiencesById: [],
          skillincvsById: [],

        },
       rules: {
          noMinus: value => value >= 0 || 'Lương Không Được Nhỏ Hơn 0',
          required: value => !!value || 'Không được để trống ô này.',
          counter: value => value.length <= 40 || 'Tối Đa 40 Kí Tự',
         telephone: value => {
           const pattern = /^[0-9]{10,12}$/
            return pattern.test(value)|| 'Phải dùng 10 tới 12 chữ số'
         },
         cemail: value => {
           const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
           return pattern.test(value) || 'Địa chỉ email không phù hợp.'
         }
        },}),



    methods: {
      pickFile() {
        this.$refs.image.click()
      },
      onFilePicked(e) {
        const files = e.target.files
        if (files[0] !== undefined) {
          this.imageName = files[0].name
          if (this.imageName.lastIndexOf('.') <= 0) {
            return
          }
          const fr = new FileReader()
          fr.readAsDataURL(files[0])
          fr.addEventListener('load', () => {
            this.imageUrl = fr.result
            this.imageFile = files[0] // this is an image file that can be sent to server...
          })
        } else {
          this.imageName = ''
          this.imageFile = ''
          this.imageUrl = require('@/assets/avatar-default-icon.png')
        }

      },
      create() {

//         let image = new Image()
//
//         image.onload = () => {
//           let canvas = document.createElement('canvas');
//           canvas.width = this.naturalWidth
//           canvas.height = this.naturalHeight
//           canvas.getContext('2d').drawImage(this, 0, 0)
//           callback(canvas.toDataUrl('image/png').replace(/^data:image\/(png|jpg);base64,/, ''))
//           callback(canvas.toDataURL('image/png'))
//         }
//
//         image.src = url
// console.log(url);
        function toDataURL(url, callback) {
          var xhr = new XMLHttpRequest();
          xhr.onload = function() {
            var reader = new FileReader();
            reader.onloadend = function() {
              callback(reader.result);
              var tmp = reader.result;
              this.imageUrl = tmp;
              console.log(this.imageUrl)

            }
            reader.readAsDataURL(xhr.response);


          };
          xhr.open('GET', url);
          xhr.responseType = 'blob';
          xhr.send();
        }

        toDataURL(this.imageUrl, function(dataUrl) {

        })

        this.info.img = this.imageUrl;
        this.info.userId = this.userId1;
        if (this.info.title.isEmpty){
          for (indus in this.industries){
            if(this.industries[indus].id =this.info.industryId){
              this.info.title = this.industries[indus].name;
            }

          }

        }

        console.log(this.info);
        axios.post( Constants.URL+'/cv/create',
          this.info
        ).then(response => {
          console.log(response)
          if(response.data.success === true){
            Swal.fire({
              position: 'top-end',
              type: 'success',
              title: 'Đã lưu CV',
              showConfirmButton: false,
              timer: 1500
            })
          }

        })
          .catch(function(){
            console.log('FAILURE!!');
          });




        // let formData = new FormData();
        // formData.append('file', this.imageFile);
        // console.log(formData)
        // this.info.img = formData;
        // console.log(this.info);

      },down(){
        if(this.btnDown === false){
          this.btnDown = true;
        }


      },loadpdf(){
        if(this.btnDown === true){
          this.btnDown = false;
        }
      }
    },
    mounted() {
      console.log(Constants.URL);
      axios
        .get(Constants.URL+'/city/getAllCity')
        .then(response => (
          this.cities = response.data.data))
      axios
        .get(Constants.URL+'/industry')
        .then(response => (
          this.industries = response.data))

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
  h1, h2, h3, h4, h5 {
    font-family: "Times New Roman";

  }

  .v-text-field {
    padding: 15px;
  }
</style>
