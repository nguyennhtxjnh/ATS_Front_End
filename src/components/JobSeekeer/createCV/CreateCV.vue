<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container >
<!--      thông tin người dùng-->
      <v-card style="background-color: white">
<!--        profile-->
        <v-container>
          <v-layout row wrap>
            <v-flex md12 xs12>
              <h2> Thông tin</h2>
            </v-flex><!-- end thông tin-->
            <v-flex md4 xs4>
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
            <v-flex md4 xs4>
              <v-flex md12 xs12 sm6>
<!--                họ-->
                <v-layout row >
                  <v-icon color="orange darken-2" >mdi-account-circle-outline</v-icon>
                  <v-text-field
                    label="Họ "
                  ></v-text-field>
                </v-layout>
<!--                chức danh-->
                <v-layout row >
                  <v-icon color="orange darken-2" >mdi-account-card-details-outline</v-icon>
                  <v-text-field
                    label="Chức danh "
                  ></v-text-field>
                </v-layout>
              </v-flex>
            </v-flex>
            <v-flex md4 xs4>
<!--              họ-->
              <v-layout row >
                <v-icon color="orange darken-2" >mdi-account-circle-outline</v-icon>
                <v-text-field
                  label="Tên "
                ></v-text-field>
              </v-layout>
              <v-layout row>
                <v-select
                  :items="ranks"
                  label="Cấp bặc hiện tại"
                ></v-select>
              </v-layout>
<!--              số năm kinh nghiệm-->
              <v-layout row >
                <v-icon color="orange darken-2" >mdi-briefcase-account-outline</v-icon>
                <v-text-field
                  label="Số năm kinh nghiệm "
                ></v-text-field>
              </v-layout>
            </v-flex>
            <v-flex md12 xs12>
              <v-layout row wrap>
                <v-flex md6 xs12>
<!--                  email-->
                  <v-layout row>
                    <v-icon color="orange darken-2" >mdi-email-search-outline</v-icon>
                    <v-text-field
                      label="Email "
                    ></v-text-field>
                  </v-layout>
<!--                  ngày sinh-->
                  <v-layout row>
                    <v-icon color="orange darken-2" >mdi-calendar-month-outline</v-icon>
                    <v-text-field
                      type="date"
                      label="Ngày sinh "
                    ></v-text-field>
                  </v-layout>

                </v-flex>

                <v-flex md6 xs12>
                  <!--                số điện thoại-->
                  <v-layout row>
                  <v-icon color="orange darken-2" >mdi-phone</v-icon>
                  <v-text-field
                    label="Số điện thoại "
                  ></v-text-field>
                  </v-layout>
<!--               quốc gia   -->
                  <v-layout row>
                    <v-icon color="orange darken-2" >mdi-account-circle-outline</v-icon>
                    <v-autocomplete
                      v-model="selectedCoutry"
                      :items="countries"
                      item-text="name"
                      item-value="name"
                      label="Quốc tịch"
                      persistent-hint
                      return-object
                      single-line
                    ></v-autocomplete>

                  </v-layout>
                </v-flex>

              </v-layout>
            </v-flex>
            <v-flex md12 xs12>

              <v-layout row>
                <v-flex md12 xs12>
                  <v-icon color="orange darken-2" style="float: left">mdi-account-circle-outline</v-icon>
                  <h4 style="float: left">Giới tính</h4>
                  <v-container fluid align="left">
                    <v-radio-group v-model="sex" :mandatory="false" >
                      <v-radio label="Nữ" value="nữ"></v-radio>
                      <v-radio label="Nam" value="nam"></v-radio>
                      <v-radio label="Khác" value="khác"></v-radio>
                    </v-radio-group>
                  </v-container>
                </v-flex>




              </v-layout>
            </v-flex>
            <v-flex md12 xs12>
              <v-layout row>
              <v-flex md6 xs12>
                <v-layout row>
                  <v-icon color="orange darken-2" >mdi-account-circle-outline</v-icon>
                  <v-autocomplete
                    v-model="selectedCoutry"
                    :items="countries"
                    item-text="name"
                    item-value="name"
                    label="Tỉnh/ Thành phố"
                    persistent-hint
                    return-object
                    single-line
                  ></v-autocomplete>

                </v-layout>
              </v-flex>
              <v-flex md6 xs12>

              </v-flex>
              </v-layout>
            </v-flex>
          </v-layout><!--end row bự-->
        </v-container>
      </v-card>
      <!--        end profile-->
<!--      thông tin chung-->
      <v-card style="background-color: white" class="mt-5">
        <v-container>
        <v-layout row wrap>
          <v-flex md12 xs12>
            <h2>Thông tin chung</h2>
          </v-flex>
          <v-flex md12 xs12>
            <v-textarea
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
      <v-card style="background-color: white" class="mt-5">
        <v-container>
          <v-layout row wrap>
            <v-flex md12 xs12>
              <h2 style="float: left">Học vấn</h2>
            </v-flex>
            <v-flex md12 xs12>
              <v-dialog v-model="dialog" persistent max-width="800px">
                <template
                  v-slot:activator="{ on }">
                  <v-btn color="primary" dark v-on="on">Thêm mục</v-btn>
                </template>
                <v-card>
                  <v-card-text>
                    <v-container>
                      <span class="headline" >Học Vấn</span>
                      <v-layout row wrap>
                        <v-flex md12 xs12>
                          <v-text-field
                            label="Trường *"
                            placeholder="Trường học"
                          ></v-text-field>

                        </v-flex>
                        <v-flex md12 xs12>
                          <v-text-field
                            label="Chuyên ngành *"
                            placeholder="Công nghệ phần mềm"
                          ></v-text-field>

                        </v-flex>
                        <v-flex md12 xs12>
                          <h4>Thời gian*</h4>
                          <v-checkbox label="Tôi đang học ở đây"></v-checkbox>
                          <v-layout row>
                            <v-flex md6 xs12>
                              <v-text-field
                                label="Bắt đầu"
                                type="date"
                              ></v-text-field>
                            </v-flex>
                            <v-flex md6 xs12>
                              <v-text-field
                                label="Kết thúc"
                                type="date"
                              ></v-text-field>
                            </v-flex>
                          </v-layout>
                        </v-flex>
                        <v-flex md12 xs12>
                          <v-textarea
                            label="Mô tả chi tiết"
                            placeholder="Mô tả chi tiết quá trình học của bạn để nhà tuyển dụng có thể hiểu bạn hơn"
                          ></v-textarea>

                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>

                  <v-card-actions >
                    <v-spacer/>
                    <v-btn color="blue darken-1" flat @click="dialog = false">thoát</v-btn>
                    <v-btn color="blue darken-1" flat @click="dialog = false">Cập nhật</v-btn>
                    <v-spacer/>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
<!--Kinh nghiệm-->
      <v-card style="background-color: white" class="mt-5">
        <v-container>
          <v-layout row wrap>
            <v-flex md12 xs12>
              <h2 style="float: left">Kinh nghiệm</h2>
            </v-flex>
            <v-flex md12 xs12>
              <v-dialog v-model="dialog" persistent max-width="800px">
                <template
                  v-slot:activator="{ on }">
                  <v-btn color="primary" dark v-on="on">Thêm mục</v-btn>
                </template>
                <v-card>
                  <v-card-text>
                    <v-container>
                      <span class="headline" >Kinh nghiệm</span>
                      <v-layout row wrap>
                        <v-flex md12 xs12>
                          <v-text-field
                            label="Công ty *"
                            placeholder="Tên công ty"
                          ></v-text-field>

                        </v-flex>
                        <v-flex md12 xs12>
                          <v-text-field
                            label="Chức vụ *"
                            placeholder="Nhân viên, quản lý,.."
                          ></v-text-field>

                        </v-flex>
                        <v-flex md12 xs12>
                          <h4>Thời gian*</h4>
                          <v-checkbox label="Tôi đang làm việc ở đây"></v-checkbox>
                          <v-layout row>
                            <v-flex md6 xs12>
                              <v-text-field
                                label="Bắt đầu"
                                type="date"
                              ></v-text-field>
                            </v-flex>
                            <v-flex md6 xs12>
                              <v-text-field
                                label="Kết thúc"
                                type="date"
                              ></v-text-field>
                            </v-flex>
                          </v-layout>
                        </v-flex>
                        <v-flex md12 xs12>
                          <v-textarea
                            label="Mô tả chi tiết"
                            placeholder="Mô tả chi tiết công việc, những gì đạt dduocj trong quá trình làm việc"
                          ></v-textarea>

                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>

                  <v-card-actions >
                    <v-spacer/>
                    <v-btn color="blue darken-1" flat @click="dialog = false">thoát</v-btn>
                    <v-btn color="blue darken-1" flat @click="dialog = false">Cập nhật</v-btn>
                    <v-spacer/>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
<!-- Chứng chr-->
      <v-card style="background-color: white" class="mt-5">
        <v-container>
          <v-layout row wrap>
            <v-flex md12 xs12>
              <h2 style="float: left">Chứng chỉ</h2>
            </v-flex>
            <v-flex md12 xs12>
              <v-dialog v-model="dialog" persistent max-width="800px">
                <template
                  v-slot:activator="{ on }">
                  <v-btn color="primary" dark v-on="on">Thêm mục</v-btn>
                </template>
                <v-card>
                  <v-card-text>
                    <v-container>
                      <span class="headline" >Chứng chỉ</span>
                      <v-layout row wrap>
                        <v-flex md12 xs12>
                          <v-text-field
                            label="Chứng chỉ *"
                            placeholder="Tên chứng chỉ"
                          ></v-text-field>

                        </v-flex>

                      </v-layout>
                    </v-container>
                  </v-card-text>

                  <v-card-actions >
                    <v-spacer/>
                    <v-btn color="blue darken-1" flat @click="dialog = false">thoát</v-btn>
                    <v-btn color="blue darken-1" flat @click="dialog = false">Cập nhật</v-btn>
                    <v-spacer/>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
<!--Hoạt động xã hội-->
      <v-card style="background-color: white" class="mt-5">
        <v-container>
          <v-layout row wrap>
            <v-flex md12 xs12>
              <h2 style="float: left">Hoạt động xã hội</h2>
            </v-flex>
            <v-flex md12 xs12>
              <v-dialog v-model="dialog" persistent max-width="800px">
                <template
                  v-slot:activator="{ on }">
                  <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
                </template>
                <v-card>
                  <v-card-text>
                    <v-container>
                      <span class="headline" >Hoạt động xã hội</span>
                      <v-layout row wrap>
                        <v-flex md12 xs12>
                          <v-text-field
                            label="Hoạt động *"
                            placeholder="Tên hoạt động"
                          ></v-text-field>

                        </v-flex>

                        <v-flex md12 xs12>
                          <v-textarea
                            label="Mô tả chi tiết"
                            placeholder="Mô tả chi tiết quá trình tham gia hoạt động xã hội"
                          ></v-textarea>

                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>

                  <v-card-actions >
                    <v-spacer/>
                    <v-btn color="blue darken-1" flat @click="dialog = false">thoát</v-btn>
                    <v-btn color="blue darken-1" flat @click="dialog = false">Cập nhật</v-btn>
                    <v-spacer/>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
<!--Kỹ năng-->
      <v-card style="background-color: white" class="mt-5">
        <v-container grid-list-md>
          <v-layout row wrap>
            <v-flex md12 xs12>
              <h2 style="float: left">Kỹ năng </h2>
            </v-flex>
            <v-flex md12 xs12>

            </v-flex>
          </v-layout>
        </v-container>
      </v-card>



    </v-container>
</template>

<script>
  import axios from 'axios';
    export default {
        name: "CreateCV",
      data: () => ( {
        title: "Image Upload",
        dialog: false,
        imageName: '',
        imageUrl: require('@/assets/avatar-default-icon.png'),
        imageFile: '',
        ranks : ['1','2','3','4'],
        countries: [],
        selectedCoutry: '',
        sex: 'nữ'


      }),

      methods: {
        pickFile () {
          this.$refs.image.click ()
        },onFilePicked (e) {
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

      },
     mounted () {
        axios
          .get('https://restcountries.eu/rest/v1/all')
          .then(response => (this.countries = response.data))
      }

    }
</script>

<style scoped>
.v-text-field {
  padding: 15px;
}
</style>
