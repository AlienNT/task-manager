import {RouteRecordRaw} from "vue-router";

export default [
    {
        name: 'home',
        path: '/',
        // component: () => import('@/pages/ProjectsPage.vue')
    },
    {
        name: 'projects',
        path: '/projects',
        component: () => import('@/pages/ProjectsPage.vue')
    },
] as RouteRecordRaw[]