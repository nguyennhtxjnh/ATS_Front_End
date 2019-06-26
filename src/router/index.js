import Vue from 'vue'
import Router from 'vue-router'
import store from '../store.js'
import JobSeekerMainScreenPage from "../views/Jobseeker/JobSeekerMainScreenPage";
import EmployerMainScreenPage from "../views/Employer/EmployerMainScreenPage";
import JobSeekerDashBoardPage from '../views/Jobseeker/JobSeekerDashBoardPage'
import EmployerCreateJobPage from '../views/Employer/EmployerCreateJobPage'
import EmployerJobDetailPage from '../views/Employer/EmployerJobDetailPage'
import axios from 'axios'
import EmployerSignUpPage from '../views/Employer/EmployerSignUpPage'
import EmployerLoginPage from '../views/Employer/EmployerLoginPage'
import JobSeekerSignUpPage from '../views/Jobseeker/JobSeekerSignUpPage'
import JobSeekerLoginPage from '../views/Jobseeker/JobSeekerLoginPage'
import SearchJobResultPage from '../views/Jobseeker/SearchJobResultPage'
import EmployerDashBoardPage from '../views/Employer/EmployerDashBoardPage'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/dang-ky',
      name: 'Sign up',
      component: JobSeekerSignUpPage
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
      component: JobSeekerLoginPage
    }
    ,
    {
      path: '/thong-tin',
      name: 'jobseeker profile',
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
      name: 'employer job detail',
      component: EmployerJobDetailPage
    }
    ,
    {
      path: '/tuyen-dung-dang-ky',
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
    {
      path: '/tim-kiem',
      name: 'job result',
      component: SearchJobResultPage
    }
    ,
    {
      path: '/tuyen-dung-thong-tin',
      name: 'employer profile',
      component: EmployerDashBoardPage
    }
    ,
    // {
    //   path: '/detail/:id',
    //   component: Detail
    // }

  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/dang-nhap' || to.path === '/dang-ky') {
    if (store.getters['AUTHENTICATION_STORE/isLoggedIn']) {
      store.dispatch('AUTHENTICATION_STORE/INIT')
        .then(() => next('/'))
        .catch(error => {
            if (error.response) {
              console.log(error.response.data)
            } else {
              console.log(error)
            }
            next('/dang-nhap')
          }
        );
      return;
    }
    next();
    return;
  } else {
    if (store.getters['AUTHENTICATION_STORE/isLoggedIn']) {
      store.dispatch('AUTHENTICATION_STORE/INIT')
        .then(() => next())
        .catch(() => {
          next();
          return;
        }
          );
      next();
      return;
    }
  }

  // if (to.path === '/dang-tin-tuyen-dung') {
  //   if (!store.getters['AUTHENTICATION_STORE/isLoggedIn']) {
  //     store.dispatch('AUTHENTICATION_STORE/INIT')
  //       .then(() => next())
  //       .catch(error => {
  //           if (error.response) {
  //             console.log(error.response.data)
  //           } else {
  //             console.log(error)
  //           }
  //           next('/dang-nhap')
  //         }
  //       );
  //     return;
  //   }
  //   next();
  //   next('/dang-nhap');
  //   return;
  // }
  next();
});

export default router;


