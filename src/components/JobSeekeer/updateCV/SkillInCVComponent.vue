<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-card style="background-color: white" class="mt-5">
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex md12 xs12>
          <h2 style="float: left">Kỹ năng </h2>
        </v-flex>
        <v-flex md12 xs12>
          <v-container v-model="dialog3">

            <v-card>
              <v-card-text>
                <v-container>
                  <span class="headline">Kỹ năng</span>
                  <v-layout row wrap>
                    <v-flex md12 xs12>
                      <!--                      <v-text-field-->
                      <!--                        v-model="newSkillInCV.skillName"-->
                      <!--                        label="Kỹ năng *"-->
                      <!--                        placeholder="Tên kỹ năng"-->
                      <!--                        :rules="[() => newSkillInCV.skillName.length > 0 ||'Không được để trống']"-->
                      <!--                      ></v-text-field>-->
                      <v-autocomplete
                        prepend-icon="mdi-account-star"
                        :items="selectedSkill"
                        v-model="newSkillInCV.skillMasterId"
                        item-text="skillName"
                        item-value="id"
                        label="Kĩ Năng"
                      ></v-autocomplete>
                    </v-flex>
                    <v-flex md12 xs12>
                      <v-layout row wrap>
                        <v-flex md12 xs12>
                          <h3 style="float: left">Đánh giá</h3>
                        </v-flex>
                        <v-flex md12 xs12>
                          <v-rating
                            style="float: left"
                            v-model="newSkillInCV.skillLevel"
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

              <v-card-actions>
                <v-spacer/>
                <v-btn color="blue darken-1" flat @click="update">Cập nhật</v-btn>
                <v-spacer/>
              </v-card-actions>
            </v-card>
          </v-container>
        </v-flex>
        <v-flex md12 xs12 v-if="btnSubmit === true">
          <v-container align="center">
            <template v-for="(skillincv,index) in skillincvsById">
              <v-container>
                <v-layout row wrap>
                  <v-spacer/>
                  <v-flex md2 xs2>
                    <v-icon color="orange darken-2" size="40px">mdi-briefcase-account</v-icon>
                  </v-flex>
                  <v-flex md4 xs8>
                    <v-layout row wrap>
                      <v-flex md12 xs12>
                        <template v-for="skill in selectedSkill">
                          {{skillincv}}<br/>
                           skill {{skill}}
                          <v-flex v-if="skill.id === skillincv.id">
                            <h2 style="float: left">{{skill.skillName}}</h2>
                          </v-flex>

                        </template>

                      </v-flex>
                      <v-flex md12 xs12>
                        <v-rating
                          style="float: left"
                          v-model="skillincv.skillLevel"
                          value="rate"
                          color="yellow darken-3"
                          background-color="grey darken-1"
                          empty-icon="$vuetify.icons.ratingFull"
                          half-increments
                          readonly=""
                        ></v-rating>
                      </v-flex>

                    </v-layout>
                  </v-flex>
                  <v-spacer/>
                  <!--                  icon edit remove-->
                  <v-flex md4 xs2>
                    <v-btn style="height: auto"
                           dark
                           icon @click="edit(skillincv, index)">
                      <v-icon color="orange darken-2">mdi-update</v-icon>
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
              <v-divider v-if="index != (skillincvsById.length-1)"></v-divider>
            </template>
          </v-container>


        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
    import Axios from 'axios'
    import Constants from '@/stores/constant.js'

    export default {
        name: "SkillInCVComponent",
        props: {
            skillincvsById: {
                type: Array,
                default: []
            }
        },
        data: () => ({
            dialog3: false,
            editB: false,
            btnSubmit: false,
            selectedSkill: [],
            newSkillInCV: {
                skillMasterId: '',
                skillLevel: 4,
            },
            defaultSkillInCV: {
                skillMasterId: '',
                skillLevel: 4,
            }
        }),
        methods: {
            update() {
                if (this.newSkillInCV.skillMasterId != "") {
                    var check = false;
                    var e;

                    for (e in this.skillincvsById) {
                        var tmp = this.skillincvsById[e].skillMasterId;
                        if (tmp === this.newSkillInCV.skillMasterId) {

                            if (this.editB) {
                                if (this.skillincvsById[this.position].skillMasterId !== this.newSkillInCV.skillMasterId) {
                                    alert("Kĩ năng đã tồn tại");
                                    check = true;
                                } else {
                                    check = false;
                                }
                            } else {
                                alert("Kĩ năng đã tồn tại");
                                check = true;
                            }
                        }
                    }


                    if (check == false) {
                        if (this.editB === true) {
                            console.log(this.position);
                            this.btnSubmit = true;
                            this.dialog3 = false;
                            Object.assign(this.skillincvsById[this.position], this.newSkillInCV);
                            Object.assign(this.newSkillInCV, this.defaultSkillInCV);
                            this.editB = false;
                            this.position = "";

                        } else {
                            this.btnSubmit = true;
                            this.dialog3 = false;
                            this.skillincvsById.push(Object.assign({}, this.newSkillInCV));
                            Object.assign(this.newSkillInCV, this.defaultSkillInCV);
                        }
                    }
                } else {
                    alert("Hãy nhập thông tin cần thiết.");
                }

            }, remove(position) {
                this.skillincvsById.splice(position, 1);
                if (this.skillincvsById.length === 0) {
                    this.btnSubmit = false;
                }
                console.log('delete')
            },
            edit(skillincv, position) {
                Object.assign(this.newSkillInCV, skillincv);
                this.position = position;
                this.dialog3 = true;
                this.editB = true;
                if (this.skillincvsById.length === 0) {
                    this.btnSubmit = false;
                }

                console.log('edit')

            }
        },
        mounted() {

            Axios
                .get(Constants.URL + '/skillmaster/')
                .then(response => (
                    this.selectedSkill = response.data))
            console.log(this.selectedSkill)
            if (this.skillincvsById.length > 0) {
                this.btnSubmit = true;
            }


        }
    }
</script>

<style scoped>
  h1, h2, h3, h4, h5 {
    font-family: "Times New Roman";

  }
</style>
