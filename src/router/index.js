import Vue from 'vue'
import Router from 'vue-router'
import SignUpPage from '../views/JobSeekerSignUpPage'
import LoginPage from '../views/JobSeekerLoginPage'
import DashBoardLayout from "../layouts/DashBoardLayout";
import JobSeekerMainScreenPage from "../views/JobSeekerMainScreenPage";
import EmployerMainScreenPage from "../views/EmployerMainScreenPage";
import JobSeekerDashBoardPage from '../views/JobSeekerDashBoardPage'
import EmployerCreateJobPage from '../views/EmployerCreateJobPage'
import EmployerJobDetailPage from '../views/EmployerJobDetailPage'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'DashBoardLayout',
    //   component: JobSeekerDashBoardLayout
    // }
    // ,
    {
      path: '/dang-ki',
      name: 'Sign up',
      component: SignUpPage
    },
    {
      path: '/',
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
      path: '/profile',
      name: 'jobseekerdashboard',
      component: JobSeekerDashBoardPage
    }
    ,
    {
      path: '/dang-tin-tuyen-dung',
      name: 'employercreatejob',
      component: EmployerCreateJobPage
    }
    ,
    {
      path: '/viec-lam',
      name: 'employerjobdetail',
      component: EmployerJobDetailPage
    }
    ,
    // {
    //   path: '/detail/:id',
    //   component: Detail
    // }

  ]
})
