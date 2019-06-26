<template>
    <v-card>
      <v-img
        :src="images.main"
        height="400px"

      >
        <v-container>
          <v-card-title class="white--text pl-5 pt-5" >
            <h1 style="font-size: 60px" align="center">Đăng tin tuyển dụng & tìm hồ sơ ứng viên hiệu quả</h1>
          </v-card-title>
        </v-container>


          <v-spacer></v-spacer>


      </v-img>
      <v-card style="background-color: white">
        <v-container align-center>
          <v-layout row wrap >
            <v-flex md12 xs12 >
              <h1 align="center" >Lựa Chọn Dịch Vụ Phù Hợp</h1>
            </v-flex>
            <v-flex md12 xs12>

              <v-tabs
                fixed-tabs
                v-model="active"
                slider-color="yellow"
              >
                <v-tab
                  v-for="service in services"
                  :key="service"
                  ripple
                >
                  Item {{ service.id}}

                </v-tab>
                <v-tab-item
                  v-for="service in services"
                  :key="service"
                >
                  <v-card flat>
                    <v-card-text>{{ service.name }}</v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs>


            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
      <v-card style="background-color: white" >
        <v-container>
          <h1 align="center">Đảm Bảo Hài Lòng hoặc Miễn Phí Đăng Lại Tin Tuyển Dụng</h1>
          <h4 align="center">Hãy liên lạc với chuyên viên tư vấn của chúng tôi trong vòng 10 ngày làm việc kể từ khi tin đăng tuyển
            có trả phí của Quý khách hết hạn, nếu Quý khách không hài lòng với kết quả đăng tuyển của mình.</h4>
        </v-container>
      </v-card>
      <v-card style="background-color: #efebeb">
        <v-container>
          <v-layout row wrap>
            <v-flex md6 xs12>
              <div id="progress">
                <!--item 1-->
                <div class="step">
                  <span class="indicator "></span>
                  <h5 class="title">Nhận yêu cầu từ doanh nghiệp</h5>
                  <div class="desc">Chuyên viên tư vấn của chúng tôi sẽ trao đổi với nhà tuyển dụng qua điện thoại hoặc gặp gỡ trực tiếp để hiểu rõ nhu cầu tuyển dụng.</div>
                </div>
                <!--item 2-->
                <div class="step">
                  <span class="indicator "></span>
                  <h5 class="title">Tìm ứng viên phù hợp</h5>
                  <div class="desc">Chúng tôi sẽ tiến hành tìm kiếm và phân loại những ứng viên tiềm năng nhất cho vị trí cần tuyển dụng và gửi trước cho nhà tuyển dụng xem.
                  </div>
                </div>
                <!--item 3-->
                <div class="step">
                  <span class="indicator "></span>
                  <h5 class="title ">Mời phỏng vấn</h5>
                  <div class="desc ">Chuyên viên tuyển dụng của chúng tôi sẽ chủ động mời ứng viên đạt các tiêu chí cơ bản và có CV phù hợp đi phỏng vấn.</div>
                </div>
              </div>
            </v-flex>
            <v-flex md6 xs12>
              <h1 align="center">Dịch vụ Tuyển dụng trọn gói</h1>
              <div  class="desc" align="left">Đội ngũ Tư vấn tuyển dụng của chúng tôi sẽ chủ động lựa chọn ứng viên phù hợp và gửi danh sách tới Nhà tuyển dụng.
                Đảm bảo tính nhanh gọn - hiệu quả - tiết kiệm thời gian..</div>

            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
      <v-card style="background-color: #efebeb" >
        <v-container>
          <h1 align="left">Hotline Tư vấn Dịch vụ Tuyển dụng</h1>
            <v-layout row wrap>
              <v-flex md6 xs12>
                <h4>  <v-btn icon>
                  <v-icon color="orange darken-2" >mdi-phone</v-icon>
                </v-btn>Tổng đài</h4>
                <h4>(024) 999 99 999 (Trong giờ hành chính)</h4>
              </v-flex>
              <v-flex md6 xs12>
                <h4>  <v-btn icon>
                  <v-icon color="orange darken-2" >mdi-phone</v-icon>
                </v-btn> Hotline</h4>
                <h4>000 111 2222 - Mr. An</h4>
              </v-flex>
            </v-layout>
        </v-container>
      </v-card>
      <v-card style="background-color: #fe7013">
        <v-container>
          <v-layout row wrap>
            <v-flex md8 xs13>
              <h1 style="color: white">Tìm kiếm tài năng ngay bây giờ</h1>
            </v-flex>
            <v-flex md4 xs13>

              <v-btn color="primary" ><h4>Tìm ứng viên</h4></v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-card>
</template>

<script>
    export default {
        name: "EmployeeMainScreen",
      data : ()=>{ return {
        images : {'main' : require('@/assets/empmain1.jpg')},
        active: null,
        services : [ { id: "1", name: "Foo" }, { id: "2", name: "Bar" }, { id: "3", name: "Baka" }, { id: "4", name: "Pig" }, ],
        text: 'Lorem ipsum dolor sit amet'
      }
    },

    }
</script>

<style scoped>
  #progress .indicator {
    height: 11px;
    width: 11px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 10px;
    position: absolute;
    top: 0;
    left: -6px;
    background-color: #888;
  }

  #progress .step {
    cursor: pointer;
    min-height: 100px;
    border-left: 1px solid #ccc;
    padding-left: 30px;
    padding-bottom: 10px;
    position: relative;
    margin-bottom: 10px;
  }
  #progress .step:hover {
    border-color: #fe7013;
  }

  #progress .step:hover .indicator {
    background-color: #fe7013;
  }

  #progress .step:hover .title {
    color: #fe7013;
  }

  #progress .step .title {
    font-weight: bold;
    font-family: 'Times New Roman', Times, serif;
  }

  #progress .step .desc {
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
  }

  .des {
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
  }
</style>
