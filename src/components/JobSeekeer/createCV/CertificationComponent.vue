<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-card style="background-color: white" class="mt-5">
    <v-container>
      <v-layout row wrap>
        <v-flex md12 xs12>
          <h2 style="float: left">Chứng chỉ</h2>
        </v-flex>
        <v-flex md12 xs12>
          <v-dialog v-model="dialog2" persistent max-width="800px">
            <template
              v-slot:activator="{ on }">
              <v-btn color="orange" dark v-on="on">Thêm mục</v-btn>
            </template>
            <v-card>
              <v-card-text>
                <v-container>
                  <span class="headline" >Chứng chỉ</span>
                  <v-layout row wrap>
                    <v-flex md12 xs12>
                      <v-text-field
                        :rules="[() => newCertifications.certificationName.length > 0 ||'Không được để trống']"
                        v-model="newCertifications.certificationName"
                        label="Chứng chỉ *"
                        placeholder="Tên chứng chỉ"
                      ></v-text-field>

                    </v-flex>

                  </v-layout>
                </v-container>
              </v-card-text>

              <v-card-actions >
                <v-spacer/>
                <v-btn color="blue darken-1" flat @click="dialog2 = false">Thoát</v-btn>
                <v-btn color="blue darken-1" flat @click="update">Cập nhật</v-btn>
                <v-spacer/>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-flex>
        <v-flex md12 xs12 v-if="btnSubmit === true">
          <v-container align="center">
            <template v-for="(certification,index) in certifications">
              <v-container>
                <v-layout row wrap>
                  <v-spacer/>
                  <v-flex md2 xs2>
                    <v-icon color="orange darken-2">mdi-home-city-outline</v-icon>
                  </v-flex>
                  <v-flex md4 xs8>
                    <v-layout row wrap>
                      <v-flex md12 xs12 >
                        <h2 style="float: left">{{certification.certificationName}}</h2>

                      </v-flex>

                    </v-layout>
                  </v-flex>
                  <v-spacer/>
                  <v-flex md4 xs2>
                    <v-btn  style="height: auto"
                            dark
                            icon @click="edit(certification, index)">
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
              <v-divider v-if="index != (certifications.length-1)"></v-divider>

            </template>
          </v-container>


        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
    export default {
        name: "CertificationComponent",
      props: {
        certifications: Array,
      },
      data: () => ( {
        btnSubmit: false,
        dialog2: false,
        newCertifications: {
          certificationName:''
        },
        defaultCertifications: {
          certificationName:''
        }
      }),
      methods: {
        update() {
          if(this.newCertifications.certificationName != "") {
            this.dialog2 = false;
            this.btnSubmit = true;
            this.certifications.push(Object.assign({}, this.newCertifications));
            Object.assign(this.newCertifications, this.defaultCertifications);
          }
      },
        remove(position){
          this.certifications.splice(position, 1 );
          if(this.certifications.length === 0){
            this.btnSubmit = false;
          }
          console.log('delete')
        },
        edit(certification,position){

          Object.assign(this.newCertifications,certification);
          this.certifications.splice(position, 1 );
          this.dialog2 = true;
          if(this.certifications.length === 0){
            this.btnSubmit = false;
          }
          console.log('edit')
        }
        }
    }
</script>

<style scoped>
  h1,h2,h3,h4,h5 {
    font-family: "Times New Roman";

  }
</style>
