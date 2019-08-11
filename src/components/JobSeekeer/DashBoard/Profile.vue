<template>

      <v-container>

          <v-form ref="form">
            <v-layout row wrap class="pa-3">
          <v-flex  xs12>
            <v-text-field class="ma-2" prepend-icon="person" name="Name" label="Họ Và Tên*" type="text"
                          v-model="userDetail.fullname" maxlength="25"
                          :rules="[rules.required]"></v-text-field>
          </v-flex>

          <v-flex  xs12>
            <v-text-field class="ma-2" prepend-icon="phone" name="phone" label="Số Điện Thoại Cá Nhân*" type="text"
                          v-model="userDetail.telephoneNumber"
                          :rules="[rules.required, rules.telephone]"></v-text-field>
          </v-flex>

          <v-flex xs12 >
            <v-autocomplete class="ma-2"
                            :rules="[rules.required]"
                            v-model="userDetail.jobLevelID"
                            prepend-icon="mdi-account-badge-horizontal"
                            :items="LevelAPI"
                            item-text="jobLevelName"
                            item-value="id"
                            label="Vị Trí Công Tác"

            ></v-autocomplete>
          </v-flex>


          <v-flex xs12>
            <v-autocomplete class="ma-2"
                            :rules="[rules.required]"
                            v-model="userDetail.cityid"
                            prepend-icon="mdi-map-marker-radius"
                            :items="CityAPI"
                            item-text="fullName"
                            item-value="id"
                            label="Nơi Làm Việc"
                            hint="Chọn Tỉnh, Thành Phố"
                            persistent-hint

            ></v-autocomplete>

          </v-flex>

          <v-flex  xs12>
            <v-text-field class="ma-2" prepend-icon="mdi-map-marker-radius" name="Name" label="Địa chỉ" type="text"
                          v-model="userDetail.address"
                         ></v-text-field>
          </v-flex>
          <v-flex  xs12>
            <v-text-field class="ma-2" prepend-icon="mdi-box-cutter" name="Name" label="Mô tả" type="text"
                          v-model="userDetail.description"
                          ></v-text-field>
          </v-flex>
            </v-layout>
          </v-form>

        <v-flex xs12>
          <v-layout row wrap>
            <v-spacer/>
            <v-btn outline color="warning" @click="update">Cập nhật hồ sơ</v-btn>
            <v-spacer/>
          </v-layout>

        </v-flex>
      </v-container>

</template>

<script>
  import axios from 'axios'
  import {mapGetters} from 'vuex';
  import Constants from '@/stores/constant.js'
    export default {
        name: "Profile",
      data: function () {
        return{
          userId:'',
          active: null,
          isActive: true,
          userDetail:'',
          LevelAPI:[],
          CityAPI:[],

          tab: null,
          menu: [
            {name:'Thông Báo Việc Làm', id:'1'},   {name:'Cập nhật thông tin cá nhân', id:'2'}
          ],
          rules: {
            required: value => !!value || 'Không được để trống ô này.',
            counter: value => value.length <= 25 || 'Tối Đa 25 Kí Tự',
            min: v => v.length >= 8 || 'Ít Nhất 8 Kí Tự',
            telephone: value => {
              const pattern = /^[0-9]{10,12}$/
              return pattern.test(value)|| 'Phải dùng 10 tới 12 chữ số'
            },
            cemail: value => {
              const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              return pattern.test(value) || 'Địa chỉ email không phù hợp.'
            }
          },
        }
      },
      methods:{
          update(){
            if (this.$refs.form.validate()) {
              const url = Constants.URL+'/user/updateUser';
              const method = 'POST';
              const data = this.userDetail
              axios({url, method, data})
                .then(response => {
                  console.log(response);
                  if(response.data.success === true){
                    this.$notify({
                      group: 'foo',
                      type: 'success',
                      title: 'Thành công',
                      text: 'Cập nhật hồ sơ thành công!'
                    })
                  }

                })
            }
          },
        getComponent(){

          const url = Constants.URL+'/user/getRegisterEmployerComponent';
          const method = 'GET';
          axios({url, method})
            .then(response => {
              console.log(response);
              if (response.data.success == true) {
                console.log(response)
                this.LevelAPI = response.data.data.level;
                this.CityAPI = response.data.data.city;

                this.CityAPI.splice(0, 1);


              } else {
                this.$notify({
                  group: 'foo',
                  type: 'error',
                  title: 'Thất Bại',
                  text: 'Lấy Component Thất Bại!'
                })
              }

            })
            .catch(error => {
              console.log(error)
              this.$notify({
                group: 'foo',
                type: 'error',
                title: 'Thất Bại',
                text: 'Đã Xảy Ra Lỗi!'
              })
            })
            .finally(() => {

            })
          if(this.userId1 != null && this.userId1 != ""){
            this.userId = this.userId1;
            axios
              .post(Constants.URL+'/user/findUserByUserId?id='+this.userId)
              .then(response => {
                  if(response.data.success === true){
                    this.userDetail = response.data.data;
                  }

                }
              )
          }

        }
      },
      mounted(){
        this.getComponent();
      },
      watch:{
        userId1(){
          this.getComponent();
        }
      },
      computed: {
        ...mapGetters('AUTHENTICATION_STORE',{
          email : 'email1',
          roleId: 'roleId1',
          fullName: 'fullName1',
          userId1: 'userId1'
        }),
      },
    }
</script>

<style scoped>

</style>
