import { createRouter , createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import ProjectPage from "./pages/projectPage.vue";

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

        }
    ]
});

export {router};