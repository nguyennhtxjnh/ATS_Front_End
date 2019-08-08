<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-container>

    <v-layout align-center  v-if="checkCompany === true">

      <v-flex xs12 sm12 md10>
        <v-card style="border-style: solid; border-color: #ccc; border-width: 1px;" class="elevation-0 border_all">
          <v-toolbar dark color="orange">
            <v-toolbar-title>Cập Nhật Tin Tuyển Dụng</v-toolbar-title>
            <v-spacer></v-spacer>

          </v-toolbar>
          <v-form ref="form">
            <v-card-text>
              <v-container fluid fill-height>
                <v-layout fill-height wrap>

                  <v-flex md12 xs12>
                    <v-text-field class="ma-2" prepend-icon="mdi-account-badge" name="title" label="Chức Danh Tuyển Dụng" type="text"
                                  v-model="formData.title"
                                  :rules="[rules.required]"></v-text-field>
                  </v-flex>

                  <v-flex md12 xs12>
                    <v-autocomplete class="ma-2"
                      prepend-icon="mdi-domain"
                      v-model="formData.industryId"
                      :items="industryAPI"
                      item-text="name"
                      item-value="id"
                      label="Ngành Nghề"
                      :rules="[rules.required]"
                    ></v-autocomplete>
                  </v-flex>

                  <v-flex md12 xs12>
                    <v-layout row wrap>
                      <v-flex md6 xs12>
                        <v-text-field class="ma-2" prepend-icon="mdi-map-marker-radius" name="Name" label="Địa Chỉ Làm Việc"
                                      type="text"
                                      v-model="formData.address"
                                      :rules="[rules.required]"></v-text-field>
                      </v-flex>
                      <v-spacer/>
                      <v-flex md6 xs12>
                          <v-autocomplete
                            prepend-icon="mdi-map-marker"
                            v-model="formData.cityId"
                            :items="cityAPI"
                            item-text="fullName"
                            item-value="id"
                            label="Chọn Tỉnh/Thành Phố"
                            :rules="[rules.required]"
                          ></v-autocomplete>
                      </v-flex>
                    </v-layout>

                  </v-flex>
                  <!--                    Hết Nơi Làm Việc-->

                  <v-flex  xs12>
                    <v-autocomplete
                      class="ma-2"
                      v-model="formData.joblevelId"
                      prepend-icon="mdi-account"
                      :items="jobLevelAPI"
                      item-text="jobLevelName"
                      item-value="id"
                      label="Cấp Bậc"
                      :rules="[rules.required]"
                    ></v-autocomplete>
                  </v-flex>

                  <!--Loại Hình-->
                  <v-flex  md6 xs12>
                    <v-autocomplete
                      class="ma-2"
                      prepend-icon="mdi-format-list-bulleted-type"
                      :items="workingtype"
                      v-model="formData.workingtype"
                      label="Loại Hình Làm Việc"
                      :rules="[rules.required]"
                    ></v-autocomplete>
                  </v-flex>
                  <!-- Hết Loại Hình-->
                  <!--                  Số lượng-->
                  <v-flex md6 xs12>
                    <v-text-field class="ma-2" prepend-icon="mdi-account-plus" name="Name" label="Số Lượng Cần Tuyển"
                                  type="number" v-model="formData.numbeOfRecruitment"
                                  :rules="[rules.required, rules.noMinus, rules.maxRecruit, rules.minRecruit]"></v-text-field>
                  </v-flex>
                  <!--hết số lượng-->



                  <!--  Kinh Nghiệm-->
                  <v-flex md12 xs12>

                    <v-text-field class="ma-2" prepend-icon="mdi-calendar-clock"  label="Kinh Nghiệm"
                                  type="number" v-model="formData.yearExperience"
                                  :rules="[rules.required, rules.noMinus]"></v-text-field>

                  </v-flex>
                  <!--  Hết Kinh Nghiệm-->
                  <!--Lương-->
                  <v-flex md6 xs12>
                    <v-select
                      class="ma-2"
                      prepend-icon="mdi-currency-usd"
                      :items="salaryChoose"
                      v-model="selectedSalary"
                      item-text="name"
                      item-value="id"
                      label="Lương"
                      v-on:change="resetSalary"
                    ></v-select>
                  </v-flex>

                  <v-flex md6 xs12 v-if="selectedSalary === 'Thỏa Thuận'">
                  </v-flex>

                  <v-flex md3 xs12 v-if="selectedSalary === 'Trong Khoảng' || selectedSalary === 'Từ'">
                    <v-text-field class="ma-2" name="from" label="Từ" type="number" min="0"
                                  v-model="formData.salaryFrom"
                                  :rules="[rules.noMinus]"

                    ></v-text-field>
                  </v-flex>

                  <v-flex md3 xs12 v-if="selectedSalary === 'Trong Khoảng' || selectedSalary === 'Đến'">
                    <v-text-field class="ma-2" name="to" label="Đến" type="number" min="0"
                                  v-model="formData.salaryTo"
                                  :rules="[rules.noMinus]"
                    ></v-text-field>
                  </v-flex>

                  <v-flex md12 xs12 class="pa-2 mt-5">
                    <h3>Mô tả công việc <span class="red--text">*</span></h3>
                    <v-label>Mô tả công việc phải làm dựa theo vị trí ứng tuyển</v-label>
                    <ckeditor :editor="editor"
                              @ready="onEditorReady"
                              v-model="formData.jobDescription"
                              :config="editorConfig"

                              style="border-style: solid; border-color: #ccc; border-width: 1px; height: 250px"
                    ></ckeditor>
                  </v-flex>

                  <v-flex md12 xs12 class="pa-2 mt-5">
                    <h3>Yêu cầu ứng viên <span class="red--text">*</span></h3>
                    <v-label>Các kỹ năng chuyên môn của ứng viên để đáp ứng nhu cầu công việc, các kỹ năng được ưu tiên
                      của ứng viên... vv
                    </v-label>
                    <ckeditor :editor="editor"
                              @ready="onEditorReady"
                              v-model="formData.additionalRequest"
                              :config="editorConfig"

                              style="border-style: solid; border-color: #ccc; border-width: 1px; height: 250px"
                    ></ckeditor>
                  </v-flex>

                  <v-flex md12 xs12 class="pa-2 mt-5">
                    <h3>Quyền lợi ứng viên <span class="red--text">*</span></h3>
                    <v-label>Các quyền lợi ứng viên được hưởng khi được nhận vào công ty như chế độ đào tạo, bảo hiểm,
                      nghỉ mát, hoa hồng.. vv
                    </v-label>
                    <ckeditor :editor="editor"
                              @ready="onEditorReady"
                              v-model="formData.candidateBenefits"
                              :config="editorConfig"

                              style="border-style: solid; border-color: #ccc; border-width: 1px; height: 250px"
                    ></ckeditor>
                  </v-flex>

                  <!--                  ki nang-->
                  <v-flex class="pa-2"  xs12>

                    <v-autocomplete
                      prepend-icon="mdi-account-star"
                      :items="skillChoose"
                      v-model="selectedSkill.skillMasterId"
                      item-text="skillName"
                      item-value="id"
                      label="Kĩ Năng"
                      :rules="[rules.required]"
                      multiple
                      counter="3"
                      return-object
                      @input="addSkill"
                    ></v-autocomplete>

                  </v-flex>



                  <template v-for="(skill,index) in formData.listSkill">
                    <v-flex class="pa-2" md6 xs12>
                      <v-autocomplete
                        :items="skillChoose"
                        v-model="skill.id"
                        item-text="skillName"
                        item-value="id"
                        label="Kĩ Năng"
                        :rules="[rules.required]"
                        readonly
                        outline
                      ></v-autocomplete>
                    </v-flex>
                    <v-flex class="pa-2" md6 xs12>
                      <v-autocomplete
                        prepend-icon="mdi-star"
                        :items="skillRating"
                        v-model="skill.skillLevel"
                        item-text="name"
                        item-value="id"
                        label="Đánh Giá"
                        :rules="[rules.required]"
                      ></v-autocomplete>
                    </v-flex>
<!--                    <v-flex class="pa-1" md2 xs12>-->
<!--                      <v-btn color="error" @click="removeSkill(index)"><v-icon>mdi-trash-can-outline</v-icon></v-btn>-->
<!--                    </v-flex>-->
                  </template>


                </v-layout>
              </v-container>

            </v-card-text>

            <v-card-actions class=" mb-4">
              <v-layout row wrap>
                <v-spacer/>
                <div class="text-xs-center">
                  <v-spacer></v-spacer>
                  <!--                <v-btn color="orange" style="color: white !important;" >Đăng Tin</v-btn>-->
                  <v-btn color="orange" dark @click="review">Xác Nhận</v-btn>

                  <v-dialog v-model="dialog" width="1200px">
                    <template v-slot:activator="{ on }">

                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="headline">Thông Tin Tuyển Dụng</span>
                      </v-card-title>
                      <v-card-text>

                        <v-container fluid fill-height >
                          <v-layout align-center justify-center >
                            <v-flex xs12 sm12 md10 >
                              <!--header title-->
                              <v-container class=" mb-3" fluid grid-list-md style="background-color: white">
                                <v-layout row wrap>
                                  <v-flex d-flex xs12 sm6 md3 class="align-center pa-0">
                                    <v-img contain :src="company.logoImg" aspect-ratio="2"></v-img>
                                  </v-flex>
                                  <v-flex d-flex xs12 sm6 md6>

                                    <v-layout row wrap class="pa-0 ma-0" >

                                      <v-flex d-flex class="pa-0 ma-0" md12>
                                        <h1>{{formData.title}}</h1>
                                      </v-flex>
                                      <v-flex d-flex class="pa-0 ma-0" md12>
                                        <v-layout row wrap class="pa-0 ma-0">
                                          <v-flex d-flex xs12>
                                            <span> <b>Công ty:</b> {{company.nameCompany}}</span>
                                          </v-flex>
                                          <v-flex d-flex xs12 v-if="formData.salaryTo === 0 && formData.salaryFrom > 0">
                                            <span> <b>Mức lương: </b> từ {{formData.salaryFrom}}đ trở lên</span>
                                          </v-flex>
                                          <v-flex d-flex xs12 v-if="formData.salaryFrom === 0 && formData.salaryTo > 0">
                                            <span> <b>Mức lương:</b> lên đến {{formData.salaryTo}}đ</span>
                                          </v-flex>
                                          <v-flex d-flex xs12 v-if="formData.salaryTo > 0 && formData.salaryFrom > 0">
                                            <span> <b>Mức lương:</b> từ {{formData.salaryFrom}}đ đến {{formData.salaryTo}}đ</span>
                                          </v-flex>
                                          <v-flex d-flex xs12 v-if="formData.salaryTo === 0 && formData.salaryFrom === 0">
                                            <span><b>Mức lương:</b> thương lượng</span>
                                          </v-flex>
                                          <v-flex d-flex xs12>
                                            <!--                      <span>View will stay here</span> -->
                                            <!--                                          <span><b>Khu vực:</b> {{jobFull.city.fullName}} <v-divider vertical class="ml-2 mr-2"></v-divider>-->
                                            <!--                       <span> <b>Ngày hết hạn nộp:</b> {{formData.endDateForApply}}</span>-->
                                          </v-flex>
                                          <v-flex d-flex xs12 fill-height>

                                          </v-flex>
                                        </v-layout>

                                      </v-flex>
                                    </v-layout>

                                  </v-flex>
                                  <!--                                <v-layout xs12 sm6 md3 child-flex text-xs-center>-->
                                  <!--                                  <v-flex md12  class="align-center">-->
                                  <!--                                    <ApplyJobComponent :JobID="jobFull.id"></ApplyJobComponent>-->

                                  <!--                                  </v-flex>-->
                                  <!--                                </v-layout>-->
                                </v-layout>
                              </v-container>
                              <!--end header title-->


                              <!--        tab-->
                              <template  >
                                <v-tabs
                                  next-icon="mdi-arrow-right-bold-box-outline"
                                  prev-icon="mdi-arrow-left-bold-box-outline"
                                  show-arrows
                                >
                                  <v-tabs-slider color="yellow"></v-tabs-slider>
                                  <v-tab
                                    v-for="item in items"
                                    :key="item"
                                  >
                                    {{ item }}
                                  </v-tab>

                                  <v-tabs-items >
                                    <v-tab-item
                                      v-for="item in items"
                                      :key="item"
                                    >
                                      <v-card flat>
                                        <!--card content-->

                                        <!--                  Thông Tin-->
                                        <v-card-text v-if="item === 'Thông Tin'">
                                          <v-container fluid fill-height>
                                            <v-layout align-center justify-center >
                                              <v-flex d-flex md12>

                                                <v-flex md8 sm12>
                                                  <h4>Thông tin công việc</h4>
                                                  <v-flex md12 v-html="formData.jobDescription" class="pb-3">
                                                  </v-flex>
                                                  <h4>Yêu cầu công việc</h4>
                                                  <v-flex md12 v-html="formData.additionalRequest" class="pb-3">
                                                  </v-flex>
                                                  <h4>Quyền lợi ứng viên</h4>
                                                  <v-flex md12 v-html="formData.candidateBenefits" class="pb-3">
                                                  </v-flex>
                                                </v-flex>
                                              </v-flex>
                                            </v-layout>
                                          </v-container>
                                        </v-card-text>
                                        <!--                  End Thông Tin-->

                                        <!--end card content-->
                                      </v-card>
                                    </v-tab-item>
                                  </v-tabs-items>
                                </v-tabs>
                              </template>

                              <!--     end tab-->

                            </v-flex>
                          </v-layout>
                        </v-container>

                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green darken-1" flat="flat" @click="dialog = false">Quay Lại</v-btn>
                        <v-btn color="green darken-1" flat="flat" @click="submitjob">Đăng Tin</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>


                </div>
                <v-spacer/>
              </v-layout>

            </v-card-actions>
          </v-form>
        </v-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>



<script>
  import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document'
  import '@ckeditor/ckeditor5-build-decoupled-document/build/translations/vi'
  import Axios from 'axios'
  import {mapGetters} from 'vuex'
  import Constants from '@/stores/constant.js'
  import Swal from 'sweetalert2'


  export default {
    name: 'EditJob',
    data: function () {
      return {
        date: new Date().toISOString().substr(0, 10),
        menu2: false,
        dialog: false,
        industries: [],
        tmpSkill: [],
        company:[],
        companyStatus:'',
        checkCompany:'',
        checkCompanyExisted:'',

        salaryChoose: ['Thỏa Thuận', 'Từ', 'Đến', 'Trong Khoảng'],
        selectedSalary: 'Thỏa Thuận',
        // skillYear: [{id: 1, yearName: '1 năm'}, {id: 2, yearName: '2 năm'}, {id: 3, yearName: '3 năm'}, {
        //   id: 4,
        //   yearName: '4 năm'
        // }, {id: 5, yearName: '5 năm'}, {id: 6, yearName: '5 năm trở lên'},],
        jobLevelAPI: [],
        cityAPI: [],
        industryAPI: [],
        workingtype: ['Toàn Thời Gian', 'Bán Thời Gian', 'Thực Tập'],
        skillChoose: [],
        selectedSkill: {
          skillMasterId: '',
          skillLevel: ''
        },
        items: [
          'Thông Tin'
        ]
        ,
        skillRating: [
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

        //
        // listSkill: [],

        formDataCompany: {
          userId: '',
        },

        formData: {
          userId: '',
          companyId: '',
          cityId: '',
          joblevelId: '',
          industryId:'',
          title: '',
          address: '',
          vacancyName: '',
          salaryFrom: 0,
          salaryTo: 0,
          yearExperience: '',
          endDateForApply: '',
          jobDescription: '',
          additionalRequest: '',
          candidateBenefits: '',
          workingtype: '',
          numbeOfRecruitment: '',
          listSkill:[]
        },

        formDataSkill:{
          jobId: '',

        },
        tmp: '',
        editor: DecoupledEditor,
        editorConfig: {
          uiColor: '#9AB8F3',
          language: 'vi',
          toolbar: [
            'heading', '|',
            'fontSize', 'fontFamily', '|',
            'bold', 'italic', 'underline', 'strikeThrough', 'highlight', '|',
            'alignment', '|',
            'bulletedList', 'numberedList', 'blockQuote', 'insertTable', '|',
            'undo', 'redo'],
        },
        rules: {
          noMinus: value => value >= 0 || 'Lương Không Được Nhỏ Hơn 0',
          maxRecruit: value => value <= 100 || 'Số Lượng Tuyển Tối Đa 100 Người',
          minRecruit: value => value > 0 || 'Số Lượng Tuyển Tối Thiểu 1 Người',
          required: value => !!value || 'Không được để trống ô này.',
          counter: value => value.length <= 40 || 'Tối Đa 40 Kí Tự',
          cemail: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Địa chỉ email không phù hợp.'
          }
        },
      }
    },
    methods: {
      review(){
        var check = true;
        if(this.companyStatus === "onhold"){
          this.checkCompany = false;
          check = false;
          this.$notify({
            group: 'foo',
            type: 'warn',
            title: 'Chú Ý',
            text: 'Đợi duyệt công ty'
          })
        }else {
          if (this.$refs.form.validate()) {
            if (this.formData.salaryTo < this.formData.salaryFrom && this.formData.salaryFrom !== 0) {
              let tmp = null;
              tmp = this.formData.salaryFrom;
              this.formData.salaryFrom = this.formData.salaryTo;
              this.formData.salaryTo = tmp;
            }
            if (this.formData.jobDescription === '') {
              this.$notify({
                group: 'foo',
                type: 'warn',
                title: 'Chú ý',
                text: 'Mô tả công việc không được để trống!'
              })
              return
            }
            if (this.formData.candidateBenefits === '') {
              this.$notify({
                group: 'foo',
                type: 'warn',
                title: 'Chú ý',
                text: 'Quyền lợi ứng viên không được để trống!'
              })
              return
            }
            if (this.formData.additionalRequest === '') {
              this.$notify({
                group: 'foo',
                type: 'warn',
                title: 'Chú ý',
                text: 'Yêu cầu ứng viên không được để trống!'
              })
              return
            }

            for(let i = 0; i < this.formData.listSkill.length; i++){
              this.formData.listSkill[i].skillMasterId = this.formData.listSkill[i]['id'];
              delete this.formData.listSkill[i].id;
            }
            if(this.formData.workingtype === 'Toàn Thời Gian') this.formData.workingtype = 'FULLTIME';
            if(this.formData.workingtype === 'Bán Thời Gian') this.formData.workingtype = 'PARTTIME';
            if(this.formData.workingtype === 'Thực Tập')  this.formData.workingtype = 'INTERN';





          }else{
            this.$notify({
              group: 'foo',
              type: 'warn',
              title: 'Chú Ý',
              text: 'Vui lòng điền đầy đủ thông tin!'
            })
            check = false;
          }
        }

        if(check === true){
          this.dialog = true;
        }else {

            this.dialog = false;

        }


      },
      testPost(){
        console.log(this.formData.listSkill);
      },
      resetSalary () {
        this.formData.salaryFrom = 0
        this.formData.salaryTo = 0
      },
      onEditorReady (editor) {
        // Insert the toolbar before the editable area.
        editor.ui.view.editable.element.parentElement.insertBefore(
          editor.ui.view.toolbar.element,
          editor.ui.view.editable.element
        )
      },
      async getInitData () {

        if( this.userId2 != null && this.userId2 != "") {

          this.formDataCompany.userId = this.userId2;
          Axios
            .post(Constants.URL + '/employercompany/getCompanyByUserId', this.formDataCompany)
            .then(response => {
              if(response.data.success === true){
                console.log(response)
                this.company = response.data.data;
                this.tmp = response.data.data.employercompaniesById;
                for (var i in this.tmp){
                  if(this.tmp[i].userId === this.userId2){
                    this.companyStatus = this.tmp[i].status;
                    console.log(this.companyStatus)
                  }
                }
                if(this.companyStatus === "onhold"){
                  this.checkCompany = false;
                  this.checkCompanyExisted = true;
                }else {
                  this.checkCompany = true;
                }
              }else {
                this.checkCompanyExisted = false;
                this.checkCompany = false;
              }

            })
        }
        Axios
          .get(Constants.URL+'/industry')
          .then(response => (
            this.industries = response.data))
        const url = Constants.URL+'/job/getJobComponent'
        const method = 'GET'
        await Axios({url, method})
          .then(response => {
            if (response.data.success == true) {
              this.jobLevelAPI = response.data.data.level
              this.cityAPI = response.data.data.city
              this.skillChoose = response.data.data.skillname
              this.industryAPI = response.data.data.industry
            } else {
              this.$notify({
                group: 'foo',
                type: 'error',
                title: 'Thất Bại',
                text: 'Lấy Cấp Bậc!'
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

      addSkill (val) {
        if(val.length > 3){
          val.length = 3;
        } else {
          this.formData.listSkill = val;

        }


      },
      removeSkill(index){
        console.log(index);
        this.formData.listSkill.splice(index,1);
        this.tmpSkill.splice(index,1);
        console.log(this.listSkill);
      },

      async submitjob () {
        await this.getCompany();
        this.formData.userId = this.userId2;
        const url = Constants.URL+'/job/create';
        const method = 'POST';
        const data = this.formData;
        console.log(data)
        let config = {
          headers: {
            accessToken: localStorage.getItem('token2')
          }
        }
        await Axios({url,method, data, config})
          .then(response => {
            console.log(response)
            if(response.data.success === true){

              Swal.fire({
                title: 'Đăng thành công',
                text: "Quản trị viên sẽ kiểm tra và phản hồi trong vòng 24h",
                type: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Đồng ý'
              }).then((result) => {
                this.$router.push('/goi-y-CV/'+response.data.data);
              })

            } else {
              this.$notify({
                group: 'foo',
                type: 'error',
                title: 'Lỗi',
                text: 'Đăng tin tuyển dụng thất bại!'
              })
            }

          })
          .catch(error => {
          })
          .finally(() => {

          })

        this.dialog = false;

      },
      async getCompany(){
        this.formDataCompany.userId = this.userId2;
        const url = Constants.URL+'/employercompany/getCompanyId'
        const method = 'POST'
        const data = this.formDataCompany

          await Axios({url, method, data})
          .then(response => {
            if (response.data.success === true) {
              this.formData.companyId = response.data.data.companyId;
            } else {
              this.$notify({
                group: 'foo',
                type: 'error',
                title: 'Thất Bại',
                text: 'Lấy Company!'
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
      this.$nextTick( () => {
        // const a = sessionStorage.getItem("jobInfoReturn");
        // const b = sessionStorage.getItem("jobSkillReturn");
        // if(a !== null && b !== null){
        //   this.formData = JSON.parse(sessionStorage.getItem("jobInfoReturn"));
        //   this.formDataSkill = JSON.parse(sessionStorage.getItem("jobSkillReturn"));
        // }
        this.getInitData()
      })
    },
    watch:{
      userId2(){
        this.formData.userId = this.userId2;
        this.formDataCompany.userId = this.userId2;
        this.getInitData()
      }
    },
    computed: {
      ...mapGetters('AUTHENTICATION_STORE',{
        email : 'email2',
        roleId: 'roleId2',
        fullName: 'fullName2',
        userId2: 'userId2'
      }),
    }
  }

</script>

<style scoped>

</style>
