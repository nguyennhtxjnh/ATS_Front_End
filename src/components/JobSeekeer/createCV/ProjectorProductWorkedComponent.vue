<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-card style="background-color: white" class="mt-5">
    <v-container>
      <v-layout row wrap>
        <v-flex md12 xs12>
          <h2 style="float: left">Dự án</h2>
        </v-flex>
        <v-flex md12 xs12>
          <v-dialog v-model="dialog1" persistent max-width="800px">
            <template
              v-slot:activator="{ on }">
              <v-btn color="primary" dark v-on="on">Thêm mục</v-btn>
            </template>
            <v-card>
              <v-card-text>
                <v-container>
                  <span class="headline" >Dự án</span>
                  <v-layout row wrap>
                    <v-flex md12 xs12>
                      <v-text-field
                        label="Kỹ năng/ công nghệ *"
                        v-model="newProjectorProduct.skillUsed"
                        placeholder="Java, C#, VueJs,.."
                      ></v-text-field>

                    </v-flex>
                    <v-flex md12 xs12>
                      <v-text-field
                        v-model="newProjectorProduct.vacancyName"
                        label="Chức vụ *"
                        placeholder="Nhân viên, quản lý,.."
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
                                v-model="projectorproductworkeds.starttime"
                                label="Bắt đầu"
                                prepend-icon="event"
                                readonly
                                v-on="on"
                              ></v-text-field>
                            </template>
                            <v-date-picker v-model="projectorproductworkeds.starttime" @input="menu1 = false"></v-date-picker>
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
                                v-model="projectorproductworkeds.endtime"
                                label="Kết thúc"
                                prepend-icon="event"
                                readonly
                                v-on="on"
                              ></v-text-field>
                            </template>
                            <v-date-picker v-model="projectorproductworkeds.endtime" @input="menu2 = false"></v-date-picker>
                          </v-menu>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                    <v-flex md12 xs12>
                      <v-textarea
                        v-model="projectorproductworkeds.description"
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
        <v-flex md12 xs12 v-if="btnSubmit === true">
          <v-container align="center">
            <template v-for="projectorproductworked in projectorproductworkeds">
              <v-card>
                <v-layout row wrap>
                  <v-spacer/>
                  <v-flex md2 xs2>
                    <v-icon color="orange darken-2">mdi-home-city-outline</v-icon>
                  </v-flex>
                  <v-flex md4 xs8>
                    <v-layout row wrap>
                      <v-flex md12 xs12 >
                        <h3 style="float: left">{{projectorproductworked.skillUsed}}</h3>
                      </v-flex>
                      <v-flex md12 xs12 >
                        <h3 style="float: left">{{projectorproductworked.vacancyName}}</h3>
                      </v-flex>
                      <v-flex md12 xs12 >
                        <h3 style="float: left">{{projectorproductworked.starttime}} - {{projectorproductworked.endtime}}</h3>
                      </v-flex>
                      <v-flex md12 xs12 >
                        <h3 style="float: left">{{projectorproductworked.description}}</h3>
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
        name: "ProjectorProductWorkedComponent",
      props: {
        projectorproductworkeds: Array,
      },
      data: () => ( {
        btnSubmit: false,
        dialog1: false,
        date: new Date().toISOString().substr(0, 10),
        date1: new Date().toISOString().substr(0, 10),
        menu1: false,
        menu2: false,
        checkbox1: false,
        newProjectorProduct: {
          skillUsed: '',
          vacancyName: '',
          description: '',
          starttime: new Date().toISOString().substr(0, 10),
          endtime: new Date().toISOString().substr(0, 10),
        },
        defaultProjectorProduct: {
          skillUsed: '',
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
          this.projectorproductworkeds.push(Object.assign({},this.newProjectorProduct));
          Object.assign(this.newProjectorProduct,this.defaultProjectorProduct);

        }
      }

    }
</script>

<style scoped>

</style>
