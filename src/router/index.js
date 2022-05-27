import { createRouter , createWebHistory} from "vue-router";
import App from '../App.vue';
import LogIn from '../components/LogIn.vue';
import MainScreen from '../components/MainScreen.vue';

const routes = [
    {
        path: "/",
        name : "Sign In",
        component : LogIn,
    },
    {
        path: "/mainscreen",
        name : "Main Screen",
        component : MainScreen,
    }
    
]

const router = createRouter({
    history: createWebHistory() ,
    routes
})

export default router