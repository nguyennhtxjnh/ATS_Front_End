import Vue from 'vue'
import Router from 'vue-router'
import DashBoardLayout from "../layouts/DashBoardLayout";
import JobSeekerMainScreenPage from "../views/JobSeekerMainScreenPage";
import EmployerMainScreenPage from "../views/EmployerMainScreenPage";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DashBoardLayout',
      component: DashBoardLayout
    },
    {
      path: '/jobseeker-main-screen',
      name: 'Trang chu',
      component: JobSeekerMainScreenPage
    },
    {
      path: '/employer-main-screen',
      name: 'Trang chu',
      component: EmployerMainScreenPage
    }
  ]
})
