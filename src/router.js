import { createRouter , createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import ProjectPage from "./pages/projectPage.vue";
import AboutUsPage from "./pages/AboutUsPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage,

        },
        {
            path:"/projects",
            name:"projects",
            component: ProjectPage
        },
        {
            path: "/about",
            name: "about",
            component: AboutUsPage,

        }
    ]
});

export {router};