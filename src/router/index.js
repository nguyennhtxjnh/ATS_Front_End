import Vue from 'vue'
import Router from 'vue-router'
import SignUpPage from '../views/SignUpPage'
import LoginPage from '../views/LoginPage'
import DashBoardLayout from "../layouts/DashBoardLayout";
import JobSeekerMainScreenPage from "../views/JobSeekerMainScreenPage";
import EmployerMainScreenPage from "../views/EmployerMainScreenPage";
import JobSeekerDashBoardPage from '../views/JobSeekerDashBoardPage'
import EmployerJobDetailPage from '../views/EmployerJobDetailPage'
import JobSeekerCreateCV from "../views/JobSeekerCreateCV";
import JobSeekerManageCVPage from "../views/JobSeekerManageCVPage";
import DetailCVPage from "../views/DetailCVPage";

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
      path: '/trang-chu-nguoi-tim-viec',
      name: 'jobseekermainscreen',
      component: JobSeekerMainScreenPage
    },
    {
      path: '/trang-chu-nha-tuyen-dung',
      name: 'employermainscreen',
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
    ,   {
      path: '/tao-CV',
      name: 'jobseekercreateCV',
      component: JobSeekerCreateCV
    }
    ,
    {
      path: '/viec-lam',
      name: 'employerjobdetail',
      component: EmployerJobDetailPage
    }
    ,
    {
      path: '/quan-li-CV',
      name: 'manageCV',
      component: JobSeekerManageCVPage
    },
    {
      path: '/xem-CV',
      name: 'detailCV',
      component: DetailCVPage

    },
    { path: '*', component: DetailCVPage }
    // {
    //   path: '/detail/:id',
    //   component: Detail
    // }

  ]
})
