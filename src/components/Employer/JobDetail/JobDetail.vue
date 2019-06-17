<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-container fluid fill-height>
    <v-layout align-center justify-center >
      <v-flex xs12 sm12 md10>
          <!--header title-->
          <v-container class="pa-0 mb-3" fluid grid-list-md>
            <v-layout row wrap>
              <v-flex d-flex xs12 sm6 md3>
                <v-card color="purple" dark>
                  <v-card-title primary class="title">Lorem</v-card-title>
                  <v-card-text>{{ text }}</v-card-text>
                </v-card>
              </v-flex>
              <v-flex d-flex xs12 sm6 md6>
                <v-layout row wrap>
                  <v-flex d-flex>
                    <v-card color="indigo" dark>
                      <v-card-text>{{ text.slice(0, 70) }}</v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex d-flex>
                    <v-layout row wrap>
                      <v-flex
                        v-for="n in 2"
                        :key="n"
                        d-flex
                        xs12
                      >
                        <v-card
                          color="red lighten-2"
                          dark
                        >
                          <v-card-text>{{ text.slice(0, 40) }}</v-card-text>
                        </v-card>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex d-flex xs12 sm6 md3 child-flex>
                <v-card color="green lighten-2" dark>
                  <v-card-text>{{ text.slice(0, 90) }}</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        <!--end header title-->

<!--        tab-->
        <template >
          <v-tabs
            color="cyan"
            dark
            next-icon="mdi-arrow-right-bold-box-outline"
            prev-icon="mdi-arrow-left-bold-box-outline"
            show-arrows
          >
            <v-tabs-slider color="yellow"></v-tabs-slider>
            <v-tab
              v-for="item in items"
              :key="item"
            >
              {{ item }}
            </v-tab>

            <v-tabs-items>
              <v-tab-item
                v-for="item in items"
                :key="item"
              >
                <v-card flat>
<!--                  card content-->
                  <v-card-text v-if="item === 'Thông Tin'">aaaaaaaaaaa</v-card-text>
                  <v-card-text v-if="item === 'Công Ty'">bbbbbbbbbbb</v-card-text>
                  <v-card-text v-if="item === 'Việc Làm Khác Từ Công Ty'">ccccccccccc</v-card-text>
                  <v-card-text v-if="item === 'Khóa Học Phù Hợp'">cdddddddddddd</v-card-text>
<!--                  end card content-->
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-tabs>
        </template>
<!--     end tab-->

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'JobDetail',
    data: function () {
      return {
        tab: null,
        items: [
          'Thông Tin', 'Công Ty', 'Việc Làm Khác Từ Công Ty', 'Khóa Học Phù Hợp'
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
          'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
          ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi' +
          ' ut aliquip ex ea commodo consequat.'

      }
    },
    methods(){

    },

  }


</script>

<style scoped>

</style>
