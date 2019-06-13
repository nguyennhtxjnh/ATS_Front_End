<template>

  <v-card>
    <v-img
      :src="images.main"
      height="400px"

    >

      <v-layout
        column
        fill-height class="pt-5"
      >
        <v-card-title>
          <v-container  style="background: rgba(255,255,255, 0.7)"
                        prominent
                        height="auto"
                        class="pt-4  pb-4"
                        align-center>

          <v-flex md12  black--text title >
           <h3>Tìm công việc phù hợp</h3>
          </v-flex>
            <v-flex md12 class="pr-0 mr-0">
              <v-layout row wrap>
                <v-flex md4 xs12 class="mr-2" >
                  <v-text-field
                    label="Nhập chức danh, vị trí, kỹ năng..."
                    single-line
                  ></v-text-field>
                </v-flex>

                <v-flex md3 xs12 class="mr-2">
                  <v-autocomplete
                    v-bind:items="industries"
                    v-model="select"
                    item-text="name"
                    item-value="id"
                    return-object
                    label="Tất cả các ngành nghề"
                  ></v-autocomplete>
                </v-flex>

                <v-flex md3 xs12  class="mr-2">
                  <v-autocomplete
                    :items="industries"
                    v-model="select"
                    item-text="name"
                    item-value="id"
                    return-object
                    label="Tất cả địa điểm"
                  ></v-autocomplete>
                </v-flex>
                <v-flex md1 xs12 >
                  <v-btn color="warning" ><h4>Tìm kiếm</h4></v-btn>
                </v-flex>
              </v-layout>
          </v-flex>


          </v-container>
        </v-card-title>

        <v-spacer></v-spacer>

      </v-layout>
    </v-img>
    <v-card style="background-color: #efebeb">
      <v-container align-center>
        <v-layout row wrap>
          <v-flex md12 xs12 >
            <h1 align="center">Các công ty hàng đầu</h1>
          </v-flex>
          <v-flex md12 xs12>
            <v-container>

              <v-layout row wrap>
                <v-spacer/>
                <template v-for="company in companys">
                <v-flex md2 xs12 class="pa-3 ma-1" style="background-color: white">
                  <v-flex md12 xs12>
                    <v-img  :src="images.main"
                            height="100%"></v-img>
                  </v-flex>
                  <v-flex md12 xs12 class="text-lg-center">
                   <h3 >Company name</h3>
                  </v-flex>
                </v-flex>
                </template>
                <v-spacer/>
              </v-layout>

            </v-container>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
    <v-card style="background-color: white">
        <v-container align-center>
          <v-layout row wrap >
            <v-flex md12 xs12 >
              <h1 align="center">Các Ngôn Ngữ Được Yêu Thích Nhất</h1>
            </v-flex>
            <v-flex md12 xs12>
              abc
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    <v-card style="background-color:#efebeb">
      <v-container md12 xs12>
        <h1>Việc làm nổi bật hôm nay</h1>
        <v-layout wrap md12 xs12>
          <template v-for="job in jobs">
            <v-flex md5 xs12 style="background-color: white" class="ma-3 pa-2">
              <v-layout row wrap>
                <v-flex md4>
                  <v-img  :src="images.main"
                          height="100%"></v-img>
                </v-flex>
                <v-flex md1/>
                <v-flex md7>
                  <h3 align-left>
                    .Net Fresher
                  </h3>
                  <h5 align-lef>
                    Công ty TNHH CMC GLOBAL - Hà Nội
                  </h5>
                  <v-flex align-left>
                    <h4>  <v-btn icon>
                      <v-icon color="orange darken-2" >mdi-coin</v-icon>
                    </v-btn>10 - 20triệu</h4>
                  </v-flex>
                </v-flex>
              </v-layout>
            </v-flex>
          </template>

        </v-layout>
      </v-container>
    </v-card>
  </v-card>



</template>

<script>
    import DashBoardLayout from "../../layouts/DashBoardLayout";
    export default {
        name: "JobSeekerMainScreen",
      components: {DashBoardLayout},
      data : ()=>{ return {
        images : {'main' : require('@/assets/jsmain1.jpg')},
        industries : [ { id: "1", name: "Foo" }, { id: "2", name: "Bar" }, { id: "3", name: "Baka" }, { id: "4", name: "Pig" }, ],
        jobs : [0,1,2,3,4,5,6,7],
        companys : [0,1,2,3,4],
        icon : 'mdi-coin',
      }
    }}
</script>

<style scoped>

  .v-menu__content{
    left : 0px !important;
    top : 105%!important;

  }
  h1,h2,h3,h4,h5 {
    font-family: "Times New Roman";
  }


</style>
