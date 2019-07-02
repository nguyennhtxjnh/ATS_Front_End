<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-card style="background-color: white" class="mt-5">
    <v-container>
      <v-layout row wrap>
        <!--        title-->
        <v-flex md12 xs12>
          <h2 style="float: left">Học vấn</h2>
        </v-flex>
        <!--        mở dialog-->
        <v-flex md12 xs12>
          <v-dialog v-model="dialog" persistent max-width="800px">

            <template
              v-slot:activator="{ on }">
              <v-btn color="orange" dark v-on="on">
                <v-flex v-if="btnsubmit === false">
                  Thêm mục
                </v-flex>
                <v-flex v-if="btnsubmit === true">
                  <v-icon color="white darken-2">mdi-plus</v-icon>
                </v-flex>
              </v-btn>

            </template>


            <v-card>
              <v-card-text>
                <v-container>
                  <span class="headline">Học Vấn</span>
                  <v-layout row wrap>
                    <v-flex md12 xs12>
                      <v-text-field
                        v-model="newEducation.schoolname"
                        label="Trường *"
                        placeholder="Trường học"
                        :rules="[() => newEducation.schoolname.length > 0 ||'Không được để trống']"
                      ></v-text-field>

                    </v-flex>
                    <v-flex md12 xs12>
                      <v-select
                        :items="st"
                        v-model="newEducation.schooltype"
                        item-text="name"
                        item-value="i"
                        label="Trình độ học vấn"
                        :rules="[() => newEducation.schooltype != '' ||'Không được để trống']"
                      ></v-select>
                    </v-flex>
                    <v-flex v-if="newEducation.schooltype !== null">
                      <v-flex md12 xs12 v-if=" newEducation.schooltype.i !== 4">
                        <v-text-field
                          v-model="newEducation.major"
                          label="Chuyên ngành "
                          placeholder="Công nghệ phần mềm"
                        ></v-text-field>
                      </v-flex>
                    </v-flex>

                    <v-flex md12 xs12>
                      <h4>Thời gian*</h4>
                      <v-checkbox v-model="checkbox1" label="Tôi đang học ở đây"></v-checkbox>
                      <v-layout row wrap>
                        <v-flex md6 xs12>
                          <v-menu
                            v-model="menu1"
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
                                v-model="newEducation.starttime"
                                label="Bắt đầu"
                                prepend-icon="event"
                                readonly
                                v-on="on"
                              ></v-text-field>
                            </template>
                            <v-date-picker v-model="newEducation.starttime" @input="menu1 = false"></v-date-picker>
                          </v-menu>
                        </v-flex>
                        <v-flex md6 xs12 v-if="checkbox1 === false">
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
                                v-model="newEducation.endtime"
                                label="Kết thúc"
                                prepend-icon="event"
                                readonly
                                v-on="on"
                                required
                              ></v-text-field>
                            </template>
                            <v-date-picker v-model="newEducation.endtime" @input="menu2 = false"></v-date-picker>
                          </v-menu>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                    <v-flex md12 xs12>
                      <v-textarea
                        v-model="newEducation.description"
                        label="Mô tả chi tiết"
                        placeholder="Mô tả chi tiết quá trình học của bạn để nhà tuyển dụng có thể hiểu bạn hơn"
                      ></v-textarea>

                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer/>
                <v-btn color="blue darken-1" flat @click="dialog = false">thoát</v-btn>
                <v-btn color="blue darken-1" flat @click="update">Cập nhật</v-btn>
                <v-spacer/>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-flex>
        <!--        kết thúc dialog-->
        <!--        hiện kết quả-->
        <v-flex md12 xs12 v-if="btnsubmit === true">
          <v-container align="center">
            <template v-for="(education,index) in educations">
              <v-container style="background-color: white" class="pa-3 mb-3">
                <v-layout row wrap>
                  <v-spacer/>
                  <v-flex md2 xs2>
                    <v-icon color="orange darken-2" size="40px">mdi-home-city-outline</v-icon>
                  </v-flex>
                  <v-flex md4 xs8>
                    <v-layout row wrap>
                      <v-flex md12 xs12>
                        <h2 style="float: left"> {{education.schoolname}}</h2>

                      </v-flex>
                      <v-flex md12 xs12>
                        <template v-for="(schooltypeitem, index) in st">
                          <span style="float: left" v-if="schooltypeitem.i === education.schooltype">Trình độ: {{schooltypeitem.name}}</span>
                        </template>
                      </v-flex>
                      <v-flex md12 xs12>
                        <span
                          style="float: left">Thời gian học tập: {{education.starttime}} - {{education.endtime}}</span>
                      </v-flex>
                      <v-flex md12 xs12>
                        <span style="float: left"
                              v-if="education.description != ''">Mô tả:  {{education.description}}</span>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <v-spacer/>
                  <v-flex md4 xs2>
                    <v-btn style="height: auto"
                           dark
                           icon @click="edit(education, index)">
                      <v-icon color="orange darken-2">mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn style="height: auto"
                           dark
                           icon
                           @click="remove(index)">
                      <v-icon color="orange darken-2">mdi-delete</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-container>
              <v-divider v-if="index != (educations.length-1)"></v-divider>

            </template>
          </v-container>


        </v-flex>
        <!--        kết thúc hiện kết quả-->
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    name: "EducationComponent",

    props: {
      educations: Array,
    },
    data: () => ({
      position: '',
      dialog: false,
      menu1: false,
      menu2: false,
      editB: false,
      checkbox1: false,
      btnsubmit: false,
      education: {
        schoolname: '',
        major: '',
        schooltype: null,
        description: '',
        starttime: new Date().toISOString().substr(0, 10),
        endtime: new Date().toISOString().substr(0, 10),
      },
      st: [{i: 1, name: "Đại học"}, {i: 2, name: "Cao Đẳng"}, {i: 3, name: "Trung cấp"}, {
        i: 4, name: "Trung học phổ thông"
      },],
      newEducation: {
        schoolname: '',
        major: '',
        schooltype: null,
        description: '',
        starttime: new Date().toISOString().substr(0, 10),
        endtime: new Date().toISOString().substr(0, 10),
      },
      defaultEducation: {
        schoolname: '',
        major: '',
        schooltype: null,
        description: '',
        starttime: new Date().toISOString().substr(0, 10),
        endtime: new Date().toISOString().substr(0, 10),
      },
    }),
    methods: {
      update() {


        if (this.newEducation.schoolname != "") {
          var check = false;
          var e;

          for (e in  this.educations) {
            var tmp = this.educations[e].schoolname;
            if (tmp === this.newEducation.schoolname) {

              if(this.editB){
                if(this.educations[this.position].schoolname !== this.newEducation.schoolname){
                  alert("Trường đã tồn tại");
                  check = true;
                }else {
                  check = false;
                }
              }else {
                alert("Trường đã tồn tại");
                check = true;
              }
            }
          }


          if (check == false) {
            if (this.editB === true) {
              console.log(this.position);
              this.btnsubmit = true;
              this.dialog = false;
              Object.assign(this.educations[this.position], this.newEducation);
              Object.assign(this.newEducation, this.defaultEducation);
              this.editB = false;
              this.position = "";

            }else {
            this.btnsubmit = true;
            this.dialog = false;
            if (this.checkbox1 == true) {
              this.newEducation.endtime = " hiện tại"
            }
            this.educations.push(Object.assign({}, this.newEducation));
            Object.assign(this.newEducation, this.defaultEducation);
          }}}
         else {
          alert("Hãy nhập thông tin cần thiết.");
        }
      },
      remove(position) {
        this.educations.splice(position, 1);
        if (this.educations.length === 0) {
          this.btnsubmit = false;
        }
        console.log('delete')
      },
      edit(education, position) {
        Object.assign(this.newEducation, education);
        this.position = position;
        this.dialog = true;
        this.editB = true;
        if (this.educations.length === 0) {
          this.btnsubmit = false;
        }

        console.log('edit')
      }
    },

  }
</script>

<style scoped>
  h1, h2, h3, h4, h5, span {
    font-family: "Times New Roman";

  }

</style>
