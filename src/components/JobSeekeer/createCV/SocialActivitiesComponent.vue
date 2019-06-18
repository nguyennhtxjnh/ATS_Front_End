<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-card style="background-color: white" class="mt-5">
    <v-container>
      <v-layout row wrap>
        <v-flex md12 xs12>
          <h2 style="float: left">Hoạt động xã hội</h2>
        </v-flex>
        <v-flex md12 xs12>
          <v-dialog v-model="dialog4" persistent max-width="800px">
            <template
              v-slot:activator="{ on }">
              <v-btn color="primary" dark v-on="on">Thêm mục</v-btn>
            </template>
            <v-card>
              <v-card-text>
                <v-container>
                  <span class="headline" >Hoạt động xã hội</span>
                  <v-layout row wrap>
                    <v-flex md12 xs12>
                      <v-text-field
                        v-model="newSocialActivities.name"
                        label="Hoạt động *"
                        placeholder="Tên hoạt động"
                        :rules="[() => newSocialActivities.name.length > 0 ||'Không được để trống']"

                      ></v-text-field>

                    </v-flex>

                    <v-flex md12 xs12>
                      <v-textarea
                        v-model="newSocialActivities.description"
                        label="Mô tả chi tiết"
                        placeholder="Mô tả chi tiết quá trình tham gia hoạt động xã hội"
                      ></v-textarea>

                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>

              <v-card-actions >
                <v-spacer/>
                <v-btn color="blue darken-1" flat @click="dialog4 = false">thoát</v-btn>
                <v-btn color="blue darken-1" flat @click="update">Cập nhật</v-btn>
                <v-spacer/>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-flex>
        <v-flex md12 xs12 v-if="btnSubmit === true">
          <v-container align="center">
            <template v-for="socialactivity in socialactivities">
              <v-card>
                <v-layout row wrap>
                  <v-spacer/>
                  <v-flex md2 xs2>
                    <v-icon color="orange darken-2">mdi-home-city-outline</v-icon>
                  </v-flex>
                  <v-flex md4 xs8>
                    <v-layout row wrap>
                      <v-flex md12 xs12 >
                        <h3 style="float: left">{{socialactivity.name}}</h3>
                      </v-flex>
                      <v-flex md12 xs12 >
                        <h3 style="float: left">{{socialactivity.description}}</h3>
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
        name: "SocialActivitiesComponent",
      props: {
        socialactivities: Array,
      },
      data: () => ( {
        btnSubmit: false,
        dialog4: false,
        newSocialActivities: {
          name:'',
          description:'',
        },
        defaultSocialActivities: {
          name:'',
          description:'',
        }
      }),
      methods: {
        update() {
          this.dialog4 = false;
          this.btnSubmit = true;
          this.socialactivities.push(Object.assign({},this.newSocialActivities));
          Object.assign(this.newSocialActivities,this.defaultSocialActivities);

        }
      }
    }
</script>

<style scoped>
  h1,h2,h3,h4,h5 {
    font-family: "Times New Roman";

  }
</style>
