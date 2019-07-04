<template>
  <v-container>
    <v-card class="pa-5">
  <v-layout row wrap>
    <v-flex md12 xs12>
      <h2 >{{info.lastName}} {{info.firstName}}</h2>
      <span >
            {{info.address}}
          </span><br/>
      <span class="pr-2"><v-icon>mdi-phone</v-icon> {{info.telephone}}  </span>
      <span > <v-icon>mdi-email</v-icon> {{info.email}}  </span>
    </v-flex>
    <v-flex md12 xs12>
      <v-layout row wrap>
        <v-flex md12 xs12 >
          <h1 style="float: left">Học Vấn</h1>
        </v-flex>

        <v-flex md12 xs12>
          <v-divider></v-divider>
          <v-flex v-for="education in info.educations" :key="education.schoolname">
            <v-layout row wrap class="pa-2">
              <v-flex md4 xs7>
                <span>Trường:{{education.schooltype}} {{education.schoolname}}</span><br/>
                <span>Chuyên ngành: {{education.major}}</span> <br/>
                <span>{{education.description}}</span>
              </v-flex>
              <!--                  <v-spacer/>-->
              <v-flex md3 xs4>
                    <span>
                      {{education.starttime}} - {{education.endtime}}
                    </span>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex md12 xs12>
      <v-layout row wrap>
        <v-flex md12 xs12 >
          <h1 style="float: left">Kinh nghiệm làm việc</h1>
        </v-flex>

        <v-flex md12 xs12>
                        <v-divider></v-divider>
          <v-flex v-for="workexperience in info.workexperiences" :key="workexperience.companyName">
            <v-layout row wrap class="pa-2">
              <v-flex md4 xs7>
                <span>Công ty:{{workexperience.companyName}} </span><br/>
                <span> {{workexperience.vacancyName}}</span> <br/>
                <span>{{workexperience.description}}</span>
              </v-flex>
              <!--                  <v-spacer/>-->
              <v-flex md3 xs4>
                    <span>
                      {{workexperience.starttime}} - {{workexperience.endtime}}
                    </span>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-flex>
      </v-layout>
    </v-flex>

  </v-layout>
    </v-card>
  </v-container>
</template>

<script>

    export default {
        name: "DetailCV",
      data : function () {
        return{
          name:'',
            info: {
              id: 1,
              title: 'Hello',
              telephone: '123456789',
              userid: '1',
              img: '',
              email: 'abc@gmail',
              firstName: 'Thao Nguyen',
              lastName: 'Nguyen Huynh',
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
              educations: [
                {
                  schoolname: 'FPT',
                  major: 'IT',
                  schooltype: 'Đại học',
                  description: 'abc',
                  starttime: '20/06/2019',
                  endtime: '20/06/2019',
                },
                {
                  schoolname: 'FPT1',
                  major: 'IT',
                  schooltype: 'Đại học',
                  description: 'abc',
                  starttime: '20/06/2019',
                  endtime: '20/06/2019',
                }
              ],
              socialactivities: [],
              workexperiences: [{
                companyName: 'FPT',
                vacancyName: 'Java Developer',
                description: 'abc',
                starttime: '20/11/2018',
                endtime: '20/04/2019',
              },{
                companyName: 'FPT2',
                vacancyName: 'C# Developer',
                description: 'java, C++ ',
                starttime: '20/11/2018',
                endtime: '20/04/2019',
              }],
              projectorproductworkeds: [],
              skillincvs: [],
            }
        }
      }
    ,

  }
</script>

<style scoped>

</style>
