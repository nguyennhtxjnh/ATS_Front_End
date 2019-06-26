<template>
  <v-flex>

      <template v-for="cv in cvs">
        <v-card class="mt-4 pa-1">
        <v-layout row wrap>

          <v-flex md12 xs12>
            <v-layout row wrap>
<!--              img-->
            <v-flex md2 xs3 class="pa-2">
              <v-img :src="require('@/assets/mau-cv-senior.png')"></v-img>
            </v-flex>
            <v-spacer/>
<!--              thông tin cơ bản cv-->
            <v-flex md10 xs8>
<!--              tiêu đề-->
              <v-flex md12 xs12>
                <v-layout row wrap>
                  <v-flex md5 xs6>
                    <h2 style="color: #fe7013" >{{cv.title}}</h2>
                  </v-flex>
                  <v-flex md5 xs6 class="pr-2">
                    <span style="float: right; "> {{cv.lastModify}}</span>
                  </v-flex>
                </v-layout></v-flex>
<!--              link cv-->
              <v-flex md12 xs12 sm12 >
                <v-flex  xs12 style="border: 1px #2c3e50; border-style: dotted" class="py-2 ma-2 text-truncate">
                  `https://i.topcv.vn/nguyenhuynhthaonguyen?cvid={{cv.id}}`
                </v-flex>
              </v-flex>
<!--              button -->
              <v-flex md12 xs12>
                <v-flex lg3 md3 sm6 xs12  style="float: left">
                  <router-link to="/xem-CV" tag="button">
                    <v-btn small >
                      <v-icon>remove_red_eye</v-icon>
                      xem CV</v-btn>
                  </router-link>
                </v-flex>
                <v-flex lg3 md3 sm6 xs12  style="float: left">
                  <router-link to="/xem-CV" tag="button">
                    <v-btn small >  <v-icon>edit</v-icon>sửa CV</v-btn>
                  </router-link>
                </v-flex>
                <v-flex lg3 md3 sm6 xs12  style="float: left">

                  <v-btn small><v-icon>delete</v-icon>xóa CV</v-btn>
                </v-flex>
                <v-flex lg3 md3 sm6 xs12  style="float: left">
                  <v-btn small >
                    <v-icon>star</v-icon>
                    Đặt CV chính</v-btn>
                </v-flex>
              </v-flex>
            </v-flex>
            </v-layout>
          </v-flex>

        </v-layout>
        </v-card>

      </template>


  </v-flex>
</template>

<script>
    export default {
        name: "ListCVComponent",
      data: () => ( {
        cvs: [{
          id: 1,
          title: 'Hello',
          telephone: '123456789',
          userid: '1',
          img: '',
          email: 'abc@gmail',
          firstName: 'Nguyen',
          lastName: 'Nguyen',
          gender: '1',
          dob: '11/02/1997',
          cityid: '1',
          address: '530 Nguyễn Duy Trinh',
          industryid: '1',
          description: 'Sinh viên năm cuối',
          yearExperience: '1',
          salaryFrom: '200',
          salaryTo: '300',
          status: '',
          createdDate: '19/06/2019',
          lastModify:'19/06/2019' ,
          isActive: true,
          certifications: [],
          educations: [],
          socialactivities: [],
          workexperiences: [],
          projectorproductworkeds: [],
          skillincvs: [],
        },{
          id: 2,
          title: 'Hello2',
          telephone: '123456789',
          userid: '1',
          img: '',
          email: 'abc@gmail',
          firstName: 'Nguyen',
          lastName: 'Nguyen',
          gender: '1',
          dob: '11/02/1997',
          cityid: '1',
          address: '530 Nguyễn Duy Trinh',
          industryid: '1',
          description: 'Sinh viên năm cuối',
          yearExperience: '1',
          salaryFrom: '200',
          salaryTo: '300',
          status: '',
          createdDate: '19/06/2019',
          lastModify:'19/06/2019' ,
          isActive: false,
          certifications: [],
          educations: [],
          socialactivities: [],
          workexperiences: [],
          projectorproductworkeds: [],
          skillincvs: [],
        }]
      })

    }
</script>

<style scoped>
  h1,h2,h3,h4,h5,span {
    font-family: "Times New Roman";
  }
</style>
