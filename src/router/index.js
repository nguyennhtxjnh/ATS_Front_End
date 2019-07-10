import Vue from 'vue'
import Router from 'vue-router'
import store from '../store.js'
import JobSeekerManageCVPage from "../views/Jobseeker/JobSeekerManageCVPage";
import DetailCVPage from "../views/Jobseeker/DetailCVPage";
import EmployerSignUpPage from '../views/Employer/EmployerSignUpPage'
import EmployerLoginPage from '../views/Employer/EmployerLoginPage'
import SearchJobResultPage from '../views/Jobseeker/SearchJobResultPage'
import EmployerDashBoardPage from '../views/Employer/EmployerDashBoardPage'
import JobSeekerLoginPage from "../views/Jobseeker/JobSeekerLoginPage";
import JobSeekerSignUpPage from "../views/Jobseeker/JobSeekerSignUpPage";
import JobSeekerMainScreenPage from "../views/Jobseeker/JobSeekerMainScreenPage";
import EmployerMainScreenPage from "../views/Employer/EmployerMainScreenPage";
import JobSeekerDashBoardPage from "../views/Jobseeker/JobSeekerDashBoardPage";
import EmployerCreateJobPage from "../views/Employer/EmployerCreateJobPage";
import EmployerJobDetailPage from "../views/Employer/EmployerJobDetailPage";
import JobSeekerCreateCV from "../views/Jobseeker/JobSeekerCreateCV";
import EmployerSearchCVPage from "../views/Employer/EmployerSearchCVPage";
import SuggestionCVPage from "../views/Employer/SuggestionCVPage";
import UpdateCVPage from "../views/Jobseeker/UpdateCVPage";
import EmployerCreateCompanyPage from '../views/Employer/EmployerCreateCompanyPage'
import JobSeekerViewJobDetailPage from '../views/Jobseeker/JobSeekerViewJobDetailPage'
import EmployerJobCreateReviewPage from '../views/Employer/EmployerJobCreateReviewPage'


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
      name: 'JobSeekerMainScreen',
      component: JobSeekerMainScreenPage
    },
    {
      path: '/trang-chu-tuyen-dung',
      name: 'employer-main-screen',
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
      path: '/tao-CV',
      name: 'createCV',
      component: JobSeekerCreateCV
    }
    ,
    {
      path: '/quan-li-CV',
      name: 'manageCV',
      component: JobSeekerManageCVPage
    },
    {
      path: '/xem-CV/:cvid',
      name: 'detailCV',
      component: DetailCVPage

    },
    {
      path: '/cap-nhat-CV/:cvid',
      name: 'updateCV',
      component: UpdateCVPage

    },
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
    },
    {
      path: '/tim-CV',
      name: 'searchCV',
      component: EmployerSearchCVPage
    }
    ,{
      path: '/goi-y-CV',
      name: 'suggestionCV',
      component: SuggestionCVPage
    }
    ,
    {
      path: '/tao-cong-ty',
      name: 'employer create company',
      component: EmployerCreateCompanyPage
    }
    ,
    {
      path: '/thong-tin-cong-viec/:id',
      name: 'job seeker view job',
      component: JobSeekerViewJobDetailPage
    }
    ,
    {
      path: '/dang-tin-tuyen-dung-thanh-cong',
      name: 'employer review created job',
      component: EmployerJobCreateReviewPage
    }
    ,
    // {
    //   path: '/detail/:id',
    //   component: Detail
    // }

  ]
})

router.beforeEach((to, from, next) => {

  if (store.getters['AUTHENTICATION_STORE/isLoggedIn1']) {
    store.dispatch('AUTHENTICATION_STORE/INIT1')
      .then(() => next())
      .catch(() => {
        store.dispatch('AUTHENTICATION_STORE/LOGOUT1')
          .then(() => {
            this.$router.push('/dang-nhap');
          });
      });
    next();
  }

  if (to.path === '/dang-nhap' || to.path === '/dang-ki') {
    if (store.getters['AUTHENTICATION_STORE/isLoggedIn1']) {
      store.dispatch('AUTHENTICATION_STORE/INIT1')
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
  }

  //--userid2

  if (store.getters['AUTHENTICATION_STORE/isLoggedIn2']) {
    store.dispatch('AUTHENTICATION_STORE/INIT2')
      .then(() => next())
      .catch(() => {
        store.dispatch('AUTHENTICATION_STORE/LOGOUT2')
          .then(() => {
            this.$router.push('/tuyen-dung-dang-nhap');
          });
      });
      next();
  }

  if (to.path === '/tuyen-dung-dang-ky' || to.path === '/tuyen-dung-dang-nhap') {
    // console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    if (store.getters['AUTHENTICATION_STORE/isLoggedIn2']) {
      store.dispatch('AUTHENTICATION_STORE/INIT2')
        .then(() => next('/trang-chu-tuyen-dung'))
        .catch(error => {
            if (error.response) {
              console.log(error.response.data)
            } else {
              console.log(error)
            }
            next('/tuyen-dung-dang-nhap')
          }
        );
      return;
    }
    next();
    return;
  }

  if (to.path === '/dang-tin-tuyen-dung') {
    if (!store.getters['AUTHENTICATION_STORE/isLoggedIn2']) {
      store.dispatch('AUTHENTICATION_STORE/INIT2')
        .then(() => next())
        .catch(error => {
            if (error.response) {
              console.log(error.response.data)
            } else {
              console.log(error)
            }
            next('/tuyen-dung-dang-nhap')
          }
        );
      return;
    }
    // next();
    // next('/dang-nhap');
    // return;
  }
  next();
});

export default router;


