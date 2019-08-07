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
import JobSeekerCreateCV from "../views/Jobseeker/JobSeekerCreateCV";
import EmployerSearchCVPage from "../views/Employer/EmployerSearchCVPage";
import SuggestionCVPage from "../views/Employer/SuggestionCVPage";
import UpdateCVPage from "../views/Jobseeker/UpdateCVPage";
import EmployerCreateCompanyPage from '../views/Employer/EmployerCreateCompanyPage'
import JobSeekerViewJobDetailPage from '../views/Jobseeker/JobSeekerViewJobDetailPage'
import EmployerJobCreateReviewPage from '../views/Employer/EmployerJobCreateReviewPage'
import TabJobPage from "../views/Jobseeker/TabJobPage";
import ManageJobPage from "../views/Employer/ManageJobPage";
import CVAppliedPage from "../views/Employer/CVAppliedPage";
import ViewCVAppliedPage from "../views/Employer/ViewCVAppliedPage";
import ManageJobSeekerPage from "../views/Employer/ManageJobSeekerPage";
import AdminDashBoardPage from '../views/Admin/AdminDashBoardPage'
import AdminLoginPage from '../views/Admin/AdminLoginPage'
import AdminViewAllNewJobPage from '../views/Admin/AdminViewAllNewJobPage'
import AdminAllServicePage from '../views/Admin/AdminAllServicePage'
import AdminViewAllCompanyPage from '../views/Admin/AdminViewAllCompanyPage'
import AdminViewAllAccountPage from '../views/Admin/AdminViewAllAccountPage'
import AdminViewAllNewCompanyPage from '../views/Admin/AdminViewAllNewCompanyPage'
import EmployerCompanyApplyPage from '../views/Employer/EmployerCompanyApplyPage'
import ListSuggestJobPage from "../views/Jobseeker/ListSuggestJobPage";
import EmployerGetServicePage from '../views/Employer/EmployerGetServicePage'
import ViewJobSimilar from "../views/Jobseeker/ViewJobSimilar";
import CheckEmailEmloyeerPage from "../views/Employer/CheckEmailEmloyeerPage";



Vue.use(Router)

const router = new Router({
    routes: [{
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
        },
        {
            path: '/dang-nhap',
            name: 'login',
            component: JobSeekerLoginPage
        },
        {
            path: '/thong-tin',
            name: 'jobseeker profile',
            component: JobSeekerDashBoardPage
        },
        {
            path: '/dang-tin-tuyen-dung',
            name: 'employercreatejob',
            component: EmployerCreateJobPage
        },
        {
            path: '/tao-CV',
            name: 'createCV',
            component: JobSeekerCreateCV
        },
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
        },
        {
            path: '/tuyen-dung-dang-nhap',
            name: 'employer dang nhap',
            component: EmployerLoginPage
        },
        {
            path: '/tim-kiem',
            name: 'job result',
            component: SearchJobResultPage
        },
        {
            path: '/tuyen-dung-thong-tin',
            name: 'employer profile',
            component: EmployerDashBoardPage
        },
        {
            path: '/tim-CV',
            name: 'searchCV',
            component: EmployerSearchCVPage
        }, {
            path: '/goi-y-CV/:jobid',
            name: 'suggestionCV',
            component: SuggestionCVPage
        },
        {
            path: '/tao-cong-ty',
            name: 'employer create company',
            component: EmployerCreateCompanyPage
        },
        {
            path: '/thong-tin-cong-viec/:id',
            name: 'job seeker view job',
            component: JobSeekerViewJobDetailPage
        },
        {
            path: '/dang-tin-tuyen-dung-thanh-cong',
            name: 'employer review created job',
            component: EmployerJobCreateReviewPage
        },
        {
            path: '/cong-ty-duyet-tuyen-dung',
            name: 'employer apply sub employer',
            component: EmployerCompanyApplyPage
        }

        , {
            path: '/viec-lam-nguoi-tim-viec',
            name: 'tab job',
            component: TabJobPage
        }  , {
          path: '/kiem-tra-email',
        name: 'check email',
        component: CheckEmailEmloyeerPage
      },
      {
        path: '/viec-lam-tuong-tu/:jobid',
        name: 'job similar',
        component: ViewJobSimilar
      }
      ,{
            path: '/quan-li-cong-viec',
            name: 'manage job',
            component: ManageJobPage
        },
        {
            path: '/xem-CV-ung-tuyen/:jobid',
            name: 'view CV applied',
            component: ViewCVAppliedPage

        },
        {
            path: '/quan-li-ung-vien',
            name: 'manage jobseeker',
            component: ManageJobSeekerPage
        },
        {
            path: '/tuyen-dung-dich-vu',
            name: 'get service',
            component: EmployerGetServicePage
        },


        //Admin Router Link
        {
            path: '/admin',
            name: 'admin main screen',
            component: AdminDashBoardPage
        },
        {
            path: '/admin-login',
            name: 'admin login',
            component: AdminLoginPage
        },
        {
            path: '/admin-view-all-new-job',
            name: 'admin view all job',
            component: AdminViewAllNewJobPage
        },
        {
            path: '/admin-all-service',
            name: 'admin view all service',
            component: AdminAllServicePage
        },
        {
            path: '/admin-view-all-company',
            name: 'admin view all company',
            component: AdminViewAllCompanyPage
        },
        {
            path: '/admin-view-all-new-company',
            name: 'admin view all new company',
            component: AdminViewAllNewCompanyPage
        },
        {
            path: '/admin-view-all-account',
            name: 'admin view all account',
            component: AdminViewAllAccountPage
        }, {
            path: '/xem-goi-y-viec-lam/:cvid',
            name: 'suggest job',
            component: ListSuggestJobPage
        }

    ],


})

router.beforeEach((to, from, next) => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
  next();

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
                });
            return;
        }
        next();
        return;
    }

    //--userid2 and userid3

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
                });
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
                });
            return;
        }
        // next();
        // next('/dang-nhap');
        // return;
    }

    //--userid4
    if (store.getters['AUTHENTICATION_STORE/isLoggedIn3']) {
        store.dispatch('AUTHENTICATION_STORE/INIT3')
            .then(() => next())
            .catch(() => {
                store.dispatch('AUTHENTICATION_STORE/LOGOUT3')
                    .then(() => {
                        this.$router.push('/admin-login');
                    });
            });
        next();
    }

    if (to.path === '/admin-login') {
        if (store.getters['AUTHENTICATION_STORE/isLoggedIn3']) {
            store.dispatch('AUTHENTICATION_STORE/INIT3')
                .then(() => next('/admin'))
                .catch(error => {
                    if (error.response) {
                        console.log(error.response.data)
                    } else {
                        console.log(error)
                    }
                    next('/admin-login')
                });
            return;
        }
        next();
        return;
    }

    if (to.path === '/admin') {
        if (!store.getters['AUTHENTICATION_STORE/isLoggedIn3']) {
            store.dispatch('AUTHENTICATION_STORE/INIT3')
                .then(() => next())
                .catch(error => {
                    if (error.response) {
                        console.log(error.response.data)
                    } else {
                        console.log(error)
                    }
                    next('/admin-login')
                });
            return;
        }
    }

    next();
});

export default router;
