import { createRouter, createWebHistory } from "vue-router";

import Login from "../components/Login"
import AddPost from "../components/AddPost"

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/add_post',
        name: 'AddPost',
        component: AddPost
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router