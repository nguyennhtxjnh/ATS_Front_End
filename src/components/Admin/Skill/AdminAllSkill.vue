<template>
  <v-container fluid class="pt-0">
    <v-layout row wrap align-right>

      <v-flex xs12>
        <v-container fluid class="pt-0">
          <v-layout row wrap align-right>
            <v-flex xs7>

            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs5>
              <v-text-field
                v-model="search"
                append-icon="search"
                label="Tìm kiếm theo tên kỹ năng"
                single-line
                hide-details
                outline
                @input="getAllSkill()"
                class="mb-3"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>

      <v-flex xs12>
        <v-layout row wrap>
          <v-flex md5 xs12 >
            <v-layout row wrap>

              <v-flex md10>
                <h2 class="textCustom pb-5" >Thêm kỹ năng mới</h2>
                <v-select
                  v-model="addSkill.skillTypeId"
                  :items="skillTypes"
                  item-text="typeName"
                  item-value="id"
                  label="Kiểu kỹ năng"
                  solo
                ></v-select>
                <v-text-field
                  v-model="addSkill.skillName"
                  label="Tên Kỹ năng"
                  solo
                ></v-text-field>
                <v-btn color="warning"  @click="addS" >Thêm kỹ năng </v-btn>
              </v-flex>

            </v-layout>


          </v-flex>
<v-spacer/>

          <v-flex md7 xs12>
            <h2 class="textCustom">Tất Cả Kỹ Năng</h2>
            <v-data-table
              :items="Skill"
              :headers="headers"
              :loading="loading"
              :pagination.sync="pagination"
              :total-items="pagination.totalItems"
              :rows-per-page-text="'Số hàng mỗi trang'"
              :rows-per-page-items="[10, 25, 50, {text: 'Tất cả', value: -1}]"
              :no-data-text="'Không có dữ liệu'"
              :no-results-text="'Không tìm thấy dữ liệu tương ứng'"
              :must-sort="true"
            >

              <template #pageText="{pageStart, pageStop, itemsLength}">
                {{pageStart}} - {{pageStop}} của tổng cộng {{itemsLength}}
              </template>

              <template #items="{item}">
                <td class="text-xs">{{item.skillName}}</td>
                <td class="text-xs">
                  <template v-for="i in skillTypes">
                    <span v-if="i.id === item.skillTypeId">
                       {{i.typeName}}
                    </span>
                  </template>
                 </td>
                <!--            <td class="text-xs">{{item.cityName}}</td>-->
                <!--            <td class="text-xs">{{moment(item.createdDate).format('DD-MM-YYYY')}}</td>-->
                <!--            <td class="text-xs-left">-->
                <!--              <v-chip color="error" v-if="item.status === 'new'">-->
                <!--                <span style="color: white !important;">Đang chờ duyệt</span>-->
                <!--              </v-chip>-->
                <!--              <v-chip color="success" v-if="item.status === 'approved'">-->
                <!--                <span style="color: white !important;">Đã duyệt</span>-->
                <!--              </v-chip>-->
                <!--              <v-chip color="error" v-if="item.status === 'ban'">-->
                <!--                <span style="color: white !important;">Đã cấm</span>-->
                <!--              </v-chip>-->
                <!--              <v-chip color="grey" v-if="item.status === 'deny'">-->
                <!--                <span style="color: white !important;">Từ chối duyệt</span>-->
                <!--              </v-chip>-->

                <!--            </td>-->


                <!--            <td class="text-xs-left">-->

                <!--              &lt;!&ndash;              <v-btn outline flat fab small @click="viewInfo(item.id)" color="grey">&ndash;&gt;-->
                <!--              &lt;!&ndash;                <v-icon>mdi-eye-outline</v-icon>&ndash;&gt;-->
                <!--              &lt;!&ndash;              </v-btn>&ndash;&gt;-->
                <!--              <v-btn-->
                <!--                outline flat fab small color="grey"-->
                <!--                @click="viewInfo(item.id)"-->
                <!--                @click.stop="dialog = true">-->
                <!--                <v-icon>mdi-eye-outline</v-icon>-->
                <!--              </v-btn>-->

                <!--            </td>-->
              </template>

            </v-data-table>
          </v-flex>
        </v-layout>



      </v-flex>


    </v-layout>

  </v-container>
</template>

<script>
  import Swal from 'sweetalert2'
    import Axios from 'axios'
    import Constants from '@/stores/constant.js'

    export default {
        name: 'AdminAllSkill',
        data() {
            return {
              addSkill:{
                skillName:'',
                skillTypeId:'',
              },
                search: '',
                Skill: [],
                dialogActive: false,
                dialogBan: false,
                loading: false,
                dialog: false,
                headers: [
                    {text: 'Tên Kỹ Năng', value: 'skillName',},
                    {text: 'Kiểu Kỹ Năng', value: 'skillTypeId',},
                ],
                pagination: {
                    sortBy: 'skillName',
                    ascending: true
                },
                SkillDetail: {
                    usersEmail: '',
                    address: '',
                    cityName: '',
                    cityId: '',
                    SkillindustriesById: '',
                    createdDate: '',
                    description: '',
                    email: '',
                    id: '',
                    lastModify: '',
                    logoImg: '',
                    skillName: '',
                    status: '',
                    telephoneNumber: ''
                },
                formJobStatusData: {
                    id: '',
                    status: '',
                },
              skillTypes:[],

            }
        },
        methods: {
          addS(){
            Axios.post( Constants.URL+'/skillmaster/',
              this.addSkill
            ).then(response => {
              console.log(response.data)
              if(response.data === true){
                Swal.fire({
                  type: 'success',
                  title: 'Đã lưu Skill',
                  showConfirmButton: false,
                  timer: 1500
                })
                this.addSkill.skillTypeId = "";
                this.addSkill.skillName = "";
                this.getAllSkill();

              }else {
                this.$notify({
                  group: 'foo',
                  type: 'fail',
                  title: 'Thất bại',
                  text: 'Kỹ năng đã tồn tại!'
                })
                this.addSkill.skillTypeId = "";
                this.addSkill.skillName = "";
              }

            })

          },
            addSkillId(id) {
                this.formJobStatusData.id = id;
            },
            changeStatus(status) {
                this.formJobStatusData.status = status;
                const url = Constants.URL + '/Skill/changeSkillStatus'
                const method = 'POST'
                const data = this.formJobStatusData
                console.log(data)
                Axios({url, method, data})
                    .then(response => {
                        if (data.status === 'ban') {
                            this.$notify({
                                group: 'foo',
                                type: 'success',
                                title: 'Thành công',
                                text: 'Cấm công ty thành công!'
                            })
                        } else {
                            if (data.status === 'approved') {
                                this.$notify({
                                    group: 'foo',
                                    type: 'success',
                                    title: 'Thành công',
                                    text: 'Kích hoạt công ty thành công!'
                                })
                            }
                            // this.$notify({
                            //   group: 'foo',
                            //   type: 'success',
                            //   title: 'Thành công',
                            //   text: 'Từ chối duyệt công ty thành công!'
                            // })
                        }
                        this.getAllSkill();
                        this.dialogActive = false;
                        this.dialogBan = false;
                        this.dialog = false;
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            viewInfo(id) {
                for (let i = 0; i < this.Skill.length; i++) {
                    if (id === this.Skill[i].id) {
                        this.SkillDetail = this.Skill[i]
                    }
                }
            },
            getAllSkill() {
                this.loading = true;
                Axios.get(Constants.URL + '/skillmaster/getAllSkill?search=' + this.search + '&status=')
                    .then(response => {
                        this.Skill = response.data.data.content;
                        console.log(this.Skill)
                    })
                    .catch(err => console.log(err))
                    .finally(() => this.loading = false);
            },

        },
    mounted() {
      Axios
        .get(Constants.URL+'/skilltype/getAll')
        .then(response => {
            this.skillTypes = response.data;

          }
        )

    }
      ,
        watch: {
            pagination() {
                this.getAllSkill()
            },
        },
        beforeMount() {

        },
    }
</script>

<style scoped>
  .textCustom {
    color: #ff5e2d;
  }
</style>
