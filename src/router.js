import {createRouter, createWebHistory} from "vue-router";
import {UserInfoStore} from "./store/useTokenStore.js";


const routes = [
    {
        path: "/",
        name: "index",
        redirect: "/home"
    },
    {
        path: "/home",
        name: "home",
        component: () => import("./pages/Home.vue")
    },
    {
        path: "/login",
        name: "login",
        component: () => import("./pages/Login.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {

    const userInfoStore = UserInfoStore()
    const token = userInfoStore.token
    if (!token && to.name !== "login") {
        next({name: 'login'})
    } else if (token && to.name === "login") {
        next({name: "home"})
    } else {
        next()
    }
})

export default router