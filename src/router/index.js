import Vue from 'vue'
import Router from 'vue-router'
import DashBoardLayout from "../layouts/DashBoardLayout";
import JobSeekerMainScreenPage from "../views/JobSeekerMainScreenPage";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DashBoardLayout',
      component: DashBoardLayout
    },
    {
      path: '/main-screen',
      name: 'Trang chu',
      component: JobSeekerMainScreenPage
    }
  ]
})
