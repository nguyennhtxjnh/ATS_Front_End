<template>
  <v-container fluid fill-height >
    <v-layout align-center justify-center >
      <v-flex xs8 class="bgCustom pa-3">
        <v-flex xs12>
          <h2 class="textCustom text-xs-center pb-3">Thanh toán</h2>
        </v-flex>
        <v-divider></v-divider>
        <h3 style="color: #9f9f9f" class="pl-4 pt-4">Thông tin dịch vụ:</h3>
        <v-flex xs12 d-flex>
          <v-container class=" mb-3" fluid grid-list-md>
            <v-layout row wrap>

              <v-flex xs12><b>Tên dịch vụ: </b> {{formPackDetail.name}}</v-flex>
              <v-flex xs12><b>Thông tin dịch vụ: </b> {{formPackDetail.description}}</v-flex>
              <v-flex xs12><b>Thời hạn dịch vụ cung cấp: </b> {{formPackDetail.duration}} ngày</v-flex>
              <v-flex xs12><b>Giá: </b> {{formPackDetail.price}}</v-flex>
              <v-flex xs12>
                <b>Chức năng dịch vụ sẽ cung cấp:</b> {{formPackDetail.functionName}}
              </v-flex>

            </v-layout>
          </v-container>
        </v-flex>
        <h3 style="color: #9f9f9f" class="pl-4 pt-4">Tài khoản:</h3>
        <v-flex xs12 d-flex>
          <v-text-field class="pa-3" prepend-icon="mdi-account-badge" name="title" label="Họ và tên" type="text"></v-text-field>
          <v-text-field class="pa-3" prepend-icon="mdi-account-badge" name="title" label="Số tài khoản" type="text"></v-text-field>
        </v-flex>
        <v-flex xs12 class="justify-center align-center text-xs-center">
          <v-btn class="primary">Xác nhận</v-btn>
        </v-flex>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Axios from 'axios'

  export default {
    name: 'EmployerPayCheck',
    data() {
      return {
        formPackDetail: {
          id: '',
          name: '',
          status: '',
          duration: '',
          description: '',
          createdDate: '',
          price: '',
          functionpackagesById: [
            {
              id: '',
              servicePackageId: '',
              serviceFunctionId: ''
            }
          ],
          receiptsById: []
        },
      }
    },
    props: {
      serviceid: Number,
    },
    methods: {
      scrollToTop() {
        window.scrollTo(0,0);
      },
      viewInfo(){
        this.loading = true;
        Axios.get(`http://localhost:1122/servicePack/getServicePackDetail?id=${this.serviceid}`)
          .then(response => {
            this.formPackDetail = response.data.data;
            this.formPackDetail.createdDate = this.moment(this.formPackDetail.createdDate).format('DD-MM-YYYY');
            console.log(this.formPackDetail)
          })
          .catch(console.error)
          .finally(() => {
            this.loading = false;
          })
      },
    },
    mounted () {
      this.$nextTick(() => {
        this.scrollToTop();
        this.viewInfo();
      })
    }
  }
</script>

<style scoped>
  .textCustom {
    color: #ff5e2d;
    font-size: 30px;
  }
  .bgCustom {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
</style>
