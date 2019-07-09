<template>
  <v-container>
    <v-card class="pa-5 ">
      <v-layout row wrap >
        <v-flex md6 xs12 class="mr-2" >
          <v-layout row>
            <v-icon color="orange darken-2">mdi-account-circle-outline</v-icon>
            <v-text-field
              v-model="industry"
              :rules="[() => industry.length > 0 ||'Không được để trống']"
              label="Vị trí công việc* "
            ></v-text-field>
          </v-layout>

        </v-flex>
        <v-spacer/>
        <v-flex md3 xs12 class="mr-2">
          <v-layout row>
            <v-icon color="orange darken-2">mdi-map-marker</v-icon>
            <v-text-field
              v-model="address"
              :rules="[() => address.length > 0 ||'Không được để trống']"
              label="Địa điểm* "
            ></v-text-field>
          </v-layout>
        </v-flex>
        <v-spacer/>
        <v-flex md1 xs12 >
          <v-btn color="warning" ><h4>Tìm kiếm</h4></v-btn>
        </v-flex>
        <v-spacer/>
      </v-layout>
      <v-layout row wrap class="pb-3">
        <h4>Các vị trí tìm kiếm phổ biến:<i style="color: red">Nhân viên kinh doanh, Nhân viên Marketing, Chuyên viên Nhân sự, Lập trình viên</i> </h4>
      </v-layout>
      <v-divider class="pb-3"></v-divider>
      <v-layout row wrap>
        <v-flex md6 xs12 class="mr-2" >
          <v-layout row>
            <v-icon color="orange darken-2">mdi-widgets</v-icon>
            <v-text-field
              v-model="skill"
              :rules="[() => skill.length > 0 ||'Không được để trống']"
              label="Kỹ năng của mà bạn đang tìm kiếm "
            ></v-text-field>
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
            <v-icon class="">mdi-pen-minus</v-icon>
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
            <v-icon class="">mdi-calendar-blank</v-icon>
            <h2>Năm sinh</h2>
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
            <v-icon class="">mdi-gender-male-female</v-icon>
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


</template>

<script>
    export default {
        name: "SearchCV",
      data: () => ( {
        industry:'',
        address:'',
        skill:'',
        radios:'1',
        items:['1989','1990','1991','1992','1993','1994','1995'],
        gender:'',
        genders: [{id: "1", name: "Nữ"}, {id: "2", name: "Nam"}, {id: "3", name: "Khác"}],
      })
    }
</script>

<style scoped>

</style>
