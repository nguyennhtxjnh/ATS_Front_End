import Vue from 'vue'
import Router from 'vue-router'
import SignUpPage from '../views/SignUpPage'
import LoginPage from '../views/LoginPage'
import DashBoardLayout from "../layouts/DashBoardLayout";
import JobSeekerMainScreenPage from "../views/JobSeekerMainScreenPage";
import EmployerMainScreenPage from "../views/EmployerMainScreenPage";
import JobSeekerDashBoardPage from '../views/JobSeekerDashBoardPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DashBoardLayout',
      component: DashBoardLayout
    }
    ,
    {
      path: '/dang-ki',
      name: 'Sign up',
      component: SignUpPage
    },
    {
      path: '/jobseeker-main-screen',
      name: 'Trang chu',
      component: JobSeekerMainScreenPage
    },
    {
      path: '/employer-main-screen',
      name: 'Trang chu 2',
      component: EmployerMainScreenPage
    }
    ,
    {
      path: '/dang-nhap',
      name: 'login',
      component: LoginPage
    }
    ,
    {
      path: '/profile/:id',
      name: 'jobseekerdashboard',
      component: JobSeekerDashBoardPage
    }
    ,
    // {
    //   path: '/detail/:id',
    //   component: Detail
    // }

  ]
})
