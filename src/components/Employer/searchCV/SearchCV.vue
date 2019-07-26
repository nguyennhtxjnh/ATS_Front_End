<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-flex style="background-color: whitesmoke">
  <v-container>
    <v-card class="pa-5 ">
      <v-layout row wrap >
        <v-flex md6 xs12 class="mr-2" >
          <v-layout row>
<!--            <v-icon color="orange darken-2" class="mr-2">mdi-account-badge-horizontal-outline</v-icon>-->
<!--            <v-text-field-->
<!--              v-model="vacancyName"-->
<!--              :rules="[() => vacancyName.length > 0 ||'Không được để trống']"-->
<!--              label="Vị trí công việc* "-->
<!--            ></v-text-field>-->
            <v-icon color="orange darken-2" class="mr-2">mdi-robot-industrial</v-icon>
            <v-autocomplete
              v-model="industryId"
              :items="industries"
              item-text="name"
              item-value="name"
              label="Ngành nghề*"
              persistent-hint
              single-line
            ></v-autocomplete>
          </v-layout>

        </v-flex>
        <v-spacer/>
        <v-flex md3 xs12 class="mr-2">
          <v-layout row>
            <v-icon color="orange darken-2" class="mr-2">mdi-map-marker</v-icon>
            <v-autocomplete
              v-model="cityId"
              :items="cities"
              item-text="fullName"
              item-value="fullName"
              label="Tỉnh/ Thành phố"
              persistent-hint
              single-line
            ></v-autocomplete>
          </v-layout>
        </v-flex>
        <v-spacer/>
        <v-flex md1 xs12 >
          <v-btn color="warning" @click="search" ><h4>Tìm kiếm</h4></v-btn>
        </v-flex>
        <v-spacer/>
      </v-layout>
      <v-layout row wrap class="pb-3">
<!--        <h4>Các vị trí tìm kiếm phổ biến:<i style="color: red">Nhân viên kinh doanh, Nhân viên Marketing, Chuyên viên Nhân sự, Lập trình viên</i> </h4>-->
      </v-layout>
      <v-divider class="pb-3"></v-divider>
      <v-layout row wrap>
        <v-flex md9 xs12 class="mr-2" >
          <v-layout row>
            <v-icon color="orange darken-2"  class="mr-2">mdi-widgets</v-icon>
<!--            <v-text-field-->
<!--              v-model="skill"-->
<!--              :rules="[() => skill.length > 0 ||'Không được để trống']"-->
<!--              label="Kỹ năng của mà bạn đang tìm kiếm "-->
<!--            ></v-text-field>-->
            <v-autocomplete
              v-model="tmpSkill"
              :items="listSkill"
              chips
              color="blue-grey lighten-2"
              label="Kỹ năng"
              item-text="skillName"
              item-value="id"
              multiple
            >
              <template v-slot:selection="data">
                <v-chip
                  :selected="data.selected"
                  close
                  class="chip--select-multi"
                  @input="remove(data.item)"
                >

                  {{ data.item.skillName }}
                </v-chip>
              </template>
              <template v-slot:item="data">
                <template v-if="typeof data.item !== 'object'">
                  <v-list-tile-content v-text="data.item"></v-list-tile-content>
                </template>
                <template v-else>
                  <v-list-tile-content>
                    <v-list-tile-title v-html="data.item.skillName"></v-list-tile-title>
                  </v-list-tile-content>
                </template>
              </template>
            </v-autocomplete>
          </v-layout>

        </v-flex>

      </v-layout>
    </v-card>
    <v-layout row wrap class="pt-3">
      <v-flex md8 xs12>
        <v-card class="pa-2">
          <v-card-title>

            <h2 style="color: red"> Các ứng viên phù hợp</h2>
          </v-card-title>
          <v-divider></v-divider>

          <v-card-text>
            <v-layout row wrap v-if="cvs.length === 0">
              <v-spacer/>
              <img :src="require('@/assets/empty-product.png')" style="height: 240px" >
              <v-spacer/>
            </v-layout>

            <template v-for="cv in cvs">

              <v-layout row wrap @click="$router.push('/xem-CV/'+cv.id)">
                <v-flex md3 xs3>
                  <v-avatar size="150px" align="center">
                    <v-img v-bind:src="cv.img"></v-img>
                  </v-avatar>
                </v-flex>
                <v-flex md8 xs8>
                  <v-layout row wrap>
                    <v-flex md8 xs8>
                      <h2>{{cv.lastName}} {{cv.firstName}}</h2>
                      <v-layout row wrap  >
                <span><i>Học vấn:</i>
                <template v-if="cv.educationsById.length > 0" v-for="edu in cv.educationsById ">
                   Trường {{edu.schoolName}}
                </template>
                </span>
                      </v-layout>
                      <v-layout row wrap  >
                <span><i>Kinh nghiệm:</i>
                <template v-if="cv.workexperiencesById.length > 0" v-for="edu in cv.workexperiencesById ">
                  Công ty {{edu.companyName}} - chức vụ {{edu.vacancyName}}
                </template>
                </span>
                      </v-layout>
                      <v-layout row wrap  >
                        <v-flex md5 xs4 style="border: 2px #2c3e50; border-style: dotted"  class="pa-1 mr-2">
                          <v-icon class="">mdi-map-marker</v-icon>
                          <span>Địa điểm: {{cv.cityByCityId.fullName}}</span>
                        </v-flex>
                        <v-spacer/>
                        <v-flex md6 xs4 style="border: 2px #2c3e50; border-style: dotted"  class="pa-1" v-if="cv.yearExperience !== ''">
                          <v-icon class="">mdi-calendar-blank</v-icon>
                          <span>Thời gian làm việc thực tế {{cv.yearExperience}} năm</span>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                    <v-spacer/>
                    <v-flex md3 xs4>
                      <i style="float: right"><v-icon>mdi-update</v-icon>  {{cv.createdDate}}</i>
                    </v-flex>
                  </v-layout>
                  <v-layout row wrap class="mt-3">
                    <v-flex md10 xs4 style="border: 2px #2c3e50; border-style: dotted"  class="pa-1">
                      <v-icon class="">mdi-star</v-icon>
                      <span>Mục tiêu: {{cv.description}}
                </span>
                    </v-flex>
                  </v-layout>

                </v-flex>
              </v-layout>
              <v-divider class="mt-2 mb-2" v-if=""></v-divider>

            </template>
          </v-card-text>
        </v-card>
      </v-flex>
<!-- option-->
      <v-flex md4 xs12 class="pl-3">
        <v-card class="pa-3">
          <v-layout row wrap>
            <v-icon class="mr-2">mdi-pen-minus</v-icon>
            <h2>Ưu tiên hiển thị ứng viên</h2>
          </v-layout>
          <v-radio-group v-model="radios" :mandatory="false">
            <v-radio label="Cập nhật mới nhất" value="1"></v-radio>

          </v-radio-group>
          <v-divider></v-divider>
          <v-layout row wrap>
            <v-icon class="mr-2">mdi-calendar-blank</v-icon>
            <h2>Tuổi</h2>
          </v-layout>
          <v-layout row wrap>
            <v-flex md10 class="pr-2">
              <v-select
                :items="items"
                label="tuổi"
                outline
              ></v-select>
            </v-flex>


          </v-layout>
          <v-divider></v-divider>
          <v-layout row wrap>
            <v-icon class="mr-2">mdi-gender-male-female</v-icon>
            <h2>Giới tính</h2>
          </v-layout>
          <v-select
            v-bind:items="genders"
            v-model="gender"
            :rules="[() => gender.length > 0 ||'Không được để trống']"
            item-text="name"
            item-value="id"
            label="Giới tính"
          ></v-select>


        </v-card>
      </v-flex>
    </v-layout>

  </v-container>
  </v-flex>

</template>

<script>
  import axios from 'axios';
  import Constants from '@/stores/constant.js'
    export default {
        name: "SearchCV",
      data: () => ( {
        lskill:'',
        cityId:'',
        industryId:'',
        cities:[],
        industries:[],
        tmpSkill:'',
        listSkill: [],
        cvs:[],
        radios:'1',
        items:['1989','1990','1991','1992','1993','1994','1995'],
        gender:'',
        genders: [{id: "1", name: "Nữ"}, {id: "2", name: "Nam"}, {id: "3", name: "Khác"}],
      }),methods:{
        remove (item) {
          const index = this.tmpSkill.indexOf(item.id)
          if (index >= 0) this.tmpSkill.splice(index, 1)

        },
        search(){
          for( var skill in this.tmpSkill){
            for(var tmp in this.listSkill){
              if(this.listSkill[tmp].id === this.tmpSkill[skill]){
                if(this.tmpSkill[skill] === this.tmpSkill[this.tmpSkill.length-1]){

                    this.lskill += this.listSkill[tmp].id ;
                }else {

                   this.lskill += this.listSkill[tmp].id +",";
                }
              }
            }



          }
          console.log(this.lskill +"/"+this.cityId+"/"+this.industryId);
          console.log("indus: "+this.industryId);
          console.log("city: "+this.cityId);
          axios
            .get(Constants.URL+'/cv/search?listskill='+this.lskill+'&city='+ this.cityId +'&industry='+this.industryId)
            .then(response => {
              console.log(response)
              this.cvs = response.data.content;
                for(var cv in this.cvs){
                  var date = new Date(this.cvs[cv].createdDate);
                  // var tmp = date.getDay()
                  this.cvs[cv].createdDate = date.toISOString().substr(0, 10);
                }
                this.cvs.sort(function(a, b){return b.id - a.id});
              this.lskill = [];
            }
            )

        }

      },
      mounted() {
        axios
          .get(Constants.URL+'/skillmaster/')
          .then(response => {
            console.log(response)
            this.listSkill = response.data}
           )

        axios
          .get(Constants.URL+'/city/getAllCity')
          .then(response => (
            this.cities = response.data.data))
        axios
          .get(Constants.URL+'/industry')
          .then(response => (
            this.industries = response.data))

      }
    }
</script>

<style scoped>

</style>
