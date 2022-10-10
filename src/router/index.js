import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/featurs',
    name: 'featurs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FeatursView.vue')
  }
  ,
  {
    path: '/programs',
    name: 'programs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProgramsView.vue')
  }
  ,
  {
    
    path: '/programs/accounting',
    name: 'accountingProgram',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AccountingProgramView.vue')
  }
  ,
  {
    
    path: '/advancedAnalytics',
    name: 'advancedAnalytics',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AdvancedAnalyticsView.vue')
  }
  ,
  {
    
    path: '/allClients',
    name: 'allClients',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AllClientsView.vue')
  }
  ,
  {
    
    path: '/sayAbout',
    name: 'sayAbout',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SayAboutView.vue')
  }
  ,
  {
    
    path: '/userManual',
    name: 'userManual',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/UserManualView.vue')
  }
  ,
  {
    
    path: '/privacyPolicy',
    name: 'privacyPolicy',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PrivacyView.vue')
  }
  ,
  {
    
    path: '/bunch',
    name: 'bunch',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BunchView.vue')
  }
  ,
  {
    
    path: '/faq',
    name: 'faq',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FAQView.vue')
  },
  {
    path: '/technicalSupport',
    name: 'technicalSupport',
    component: () => import(/* webpackChunkName: "about" */ '../views/TechnicalSupportView.vue')
    
  }
  ,
  {
    path: '/requestTest',
    name: 'requestTest',
    component: () => import(/* webpackChunkName: "about" */ '../views/RequestTestView.vue')
    
  }
  ,
  {
    path: '/introduction',
    name: 'introduction',
    component: () => import(/* webpackChunkName: "about" */ '../views/IntroductionView.vue')
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior(to,from,savePosition){
    // if(savePosition){
    //   return savePosition;
    // }
    // if(to.hash){
    //   console.log('to hash');
    //   return {el : to.hash};
    // }
    return { top: 0 };
  },
  routes
})

export default router
