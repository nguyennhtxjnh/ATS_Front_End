<template>
  <v-container>
    <v-layout wrap md12 xs12>
      <template v-for="job in jobs">
        <v-container md7 xs12 style="background-color: whitesmoke" class="ma-3 pa-2" >
          <v-layout row wrap>
            <v-flex md2 xs3 class="pa-2">
              <v-img :src="require('@/assets/jsmain1.jpg')"></v-img>
            </v-flex>
            <v-spacer/>
            <v-flex md5>
              <h2 align-left>
                {{job.title}}
              </h2>
              <h3 align-lef>
                {{job.companyName}} - {{job.cityName}}
              </h3>
              <v-flex align-left>
                <h4>  <v-btn icon>
                  <v-icon color="orange darken-2" >mdi-coin</v-icon>
                </v-btn>{{job.salaryTo}} - {{job.salaryFrom}} triệu</h4>
              </v-flex>
            </v-flex>
            <v-flex md3 class="pt-5">
              <h4>Trạng thái: <i>đã xem</i></h4>
            </v-flex>
          </v-layout>
        </v-container>
      </template>

    </v-layout>
  </v-container>

</template>

<script>
    export default {
        name: "ApplyManager",
      data :()=>{
        return{
          images : {'main' : require('@/assets/jsmain1.jpg')},
          jobs:[{	"id" :"",
            "image_company" : "",
            "title" :".Net",
            "companyName":"FPT",
            "cityName":"HCM",
            "salaryTo":"20",
            "salaryFrom":"30"
          },{	"id" :"",
            "image_company" : "",
            "title" :".Net",
            "companyName":"FPT",
            "cityName":"HCM",
            "salaryTo":"20",
            "salaryFrom":"30"
          },{	"id" :"",
            "image_company" : "",
            "title" :".Net",
            "companyName":"FPT",
            "cityName":"HCM",
            "salaryTo":"20",
            "salaryFrom":"30"
          },{	"id" :"",
            "image_company" : "",
            "title" :".Net",
            "companyName":"FPT",
            "cityName":"HCM",
            "salaryTo":"20",
            "salaryFrom":"30"
          },
          ]

        }
      }
    }
</script>

<style scoped>

</style>
