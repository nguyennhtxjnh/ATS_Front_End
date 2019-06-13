import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DashBoardLayout from '../layouts/DashBoardLayout'
import SignUpPage from '../views/SignUpPage'
import Detail from '../views/Detail'
import LoginPage from '../views/LoginPage'
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
      name: 'Trang chu',
      component: EmployerMainScreenPage
    }
    ,
    {
      path: '/dang-nhap',
      name: 'login',
      component: LoginPage
    }
    ,
    // {
    //   path: '/detail/:id',
    //   component: Detail
    // }

  ]
})
