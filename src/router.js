import { createRouter, createWebHistory } from 'vue-router'


import LoginView from "@/IAM/Presentation/Views/login-view.vue";

import RegisterView from "@/IAM/Presentation/Views/register-view.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/login'

        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterView
        }
    ]
})

export default router