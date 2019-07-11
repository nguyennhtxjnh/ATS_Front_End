<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>

      <v-flex align-center justify-center md8>

        <!--chon cong ty da co san-->
        <v-flex xs12 id="top">
          <v-card style="border-style: solid; border-color: #ccc; border-width: 1px;" class="elevation-0 border_all">
            <v-toolbar dark color="orange">
              <v-toolbar-title>Chọn công ty đã có sẵn</v-toolbar-title>
              <v-spacer></v-spacer>

            </v-toolbar>
            <v-form @submit.prevent="chooseCompany" ref="form">
              <v-card-text>
                <v-container fluid fill-height>
                  <v-layout fill-height wrap>
                      <!--Tên Công Ty -->
                      <v-flex md12 xs12>
                        <v-autocomplete
                          class="ma-2"
                          :rules="[rules.required]"
                          v-model="formDataCompany.companyId"
                          prepend-icon="mdi-domain"
                          :items="CompanyAPI"
                          item-text="nameCompany"
                          item-value="id"
                          label="Công Ty"
                        ></v-autocomplete>
                      </v-flex>
                  </v-layout>
                </v-container>

              </v-card-text>
              <v-card-actions class="justify-center mb-4">
                <div class="text-xs-center">
                  <v-spacer></v-spacer>
                  <v-btn color="orange" style="color: white !important;" type="submit">Xác Nhận</v-btn>
                </div>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-flex>
        <v-flex xs12 style="border-top-style: dotted; border-color: #b4b4b4;" class="mt-5 mb-5 pt-1" align-center justify-center>
          <p style="position: relative; bottom: 20px; text-align: center" ><span style="background-color: white; color: #b4b4b4; font-size: 20px" class="pl-2 pr-2"><B>Chọn Hay Tạo Mới</B></span></p>
        </v-flex>
        <!--tao cong ty-->
        <v-flex xs12 >
          <v-card style="border-style: solid; border-color: #ccc; border-width: 1px;" class="elevation-0 border_all">
            <v-toolbar dark color="orange">
              <v-toolbar-title>Tạo Mới Công Ty</v-toolbar-title>
              <v-spacer></v-spacer>

            </v-toolbar>
            <v-form @submit.prevent="submitCompany" ref="form">
              <v-card-text>
                <v-container fluid fill-height>
                  <v-layout fill-height wrap>

                    <v-flex md8 xs12>
                      <!--Tên Công Ty -->
                      <v-flex md12 xs12>
                        <v-text-field class="ma-2" prepend-icon="mdi-account-badge" name="title" label="Tên Công Ty" type="text"
                                      v-model="formData.nameCompany"
                                      :rules="[rules.required]"></v-text-field>
                      </v-flex>
                      <!--City -->
                      <v-flex md12 xs12>
                        <v-autocomplete class="ma-2"
                                        :rules="[rules.required]"
                                        v-model="formData.cityId"
                                        prepend-icon="mdi-map-marker-radius"
                                        :items="CityAPI"
                                        item-text="fullName"
                                        item-value="id"
                                        label="Chọn Tĩnh/Thành Phố"
                                        persistent-hint

                        ></v-autocomplete>
                      </v-flex>
                    </v-flex>

                    <v-flex xs12 md4 class="text-xs-center pr-2">
                      <img src="https://www.seekpng.com/png/detail/25-257121_icon-big-image-png-camera-icon.png" class="hovePointer" @click='$refs.image.click()' height="150" v-if="!imageUrl"/>
                      <img :src="imageUrl" height="150" class="hovePointer" v-if="imageUrl" @click='$refs.image.click()'/>
                      <!--                    <v-text-field label="Chọn Logo Công Ty" @click='$refs.image.click()' v-model='imageName' prepend-icon='attach_file'></v-text-field>-->
                      <h3>Chọn Logo Công Ty</h3>
                      <input
                        type="file"
                        style="display: none"
                        ref="image"
                        accept="mage/jpeg, image/png"
                        @change="onFilePicked"
                      >
                    </v-flex>

                    <!--Address -->
                    <v-flex md12 xs12>
                      <v-text-field class="ma-2" prepend-icon="mdi-map-marker-radius" name="location" label="Địa Chỉ Công Ty"
                                    type="text"
                                    v-model="formData.address"
                                    :rules="[rules.required]"></v-text-field>
                    </v-flex>

                    <!--Email -->
                    <v-flex  xs12>
                      <v-text-field class="ma-2" prepend-icon="mail" name="Email" label="Email Công Ty" v-model="formData.email"
                                    type="text"
                                    :rules="[rules.required, rules.cemail]"></v-text-field>
                    </v-flex>

                    <!--Phone -->
                    <v-flex xs12>
                      <v-text-field class="ma-2" prepend-icon="phone" name="phone" label="Số Điện Thoại Công Ty" type="number"
                                    v-model="formData.telephoneNumber"
                                    :rules="[rules.required]"></v-text-field>
                    </v-flex>

                    <!-- Thông Tin Công Ty-->
                    <v-flex xs12 class="ma-2 pt-3">
                      <h3>Thông Tin Công Ty</h3>
                      <ckeditor :editor="editor"
                                @ready="onEditorReady"
                                v-model="formData.description"
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
                  <v-btn color="orange" style="color: white !important;" type="submit">Xác Nhận</v-btn>
                </div>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-flex>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
  import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document'
  import '@ckeditor/ckeditor5-build-decoupled-document/build/translations/vi'
  import {mapGetters} from 'vuex';
  import Axios from 'axios'

  export default {
    name: 'CreateCompany',
    data: function () {
      return {
        imageName: '',
        imageUrl: '',
        imageFile: '',
        sizeImg: '',

        CityAPI: [],
        CompanyAPI: [],

        formDataCompany:{
          companyId: '',
          userId: '',
        },

        formData: {
              userId: '',
              cityId: '',

              nameCompany: '',
              address: '',
              telephoneNumber: '',
              email: '',
              logoImg: '',
              description: "",
              status: "new",
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
          required: value => !!value || 'Không được để trống ô này.',
          min: v => v.length >= 8 || 'Ít Nhất 8 Kí Tự',
          cemail: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Địa chỉ email không phù hợp.'
          }
        },

      }
    },
    methods: {

      mapCompany(){
        this.formDataCompany.userId = this.userId2;
        const url = 'http://localhost:8080/employercompany/addNewEmployerCompany'
        const method = 'POST'
        const data = this.formDataCompany

        Axios({url, method, data})
          .then(response => {
            this.$notify({
              group: 'foo',
              type: 'success',
              title: 'Thành công',
              text: 'Tạo công ty thành công!'
            })
            this.$router.push('/trang-chu-tuyen-dung')
          })
          .catch(error => {
            console.log(error)
          })
      },

      chooseCompany(){
        this.formDataCompany.userId = this.userId2;
        const url = 'http://localhost:8080/employercompany/addNewEmployerCompanyExistedCompany'
        const method = 'POST'
        const data = this.formDataCompany

        Axios({url, method, data})
          .then(response => {
            this.$notify({
              group: 'foo',
              type: 'success',
              title: 'Thành công',
              text: 'Thêm công ty thành công!'
            })
            this.$router.push('/trang-chu-tuyen-dung')
          })
          .catch(error => {
            console.log(error)
          })
      },

      async submitCompany() {
        if (this.$refs.form.validate()) {
          if (this.formData.description === '') {
            this.$notify({
              group: 'foo',
              type: 'warn',
              title: 'Chú ý',
              text: 'Mô tả công ty không được để trống!'
            })
            return
          }

          this.toDataURL(this.imageUrl, function(dataUrl) {})

          this.formData.logoImg = this.imageUrl;
          const url = 'http://localhost:8080/company';
          const method = 'POST';
          const data = this.formData;
          let config = {
            headers: {
              accessToken: localStorage.getItem('token2')
            }
          }

          await Axios({url, method, data, config})
            .then(response => {
              console.log(response)
              this.formDataCompany.companyId = response.data.data
              this.mapCompany()
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
        }
      },

       toDataURL(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.onload = function() {
          const reader = new FileReader();
          reader.onloadend = function() {
            callback(reader.result);
            const tmp = reader.result;
            this.imageUrl = tmp;
            console.log(this.imageUrl)

          }
          reader.readAsDataURL(xhr.response);


        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
      },

      onFilePicked (e) {
        const files = e.target.files
        if(files[0] !== undefined) {
          this.imageName = files[0].name
          if(this.imageName.lastIndexOf('.') <= 0) {
            return
          }
          if (files[0].size > 2 * 1024 * 1024) {
            e.preventDefault();
            this.$notify({
              group: 'foo',
              type: 'warn',
              title: 'Chú ý',
              text: 'Kích thước hình ảnh tối đa 2mb!'
            })
            return;
          }
          console.log(files[0])
          const fr = new FileReader ()
          fr.readAsDataURL(files[0])
          fr.addEventListener('load', () => {
            this.imageUrl = fr.result
            this.imageFile = files[0] // this is an image file that can be sent to server...
          })
        } else {
          this.imageName = ''
          this.imageFile = ''
          this.imageUrl = ''
        }
      },
      onEditorReady (editor) {
        // Insert the toolbar before the editable area.
        editor.ui.view.editable.element.parentElement.insertBefore(
          editor.ui.view.toolbar.element,
          editor.ui.view.editable.element
        )
      },
      getInitData(){
        const url = 'http://localhost:8080/user/getRegisterEmployerComponent';
        const method = 'GET';
        Axios({url, method})
          .then(response => {
            console.log(response);
            if (response.data.success == true) {
              this.CityAPI = response.data.data.city;
              this.CompanyAPI = response.data.data.company;
            } else {
              this.$notify({
                group: 'foo',
                type: 'error',
                title: 'Thất Bại',
                text: 'Lấy Component Thất Bại!'
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
      scrollToTop() {
        window.scrollTo(0,0);
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.formData.userId = this.userId2;
        this.formDataCompany.userId = this.userId2;
        this.getInitData();
        this.scrollToTop();
      })
    },
    computed: {
      ...mapGetters('AUTHENTICATION_STORE',{
        email : 'email2',
        roleId: 'roleId2',
        fullName: 'fullName2',
        userId2: 'userId2'
      }),
    },

  }
</script>

<style scoped>
  .hovePointer:hover{
    cursor: pointer;
  }
</style>
