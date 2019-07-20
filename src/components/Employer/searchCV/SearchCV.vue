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
              item-value="id"
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
              item-value="id"
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
        <h4>Các vị trí tìm kiếm phổ biến:<i style="color: red">Nhân viên kinh doanh, Nhân viên Marketing, Chuyên viên Nhân sự, Lập trình viên</i> </h4>
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
              prepend-icon="mdi-robot-industrial"
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
            <h2 style="color: red"> Các vị trí đã được tối ưu kết quả tìm kiếm</h2>
            <i> Chúng tôi sẽ liên tục cập nhật các vị trí mới và gia tăng nguồn ứng viên phù hợp với nhu cầu tìm kiếm của bạn</i>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <h3>Hành chính văn phòng</h3>
            <table >
              <tr>
                <td class="pr-3">Chuyên viên Nhân sự (45,105)</td>
                <td class="pr-3">Chuyên viên Tuyển dụng (12,714)</td>
                <td>Nhân viên Hành chính - Văn phòng (63,194)</td>
              </tr>
              <tr>
                <td class="pr-3">Nhân viên Hành chính - Nhân sự (45,105)</td>
                <td class="pr-3">Nhân viên Hành chính - Kế toán (12,714)</td>
                <td>Thu ngân (63,194)</td>
              </tr>
              <tr>
                <td class="pr-3">Kế toán (45,105)</td>
                <td class="pr-3">Lễ tân (12,714)</td>
                <td>Giao dịch viên (63,194)</td>
              </tr>
            </table>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex md4 xs12 class="pl-3">
        <v-card class="pa-3">
          <v-layout row wrap>
            <v-icon class="mr-2">mdi-pen-minus</v-icon>
            <h2>Ưu tiên hiển thị ứng viên</h2>
          </v-layout>
          <v-radio-group v-model="radios" :mandatory="false">
            <v-radio label="Cập nhật mới nhất" value="1"></v-radio>
            <v-radio label="Đang tìm viêc" value="2"></v-radio>
            <v-radio label="Có kinh nghiệm làm việc" value="3"></v-radio>
            <v-radio label="Ứng viên phù hợp" value="4"></v-radio>
          </v-radio-group>
          <v-divider></v-divider>
          <v-layout row wrap>
            <v-icon class="mr-2">mdi-calendar-blank</v-icon>
            <h2>Tuổi</h2>
          </v-layout>
          <v-layout row wrap>
            <v-flex md6 class="pr-2">
              <v-select
                :items="items"
                label="Từ"
                outline
              ></v-select>
            </v-flex>

            <v-flex md6 class="pl-2">
              <v-select
                :items="items"
                label="Dến"
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

                    this.lskill += this.listSkill[tmp].skillName ;
                }else {

                   this.lskill += this.listSkill[tmp].skillName +",";
                }
              }
            }



          }
          console.log(this.lskill +"/"+this.cityId+"/"+this.industryId);
          console.log("indus: "+this.industryId);
          console.log("city: "+this.cityId);
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
