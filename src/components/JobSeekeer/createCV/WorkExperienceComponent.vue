<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-card style="background-color: white" class="mt-5">
    <v-container>
      <v-layout row wrap>
        <v-flex md12 xs12>
          <h2 style="float: left">Kinh nghiệm</h2>
        </v-flex>
<!--        hiển thị dialog-->
        <v-flex md12 xs12>
          <v-dialog v-model="dialog1" persistent max-width="800px">
            <template
              v-slot:activator="{ on }">
              <v-btn color="orange" dark v-on="on">Thêm mục</v-btn>
            </template>
            <v-card>
              <v-card-text>
                <v-container>
                  <span class="headline" >Kinh nghiệm</span>
                  <v-layout row wrap>
                    <v-flex md12 xs12>
                      <v-text-field
                        label="Công ty *"
                        v-model="newWorkExperience.companyName"
                        placeholder="Tên công ty"
                        :rules="[() => newWorkExperience.companyName.length > 0 ||'Không được để trống']"

                      ></v-text-field>

                    </v-flex>
                    <v-flex md12 xs12>
                      <v-text-field
                        v-model="newWorkExperience.vacancyName"
                        label="Chức vụ *"
                        placeholder="Nhân viên, quản lý,.."
                        :rules="[() => newWorkExperience.vacancyName.length > 0 ||'Không được để trống']"

                      ></v-text-field>

                    </v-flex>
                    <v-flex md12 xs12>
                      <h4>Thời gian*</h4>
                      <v-checkbox v-model="checkbox1" label="Tôi đang làm việc ở đây"></v-checkbox>
                      <v-layout row>
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
                                v-model="newWorkExperience.starttime"
                                label="Bắt đầu"
                                prepend-icon="event"
                                readonly
                                v-on="on"
                              ></v-text-field>
                            </template>
                            <v-date-picker v-model="newWorkExperience.starttime" @input="menu1 = false"></v-date-picker>
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
                                v-model="newWorkExperience.endtime"
                                label="Kết thúc"
                                prepend-icon="event"
                                readonly
                                v-on="on"
                              ></v-text-field>
                            </template>
                            <v-date-picker v-model="newWorkExperience.endtime" @input="menu2 = false"></v-date-picker>
                          </v-menu>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                    <v-flex md12 xs12>
                      <v-textarea
                        v-model="newWorkExperience.description"
                        label="Mô tả chi tiết"
                        placeholder="Mô tả chi tiết công việc, những gì đạt dduocj trong quá trình làm việc"
                      ></v-textarea>

                    </v-flex>

                  </v-layout>
                </v-container>
              </v-card-text>

              <v-card-actions >
                <v-spacer/>
                <v-btn color="blue darken-1" flat @click="dialog1 = false">thoát</v-btn>
                <v-btn color="blue darken-1" flat @click="update">Cập nhật</v-btn>
                <v-spacer/>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-flex>
<!--        hiển thị kết quả-->
        <v-flex md12 xs12 v-if="btnSubmit === true">
          <v-container align="center">
            <template v-for="(workexperience,index) in workexperiences">
              <v-container>
                <v-layout row wrap>
                  <v-spacer/>
                  <v-flex md2 xs2>
                    <v-icon color="orange darken-2">mdi-home-city-outline</v-icon>
                  </v-flex>
<!--                  hiện kết quả-->
                  <v-flex md4 xs8>
                    <v-layout row wrap>
                      <v-flex md12 xs12 >
                        <h2 style="float: left">{{workexperience.companyName}}</h2>
                      </v-flex>
                      <v-flex md12 xs12 >
                        <span style="float: left">{{workexperience.vacancyName}}</span>
                      </v-flex>
                      <v-flex md12 xs12 >
                        <span style="float: left">{{workexperience.starttime}} - {{workexperience.endtime}}</span>
                      </v-flex>
                      <v-flex md12 xs12 >
                        <span style="float: left">{{workexperience.description}}</span>
                      </v-flex>

                    </v-layout>
                  </v-flex>
                  <v-spacer/>
<!--                  icon edit remove-->
                  <v-flex md4 xs2>
                    <v-btn  style="height: auto"
                            dark
                            icon @click="edit(workexperience, index)">
                      <v-icon color="orange darken-2" >mdi-update</v-icon>
                    </v-btn>
                    <v-btn  style="height: auto"
                            dark
                            icon
                            @click="remove(index)">
                      <v-icon color="orange darken-2"  >mdi-delete</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-container>
              <v-divider v-if="index != (workexperiences.length-1)"></v-divider>

            </template>
          </v-container>


        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
    export default {
        name: "WorkExperienceComponent",
      props: {
        workexperiences: Array,
      },
      data: () => ( {
        btnSubmit: false,
        dialog1: false,
        date: new Date().toISOString().substr(0, 10),
        date1: new Date().toISOString().substr(0, 10),
        menu1: false,
        menu2: false,
        checkbox1: false,
        newWorkExperience: {
          companyName: '',
          vacancyName: '',
          description: '',
          starttime: new Date().toISOString().substr(0, 10),
          endtime: new Date().toISOString().substr(0, 10),
        },
        defaultWorkExperience: {
          companyName: '',
          vacancyName: '',
          description: '',
          starttime: new Date().toISOString().substr(0, 10),
          endtime: new Date().toISOString().substr(0, 10),
        },
      }),
      methods: {
        update() {
          this.dialog1 = false;
          this.btnSubmit = true;
          this.workexperiences.push(Object.assign({},this.newWorkExperience));
          Object.assign(this.newWorkExperience,this.defaultWorkExperience);

        },
        remove(position){
          this.workexperiences.splice(position, 1 );
          if(this.workexperiences.length === 0){
            this.btnSubmit = false;
          }
          console.log('delete')
        },
        edit(workexperience,position){

          Object.assign(this.newWorkExperience,workexperience);
          this.workexperiences.splice(position, 1 );
          this.dialog1 = true;
          if(this.workexperiences.length === 0){
            this.btnSubmit = false;
          }
          console.log('edit')
        }
      }

    }
</script>

<style scoped>
  h1,h2,h3,h4,h5,span {
    font-family: "Times New Roman";

  }
</style>
