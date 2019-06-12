import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DashBoardLayout from '../layouts/DashBoardLayout'
import SignUpPage from '../views/SignUpPage'
import Detail from '../views/Detail'
import LoginPage from '../views/LoginPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dash Board',
      component: DashBoardLayout
    }
    ,
    {
      path: '/dang-ki',
      name: 'Sign up',
      component: SignUpPage
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
