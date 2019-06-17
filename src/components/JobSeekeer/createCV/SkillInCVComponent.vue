<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-card style="background-color: white" class="mt-5">
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex md12 xs12>
          <h2 style="float: left">Kỹ năng </h2>
        </v-flex>
        <v-flex md12 xs12>
          <v-dialog v-model="dialog3" persistent max-width="800px">
            <template
              v-slot:activator="{ on }">
              <v-btn color="primary" dark v-on="on">Thêm mục</v-btn>
            </template>
            <v-card>
              <v-card-text>
                <v-container>
                  <span class="headline" >Kỹ năng</span>
                  <v-layout row wrap>
                    <v-flex md12 xs12>
                      <v-text-field
                        label="Kỹ năng *"
                        placeholder="Tên kỹ năng"
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
                          v-model="rating"
                          color="yellow darken-3"
                          background-color="grey darken-1"
                          empty-icon="$vuetify.icons.ratingFull"
                          half-increments
                          hover
                        ></v-rating>
                        </v-flex>
                      </v-layout>
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
                <v-btn color="blue darken-1" flat @click="dialog3 = false">thoát</v-btn>
                <v-btn color="blue darken-1" flat @click="dialog3 = false">Cập nhật</v-btn>
                <v-spacer/>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
    export default {
        name: "SkillInCVComponent",
      data: () => ( {
        dialog3: false,
        rating: 4.5
      }),
    }
</script>

<style scoped>

</style>
