<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-container fluid fill-height>
    <v-layout align-center justify-center>

      <v-flex xs12 sm12 md10>
        <v-card style="border-style: solid; border-color: #ccc; border-width: 1px;" class="elevation-0 border_all">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Đăng Tin Tuyển Dụng</v-toolbar-title>
            <v-spacer></v-spacer>

          </v-toolbar>
          <v-form @submit.prevent="submitjob" ref="form">
            <v-card-text>
              <v-container fluid fill-height>
                <v-layout fill-height wrap>

                  <v-flex md12 xs12>
                    <v-text-field class="ma-2" prepend-icon="mdi-lead-pencil" name="title" label="Tiêu Đề" type="text"
                                  v-model="formData.title"
                                  :rules="[rules.required]"></v-text-field>
                  </v-flex>

                  <v-flex md12 xs12>
                    <v-text-field class="ma-2" prepend-icon="mdi-map-marker-radius" name="Name" label="Địa Chỉ Làm Việc"
                                  type="text"
                                  v-model="formData.address"
                                  :rules="[rules.required]"></v-text-field>
                  </v-flex>

                  <v-flex class="pa-1" md6 xs12>
                    <v-autocomplete
                      v-model="formData.joblevelid"
                      prepend-icon="mdi-account"
                      :items="jobLevelAPI"
                      item-text="jobLevelName"
                      item-value="id"
                      label="Cấp Bậc"
                    ></v-autocomplete>
                  </v-flex>

                  <v-flex md6 xs12>
                    <v-text-field class="ma-2" prepend-icon="mdi-account-badge" name="Name" label="Chức Danh Cụ Thể"
                                  type="text"
                                  v-model="formData.vacancyName"
                                  :rules="[rules.required]"></v-text-field>
                  </v-flex>

                  <!--Loại Hình-->
                  <v-flex class="pa-1" md6 xs12>
                    <v-autocomplete
                      prepend-icon="mdi-format-list-bulleted-type"
                      :items="salaryChoose"
                      item-text="name"
                      item-value="id"
                      label="Loại Hình Làm Việc"
                      @input="resetSalary"
                    ></v-autocomplete>
                  </v-flex>
                  <!-- Hết Loại Hình-->
<!--                  Số lượng-->
                  <v-flex md6 xs12>
                    <v-text-field class="ma-2" prepend-icon="mdi-account-plus" name="Name" label="Số Lượng Cần Tuyển"
                                  type="number"
                                  v-model="formData.vacancyName"
                                  :rules="[rules.required]"></v-text-field>
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

                  <v-flex class="pa-1" md6 xs12>
                    <v-autocomplete
                      prepend-icon="mdi-account-star"
                      :items="salaryChoose"
                      item-text="name"
                      item-value="id"
                      label="Kĩ Năng"
                    ></v-autocomplete>
                  </v-flex>
                  <!--  Hết Nơi Làm Việc-->

                  <!--  Kinh Nghiệm-->
                  <v-flex md6 xs12>
                    <v-autocomplete
                      prepend-icon="mdi-calendar-clock"
                      :items="skillYear"
                      v-model="formData.yearExperience"
                      item-text="yearName"
                      item-value="id"
                      label="Kinh Nghiệm"
                    ></v-autocomplete>
<!--                    <v-text-field class="ma-2" prepend-icon="mdi-calendar-clock" name="experience" label="Kinh Nghiệm"-->
<!--                                  type="text"-->
<!--                                  v-model="formData.yearExperience"-->
<!--                                  :rules="[rules.required]"></v-text-field>-->
                  </v-flex>
                  <!--  Hết Kinh Nghiệm-->
                  <!--Lương-->
                  <v-flex class="pa-1" md6 xs12>
                    <v-select
                      prepend-icon="mdi-currency-usd"
                      :items="salaryChoose"
                      v-model="selectedSalary"
                      item-text="name"
                      item-value="id"
                      label="Lương"
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
                    <h3>Mô tả công việc</h3>
                    <v-label>Mô tả công việc phải làm dựa theo vị trí ứng tuyển</v-label>
                    <ckeditor :editor="editor"
                              @ready="onEditorReady"
                              v-model="formData.jobDescription"
                              :config="editorConfig"
                              style="border-style: solid; border-color: #ccc; border-width: 1px; height: 250px"
                    ></ckeditor>
                  </v-flex>

                  <v-flex md12 xs12 class="pa-2 mt-5">
                    <h3>Yêu cầu ứng viên</h3>
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
                    <h3>Quyền lợi ứng viên</h3>
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

                </v-layout>
              </v-container>

            </v-card-text>


            <v-card-actions class="justify-center mb-4">
              <div class="text-xs-center">
                <v-spacer></v-spacer>
                <v-btn color="primary" type="submit">Đăng Tin</v-btn>
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

  export default {
    name: 'CreateJob',
    data: function () {
      return {
        date: new Date().toISOString().substr(0, 10),
        menu2: false,

        salaryChoose: ['Thỏa Thuận', 'Từ', 'Đến', 'Trong Khoảng'],
        selectedSalary: 'Thỏa Thuận',
        skillYear: [{id : 1, yearName : "1 năm"}, {id : 2, yearName : "2 năm"}, {id : 3, yearName : "3 năm"}, {id : 4, yearName : "4 năm"}, {id : 5, yearName : "5 năm"},],
        jobLevelAPI: [],

        formData:{

          userid: '5',
          companyid: '1',
          cityid: '1',

          title: '',
          address: '',
          joblevelid: '1',
          vacancyName: '',
          salaryFrom: '',
          salaryTo: '',
          yearExperience: '',
          endDateForApply: '',
          jobDescription: '',
          additionalRequest: '',
          candidateBenefits: ''
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
      submitjob () {
        console.log(this.formData.salaryFrom)
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


          const url = 'http://localhost:8080/job/create'
          const method = 'POST'
          const data = this.formData
          Axios({url, method, data})
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

        }
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
      getInitData(){
        const url = 'http://localhost:8080/joblevel/';
        const method = 'GET';
        Axios({url, method})
          .then(response => {
            console.log(response);
            if (response.data.success == true) {
              this.jobLevelAPI = response.data.dto;
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
    },
    mounted () {
      this.$nextTick(() => {
        this.getInitData();
      });
    },
    computed: {}
  }

</script>

<style scoped>

</style>
