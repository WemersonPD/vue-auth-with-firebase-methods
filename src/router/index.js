import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/Login.vue'

Vue.use(Router)

const router = new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
    {
        path: '/',
        name: 'login',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
]
});

export default router
