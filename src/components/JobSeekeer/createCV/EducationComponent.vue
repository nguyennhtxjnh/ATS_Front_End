<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
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
              <v-btn color="primary" dark v-on="on">
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
                        required
                      ></v-text-field>

                    </v-flex>
                    <v-flex md12 xs12>
                      <v-select
                        :items="schooltype"
                        v-model="newEducation.st"
                        item-text="name"
                        item-value="i"
                        return-object
                        label="Trình độ học vấn"
                        required
                      ></v-select>
                    </v-flex>
                    <v-flex v-if="newEducation.st !== null">
                      <v-flex md12 xs12 v-if=" newEducation.st.i !== 4">
                        <v-text-field
                          v-model="newEducation.major"
                          label="Chuyên ngành *"
                          placeholder="Công nghệ phần mềm"
                          required
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
                                required
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
                        v-model="newEducation.des"
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
        <v-flex md12 xs12 v-if="btnsubmit === true">
          <v-container align="center">
            <template v-for="education in educations">
            <v-card>
              <v-layout row wrap>
                <v-spacer/>
              <v-flex md2 xs2>
                <v-icon color="orange darken-2">mdi-home-city-outline</v-icon>
              </v-flex>
              <v-flex md4 xs8>
                <v-layout row wrap>
                  <v-flex md12 xs12 >
                    <h3 style="float: left">{{education.schoolname}}</h3>

                  </v-flex>
                  <v-flex md12 xs12>
                    <h3 style="float: left">{{education.starttime}} - {{education.endtime}}</h3>
                  </v-flex>
                  <v-flex md12 xs12>
                    <h3 style="float: left">{{education.des}}</h3>
                  </v-flex>
                </v-layout>
              </v-flex>
                <v-spacer/>
              </v-layout>
            </v-card>

            </template>
</v-container>


        </v-flex>
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
      dialog: false,
      menu1: false,
      menu2: false,
      checkbox1: false,
      btnsubmit: false,

      schooltype: [{i: 1, name: "Đại học"}, {i: 2, name: "Cao Đẳng"}, {i: 3, name: "Trung cấp"}, {
        i: 4, name: "Trung học phổ thông"
      },],
      newEducation: {
        schoolname: '',
        major: '',
        st: null,
        des: '',
        starttime: new Date().toISOString().substr(0, 10),
        endtime: new Date().toISOString().substr(0, 10),
      },
      defaultEducation: {
        schoolname: '',
        major: '',
        st: null,
        des: '',
        starttime: new Date().toISOString().substr(0, 10),
        endtime: new Date().toISOString().substr(0, 10),
      },
    }),
    methods: {
      update() {
        console.log(this.educations);
        this.btnsubmit = true;
        this.dialog = false;
        if (this.checkbox1 == true) {
          this.newEducation.endtime = " hiện tại"
        }
        this.educations.push(Object.assign({},this.newEducation));
        Object.assign(this.newEducation,this.defaultEducation);
      }
    }
  }
</script>

<style scoped>

</style>
