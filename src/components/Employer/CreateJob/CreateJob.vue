<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-container fluid fill-height>
    <v-layout align-center justify-center>

      <v-flex xs12 sm12 md10>
        <v-card style="border-style: solid; border-color: #ccc; border-width: 1px;" class="elevation-0 border_all">
          <v-toolbar dark color="orange">
            <v-toolbar-title>Đăng Tin Tuyển Dụng</v-toolbar-title>
            <v-spacer></v-spacer>

          </v-toolbar>
          <v-form @submit.prevent="submitjob" ref="form">
            <v-card-text>
              <v-container fluid fill-height>
                <v-layout fill-height wrap>

                  <v-flex md12 xs12>
                    <v-text-field class="ma-2" prepend-icon="mdi-account-badge" name="title" label="Chức Danh Tuyển Dụng" type="text"
                                  v-model="formData.vacancyName"
                                  :rules="[rules.required]"></v-text-field>
                  </v-flex>

                  <v-flex md12 xs12>
                    <v-text-field class="ma-2" prepend-icon="mdi-map-marker-radius" name="Name" label="Địa Chỉ Làm Việc"
                                  type="text"
                                  v-model="formData.address"
                                  :rules="[rules.required]"></v-text-field>
                  </v-flex>

                  <v-flex  xs12>
                    <v-autocomplete
                      class="ma-2"
                      v-model="formData.joblevelid"
                      prepend-icon="mdi-account"
                      :items="jobLevelAPI"
                      item-text="jobLevelName"
                      item-value="id"
                      label="Cấp Bậc"
                      :rules="[rules.required]"
                    ></v-autocomplete>
                  </v-flex>

<!--                  <v-flex md6 xs12>-->
<!--                    <v-text-field class="ma-2" prepend-icon="mdi-account-badge" name="Name" label="Chức Danh Cụ Thể"-->
<!--                                  type="text"-->
<!--                                  v-model="formData.vacancyName"-->
<!--                                  :rules="[rules.required]"></v-text-field>-->
<!--                  </v-flex>-->

                  <!--Loại Hình-->
                  <v-flex  md6 xs12>
                    <v-autocomplete
                      class="ma-2"
                      prepend-icon="mdi-format-list-bulleted-type"
                      :items="workingType"
                      v-model="formData.workingType"
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

                  <!-- Nơi Làm Việc-->
                  <!--                  <v-flex class="pa-1" md6 xs12>-->
                  <!--                    <v-autocomplete-->
                  <!--                      prepend-icon="mdi-map-marker"-->
                  <!--                      :items="salaryChoose"-->
                  <!--                      item-text="name"-->
                  <!--                      item-value="id"-->
                  <!--                      label="Nơi Làm Việc"-->
                  <!--                    ></v-autocomplete>-->
                  <!--                  </v-flex>-->


                  <!--  Hết Nơi Làm Việc-->

                  <!--  Kinh Nghiệm-->
                  <v-flex md12 xs12>
                    <v-autocomplete
                      class="ma-2"
                      prepend-icon="mdi-calendar-clock"
                      :items="skillYear"
                      v-model="formData.yearExperience"
                      item-text="yearName"
                      item-value="id"
                      label="Kinh Nghiệm"
                      :rules="[rules.required]"
                    ></v-autocomplete>

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
                  <!--Hết Lương-->
                  <!--Hết Hạn-->
                  <!--                  <v-flex md12 xs12 class="pa-2">-->
                  <!--                    <v-menu-->
                  <!--                      v-model="menu2"-->
                  <!--                      :close-on-content-click="false"-->
                  <!--                      :nudge-right="40"-->
                  <!--                      lazy-->
                  <!--                      transition="scale-transition"-->
                  <!--                      offset-y-->
                  <!--                      full-width-->
                  <!--                      max-width="290px"-->
                  <!--                      min-width="290px"-->
                  <!--                    >-->
                  <!--                      <template v-slot:activator="{ on }">-->
                  <!--                        <v-text-field-->
                  <!--                          v-model="date"-->
                  <!--                          label="Ngày Hết Hạn Tuyển Dụng"-->
                  <!--                          hint="YYYY/MM/DD format"-->
                  <!--                          persistent-hint-->
                  <!--                          prepend-icon="event"-->
                  <!--                          readonly-->

                  <!--                          v-on="on"-->
                  <!--                        ></v-text-field>-->
                  <!--                      </template>-->
                  <!--                      <v-date-picker v-model="formData.endDateForApply" no-title @input="menu2 = false"-->
                  <!--                                     :min="new Date().toISOString().substr(0, 10)"-->

                  <!--                      ></v-date-picker>-->
                  <!--                    </v-menu>-->
                  <!--                  </v-flex>-->
                  <!--Hết Hết Hạn-->

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
                  <v-flex class="pa-1" md6 xs12>
                    <v-autocomplete
                      prepend-icon="mdi-account-star"
                      :items="skillChoose"
                      v-model="selectedSkill"
                      item-text="skillName"
                      item-value="id"
                      return-object
                      label="Kĩ Năng"
                      :rules="[rules.required]"
                    ></v-autocomplete>
                  </v-flex>
                  <v-flex class="pa-1" md6 xs12>
                    <v-btn color="orange" style="color: white !important;" @click="addSkill">Thêm Kĩ Năng</v-btn>
                  </v-flex>
                  <template v-for="(skill,index) in formDataSkill.listSkill">
                    <v-flex class="pa-1" md5 xs12>
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
                    <v-flex class="pa-1" md5 xs12>
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
                    <v-flex class="pa-1" md2 xs12>
                      <v-btn color="error" @click="removeSkill(index)"><v-icon>mdi-trash-can-outline</v-icon></v-btn>
                    </v-flex>
                  </template>
<!--                  <v-flex class="pa-1" md2 xs12>-->
<!--                    <v-btn color="error" @click="testPost()">test</v-btn>-->
<!--                  </v-flex>-->
                </v-layout>
              </v-container>

            </v-card-text>
            <v-card-actions class="justify-center mb-4">
              <div class="text-xs-center">
                <v-spacer></v-spacer>
                <v-btn color="orange" style="color: white !important;" type="submit">Đăng Tin</v-btn>
              </div>
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

  export default {
    name: 'CreateJob',
    data: function () {
      return {
        date: new Date().toISOString().substr(0, 10),
        menu2: false,

        tmpSkill: [],

        salaryChoose: ['Thỏa Thuận', 'Từ', 'Đến', 'Trong Khoảng'],
        selectedSalary: 'Thỏa Thuận',
        skillYear: [{id: 1, yearName: '1 năm'}, {id: 2, yearName: '2 năm'}, {id: 3, yearName: '3 năm'}, {
          id: 4,
          yearName: '4 năm'
        }, {id: 5, yearName: '5 năm'},],
        jobLevelAPI: [],
        workingType: ['Toàn Thời Gian', 'Bán Thời Gian', 'Thực Tập'],
        skillChoose: [
          // {
          //   id: 1,
          //   skillMaster: 'Java',
          // }, {
          //   id: 2,
          //   skillMaster: 'C#',
          // }, {
          //   id: 3,
          //   skillMaster: 'Vue',
          //
          // }
        ],
        selectedSkill: null,
        skillRating: [1, 2, 3, 4, 5],


        listSkill: [],

        formDataCompany: {
          userId: '',
        },

        formData: {
          userid: '',
          companyid: '2',
          cityid: '1',


          title: '',
          address: '',
          joblevelid: '',
          vacancyName: '',
          salaryFrom: 0,
          salaryTo: 0,
          yearExperience: '',
          endDateForApply: '',
          jobDescription: '',
          additionalRequest: '',
          candidateBenefits: '',
          workingType: '',
          numbeOfRecruitment: '',
        },

        formDataSkill:{
          jobId: '',
          listSkill:[]
        },

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
          maxRecruit: value => value <= 20 || 'Số Lượng Tuyển Tối Đa 20 Người',
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
      testPost(){
        this.formDataCompany.userId = this.userId2;
        console.log(this.formDataCompany);
      },
      addSkill () {
        if(this.selectedSkill === null){
          this.$notify({
            group: 'foo',
            type: 'warn',
            title: 'Chú ý',
            text: 'Kĩ năng không được để trống!'
          })
          return;
        }
        if(this.formDataSkill.listSkill.length === 0){
          this.formDataSkill.listSkill.push(Object.assign({}, this.selectedSkill))
        }
        if(this.formDataSkill.listSkill.length !== 0) {
          this.formDataSkill.listSkill.forEach((itemX) =>{
            this.tmpSkill.push(itemX.id)
            this.tmpSkill = [...new Set(this.tmpSkill)];
          })
        }
        if(!this.tmpSkill.includes(this.selectedSkill.id)){
          this.formDataSkill.listSkill.push(Object.assign({}, this.selectedSkill))
        }
      },
      removeSkill(index){
        console.log(index);
        this.listSkill.splice(index,1);
        this.tmpSkill.splice(index,1);
        console.log(this.listSkill);
      },
      submitjob () {
        if (this.$refs.form.validate()) {
          if (this.formData.salaryFrom > this.formData.salaryTo && this.formData.salaryTo !== 0) {
            this.$notify({
              group: 'foo',
              type: 'warn',
              title: 'Chú ý',
              text: 'Khoảng Lương Không Hợp Lệ!'
            })
            return
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

          this.formDataCompany.userId = this.userId2;
          this.formData.userid = this.userId2;
          this.getCompany();

        }
      },
      async submitSkill (jobid){
        for(let i = 0; i < this.formDataSkill.listSkill.length; i++){
          this.formDataSkill.listSkill[i].skillMasterId = this.formDataSkill.listSkill[i]['id'];
          delete this.formDataSkill.listSkill[i].id;
          delete this.formDataSkill.listSkill[i].skillName;
        }
        this.formDataSkill.jobId = jobid;

        const url = 'http://localhost:8080/skillneedforjob/addNewSkill'
        const data = this.formDataSkill
        const method = 'POST'

        console.log(this.formDataSkill)

        await Axios({url, method, data})
          .then(response => {
            if (response.data.success == true) {
              this.$notify({
                group: 'foo',
                type: 'success',
                title: 'Thành Công',
                text: 'Đăng Tin Thành Công!'
              })
              this.$router.push('/trang-chu-tuyen-dung');
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
      getInitData () {
        const url = 'http://localhost:8080/job/getJobComponent'
        const method = 'GET'
        Axios({url, method})
          .then(response => {
            if (response.data.success == true) {
              this.jobLevelAPI = response.data.data.level
              this.skillChoose = response.data.data.skillname
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
      getCompany(){
        const url = 'http://localhost:8080/employercompany/getCompanyId'
        const method = 'POST'
        const data = this.formDataCompany
          Axios({url, method, data})
          .then(async response => {
            if (response.data.success == true) {
              this.formData.companyid = response.data.data;

              const url = 'http://localhost:8080/job/create';
              const method = 'POST';
              const data = this.formData;
              let config = {
                headers: {
                  accessToken: localStorage.getItem('token2')
                }
              }

              await Axios({url, method, data, config})
                .then(response => {
                  if (response.data.success == true) {
                    this.submitSkill(response.data.data)
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
        this.getInitData()
      })
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
