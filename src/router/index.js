import Vue from 'vue'
import Router from 'vue-router'
import store from '../store.js'
import SignUpPage from '../views/SignUpPage'
import LoginPage from '../views/LoginPage'
import JobSeekerMainScreenPage from "../views/JobSeekerMainScreenPage";
import EmployerMainScreenPage from "../views/EmployerMainScreenPage";
import JobSeekerDashBoardPage from '../views/JobSeekerDashBoardPage'
import EmployerJobDetailPage from '../views/EmployerJobDetailPage'
import axios from 'axios'
import EmployerSignUpPage from '../views/EmployerSignUpPage'
import EmployerLoginPage from '../views/EmployerLoginPage'
import JobSeekerCreateCV from "../views/JobSeekerCreateCV";
import JobSeekerManageCVPage from "../views/JobSeekerManageCVPage";
import DetailCVPage from "../views/DetailCVPage";

Vue.use(Router)

const router = new Router({
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
      path: '/thong-tin',
      name: 'jobseekerdashboard',
      component: JobSeekerDashBoardPage
    }
    ,   {
      path: '/tao-CV',
      name: 'jobseekercreateCV',
      component: JobSeekerCreateCV}
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
    {
      path: '/tuyen-dung-dang-ki',
      name: 'employer dang ki',
      component: EmployerSignUpPage
    }
    ,
    {
      path: '/tuyen-dung-dang-nhap',
      name: 'employer dang nhap',
      component: EmployerLoginPage
    }
    ,
    // {
    //   path: '/detail/:id',
    //   component: Detail
    // }

  ]
})

router.beforeEach((to, from, next) => {
  if (store.getters['AUTHENTICATION_STORE/isLoggedIn']) {
    store.dispatch('AUTHENTICATION_STORE/INIT')
      .then(() => next())
      .catch(() => next());
    next();
    return;
  }
  if (to.path === '/dang-nhap' || to.path === '/dang-ki') {
    // if (store.getters['AUTHENTICATION_STORE/isLoggedIn']) {
    //   store.dispatch('AUTHENTICATION_STORE/INIT')
    //     .then(() => next('/'))
    //     .catch(error => {
    //         if (error.response) {
    //           console.log(error.response.data)
    //         } else {
    //           console.log(error)
    //         }
    //         next('/dang-nhap')
    //       }
    //     );
    //   return;
    // }
    next();
    return;
  }
  if (to.path === '/dang-tin-tuyen-dung') {
    // if (!store.getters['AUTHENTICATION_STORE/isLoggedIn']) {
    //   store.dispatch('AUTHENTICATION_STORE/INIT')
    //     .then(() => next())
    //     .catch(error => {
    //         if (error.response) {
    //           console.log(error.response.data)
    //         } else {
    //           console.log(error)
    //         }
    //         next('/dang-nhap')
    //       }
    //     );
    //   return;
    // }
    // next();
    next('/dang-nhap');
    return;
  }
  next();
});

export default router;


