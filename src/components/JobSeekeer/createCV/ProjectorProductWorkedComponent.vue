
<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-card style="background-color: white" class="mt-5">
    <v-container>
      <v-layout row wrap>
        <v-flex md12 xs12>
          <h2 style="float: left">Dự án</h2>
        </v-flex>
        <!--        hiện dialog-->
        <v-flex md12 xs12>
          <v-dialog v-model="dialog1" persistent max-width="800px">
            <template
              v-slot:activator="{ on }">
              <v-btn color="orange" dark v-on="on">
                <v-flex v-if="btnSubmit === false">
                  Thêm mục
                </v-flex>
                <v-flex v-if="btnSubmit === true">
                  <v-icon color="white darken-2">mdi-plus</v-icon>
                </v-flex>
              </v-btn>

            </template>
            <v-card>
              <v-card-text>
                <v-container>
                  <span class="headline" >Dự án</span>
                  <v-layout row wrap>
                    <v-flex md12 xs12>
                      <v-text-field
                        label="Tên dự án*"
                        v-model="newProjectorProduct.productName"
                        :rules="[() => newProjectorProduct.productName.length > 0 ||'Không được để trống']"
                        placeholder="Tên dự án"
                      ></v-text-field>

                    </v-flex>
                    <v-flex md12 xs12>
                      <v-text-field
                        label="Kỹ năng/ công nghệ *"
                        v-model="newProjectorProduct.skillUsed"
                        placeholder="Java, C#, VueJs,.."
                        :rules="[() => newProjectorProduct.skillUsed.length > 0 ||'Không được để trống']"
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
                                v-model="projectorproductworkeds.startTime"
                                label="Bắt đầu"
                                prepend-icon="event"
                                readonly
                                v-on="on"
                              ></v-text-field>
                            </template>
                            <v-date-picker v-model="projectorproductworkeds.startTime" @input="menu1 = false"></v-date-picker>
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
                                v-model="projectorproductworkeds.endTime"
                                label="Kết thúc"
                                prepend-icon="event"
                                readonly
                                v-on="on"
                              ></v-text-field>
                            </template>
                            <v-date-picker v-model="projectorproductworkeds.endTime" @input="menu2 = false"></v-date-picker>
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
        <!--        hiển thị kết quả-->
        <v-flex md12 xs12 v-if="btnSubmit === true">
          <v-container align="center">
            <template v-for="(projectorproductworked,index) in projectorproductworkeds">
              <v-container>
                <v-layout row wrap>
                  <v-spacer/>
                  <!--                  icon-->
                  <v-flex md2 xs2>
                    <v-icon color="orange darken-2" size="40px">mdi-widgets</v-icon>
                  </v-flex>
                  <!--                  kết quả-->
                  <v-flex md4 xs8>
                    <v-layout row wrap>
                      <v-flex md12 xs12 >
                        <h2 style="float: left">{{projectorproductworked.productName}}</h2>
                      </v-flex>
                      <v-flex md12 xs12 >
                        <span style="float: left">kĩ năng: {{projectorproductworked.skillUsed}}</span>
                      </v-flex>
                      <v-flex md12 xs12 >
                        <span style="float: left">Chức vụ: {{projectorproductworked.vacancyName}}</span>
                      </v-flex>
                      <v-flex md12 xs12 >
                        <span style="float: left">Thời gian: {{projectorproductworked.startTime}} - {{projectorproductworked.endTime}}</span>
                      </v-flex>
                      <v-flex md12 xs12 >
                        <span style="float: left" v-if="projectorproductworked.description != ''">Mô tả: {{projectorproductworked.description}}</span>
                      </v-flex>

                    </v-layout>
                  </v-flex>
                  <v-spacer/>
                  <!--                  icon edit remove-->
                  <v-flex md4 xs2>
                    <v-btn  style="height: auto"
                            dark
                            icon @click="edit(projectorproductworked, index)">
                      <v-icon color="orange darken-2" >mdi-pencil</v-icon>
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
              <v-divider v-if="index != (projectorproductworkeds.length-1)"></v-divider>
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
      position:'',
      editB: false,
      btnSubmit: false,
      dialog1: false,
      date: new Date().toISOString().substr(0, 10),
      date1: new Date().toISOString().substr(0, 10),
      menu1: false,
      menu2: false,
      checkbox1: false,
      newProjectorProduct: {
        productName:'',
        skillUsed: '',
        vacancyName: '',
        description: '',
        startTime: new Date().toISOString().substr(0, 10),
        endTime: new Date().toISOString().substr(0, 10),
      },
      defaultProjectorProduct: {
        productName:'',
        skillUsed: '',
        vacancyName: '',
        description: '',
        startTime: new Date().toISOString().substr(0, 10),
        endTime: new Date().toISOString().substr(0, 10),
      },
    }),
    methods: {
      update() {
        if (this.newProjectorProduct.schoolName != "") {
          var check = false;
          var e;

          for (e in  this.projectorproductworkeds) {
            var tmp = this.projectorproductworkeds[e].productName;
            if (tmp === this.newProjectorProduct.productName) {

              if(this.editB){
                if(this.projectorproductworkeds[this.position].productName !== this.newProjectorProduct.productName){
                  alert("Dự án đã tồn tại");
                  check = true;
                }else {
                  check = false;
                }
              }else {
                alert("Dự án đã tồn tại");
                check = true;
              }
            }
          }


          if (check == false) {
            if (this.editB === true) {
              console.log(this.position);
              this.btnSubmit = true;
              this.dialog1 = false;
              Object.assign(this.projectorproductworkeds[this.position], this.newProjectorProduct);
              Object.assign(this.newProjectorProduct, this.defaultProjectorProduct);
              this.editB = false;
              this.position = "";

            }else {
              this.btnSubmit = true;
              this.dialog1 = false;
              if (this.checkbox1 == true) {
                this.newProjectorProduct.endtime = " hiện tại"
              }
              this.projectorproductworkeds.push(Object.assign({}, this.newProjectorProduct));
              Object.assign(this.newProjectorProduct, this.defaultProjectorProduct);
            }}}
        else {
          alert("Hãy nhập thông tin cần thiết.");
        }
        // this.dialog1 = false;
        // this.btnSubmit = true;
        // this.projectorproductworkeds.push(Object.assign({},this.newProjectorProduct));
        // Object.assign(this.newProjectorProduct,this.defaultProjectorProduct);

      }, remove(position){
        this.projectorproductworkeds.splice(position, 1 );
        if(this.projectorproductworkeds.length === 0){
          this.btnsubmit = false;
        }
        console.log('delete')
      },
      edit(projectorProduct,position){

        Object.assign(this.newProjectorProduct, projectorProduct);
        this.position = position;
        this.dialog1 = true;
        this.editB = true;
        if (this.projectorproductworkeds.length === 0) {
          this.btnSubmit = false;
        }
        console.log('edit')
      }
    },


  }
</script>

<style scoped>
  h1,h2,h3,h4,h5,span {
    font-family: "Times New Roman";

  }
</style>
