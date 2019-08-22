
<template>
    <html ref="content" >
    <head>
      <meta charset="UTF-8">
      <title>Title</title>
    </head>
    <body>
      <div row wrap style="display: none">
        <div md12 xs12>
          <h2 >{{info.lastName}} {{info.firstName}}</h2>
          <span >
            {{info.address}}
          </span><br/>
          <span class="pr-2"><v-icon>mdi-phone</v-icon> {{info.telephone}}  </span>
          <span > <v-icon>mdi-email</v-icon> {{info.email}}  </span>
        </div>
        <div md12 xs12>
          <div row wrap>
            <div md12 xs12 >
              <span>Học Vấn</span>
            </div>

            <div md12 xs12>
              <v-divider></v-divider>
            <div v-for="education in info.educations">
                <div row wrap class="pa-2">
                  <div md4 xs7>
                   <span>Trường:{{education.schooltype}} {{education.schoolname}}</span><br/>
                    <span>Chuyên ngành: {{education.major}}</span> <br/>
                    <span>{{education.description}}</span>
                  </div>
<!--                  <v-spacer/>-->
                  <div md3 xs4>
                    <span>
                      {{education.starttime}} - {{education.endtime}}
                    </span>
                  </div>
                </div>
            </div>
            </div>
          </div>
        </div>
        <div md12 xs12>
          <div row wrap>
            <div md12 xs12 >
              <h1 style="float: left">Kinh nghiệm làm việc</h1>
            </div>

            <div md12 xs12>
<!--              <v-divider></v-divider>-->
              <div v-for="workexperience in info.workexperiences">
                <div row wrap class="pa-2">
                  <div md4 xs7>
                    <span>Công ty:{{workexperience.companyName}} </span><br/>
                    <span> {{workexperience.vacancyName}}</span> <br/>
                    <span>{{workexperience.description}}</span>
                  </div>
<!--                  <v-spacer/>-->
                  <div md3 xs4>
                    <span>
                      {{workexperience.starttime}} - {{workexperience.endtime}}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button style="color: #fe7013" flat @click="pdf">Tải PDF</button>

      </div>
    </body>

    </html>
</template>

<script>
  import jsPDF from 'jspdf';
    export default {
      props: {
        info: Object,
      },
        name: "PDFCVComponent",
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
                schoolname: 'FPT',
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
              companyName: 'FPT',
              vacancyName: 'C# Developer',
              description: 'java, C++ ',
              starttime: '20/11/2018',
              endtime: '20/04/2019',
            }],
            projectorproductworkeds: [],
            skillincvs: [],
          }
         }
      },
      methods :{

        pdf(){
          const doc = new jsPDF();
          const contentHtml = this.$refs.content.innerHTML;
          console.log(doc.getFontList());
          doc.fromHTML(contentHtml, 15, 15, {
            width: 170
          });
          doc.save("sample.pdf");

        }
      },
      mounted() {
        // const doc = new jsPDF();
        // const contentHtml = this.$refs.content.innerHTML;
        // console.log(doc.getFontList());
        // doc.fromHTML(contentHtml, 15, 15, {
        //   width: 170
        // });
        // doc.save("sample.pdf");
      }
    }
</script>

<style scoped>

</style>
