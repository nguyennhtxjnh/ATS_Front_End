<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>

      <v-flex xs12 sm12 md10>
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
                                      v-model="formData.cityid"
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

        CityAPI: [],

        formData: {
              userId: '',
              cityId: '',

              nameCompany: '',
              address: '',
              telephoneNumber: '',
              email: '',
              logoImg: '',
              description: "",
              status: "new"


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
      submitCompany() {
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

          const url = 'http://localhost:8080/company';
          const method = 'POST';
          const data = this.formData;
          let config = {
            headers: {
              accessToken: localStorage.getItem('token2')
            }
          }

          Axios({url, method, data, config})
            .then(response => {
              console.log(response)
              this.$notify({
                group: 'foo',
                type: 'success',
                title: 'abc',
                text: 'abc!'
              })
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
    },
    mounted () {
      this.$nextTick(() => {
        this.formData.userId = this.userId2;
        this.getInitData();
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
