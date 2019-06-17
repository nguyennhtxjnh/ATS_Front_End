import Vue from 'vue'
import Router from 'vue-router'
import store from '../store.js'
import SignUpPage from '../views/JobSeekerSignUpPage'
import LoginPage from '../views/JobSeekerLoginPage'
import JobSeekerMainScreenPage from "../views/JobSeekerMainScreenPage";
import EmployerMainScreenPage from "../views/EmployerMainScreenPage";
import JobSeekerDashBoardPage from '../views/JobSeekerDashBoardPage'
import EmployerCreateJobPage from '../views/EmployerCreateJobPage'
import EmployerJobDetailPage from '../views/EmployerJobDetailPage'

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

router.beforeEach((to, from, next) => {
  if (to.path === '/dang-nhap' || to.path === '/dang-ki') {
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
  }
  if (!store.getters['AUTHENTICATION_STORE/isLoggedIn']) {
    next('/dang-nhap');
    return;
  }
  if (!store.getters['AUTHENTICATION_STORE/isInit']) {
    store.dispatch('AUTHENTICATION_STORE/INIT')
      .then(() => next())
      .catch(() => next('/dang-nhap'));
    return;
  }
  next();
});

export default router;


