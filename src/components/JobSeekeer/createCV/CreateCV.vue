<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-card style="background-color: #efebeb" >
      <v-container>
<!--      thông tin người dùng-->
      <v-card style="background-color: white">
<!--        profile-->
        <v-container>
          <v-layout row wrap>
            <v-flex md12 xs12>
              <h2>  <v-text-field
                v-model="info.title"
                label="Tiêu đề CV"
                placeholder="Tiêu đề CV"
                solo
              ></v-text-field></h2>
            </v-flex><!-- end thông tin-->
            <v-flex md4 xs12>
              <v-flex md12 xs12>
              <img :src="imageUrl" height="150" v-if="imageUrl"  @click='pickFile'/>
              <v-text-field  style="display: none" label="Select Image" @click='pickFile' v-model='imageName' prepend-icon='attach_file'></v-text-field>
              <input
                type="file"
                style="display: none"
                ref="image"
                accept="image/*"
                @change="onFilePicked"
              >
              </v-flex>
              <v-flex md12 xs12>
                <h3> Chọn ảnh đại diện</h3>
              </v-flex>
            </v-flex>
            <v-flex md4 xs12>
              <v-flex md12 xs12 sm6>
<!--                họ-->
                <v-layout row >
                  <v-icon color="orange darken-2" >mdi-account-circle-outline</v-icon>
                  <v-text-field
                    :rules="[() => info.lastName.length > 0 ||'Không được để trống']"
                    v-model="info.lastName"
                    label="Họ* "
                  ></v-text-field>
                </v-layout>
<!--                email-->
                <v-layout row>
                  <v-icon color="orange darken-2" >mdi-email-search-outline</v-icon>
                  <v-text-field
                    :rules="[() => info.email.length > 0 ||'Không được để trống']"
                    v-model="info.email"
                    label="Email* "
                  ></v-text-field>
                </v-layout>
<!--                số điện thoại-->
                <v-layout row>
                  <v-icon color="orange darken-2" >mdi-phone</v-icon>
                  <v-text-field
                    v-model="info.telephone"
                    :rules="[() => info.telephone.length > 0 ||'Không được để trống']"
                    label="Số điện thoại* "
                  ></v-text-field>
                </v-layout>
              </v-flex>
            </v-flex>
            <v-flex md4 xs12>
<!--              tên-->
              <v-layout row>
                <v-icon color="orange darken-2" >mdi-account-circle-outline</v-icon>
                <v-text-field
                  v-model="info.firstName"
                  :rules="[() => info.firstName.length > 0 ||'Không được để trống']"
                  label="Tên* "
                ></v-text-field>
              </v-layout>
<!--              nghề nghiệp-->
                <v-layout row>
                  <v-icon color="orange darken-2" >mdi-account-circle-outline</v-icon>
                  <v-autocomplete
                    v-model="info.industryid"
                    :items="industries"
                    :rules="[() => info.industryid.length > 0 ||'Không được để trống']"
                    item-text="name"
                    item-value="id"
                    label="Nghề nghiệp*"
                    persistent-hint
                    return-object
                    single-line
                  ></v-autocomplete>

                </v-layout>
<!--              số năm kinh nghiệm-->
              <v-layout row >
                <v-icon color="orange darken-2" >mdi-briefcase-account-outline</v-icon>
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
                  <v-layout row >
                    <v-icon color="orange darken-2" >mdi-map-marker</v-icon>
                    <v-text-field
                      v-model="info.address"
                      :rules="[() => info.address.length > 0 ||'Không được để trống']"
                      label="Địa chỉ *"
                    ></v-text-field>
                  </v-layout>

<!--                  ngày sinh-->
                  <v-layout row>
                    <v-icon color="orange darken-2" >mdi-calendar-month-outline</v-icon>
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
                    <v-icon color="orange darken-2" >mdi-account-circle-outline</v-icon>
                    <v-autocomplete
                      v-model="info.cityid"
                      :items="cities"
                      item-text="fullName"
                      item-value="id"
                      label="Tỉnh/ Thành phố"
                      persistent-hint
                      return-object
                      single-line
                    ></v-autocomplete>

                  </v-layout>
<!--                  giới tính-->
                  <v-layout row>
                      <v-icon color="orange darken-2" class="pr-2" style="float: left">mdi-account-circle-outline</v-icon>
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
<!--      Mục tiêu nghề nghiệp-->
      <v-card style="background-color: white" class="mt-5">
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
      <EducationComponent :educations = "info.educations"></EducationComponent>
<!--Kinh nghiệm-->
      <WorkExperienceComponent :workexperiences = "info.workexperiences"></WorkExperienceComponent>

        <!--Kỹ năng-->
        <SkillInCVComponent></SkillInCVComponent>

        <!--dự án-->
        <ProjectorProductWorkedComponent :projectorproductworkeds="info.projectorproductworkeds"></ProjectorProductWorkedComponent>

        <!-- Chứng chỉ-->
      <CertificationComponent :certifications="info.certifications"></CertificationComponent>
<!--Hoạt động xã hội-->
      <SocialActivitiesComponent :socialactivities="info.socialactivities" ></SocialActivitiesComponent>

      {{info}}
      <v-btn color="blue darken-1" flat @click="create">Tạo CV</v-btn>
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
    export default {
        name: "CreateCV",
      components: {
        ProjectorProductWorkedComponent,
        EducationComponent,
        SkillInCVComponent,
        SocialActivitiesComponent, CertificationComponent, WorkExperienceComponent},
      data:  function ()  {
        return {
        title: "Image Upload",
        dialog: false,
        imageName: '',
        imageFile: '',
        imageUrl:require('@/assets/avatar-default-icon.png'),
        cities: [],
          industries:[],
        menu2: false,
        salaryChoose: ['Thỏa Thuận', 'Từ', 'Đến', 'Trong Khoảng'],
        select: 'Trong Khoảng',
          genders:[{ id: "1", name: "Nữ" }, { id: "2", name: "Nam" }, { id: "3", name: "Khác" }],
        info: {
          title:'',
          telephone:'',
          userid:'1',
          img : '',
          email: '',
          firstName:'',
          lastName: '',
          gender:'',
          dob: new Date().toISOString().substr(0, 10),
          cityid: '1',
          address:'',
          industryid:'',
          description:'',
          yearExperience:'',
          salaryFrom:'',
          salaryTo:'',
          status:'',
          createdDate: new Date().toISOString().substr(0, 10),
          lastModify:'',
          isActive:'',
          certifications:[],
          educations: [],
          socialactivities:[],
          workexperiences:[],
          projectorproductworkeds:[],
          skillincvs:[],
        },rules: {
            noMinus: value => value >= 0 || 'Lương Không Được Nhỏ Hơn 0',
            required: value => !!value || 'Không được để trống ô này.',
            counter: value => value.length <= 40 || 'Tối Đa 40 Kí Tự',
            cemail: value => {
              const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              return pattern.test(value) || 'Địa chỉ email không phù hợp.'
            }
          },

      }},


      methods: {
        pickFile () {
          this.$refs.image.click ()
        },
        onFilePicked (e) {
          const files = e.target.files
          if(files[0] !== undefined) {
            this.imageName = files[0].name
            if(this.imageName.lastIndexOf('.') <= 0) {
              return
            }
            const fr = new FileReader ()
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
        create(){
          const url = ''
          const method = 'POST'
          const data = this.info
          axios({url, method, data})
            .then(response => {
              if (response.data.success == true) {
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
      },
     mounted () {

        axios
          .get('https://restcountries.eu/rest/v1/all')
          .then(response => (this.cities = response.data.cities, this.industries = response.data.industries))
      }

    }
</script>

<style scoped>
  h1,h2,h3,h4,h5 {
    font-family: "Times New Roman";

  }
.v-text-field {
  padding: 15px;
}
</style>
