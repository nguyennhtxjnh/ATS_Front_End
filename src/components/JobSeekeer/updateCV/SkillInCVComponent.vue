<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-card style="background-color: white" class="mt-5">
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex md12 xs12>
          <h2 style="float: left">Kỹ năng </h2>
        </v-flex>
        <v-flex md12 xs12>
          <v-container v-model="dialog3" >

            <v-card>
              <v-card-text>
                <v-container>
                  <span class="headline" >Kỹ năng</span>
                  <v-layout row wrap>
                    <v-flex md12 xs12>
                      <v-text-field
                        v-model="newSkillInCV.skillName"
                        label="Kỹ năng *"
                        placeholder="Tên kỹ năng"
                        :rules="[() => newSkillInCV.skillName.length > 0 ||'Không được để trống']"
                      ></v-text-field>

                    </v-flex>
                    <v-flex md12 xs12>
                      <v-layout row wrap>
                        <v-flex md12 xs12>
                        <h3 style="float: left">Đánh giá</h3>
                        </v-flex>
                        <v-flex md12 xs12>
                        <v-rating
                          style="float: left"
                          v-model="newSkillInCV.rate"
                          color="yellow darken-3"
                          background-color="grey darken-1"
                          empty-icon="$vuetify.icons.ratingFull"
                          half-increments
                          hover
                        ></v-rating>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>

              <v-card-actions >
                <v-spacer/>
                <v-btn color="blue darken-1" flat @click="update">Cập nhật</v-btn>
                <v-spacer/>
              </v-card-actions>
            </v-card>
          </v-container>
        </v-flex>
        <v-flex md12 xs12 v-if="btnSubmit === true">
          <v-container align="center">
            <template v-for="(skillincv,index) in skillincvs">
              <v-container>
                <v-layout row wrap>
                  <v-spacer/>
                  <v-flex md2 xs2>
                    <v-icon color="orange darken-2">mdi-skill</v-icon>
                  </v-flex>
                  <v-flex md4 xs8>
                    <v-layout row wrap>
                      <v-flex md12 xs12 >
                        <h2 style="float: left">{{skillincv.skillName}}</h2>
                      </v-flex>
                      <v-flex md12 xs12 >
                        <v-rating
                          style="float: left"
                          v-model="skillincv.rate"
                          value="rate"
                          color="yellow darken-3"
                          background-color="grey darken-1"
                          empty-icon="$vuetify.icons.ratingFull"
                          half-increments
                          readonly=""
                        ></v-rating>
                        {{skillincvs.rate}}
                      </v-flex>

                    </v-layout>
                  </v-flex>
                  <v-spacer/>
                  <!--                  icon edit remove-->
                  <v-flex md4 xs2>
                    <v-btn  style="height: auto"
                            dark
                            icon @click="edit(skillincv, index)">
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
              <v-divider v-if="index != (skillincvs.length-1)"></v-divider>
            </template>
          </v-container>


        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
    export default {
        name: "SkillInCVComponent",
      props: {
        skillincvs: Array,
      },
      data: () => ( {
        dialog3: false,
        btnSubmit: false,
        newSkillInCV: {
          skillName:'',
          rate:4,
        },
        defaultSkillInCV:{
          skillName:'',
          rate:4,
        }
      }),
      methods: {
        update() {
          if(this.newSkillInCV.skillName != ""){
            this.btnSubmit = true;
            this.skillincvs.push(Object.assign({},this.newSkillInCV));
            Object.assign(this.newSkillInCV,this.defaultSkillInCV);
          }
        }, remove(position){
          this.skillincvs.splice(position, 1 );
          if(this.skillincvs.length === 0){
            this.btnSubmit = false;
          }
          console.log('delete')
        },
        edit(skillincv,position){

          Object.assign(this.newSkillInCV,skillincv);
          this.skillincvs.splice(position, 1 );
          if(this.skillincvs.length === 0){
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
